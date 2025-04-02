import { getHeadline } from '@/services/getPost';
import { shuffle } from '@/utils/shuffle-utils';
import OtherPosts from '@/components/post/other-posts/OtherPosts';

export default async function OtherPostsWrapper() {
  const data = await getHeadline();
  const posts = shuffle(data);

  return <OtherPosts posts={posts} />;
}
