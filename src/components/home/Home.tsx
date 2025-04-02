import BlogPostsWrapper from '@/wrapper/BlogPostsWrapper';
import About from '@/components/home/about/About';
import NowPlaying from '@/components/home/now-playing/NowPlaying';
import MessageForm from '@/components/home/message-form/MessageForm';

import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <BlogPostsWrapper />
      <div className={styles.divider}>
        <div className={styles.aboutContainer}>
          <About />
          <div className={styles.aboutDivider}/>
          <NowPlaying />
        </div>
        <div className={styles.messageDivider}/>
        <MessageForm />
      </div>
    </div>
  );
}
