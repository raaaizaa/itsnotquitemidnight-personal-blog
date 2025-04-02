import React from 'react';
import { PostProps } from '../../../types/post';
import Image from 'next/image';

import styles from './PostCard.module.css';

interface Props {
  post: PostProps;
}

export default function PostCard({ post }: Props) {
  const { headline, first_image, created_at, id, cutted_description } = post;
  const formatted_created_at = new Date(created_at).toLocaleDateString(
    'en-US',
    {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }
  );

  const handleClick = () => {
    window.location.href = `/post/${id}`;
  };

  return (
    <div onClick={handleClick} className={styles.wrapper}>
      <div className={styles.divider} />
      <div className={styles.contentContainer}>
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <p
              className={styles.label}
              dangerouslySetInnerHTML={{
                __html:
                  headline.length > 150
                    ? `${headline.substring(0, 150)}...`
                    : headline,
              }}
            />
            <div className={styles.textInfoContainer}>
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: cutted_description }}
              />
              <p className={styles.date}>{formatted_created_at}</p>
            </div>
          </div>
          {first_image ? (
            <div className={styles.imageContainer}>
              <Image
                src={first_image}
                alt="img"
                className={styles.image}
                quality={50}
                width={500}
                height={500}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
