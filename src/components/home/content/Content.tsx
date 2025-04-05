'use client';

import { useState } from 'react';
import BlogPosts from '../blog-posts/BlogPosts';

import styles from './Content.module.css';

export default function Content({ posts, board }) {
  const [view, setView] = useState<'Blog' | 'Cam Roll'>('Blog');

  const ContentSwitcher = () => {
    return (
      <div className={styles.switcher}>
        <a onClick={() => setView('Blog')} className={styles.switcherButton}>
          Blog
        </a>
        <a
          onClick={() => setView('Cam Roll')}
          className={styles.switcherButton}>
          Cam Roll
        </a>
      </div>
    );
  };
  // return view === 'Blog' && (
  //   <BlogPosts data={posts}/>
  // )

  return (
    <div className={styles.container}>
      <ContentSwitcher />
      {view === 'Blog' && <BlogPosts data={posts} />}
      {view === 'Cam Roll' && <></>}
    </div>
  );
}
