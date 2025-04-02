'use client';

import { useState } from 'react';
import { PostProps } from '@/types/post';
import Pagination from './Pagination';
import PostCard from '@/components/shared/post-card/PostCard';
import LoadingPostCard from '@/components/shared/post-card/LoadingPostCard';

import styles from './BlogPosts.module.css';

const POSTS_PER_PAGE = 8;

export default function BlogPosts({ data }: { data: PostProps[] }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the displayed posts for the current page
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const displayedPosts = data?.slice(startIndex, endIndex);

  // Handle pagination controls
  const totalPages = Math.ceil((data?.length || 0) / POSTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>
          A personal blog that consists of his thoughts over time 🕙
        </p>
      </div>

      {!data ? (
        <div className={styles.dataContainer}>
          {Array.from({ length: POSTS_PER_PAGE }).map((_, index) => (
            <LoadingPostCard key={index} />
          ))}
        </div>
      ) : (
        <>
          <div className={styles.dataContainer}>
            {displayedPosts?.map((post, index) => (
              <PostCard post={post} key={`${post.id}-${index}`} />
            ))}
          </div>
          {totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  );
}
