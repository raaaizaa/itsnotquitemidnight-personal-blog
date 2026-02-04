import NowPlaying from '../now-playing/NowPlaying';
import MessageForm from '../message-form/MessageForm';

import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.divider}>
      <div className={styles.aboutContainer}>
        <NowPlaying />
      </div>
      <div className={styles.messageDivider} />
      <MessageForm />
    </div>
  );
}
