import React from 'react';
import { PostProps } from '@/types/post';
import Navigation from '../navigation/Navigation';
import AllPosts from '../all-posts/AllPosts';
import { Border } from '../border/Border';

interface Props {
  onNext: () => void;
  onPrevious: () => void;
  ref: React.RefObject<HTMLDivElement | null>;
  posts: PostProps[];
}

export default function PostContainer({
  onNext,
  onPrevious,
  ref,
  posts,
}: Props) {
  return (
    <section
      ref={ref}
      className="relative flex mx-auto flex-col h-dvh shrink-0 w-full snap-start items-center justify-center">
      <AllPosts items={posts} />
      <Navigation
        onNext={onNext}
        onPrevious={onPrevious}
        variant="middle-section"
      />
      <Border index='02' title='PERSONAL ARCHIVE'/>
    </section>
  );
}
