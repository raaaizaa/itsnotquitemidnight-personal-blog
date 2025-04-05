'use client';

import { useState } from 'react';
import BlogPosts from '../blog-posts/BlogPosts';
import Snaps from '../snaps/Snaps';

import styles from './Content.module.css';

export default function Content({ posts, board }) {
  const [view, setView] = useState<'Blog' | 'Snaps'>('Blog');

  const ContentSwitcher = () => {
    return (
      <div className={styles.switcher}>
        <a
          onClick={() => setView('Blog')}
          className={`${styles.switcherButton} ${
            view === 'Blog' ? styles.switcherButtonActive : ''
          }`}>
          Blog
        </a>
        <a
          onClick={() => setView('Snaps')}
          className={`${styles.switcherButton} ${
            view === 'Snaps' ? styles.switcherButtonActive : ''
          }`}>
          Snaps
        </a>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <ContentSwitcher />
      {view === 'Blog' && <BlogPosts data={posts} />}
      {view === 'Snaps' && <Snaps board={board}/>}
    </div>
  );
}
