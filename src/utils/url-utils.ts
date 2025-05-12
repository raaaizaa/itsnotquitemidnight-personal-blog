import { headers } from 'next/headers';

export async function getBaseUrl() {
  const headersList = await headers();

  const protocol = headersList.get('x-forwarded-proto') || 'https';
  const host = headersList.get('host') || 'localhost:3000';

  return `${protocol}://${host}`;
}

export async function getPathname() {
  const headersList = await headers();
  const url = headersList.get('my-url') || '';

  return url;
}

export async function getPostId() {
  const url = await getPathname();

  return url.split('/').filter(Boolean).pop() || '';
}
