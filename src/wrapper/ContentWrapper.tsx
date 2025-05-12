'use client';

import { getHeadline } from '@/services/getPost';
import board from '../../data/pinterest-board.json';
import Content from '@/components/home/content/Content';
import { useEffect, useState } from 'react';
import { PostProps } from '@/types/post';

export default function ContentWrapper() {
  const [posts, setPosts] = useState<PostProps[]>();

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getHeadline();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  return <Content posts={posts} board={board} />;
}
