'use client';

import BlogPosts from '../blog-posts/BlogPosts';

import styles from './Content.module.css';

export default function Content({ posts }) {

  return (
    <div className={styles.container}>
      <BlogPosts data={posts} />
    </div>
  );
}
