'use client';

import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { PostDetailProps } from '@/types/post';
import { motion } from 'framer-motion';
import PacmanLoading from '@/components/shared/loading/PacmanLoading';
import portrait from '../../../../public/github-portrait.jpg';

import styles from './PostDetail.module.css';

export default function PostDetail({ post }: { post: PostDetailProps | null }) {
  if (!post) {
    return (
      <div className={styles.fallbackContainer}>
        <PacmanLoading />
      </div>
    );
  }

  const { content, created_at, tag } = post;

  return (
    <div className={styles.container}>
      <Link href="https://gist.github.com/raaaizaa" target="_blank">
        <motion.div
          className={styles.authorContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              type: 'spring',
              stiffness: 300,
              damping: 15,
            },
          }}>
          <Image
            src={portrait}
            alt="portrait"
            width={48}
            height={48}
            quality={50}
            className={styles.portrait}
          />
          <div className={styles.infoContainer}>
            <p className={styles.author}>Posted by raaaizaa</p>
            <p className={styles.posted}>
              {`on `}
              {/* @ts-expect-error ignore this i forgot why i use this but yeah it prevents the error */}
              {new Date(created_at).toLocaleDateString('en-US', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })}
              {`, on Gist`}
            </p>
          </div>
        </motion.div>
      </Link>
      {tag && (
        <motion.div
          className={styles.tag}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
          {tag}
        </motion.div>
      )}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 15,
          },
        }}>
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            img: ({ src = '', alt = '' }) => (
              <Image
                priority
                src={src}
                alt={alt}
                width={800}
                height={500}
                quality={30}
                layout="responsive"
              />
            ),
          }}>
          {content}
        </ReactMarkdown>
      </motion.div>
    </div>
  );
}
