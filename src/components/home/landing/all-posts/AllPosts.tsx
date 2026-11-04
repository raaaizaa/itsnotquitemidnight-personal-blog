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
          <h2 className="font-hit-me-punk text-[#a83dc5] md:text-[72px] lg:text-[92px] text-[52px] posterize-text">
            all posts
          </h2>
          <div className="flex gap-2 justify-start w-full px-3 md:px-0">
            {tags.map((item, index) => (
              <button
                className="text-[#868686] hover:bg-[#868686] hover:border-[#868686] border-[1px] w-fit px-1 py-0.5 text-[11px] md:text-[12px] rounded-[6px] hover:text-white hover:scale-110 active:scale-125 hover:cursor-pointer hover:rotate-4"
                key={`${item}-${index}`}
                onClick={() => handleTagClick(item === 'All' ? null : item)}>
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col divide-y overflow-y-scroll h-[400px] [&::-webkit-scrollbar]:hidden px-3">
          {filteredPosts.map((item: PostProps, index: number) => (
            <PostCard item={item} key={`${index}-${item.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
