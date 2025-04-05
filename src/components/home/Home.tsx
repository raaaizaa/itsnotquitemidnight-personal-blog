import ContentWrapper from '@/wrapper/ContentWrapper';
import Sidebar from './sidebar/Sidebar';

import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <ContentWrapper />
      <Sidebar />
    </div>
  );
}
