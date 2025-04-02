import BlogPosts from '@/components/home/blog-posts/BlogPosts';
import { getHeadline } from '@/services/getPost';

export default async function BlogPostsWrapper() {
  const data = await getHeadline();

  return <BlogPosts data={data} />;
}
