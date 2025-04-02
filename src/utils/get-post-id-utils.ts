import { headers } from 'next/headers';

export async function getPostId() {
  const headersList = await headers();
  const url = headersList.get('my-url') || '';

  return url.split('/').filter(Boolean).pop() || '';
}
