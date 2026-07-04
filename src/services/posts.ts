export async function getPosts() {
  const response = await fetch(
    'https://itsnotquitemidnight-backend.vercel.app/api/gists/posts'
  );

  return response.json();
}

export async function getPostDetail(id: string) {
  const response = await fetch(
    `https://itsnotquitemidnight-backend.vercel.app/api/gists/posts/${id}`
  );

  return response.json();
}
