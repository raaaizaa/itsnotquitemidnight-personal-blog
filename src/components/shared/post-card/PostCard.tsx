import { PostProps } from '@/types/post';
import { formatDate } from '@/utils/date-utils';
import Link from 'next/link';
import Image from 'next/image';

import styles from './PostCard.module.css';

export default function PostCard({ post }: { post: PostProps }) {
  const { headline, first_image, created_at, id, cutted_description, tag } =
    post;
  const formatted_created_at = formatDate(created_at);

  return (
    <Link href={`/post/${id}`} className={styles.wrapper}>
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
              <div className={styles.footer}>
                {tag && <p className={styles.tag}>{tag}</p>}
                <p className={styles.date}>{formatted_created_at}</p>
              </div>
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
    </Link>
  );
}
