import Image from 'next/image';
import React from 'react';
import Arrow from '../assets/arrow.svg';

interface Props {
  onPrevious?: () => void;
  onNext?: () => void;
  variant: 'top-section' | 'bottom-section' | 'middle-section';
}

export default function Navigation({ onPrevious, onNext, variant }: Props) {
  return (
    <>
      {variant !== 'top-section' && (
        <a
          className="absolute top-8 hover:cursor-pointer hover:scale-110"
          onClick={onPrevious}>
          <Image
            src={Arrow}
            width={40}
            height={40}
            alt="arrow-up"
            className="rotate-270"
          />
        </a>
      )}
      {variant !== 'bottom-section' && (
        <a
          className="absolute bottom-8 hover:cursor-pointer hover:scale-110 flex flex-col items-center justify-center"
          onClick={onNext}>
          {variant === 'top-section' && (
            <p className="font-road-rage text-[#a83dc5] text-[24px]">
              Scroll here
            </p>
          )}
          <Image
            src={Arrow}
            width={40}
            height={40}
            alt="arrow-down"
            className="rotate-90"
          />
        </a>
      )}
    </>
  );
}
