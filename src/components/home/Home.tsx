import { getPosts } from '@/services/posts';
import ClarityProvider from '../shared/clarity/ClarityProvider';
import Landing from './landing/Landing';
import { PostProps } from '@/types/post';

export default async function Home() {
  const posts = await getPosts();
  const recentPosts: PostProps[] = posts.slice(0, 3)

  return (
    <div className="bg-[#1a1a1a]">
      <Landing posts={recentPosts}/>
      <ClarityProvider />
    </div>
  );
}
