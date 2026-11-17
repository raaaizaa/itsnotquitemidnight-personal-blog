import { PostProps } from '@/types/post';
import PostCard from '@/components/shared/post-card/PostCard';

const POST_COUNT = 4;

export default function OtherPosts({ posts }: { posts: PostProps[] }) {
  const displayedPosts = posts?.slice(0, POST_COUNT);

  return (
    <div className="flex flex-col w-full gap-6 max-sm:gap-6">
      <p className="font-hit-me-punk text-[#a83dc5] text-[44px] md:text-[48px] lg:text-[56px]">
        See other Posts here
      </p>
      {displayedPosts.map((item, index) => (
        <PostCard item={item} key={index}/>
      ))}
    </div>
  );
}
