import Link from 'next/link';
import DynamicIsland from './dynamic-island/DynamicIsland';

import styles from './Navbar.module.css';

export default function Navbar() {
  return (
      <div className={styles.container}>
        <Link href="/" className={styles.title}>
          itsnotquitemidnight
        </Link>
        <DynamicIsland />
      </div>
  );
}
