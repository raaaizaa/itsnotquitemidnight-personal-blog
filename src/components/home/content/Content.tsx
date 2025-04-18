'use client';

import { useState } from 'react';
import BlogPosts from '../blog-posts/BlogPosts';
import Snaps from '../snaps/Snaps';
import { motion } from 'framer-motion';

import styles from './Content.module.css';

export default function Content({ posts, board }) {
  const [view, setView] = useState<'Blog' | 'Snaps'>('Blog');

  const ContentSwitcher = () => {
    return (
      <div className={styles.switcher}>
        <motion.button
          whileHover={{
            scale: 1.03,
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
              stiffness: 300,
              damping: 20,
            },
          }}
          onClick={() => setView('Blog')}
          className={`${styles.switcherButton} ${
            view === 'Blog' ? styles.switcherButtonActive : ''
          }`}>
          Blog
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.03,
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
              stiffness: 300,
              damping: 20,
            },
          }}
          onClick={() => setView('Snaps')}
          className={`${styles.switcherButton} ${
            view === 'Snaps' ? styles.switcherButtonActive : ''
          }`}>
          Snaps
        </motion.button>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <ContentSwitcher />
      {view === 'Blog' && <BlogPosts data={posts} />}
      {view === 'Snaps' && <Snaps board={board} />}
    </div>
  );
}
