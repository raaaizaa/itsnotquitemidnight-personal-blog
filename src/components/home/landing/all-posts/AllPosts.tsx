import PostCard from '@/components/shared/post-card/PostCard';
import { PostProps } from '@/types/post';
import { useState } from 'react';

export default function AllPosts({ items }: { items: PostProps[] }) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const tags = Array.from(
    new Set(
      items
        ?.map((post) => post.content.tag)
        .filter((tag): tag is string => tag !== undefined)
    )
  );
  tags.unshift('All');

  const filteredPosts = selectedTag
    ? items?.filter((post) => post.content.tag === selectedTag)
    : items;

  const handleTagClick = (tag: string | null) => {
    setSelectedTag(tag);
  };

  return (
    <div className="mx-6">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="font-special-elite text-[#A65A50] md:text-[72px] lg:text-[92px] text-[36px] posterize-text">
            Posts
          </h2>
          <div className="flex gap-2 justify-start w-full px-3 md:px-0">
            {tags.map((item, index) => (
              <button
                className="text-[#847A70] hover:bg-[#847A70] active:bg-[#847A70] border-[1px] border-[#847A70] w-fit px-1 py-0.5 text-[11px] md:text-[12px] rounded-[6px] hover:text-[#E5DDD2] hover:scale-110 active:scale-125 hover:cursor-pointer hover:rotate-4 active:rotate-4 active:text-white"
                key={`${item}-${index}`}
                onClick={() => handleTagClick(item === 'All' ? null : item)}>
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col divide-y overflow-y-scroll h-[clamp(200px,45vh,600px)] [&::-webkit-scrollbar]:hidden px-3">
          {filteredPosts.map((item: PostProps, index: number) => (
            <PostCard item={item} key={`${index}-${item.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
