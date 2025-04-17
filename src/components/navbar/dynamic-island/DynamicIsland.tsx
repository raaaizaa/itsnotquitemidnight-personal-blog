'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Soundwave from './soundwave/Soundwave';

import styles from './DynamicIsland.module.css';

export default function DynamicIsland({ onClick, data, soundwave }) {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const { albumImage, trackName } = data || {};

  // i don't know but i feel so fucking dumb writing this code to solve UI problem
  // it's like it is not effective, this is from chatgpt btw

  const handleMouseEnter = () => {
    hoverTimeout.current = setTimeout(() => {
      setIsHovered(true);
    }, 150);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
    }
    setIsHovered(false);
  };

  if (!data) {
    return null;
  }

  return (
    <motion.button
      className={styles.container}
      initial={{ scale: 0.8, width: '100px' }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      whileHover={{
        width: window.innerWidth > 600 ? '240px' : '100px',
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      exit={{
        opacity: 0,
        scale: 0,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 20,
          duration: 1,
        },
      }}
      onHoverEnd={() => setIsHovered(false)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}>
      <div className={styles.wrapper}>
        <Image
          src={albumImage}
          width={200}
          height={200}
          alt="album"
          className={styles.image}
          quality={50}
        />
        <div>
          <Soundwave isPlaying={soundwave} />
        </div>
        {window.innerWidth > 600 && isHovered && (
          <p className={styles.trackText}>
            {trackName.length > 14
              ? `${data.trackName.substring(0, 14)}...`
              : data.trackName}
          </p>
        )}
      </div>
    </motion.button>
  );
}
