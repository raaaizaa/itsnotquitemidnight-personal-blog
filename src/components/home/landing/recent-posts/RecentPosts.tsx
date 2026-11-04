import PostCard from '@/components/shared/post-card/PostCard';
import { PostProps } from '@/types/post';

export default function RecentPosts({ items, onClick }) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-hit-me-punk text-[#a83dc5] md:text-[72px] lg:text-[92px] text-[52px] posterize-text">
          Recent Posts
        </h2>
      </div>
      <div className="mx-6 md:mx-0">
        <div className="flex flex-col divide-y">
          {items.map((item: PostProps, index: number) => (
            <PostCard item={item} key={`${index}-${item.id}`}/>
          ))}
        </div>
        <a
          onClick={onClick}
          className="font-road-rage text-[#a83dc5] text-[24px] md:text-[28px] mt-2 hover:underline">
          Browse more posts...
        </a>
      </div>
    </div>
  );
}