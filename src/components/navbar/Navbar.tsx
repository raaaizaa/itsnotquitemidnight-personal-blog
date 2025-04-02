import Link from 'next/link';

import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.title}>
        itsnotquitemidnight
      </Link>
    </div>
  );
}
