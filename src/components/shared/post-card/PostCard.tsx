import { PostProps } from '@/types/post';
import { formatDate } from '@/utils/date-utils';
import React from 'react';

export default function PostCard({ item }: { item: PostProps }) {
  return (
    <a
      href={item.url}
      className="py-2 border-[#a83dc5] flex flex-col gap-2 hover:scale-105 min-w-[200px] w-full max-w-[500px]">
      <div>
        <h3 className="font-road-rage text-[#a83dc5] text-[24px] md:text-[32px]">
          {item.content.headline}
        </h3>
        <p
          className="text-white text-[12px] md:text-[16px]"
          dangerouslySetInnerHTML={{
            __html: item.content.cutted_description ?? '',
          }}
        />
      </div>
      <div className="flex items-center gap-2">
        <p className="text-[#868686] border-[1px] w-fit px-1 py-0.5 text-[11px] md:text-[12px] rounded-[6px]">
          {item.content.tag}
        </p>
        <p className="text-[#868686] text-[12px]">
          {formatDate(item.content.created_at)}
        </p>
      </div>
    </a>
  );
}
