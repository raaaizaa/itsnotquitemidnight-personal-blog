import PostDetailWrapper from '@/wrapper/PostDetailWrapper';
import OtherPostsWrapper from '@/wrapper/OtherPostsWrapper';

import styles from './Post.module.css';

export default function Post() {
  return (
    <div className={styles.container}>
      <PostDetailWrapper />
      <OtherPostsWrapper />
    </div>
  );
}
