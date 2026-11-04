'use client';

import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import ClarityProvider from '@/components/shared/clarity/ClarityProvider';
import { PostDetailProps } from '@/types/post';

import styles from './PostDetail.module.css';

export default function PostDetail({ post }: { post: PostDetailProps | null }) {
  const { content, created_at, tag } = post || {};

  return (
    <div className="bg-[#1a1a1a] text-white">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          img: ({ src = '', alt = '' }) => (
            <Image
              priority
              src={src}
              alt={alt}
              width={800}
              height={500}
              quality={30}
              layout="responsive"
            />
          ),
        }}>
        {content}
      </ReactMarkdown>
      <ClarityProvider />
    </div>
  );
}
