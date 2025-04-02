import Link from 'next/link';

import styles from './NotFound.module.css';

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Error 404: Page Not Found</p>
      <div className={styles.buttonContainer}>
        <Link href="/">
          <div className={styles.button}>Take me back to home</div>
        </Link>
      </div>
    </div>
  );
}
