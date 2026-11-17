import React from 'react';
import { PostProps } from '@/types/post';
import { formatDate } from '@/utils/date-utils';
import Image from 'next/image';

export default function PostCard({ item }: { item: PostProps }) {
  return (
    <a
      href={item.url}
      className="py-2 border-[#a83dc5] hover:scale-105 min-w-[200px] w-full max-w-[500px] flex">
      <div className="flex flex-col gap-2">
        <div>
          <h3 className="font-road-rage text-[#a83dc5] text-[32px]">
            {item.content.headline}
          </h3>
          <p className="text-white text-[16px]">
            {item.content.cutted_description}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[#868686] border-[1px] w-fit px-1 py-0.5 text-[12px] rounded-[6px]">
            {item.content.tag}
          </p>
          <p className="text-[#868686] text-[12px]">
            {formatDate(item.content.created_at)}
          </p>
        </div>
      </div>
      {item.content.first_image && (
        <div className="flex shrink-0 items-center justify-center">
          <div className="relative h-20 w-20 overflow-hidden rounded-sm sm:h-28 sm:w-40">
            <Image
              src={item.content.first_image}
              alt={item.slug}
              fill
              sizes="(max-width: 640px) 56px, 160px"
              className="object-cover object-center"
            />
          </div>
        </div>
      )}
    </a>
  );
}
