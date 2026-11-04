import React, { useState } from 'react';
import { PostProps } from '@/types/post';
import Navigation from '../navigation/Navigation';
import RecentPosts from '../recent-posts/RecentPosts';
import AllPosts from '../all-posts/AllPosts';

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
  const [expand, setExpand] = useState(false);
  const recentPosts = posts.slice(0, 3);
  return (
    <section
      ref={ref}
      className="relative flex mx-auto flex-col h-dvh shrink-0 w-full snap-start items-center justify-center">
      {expand ? (
        <AllPosts items={posts} />
      ) : (
        <RecentPosts items={recentPosts} onClick={() => setExpand(!expand)} />
      )}
      <Navigation
        onNext={onNext}
        onPrevious={onPrevious}
        variant="middle-section"
      />
    </section>
  );
}
