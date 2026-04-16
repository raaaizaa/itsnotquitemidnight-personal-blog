'use client';

import { useNowPlayingStore } from '@/services/getNowPlaying';
import LoadingSpotifyCard from './LoadingSpotifyCard';
import SpotifyCard from './SpotifyCard';

export default function NowPlaying() {
  const { nowPlaying, lastPlayed } = useNowPlayingStore();
  const data = nowPlaying || lastPlayed;

  if (!data) {
    return (
      <div className="flex flex-col gap-6 w-full max-w-sm md:max-w-none md:w-auto">
        <p className="font-inter-bold text-2xl sm:text-3xl md:text-4xl m-0">
          Now playing on{' '}
          <a
            className="text-[#1db954] no-underline hover:underline hover:decoration-[3px]"
            href="https://open.spotify.com/user/raaaizaa">
            Spotify
          </a>
        </p>
        <LoadingSpotifyCard />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full max-w-sm md:max-w-none md:w-auto">
      <p className="font-inter-bold text-2xl sm:text-3xl md:text-4xl m-0">
        {data?.playedAt ? 'Last played on ' : 'Now playing on '}
        <a
          className="text-[#1db954] no-underline hover:underline hover:decoration-[3px]"
          href="https://open.spotify.com/user/raaaizaa">
          Spotify
        </a>
      </p>
      <SpotifyCard {...data} />
    </div>
  );
}
