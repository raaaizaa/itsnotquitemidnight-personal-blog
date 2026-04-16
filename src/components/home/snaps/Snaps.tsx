'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export default function Snaps({ board }) {
  return (
    <div className="flex flex-col gap-9">
      <p className="font-inter-bold text-4xl m-0">
        A board that consists of pics from his phone cam roll he thought looked
        cool 📱
      </p>
      <p className="font-inter-light text-base m-0 text-[#6b6b6b]">
        See the complete board on{' '}
        <span className="font-normal text-[#e60023]">Pinterest</span>{' '}
        <a
          className="no-underline text-[#6b6b6b] transition-all transition-150 ease-in-out hover:underline hover:underline-offset-1 hover:text-black"
          href="https://www.pinterest.com/whatiamseeing/phone-cam-roll/"
          target="_blank">
          here
        </a>
      </p>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
        <Masonry>
          {board
            ? board.map((image, key) => (
                <motion.div
                  key={key}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    transition: { type: 'spring', stiffness: 300, damping: 20 },
                  }}>
                  <Image
                    src={image}
                    alt={`camroll-${key}`}
                    width={500}
                    height={500}
                    quality={30}
                    className="transition-filter transition-500 ease-in-out hover:brightness-[0.85] hover:scale-[101%]"
                    loading="lazy"
                  />
                </motion.div>
              ))
            : Array.from({ length: 20 }).map((_, index) => {
                const randomHeight = Math.floor(Math.random() * 150) + 150;
                return (
                  <div
                    key={index}
                    className="bg-[#c9c9c9] animate-pulse"
                    style={{ height: `${randomHeight}px` }}
                  />
                );
              })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
