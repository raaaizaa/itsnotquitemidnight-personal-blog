'use client';
import ClarityProvider from '@/components/shared/clarity/ClarityProvider';
import type { PostDetailProps } from '@/types/post';
import TextRenderer from '../text-renderer/TextRenderer';
import NotFound from '@/app/not-found';

export default function PostDetail({ post }: { post: PostDetailProps | null }) {
  const { content, created_at, tag } = post || {};

  if (!content) return <NotFound />;
  return (
    <div className=" text-white max-w-[560px] w-full">
      {tag && (
        <p className="text-[#868686] border-[1px] w-fit px-1 py-0.5 text-[11px] md:text-[12px] rounded-[6px]">
          {tag}
        </p>
      )}
      {created_at && (
        <p className='mt-2'>
          Posted on {''}
          {new Date(created_at).toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })}
        </p>
      )}
      {content.map((item, index) => (
        <TextRenderer node={item} key={index} index={index} />
      ))}
      <ClarityProvider />
    </div>
  );
}
