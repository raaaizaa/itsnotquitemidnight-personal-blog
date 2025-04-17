'use client';

import React, { useEffect } from 'react';

import styles from './Soundwave.module.css';

export default function Soundwave() {
  useEffect(() => {
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
      const randomDelay = Math.random() * 2; // Random delay between 0 and 2 seconds
      bar.style.setProperty('--delay', randomDelay);
    });
  }, []);

  return (
    <div className={styles.equalizer}>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </div>
  );
}
