'use client';

import { useState } from 'react';
import { PostProps } from '@/types/post';
import Pagination from './Pagination';
import PostCard from '@/components/shared/post-card/PostCard';
import LoadingPostCard from '@/components/shared/post-card/LoadingPostCard';
import { motion } from 'framer-motion';

import styles from './BlogPosts.module.css';

const POSTS_PER_PAGE = 8;

export default function BlogPosts({ data }: { data: PostProps[] | undefined }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const tags = Array.from(
    new Set(
      data
        ?.map((post) => post.tag)
        .filter((tag): tag is string => tag !== undefined)
    )
  );

  const filteredPosts = selectedTag
    ? data?.filter((post) => post.tag === selectedTag)
    : data;

  const totalPages = Math.ceil((filteredPosts?.length || 0) / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const displayedPosts = filteredPosts?.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleTagClick = (tag: string | null) => {
    setSelectedTag(tag);
    setCurrentPage(1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>
          A personal blog that consists of his thoughts over time 🕙
        </p>
      </div>

      {/* Tag Filter */}
      <div className={styles.tagContainer}>
        <motion.button
          whileHover={{
            scale: 1.2,
            transition: {
              type: 'spring',
              stiffness: 180,
              damping: 14,
            },
          }}
          whileTap={{
            scale: 0.97,
            transition: {
              type: 'spring',
              stiffness: 500,
              damping: 20,
            },
          }}
          onClick={() => handleTagClick(null)}
          className={selectedTag ? styles.tag : styles.activeTag}>
          All
        </motion.button>
        {tags.map((tag) => (
          <motion.button
            whileHover={{
              scale: 1.2,
              transition: {
                type: 'spring',
                stiffness: 180,
                damping: 14,
              },
            }}
            whileTap={{
              scale: 0.97,
              transition: {
                type: 'spring',
                stiffness: 400,
                damping: 20,
              },
            }}
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={selectedTag !== tag ? styles.tag : styles.activeTag}>
            {tag}
          </motion.button>
        ))}
      </div>

      {/* Posts */}
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
