'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNowPlayingStore } from '@/services/getNowPlaying';
import Image from 'next/image';
import Soundwave from './soundwave/Soundwave';

import styles from './DynamicIsland.module.css';

export default function DynamicIsland() {
  const { nowPlaying, lastPlayed, fetchNowPlaying } = useNowPlayingStore();
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 10000);

    return () => clearInterval(interval);
  }, [fetchNowPlaying]);

  const data = nowPlaying || lastPlayed;

  // i don't know but i feel so fucking dumb writing this code to solve UI problem
  // it's like it is not effective, this is from chatgpt btw

  const handleMouseEnter = () => {
    hoverTimeout.current = setTimeout(() => {
      setIsHovered(true);
    }, 200);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
    }
    setIsHovered(false);
  };

  if (!data) {
    return;
  }

  return (
    <motion.button
      className={styles.container}
      initial={{ width: '100px' }}
      animate={{ transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      whileHover={{
        width: '240px',
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      onHoverEnd={() => setIsHovered(false)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className={styles.wrapper}>
        <Image
          src={data?.albumImage}
          width={200}
          height={200}
          alt="album"
          className={styles.image}
          quality={50}
        />
        <div>
          <Soundwave />
        </div>
        {isHovered && (
          <p className={styles.trackText}>
            {data.trackName.length > 16
              ? `${data.trackName.substring(0, 16)}...`
              : data.trackName}
          </p>
        )}
      </div>
    </motion.button>
  );
}
