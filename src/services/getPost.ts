import MarkdownIt from 'markdown-it';

const TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

export async function getPost() {
  try {
    const response = await fetch(
      'https://api.github.com/users/raaaizaa/gists',
      {
        method: 'GET',
        headers: {
          Authorization: `token ${TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch the posts!');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getHeadline() {
  try {
    const post = await getPost();
    const headlines = await Promise.all(
      post.map(async (item) => {
        const indexMd = item.files['index.md'];
        if (!indexMd) {
          console.warn(`Gist ${item.id} does not contain an index.md file.`);
          return null;
        }

        const response = await fetch(indexMd.raw_url);
        const textContent = await response.text();

        if (!textContent.trim()) {
          console.warn(`Gist ${item.id} contains an empty index.md file.`);
          return null;
        }

        // This will convert the achieved text to HTML content to achieve the image tag and put it into first image to show it to the post card
        const htmlContent = md.render(textContent);
        const imageMatch = htmlContent.match(
          /<h1[^>]*>.*?<\/h1>.*?<img [^>]*src="([^"]+)"/s
        );
        const firstImage = imageMatch ? imageMatch[1] : null;

        // Split the text content to several arrays
        const lines = textContent.split('\n');

        // Achieve the first line to be the headline
        const firstLine = lines[0].replace(/^#\s*/, '');

        // To avoid the possibility the image will be shown as text in the post card
        const filteredLines = lines.filter(
          (line) => !line.includes('![image]')
        );

        const remainingText = filteredLines.slice(1).join('\n');
        const cuttedDescription = md.render(
          `${remainingText.substring(0, 75)}...`
        );

        return {
          id: item.id,
          url: indexMd.raw_url,
          headline: firstLine,
          tag: item.description,
          cutted_description: cuttedDescription,
          created_at: item.created_at,
          first_image: firstImage,
        };
      })
    );

    return headlines.filter(Boolean);
  } catch (error) {
    console.error(error);
  }
}

