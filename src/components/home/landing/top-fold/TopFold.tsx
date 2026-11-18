import React from 'react';
import Navigation from '../navigation/Navigation';
import { Border } from '../border/Border';

interface Props {
  onNext: () => void;
  ref: React.RefObject<HTMLDivElement | null>;
}



export default function TopFold({ onNext, ref }: Props) {
  const subtitle =
    " A personal archive of things that happened, things that didn't, and everything in between";

  return (
    <section
      ref={ref}
      className="relative flex flex-col h-dvh shrink-0 w-screen snap-start items-center justify-center ">
      <h1 className="font-hit-me-punk text-center text-[#A65A50] text-[clamp(5rem,13.21vw-0.64rem,11.25rem)] md:text-[clamp(2rem,13.21vw-0.64rem,11.25rem)] m-0 posterize-text">
        itsnot
        <br className="md:hidden" />
        quite
        <br className="md:hidden" />
        midnight
      </h1>
      <h2 className="font-road-rage text-[#E5DDD2] text-[clamp(22px,5vw,52px)] posterize-text-2 text-center w-full max-w-[280px] md:max-w-none px-2">
        {subtitle}
      </h2>
      <Border index='01' title='PERSONAL ARCHIVE'/>
      <Navigation variant="top-section" onNext={onNext} />
    </section>
  );
}
