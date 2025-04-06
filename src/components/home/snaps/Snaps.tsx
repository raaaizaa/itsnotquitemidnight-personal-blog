import Image from 'next/image';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import styles from './Snaps.module.css';

export default function Snaps({ board }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        A board that consists of pics from his phone cam roll he thought looked
        cool 📱
      </p>
      <p className={styles.subtitle}>
        See the complete board on{' '}
        <span className={styles.pinterestRed}>Pinterest</span>{' '}
        <a
          className={styles.anchorSubtitle}
          href="https://www.pinterest.com/whatiamseeing/phone-cam-roll/"
          target="_blank">
          here
        </a>
      </p>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
        <Masonry>
          {board
            ? board.map((image, key) => (
                <Image
                  src={image}
                  alt={`camroll-${key}`}
                  width={500}
                  height={500}
                  quality={30}
                  key={key}
                  className={styles.image}
                />
              ))
            : Array.from({ length: 20 }).map((_, index) => {
                const randomHeight = Math.floor(Math.random() * 150) + 150;
                return (
                  <div
                    key={index}
                    className={styles.imageSkeleton}
                    style={{ height: `${randomHeight}px` }}
                  />
                );
              })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
