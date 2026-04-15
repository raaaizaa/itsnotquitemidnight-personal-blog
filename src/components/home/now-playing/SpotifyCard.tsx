import React from 'react';
import { TrackProps } from '../../../types/track';
import Image from 'next/image'

export default function SpotifyCard({
  trackUrl,
  albumImage,
  trackName,
  artistName,
}: TrackProps) {

  function formatName(string: string){
    if(string.length > 25){
      return `${string.substring(0, 25)}...`
    }
    return string;
  }

  return (
    <div className='flex flex-col gap-2'>
      <a
        href={trackUrl}
        target="_blank"
        rel="noopener noreferrer"
        className='w-full md:w-fit md:h-fit'>
        <Image
          alt="album-cover"
          src={albumImage}
          className='w-full  aspect-square object-cover'
          quality={50}
          width={1000}
          height={1000}
        />
      </a>
      <div className='flex flex-col gap-1'>
        <a href={trackUrl} target="_blank" className='no-underline'>
          <p className='font-bold text-xl md:text-2xl text-black m-0 hover:underline hover:underline-offset-1 hover:decoration-[2px]'>
            {formatName(trackName)}
          </p>
        </a>
        <p className='font-light text-base md:text-lg text-[#6b6b6b] m-0'>
          {formatName(artistName)}
        </p>
      </div>
    </div>
  );
}
