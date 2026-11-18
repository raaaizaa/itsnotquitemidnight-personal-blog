import { PostProps } from '@/types/post';
import PostCard from '@/components/shared/post-card/PostCard';

const POST_COUNT = 4;

export default function OtherPosts({ posts }: { posts: PostProps[] }) {
  const displayedPosts = posts?.slice(0, POST_COUNT);

  return (
    <div className="flex flex-col w-full gap-6 max-sm:gap-6">
      <p className="font-special-elite text-[#A65A50] text-[36px] md:text-[40px] lg:text-[44px]">
        Browse other posts...
      </p>
      {displayedPosts.map((item, index) => (
        <PostCard item={item} key={index}/>
      ))}
    </div>
  );
}
