'use client';

import { useNowPlayingStore } from '@/services/getNowPlaying';
import LoadingSpotifyCard from './LoadingSpotifyCard';
import SpotifyCard from './SpotifyCard';

import styles from './NowPlaying.module.css';

export default function NowPlaying() {
  const { nowPlaying, lastPlayed } = useNowPlayingStore();
  const data = nowPlaying || lastPlayed;

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
