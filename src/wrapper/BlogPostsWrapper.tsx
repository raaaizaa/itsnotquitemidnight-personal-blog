import BlogPosts from '@/components/home/blog-posts/BlogPosts';
import { getHeadline } from '@/services/getPost';

export default async function BlogPostsWrapper() {
  const data = await getHeadline();

  //   @ts-expect-error ignore this data type issue
  return <BlogPosts data={data} />;
}
