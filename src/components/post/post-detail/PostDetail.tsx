'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PostDetailProps } from '@/types/post';
import PacmanLoading from '@/components/shared/loading/PacmanLoading';
import portrait from '../../../../public/github-portrait.jpg';

import styles from './PostDetail.module.css';

export default function PostDetail({ post }: { post: PostDetailProps }) {
  if (!post) {
    return (
      <div className={styles.fallbackContainer}>
        <PacmanLoading />
      </div>
    );
  }

  return (
    <>
      <div className={styles.container}>
        <Link href="https://gist.github.com/raaaizaa" target='_blank'>
          <div className={styles.authorContainer}>
            <Image
              src={portrait}
              alt="portrait"
              width={48}
              height={48}
              quality={50}
              className={styles.portrait}
            />
            <div className={styles.infoContainer}>
              <p className={styles.author}>Posted by raaaizaa</p>
              <p className={styles.posted}>
                {`on `}
                {/* @ts-expect-error ignore this i forgot why i use this but yeah it prevents the error */}
                {new Date(post?.created_at).toLocaleDateString('en-US', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                })}
                {`, on Gist`}
              </p>
            </div>
          </div>
        </Link>
        <div
          // @ts-expect-error ignore the html issue
          dangerouslySetInnerHTML={{ __html: post?.content }}
          className={styles.content}
        />
      </div>
    </>
  );
}
