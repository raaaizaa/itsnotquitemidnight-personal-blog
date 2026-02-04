import Sidebar from './sidebar/Sidebar';
import Content from './content/Content';
import { getHeadline } from '@/services/getPost';

import styles from './Home.module.css';

export default async function Home() {
  const posts = await getHeadline();

  return (
    <div className={styles.container}>
      <Content posts={posts} />
      <Sidebar />
    </div>
  );
}
