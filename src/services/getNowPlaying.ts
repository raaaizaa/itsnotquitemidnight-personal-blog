import { TrackProps } from '@/types/track';
import { create } from 'zustand';

const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;
const TOKEN = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

interface SpotifyState {
  nowPlaying: TrackProps | null;
  lastPlayed: TrackProps | null;
  isFetching: boolean;
  fetchNowPlaying: () => Promise<void>;
}

async function getAccessToken(): Promise<string> {
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${TOKEN}`,
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: REFRESH_TOKEN || '',
      }).toString(),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch access token: ${response.statusText}`);
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw error;
  }
}

async function getPlayingStatus(accessToken: string) {
  try {
    const response = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status === 204 || !response.ok) {
      return false;
    }

    const data = await response.json();

    return {
      artistName: data.item?.artists[0]?.name,
      artistUrl: data.item?.artists[0]?.external_urls?.spotify,
      trackName: data.item?.name,
      trackUrl: data.item?.external_urls?.spotify,
      albumImage: data.item?.album?.images[0]?.url,
    };
  } catch (error) {
    console.error('Error fetching playing status:', error);
    throw error;
  }
}

async function getLastPlayed(accessToken: string) {
  try {
    const response = await fetch(
      'https://api.spotify.com/v1/me/player/recently-played',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch recently played: ${response.statusText}`
      );
    }

    const data = await response.json();
    const lastPlayed = data.items[0];
    return {
      playedAt: lastPlayed.played_at,
      artistName: lastPlayed.track?.artists[0]?.name,
      artistUrl: lastPlayed.track?.artists[0]?.external_urls?.spotify,
      trackName: lastPlayed.track?.name,
      trackUrl: lastPlayed.track?.external_urls?.spotify,
      albumImage: lastPlayed.track?.album?.images[0]?.url,
    };
  } catch (error) {
    console.error('Error fetching last played:', error);
    throw error;
  }
}

export const useNowPlayingStore = create<SpotifyState>((set, get) => ({
  nowPlaying: null,
  lastPlayed: null,
  isFetching: false, // Add a fetching state to prevent concurrent requests
  fetchNowPlaying: async () => {
    if (get().isFetching) return; // Prevent concurrent fetches
    set({ isFetching: true });

    try {
      const accessToken = await getAccessToken();
      const playing = await getPlayingStatus(accessToken);

      if (playing) {
        set({ nowPlaying: playing, lastPlayed: null });
      } else {
        const last = await getLastPlayed(accessToken);
        set({ nowPlaying: null, lastPlayed: last });
      }
    } catch (err) {
      console.error('Error fetching Spotify data:', err);
      // Optionally set an error state
    } finally {
      set({ isFetching: false }); // Ensure fetching flag is reset
    }
  },
}));
