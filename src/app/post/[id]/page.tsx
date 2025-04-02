import { Metadata } from 'next';
import { getPostDetail } from '@/services/getPost';
import { getPostId } from '@/utils/url-utils';
import ImagePlaceholder from '../../../../public/meta-image-formatted.png';
import PostDetailWrapper from '@/wrapper/PostDetailWrapper';
import OtherPostsWrapper from '@/wrapper/OtherPostsWrapper';

import styles from './Post.module.css';

export async function generateMetadata(): Promise<Metadata> {
  const id = await getPostId();
  const { postSEO } = await getPostDetail(id);
  const imageUrl = postSEO?.image || ImagePlaceholder.src;

  return {
    title: postSEO?.headline || 'Default Title',
    description: postSEO?.description || 'Default Description',
    openGraph: {
      type: 'article',
      title: postSEO?.headline || 'Default Title',
      description: postSEO?.description || 'Default Description',
      // @ts-expect-error seo thingy error
      image: imageUrl,
      url: postSEO?.url || 'itsnotquitemidnight.xyz',
    },
    twitter: {
      card: 'summary_large_image',
      title: postSEO?.headline || 'Default Title',
      description: postSEO?.description || 'Default Description',
      // @ts-expect-error seo thingy error
      image: imageUrl,
      url: postSEO?.url || 'itsnotquitemidnight.xyz',
    },
    other: {
      author: 'Raiza',
    },
  };
}

export default async function Post() {
  return (
    <div className={styles.container}>
      <PostDetailWrapper />
      <OtherPostsWrapper />
    </div>
  );
}
