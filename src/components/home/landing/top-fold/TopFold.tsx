import React from 'react';
import Navigation from '../navigation/Navigation';

interface Props {
  onNext: () => void;
  ref: React.RefObject<HTMLDivElement | null>;
}

export default function TopFold({ onNext, ref }: Props) {
  return (
    <section
      ref={ref}
      className="relative flex flex-col h-dvh shrink-0 w-screen snap-start items-center justify-center">
      <h1 className="font-hit-me-punk text-[#a83dc5] text-[clamp(2rem,13.21vw-0.64rem,11.25rem)] m-0 posterize-text">
        itsnotquitemidnight
      </h1>
      <h2 className='font-road-rage text-white text-[clamp(18px,5vw,52px)] posterize-text-2'>A website by raiza to put up whatever he finds worth sharing</h2>
      <Navigation variant="top-section" onNext={onNext} />
    </section>
  );
}
