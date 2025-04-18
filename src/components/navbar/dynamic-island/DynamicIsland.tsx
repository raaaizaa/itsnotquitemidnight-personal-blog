'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useNowPlayingStore } from '@/services/getNowPlaying';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Soundwave from './soundwave/Soundwave';

import styles from './DynamicIsland.module.css';

export default function DynamicIsland() {
  const { nowPlaying, lastPlayed, fetchNowPlaying } = useNowPlayingStore();
  const [dataType, setDataType] = useState({ title: '', soundwave: false });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30000);

    return () => clearInterval(interval);
  }, [fetchNowPlaying]);

  useEffect(() => {
    if (nowPlaying) {
      setDataType({ title: 'Now playing on Spotify', soundwave: true });
    } else {
      setDataType({ title: 'Last played on Spotify', soundwave: false });
    }
  }, [nowPlaying]);

  useEffect(() => {
    const handleScroll = () => {
      setIsClicked(false);
    };

    if (isClicked) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isClicked]);

  const data = nowPlaying || lastPlayed;

  const {
    albumImage = '',
    trackName = '',
    trackUrl = '',
    artistName = '',
  } = data || {};

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

  if (!data) return null;

  return (
    <AnimatePresence mode="sync">
      {isClicked ? (
        <div className={styles.expandedCenterWrapper}>
          <motion.div
            key="expanded"
            className={styles.expandedWrapper}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { type: 'spring', stiffness: 300, damping: 20 },
            }}
            exit={{
              scale: 0,
              opacity: 0,
              transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20,
                duration: 0.2,
              },
            }}
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              setIsClicked(false);
              setIsHovered(false);
            }}>
            <div className={styles.expandedTrackInfo}>
              <a href={trackUrl} target="_blank">
                <Image
                  src={albumImage}
                  alt="album-cover"
                  width={200}
                  height={200}
                  className={styles.expandedImage}
                />
              </a>
              <div className={styles.expandedTextWrapper}>
                <p className={styles.expandedTitle}>{dataType.title}</p>
                <a
                  className={styles.expandedTrackName}
                  href={trackUrl}
                  target="_blank">
                  {trackName.length > 20
                    ? `${trackName.substring(0, 20)}...`
                    : trackName}
                </a>
                <p className={styles.expandedArtistName}>
                  {' '}
                  {artistName.length > 20
                    ? `${artistName.substring(0, 20)}...`
                    : artistName}
                </p>
              </div>
            </div>
            <div className={styles.expandedSoundwaveWrapper}>
              <Soundwave isPlaying={dataType.soundwave} />
            </div>
          </motion.div>
        </div>
      ) : (
        <motion.button
          key="pill"
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
              duration: 0.2,
            },
          }}
          onHoverEnd={() => setIsHovered(false)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => setIsClicked(true)}>
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
              <Soundwave isPlaying={dataType.soundwave} />
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
      )}
    </AnimatePresence>
  );
}
