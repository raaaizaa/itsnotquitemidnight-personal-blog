import { headers } from 'next/headers';

export async function getPathname() {
  const headersList = await headers();
  const url = headersList.get('my-url') || '';

  return url;
}

export async function getPostId() {
  const url = await getPathname();

  return url.split('/').filter(Boolean).pop() || '';
}
