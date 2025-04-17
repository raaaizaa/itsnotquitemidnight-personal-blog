'use client';

import React, { useEffect } from 'react';

import styles from './Soundwave.module.css';

export default function Soundwave({ isPlaying }) {
  useEffect(() => {
    if (!isPlaying) return;

    const bars = document.querySelectorAll(`.${styles.bar}`);

    // again, i don't really know what happens here actually.
    bars.forEach((bar) => {
      const element = bar as HTMLElement;
      const randomDelay = Math.random() * 2;
      element.style.setProperty('--delay', randomDelay.toString());
    });
  }, [isPlaying]);

  return (
    <div className={styles.equalizer}>
      <div className={`${styles.bar} ${!isPlaying ? styles.paused : ''}`} />
      <div className={`${styles.bar} ${!isPlaying ? styles.paused : ''}`} />
      <div className={`${styles.bar} ${!isPlaying ? styles.paused : ''}`} />
      <div className={`${styles.bar} ${!isPlaying ? styles.paused : ''}`} />
      <div className={`${styles.bar} ${!isPlaying ? styles.paused : ''}`} />
      <div className={`${styles.bar} ${!isPlaying ? styles.paused : ''}`} />
      <div className={`${styles.bar} ${!isPlaying ? styles.paused : ''}`} />
      <div className={`${styles.bar} ${!isPlaying ? styles.paused : ''}`} />
      <div className={`${styles.bar} ${!isPlaying ? styles.paused : ''}`} />
    </div>
  );
}
