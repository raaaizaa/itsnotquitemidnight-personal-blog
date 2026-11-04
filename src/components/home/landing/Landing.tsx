'use client';

import React, { useRef } from 'react';
import TopFold from './top-fold/TopFold';
import PostContainer from './post-container/PostContainer';
import { PostProps } from '@/types/post';
import Contact from './contact/Contact';

export default function Landing({ posts }: { posts: PostProps[] }) {
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const handleScrollTo = (index: number) => {
    sectionRefs[index].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  return (
    <div className="flex h-dvh flex-col items-center overflow-y-auto snap-y snap-mandatory">
      <TopFold onNext={() => handleScrollTo(1)} ref={sectionRefs[0]} />
      <PostContainer
        ref={sectionRefs[1]}
        onNext={() => handleScrollTo(2)}
        onPrevious={() => handleScrollTo(0)}
        posts={posts}
      />
      <Contact ref={sectionRefs[2]} onPrevious={() => handleScrollTo(1)} />
    </div>
  );
}
