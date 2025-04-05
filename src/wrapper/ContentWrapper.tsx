import BlogPosts from '@/components/home/blog-posts/BlogPosts';
import { getHeadline } from '@/services/getPost';
import board from '../../data/pinterest-board.json'
import Content from '@/components/home/content/Content';

export default async function ContentWrapper() {
  const posts = await getHeadline();
  
  return <Content posts={posts} board={board}/>
}
