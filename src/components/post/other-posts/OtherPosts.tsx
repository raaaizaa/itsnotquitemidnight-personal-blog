import { PostProps } from '@/types/post';
import LoadingPostCard from '@/components/shared/post-card/LoadingPostCard';
import PostCard from '@/components/shared/post-card/PostCard';

import styles from './OtherPosts.module.css';

const POST_COUNT = 4;

export default function OtherPosts({ posts }: { posts: PostProps[] }) {
  const displayedPosts = posts?.slice(0, POST_COUNT);

  return (
    <div className={styles.container}>
      <p className={styles.title}>See other posts here</p>
      {!displayedPosts ? (
        <div className={styles.dataContainer}>
          {Array.from({ length: POST_COUNT }).map((_, index) => (
            <LoadingPostCard key={index} />
          ))}
        </div>
      ) : (
        <div className={styles.dataContainer}>
          {displayedPosts?.map((post, index) => (
            <PostCard post={post} key={`${post.id}-${index}`} />
          ))}
        </div>
      )}
    </div>
  );
}
