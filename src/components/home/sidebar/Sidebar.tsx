import About from '../about/About';
import NowPlaying from '../now-playing/NowPlaying';
import MessageForm from '../message-form/MessageForm';

import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.divider}>
      <div className={styles.aboutContainer}>
        <About />
        <div className={styles.aboutDivider} />
        <NowPlaying />
      </div>
      <div className={styles.messageDivider} />
      <MessageForm />
    </div>
  );
}
