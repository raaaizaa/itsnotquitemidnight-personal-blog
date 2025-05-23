import Image from 'next/image';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          ©itsnotquitemidnight {new Date().getFullYear()}
        </p>
        <a
          href="https://github.com/raaaizaa/raizatriestocode-2025"
          target="_blank">
          <Image
            className={styles.githubIcon}
            src="../github-mark-white.svg"
            width={24}
            height={24}
            alt="github"
          />
        </a>
      </div>
    </div>
  );
}
