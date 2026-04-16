'use client';

import { PostProps } from '@/types/post';
import { formatDate } from '@/utils/date-utils';
import { substring } from '@/utils/substring';
import { motion } from 'framer-motion';
import Image from 'next/image';

import Link from 'next/link';

export default function PostCard({ post }: { post: PostProps }) {
  const { headline, first_image, created_at, id, cutted_description, tag } =
    post;
  const formatted_created_at = formatDate(created_at);

  return (
    <Link href={`/post/${id}`}>
      <motion.div
        className="flex flex-col no-underline px-3 hover:bg-[rgb(250,250,250)] hover:transition-colors hover:transition-100 hover:ease-in-out hover:cursor-pointer max-sm:p-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: { type: 'spring', stiffness: 300, damping: 20 },
        }}
        whileTap={{ scale: 0.9 }}
        exit={{
          scale: 0,
          opacity: 0,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
            duration: 0.2,
          },
        }}>
        <div className="border-t border-[rgb(242,242,242)] border-0.5" />
        <div className="flex flex-col py-7 justify-center w-inherit">
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col text-black gap-3 w-full md:w-96">
              <p
                className="font-inter-bold text-xl md:text-xl text-black m-0"
                dangerouslySetInnerHTML={{
                  __html: substring(headline, 150),
                }}
              />
              <div className="flex flex-col gap-4">
                <div
                  className="font-inter-light text-base md:text-base text-[#6b6b6b] m-0"
                  dangerouslySetInnerHTML={{ __html: cutted_description }}
                />
                <div className="flex items-center gap-3">
                  {tag && (
                    <p className="text-sm md:text-sm bg-[#f2f2f2] rounded px-2 py-1 w-16 text-center m-0 md:w-16 max-sm:w-12 max-sm:text-xs">
                      {tag}
                    </p>
                  )}
                  <p className="m-0 text-sm md:text-sm max-sm:text-xs">
                    {formatted_created_at}
                  </p>
                </div>
              </div>
            </div>
            {first_image ? (
              <div className="w-40 h-28 max-md:w-32 max-md:h-20 max-sm:w-24 max-sm:h-16">
                <Image
                  src={first_image}
                  alt="img"
                  className="w-40 h-28 max-md:w-32 max-md:h-20 max-sm:w-24 max-sm:h-16 object-cover max-w-none"
                  quality={50}
                  width={500}
                  height={500}
                />
              </div>
            ) : null}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
