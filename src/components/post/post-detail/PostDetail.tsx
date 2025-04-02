'use client';
import React, { useEffect, useState } from 'react';
import {usePathname} from 'next/navigation'
import { getPostDetail } from '../../../services/getPost';
import { PostDetailProps } from '../../../types/post';
import PacmanLoading from '../../shared/loading/PacmanLoading';

import styles from './PostDetail.module.css';

export default function PostDetail() {
  const pathname = usePathname()
  const [postDetails, setPostDetails] = useState<PostDetailProps | null>(null);
  const id = pathname?.split('/')[2]

  useEffect(() => {
    const fetchPostDetail = async () => {
      if (!id) return;

      try {
        const { postDetails } = await getPostDetail(id);
        setPostDetails(postDetails);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    fetchPostDetail();
  }, [id]);

  if (!postDetails) {
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
          dangerouslySetInnerHTML={{ __html: postDetails.content }}
          className={styles.content}
        />
        <div className={styles.divider} />
        <div className={styles.infoContainer}>
          <p className={styles.date}>
            {`Posted on `}
            {new Date(postDetails.created_at).toLocaleDateString('en-US', {
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
