import React from 'react';
import { PostProps } from '@/types/post';
import Navigation from '../navigation/Navigation';

interface Props {
  onNext: () => void;
  onPrevious: () => void;
  ref: React.RefObject<HTMLDivElement | null>;
  recentPosts: PostProps[];
}

function RecentPosts({ items }) {
  return (
    <div className='mx-6 md:mx-0'>
      <div className="flex flex-col divide-y">
        {items.map((item: PostProps, index: number) => (
          <a
            key={`${item.id}-${index}`}
            href={item.url}
            className="py-2 border-[#a83dc5] flex flex-col gap-2 hover:scale-105">
            <div>
              <h3 className="font-road-rage text-[#a83dc5] text-[24px] md:text-[32px]">
                {item.content.headline}
              </h3>
              <p
                className="text-white text-[12px] md:text-[16px]"
                dangerouslySetInnerHTML={{
                  __html: item.content.cutted_description,
                }}
              />
            </div>
            <p className="text-[#868686] border-[1px] w-fit px-1 py-0.5 text-[11px] md:text-[12px] rounded-[6px]">
              {item.content.tag}
            </p>
          </a>
        ))}
      </div>
      <a href="/posts" className="font-road-rage text-[#a83dc5] text-[24px] md:text-[28px] mt-2 hover:underline" >Browse more posts...</a>
    </div>
  );
}

export default function PostContainer({
  onNext,
  onPrevious,
  ref,
  recentPosts,
}: Props) {
  return (
    <section
      ref={ref}
      className="relative flex mx-auto flex-col h-screen w-full snap-start items-center justify-center">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-hit-me-punk text-[#a83dc5] md:text-[72px] lg:text-[92px] text-[52px]">
            Recent Posts
          </h2>
        </div>
        <RecentPosts items={recentPosts} />
      </div>
      <Navigation onNext={onNext} onPrevious={onPrevious} variant='middle-section'/>
    </section>
  );
}
