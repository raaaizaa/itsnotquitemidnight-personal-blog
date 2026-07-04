import { getPosts } from '@/services/posts';
import { shuffle } from '@/utils/shuffle-utils';
import OtherPosts from '@/components/post/other-posts/OtherPosts';

export default async function OtherPostsWrapper() {
  const data = await getPosts();
  const posts = shuffle(data);

  return <OtherPosts posts={posts} />;
}
