'use client';

import BlogPosts from '../blog-posts/BlogPosts';

export default function Content({ posts }) {

  return (
    <div className='flex flex-col gap-9 p-9 w-full max-sm:p-6 max-sm:box-border max-sm:w-full'>
      <BlogPosts data={posts} />
    </div>
  );
}
