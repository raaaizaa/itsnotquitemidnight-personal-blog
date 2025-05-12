import MarkdownIt from 'markdown-it';
import { getPathname } from '@/utils/url-utils';

const TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

export async function getPostDetail(id: string) {
  try {
    const response = await fetch(`https://api.github.com/gists/${id}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    const data = await response.json();

    const formattedContent = md.render(data.files['index.md'].content);

    const lines = formattedContent.split('\n');

    const headline = lines[0]
      .replace(/<\/?[^>]+(>|$)/g, '')
      .replace(/^#\s*/, '');

    const filteredLines = lines.filter((line) => !line.includes('![image]'));

    const remainingText = filteredLines.slice(1).join('\n');
    const cuttedDescription = `${remainingText.substring(0, 75)}...`
      .replace(/<\/?[^>]+(>|$)/g, '')
      .replace(/^#\s*/, '');

    const imageMatch = formattedContent.match(
      /<h1[^>]*>.*?<\/h1>.*?<img [^>]*src="([^"]+)"/s
    );
    const image = imageMatch ? imageMatch[1] : null;

    const postDetails = {
      content: formattedContent,
      tag: data.description,
      created_at: data.created_at,
    };

    const postSEO = {
      headline: headline,
      image: image,
      description: cuttedDescription,
      url: await getPathname(),
      created_at: data.created_at,
      tag: data.description,
    };

    return { postDetails, postSEO };
  } catch (error) {
    console.error(error);
    return {
      postDetails: null,
      postSEO: null,
    };
  }
}
