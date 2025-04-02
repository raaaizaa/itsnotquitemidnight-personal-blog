'use client';

import { PostDetailProps } from '@/types/post';
import PacmanLoading from '@/components/shared/loading/PacmanLoading';

import styles from './PostDetail.module.css';

export default function PostDetail({ post }: { post: PostDetailProps | null }) {
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
        <div
          // @ts-expect-error ignore the html issue
          dangerouslySetInnerHTML={{ __html: post?.content }}
          className={styles.content}
        />
        <div className={styles.divider} />
        <div className={styles.infoContainer}>
          <p className={styles.date}>
            {`Posted on `}
            {/* @ts-expect-error ignore this i forgot why i use this but yeah it prevents the error */}
            {new Date(post?.created_at).toLocaleDateString('en-US', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
          </p>
        </div>
      </div>
    </>
  );
}
