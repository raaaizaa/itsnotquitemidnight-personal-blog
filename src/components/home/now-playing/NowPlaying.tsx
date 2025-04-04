'use client';

import { useEffect, useState } from 'react';
import { TrackProps } from '@/types/track';
import getNowPlaying from '@/services/getNowPlaying';
import LoadingSpotifyCard from './LoadingSpotifyCard';
import SpotifyCard from './SpotifyCard';

import styles from './NowPlaying.module.css';

export default function NowPlaying() {
  const [data, setData] = useState<TrackProps>();

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const data = await getNowPlaying();
        setData(data);
      } catch (error) {
        console.error('Error fetching now playing data:', error);
      }
    };
    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!data) {
    return (
      <div className={styles.container}>
        <p className={styles.title}>
          Now playing on{' '}
          <a
            className={styles.spotifyColor}
            href="https://open.spotify.com/user/raaaizaa">
            Spotify
          </a>
        </p>
        <LoadingSpotifyCard />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {data?.playedAt ? 'Last played on ' : 'Now playing on '}
        <a
          className={styles.spotifyColor}
          href="https://open.spotify.com/user/raaaizaa">
          Spotify
        </a>
      </p>

      <SpotifyCard {...data} />
    </div>
  );
}
