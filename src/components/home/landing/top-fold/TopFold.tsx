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
      className="flex flex-col h-screen w-screen snap-start items-center justify-center">
      <h1 className="font-hit-me-punk text-[#a83dc5] text-[clamp(2rem,13.21vw-0.64rem,11.25rem)] m-0 ">
        itsnotquitemidnight
      </h1>
      <Navigation variant="top-section" onNext={onNext} />
    </section>
  );
}
