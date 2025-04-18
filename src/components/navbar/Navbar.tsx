'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import DynamicIsland from './dynamic-island/DynamicIsland';
import DetailedDynamicIsland from './detailed-dynamic-island/DetailedDynamicIsland';
import { AnimatePresence } from 'framer-motion';

import styles from './Navbar.module.css';
import { useNowPlayingStore } from '@/services/getNowPlaying';

export default function Navbar() {
  const { nowPlaying, lastPlayed, fetchNowPlaying } = useNowPlayingStore();
  const [click, setClicked] = useState(false);
  const [dataType, setDataType] = useState({ title: '', soundwave: false });

  useEffect(() => {
    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30000);

    return () => clearInterval(interval);
  }, [fetchNowPlaying]);

  useEffect(() => {
    const handleScroll = () => {
      setClicked(false);
    };
  
    if (click) {
      window.addEventListener('scroll', handleScroll);
    }
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [click]);

  useEffect(() => {
    if (nowPlaying) {
      setDataType({ title: 'Now playing on Spotify', soundwave: true });
    } else {
      setDataType({ title: 'Last played on Spotify', soundwave: false });
    }
  }, [nowPlaying]);

  const data = nowPlaying || lastPlayed;

  const handleClicked = () => {
    setClicked(!click);
  };

  return (
    <>
      <div className={styles.container}>
        <Link href="/" className={styles.title}>
          itsnotquitemidnight
        </Link>
        <AnimatePresence mode="wait">
          {!click && (
            <DynamicIsland
              key="dynamic"
              onClick={handleClicked}
              data={data}
              soundwave={dataType.soundwave}
            />
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence mode="wait">
        {click && (
          <DetailedDynamicIsland
            data={data}
            onClick={handleClicked}
            title={dataType.title}
            soundwave={dataType.soundwave}
          />
        )}
      </AnimatePresence>
    </>
  );
}
