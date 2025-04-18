import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Soundwave from '../dynamic-island/soundwave/Soundwave';

import styles from './DetailedDynamicIsland.module.css';

export default function DetailedDynamicIsland({
  data,
  onClick,
  title,
  soundwave,
}) {
  const { albumImage, trackName, artistName, trackUrl } = data || {};

  return (
    <div className={styles.centerWrapper}>
      <motion.div
        className={styles.wrapper}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: { type: 'spring', stiffness: 300, damping: 20 },
        }}
        exit={{
          scale: 0,
          opacity: 0,
          transition: { type: 'spring', stiffness: 300, damping: 20 },
        }}
        whileHover={{ scale: 1.1 }}
        onClick={onClick}>
        <div className={styles.trackInfo}>
          <a href={trackUrl} target="_blank">
            <Image
              src={albumImage}
              alt="album-cover"
              width={200}
              height={200}
              className={styles.image}
            />
          </a>
          <div className={styles.textWrapper}>
            <p className={styles.title}>{title}</p>
            <a className={styles.trackName} href={trackUrl} target="_blank">
              {trackName.length > 20
                ? `${trackName.substring(0, 20)}...`
                : trackName}
            </a>
            <p className={styles.artistName}>
              {' '}
              {artistName.length > 20
                ? `${artistName.substring(0, 20)}...`
                : artistName}
            </p>
          </div>
        </div>
        <div className={styles.soundwaveWrapper}>
          <Soundwave isPlaying={soundwave} />
        </div>
      </motion.div>
    </div>
  );
}
