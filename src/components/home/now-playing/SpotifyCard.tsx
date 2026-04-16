import React from 'react';
import { TrackProps } from '../../../types/track';
import Image from 'next/image';
import { substring } from '@/utils/substring';

export default function SpotifyCard({
  trackUrl,
  albumImage,
  trackName,
  artistName,
}: TrackProps) {
  return (
    <div className="flex flex-col gap-2">
      <a
        href={trackUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full md:w-fit md:h-fit">
        <Image
          alt="album-cover"
          src={albumImage}
          className="w-full aspect-square object-cover"
          quality={50}
          width={1000}
          height={1000}
        />
      </a>
      <div className="flex flex-col gap-1">
        <a href={trackUrl} target="_blank" className="no-underline">
          <p className="font-inter-bold text-xl md:text-2xl text-black m-0 hover:underline hover:underline-offset-1 hover:decoration-[2px]">
            {substring(trackName, 25)}
          </p>
        </a>
        <p className="font-inter-light text-base md:text-lg text-[#6b6b6b] m-0">
          {substring(artistName, 25)}
        </p>
      </div>
    </div>
  );
}
