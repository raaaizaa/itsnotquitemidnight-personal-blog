import React from 'react';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div>
          <p className={styles.text}>Created With 💖 by Raiza</p>
          <p className={styles.text}>
            ©itsnotquitemidnight {new Date().getFullYear()}
          </p>
        </div>
        <a
          href="https://github.com/raaaizaa/raizatriestocode-2025"
          target="_blank">
          <img
            className={styles.githubIcon}
            src="../github-mark-white.svg"
            width={24}
            height={24}
          />
        </a>
      </div>
    </div>
  );
}
