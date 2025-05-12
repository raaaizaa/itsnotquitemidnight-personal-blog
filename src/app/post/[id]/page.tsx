import { Metadata } from 'next';
import { getPostDetail } from '@/services/getPostDetail';
import { getBaseUrl, getPostId } from '@/utils/url-utils';
import ImagePlaceholder from '../../../../public/meta-image-formatted.png';
import PostDetailWrapper from '@/wrapper/PostDetailWrapper';
import OtherPostsWrapper from '@/wrapper/OtherPostsWrapper';

import styles from './page.module.css';

export async function generateMetadata(): Promise<Metadata> {
  const id = await getPostId();
  const { postSEO } = await getPostDetail(id);
  const baseUrl = await getBaseUrl();

  const baseOGImage = `${baseUrl}/api/og`;

  const title = postSEO?.headline || '';
  const date = postSEO?.created_at || '';
  const tag = postSEO?.tag || '';

  const encodedTitle = encodeURIComponent(title);
  const encodedDate = encodeURIComponent(date);
  const encodedTag = encodeURIComponent(tag);

  const imageUrl =
    postSEO?.image ||
    `${baseOGImage}?title=${encodedTitle}&date=${encodedDate}&tag=${encodedTag}` ||
    ImagePlaceholder.src;

  return {
    title: postSEO?.headline,
    description: postSEO?.description,
    openGraph: {
      type: 'article',
      title: postSEO?.headline,
      description: postSEO?.description,
      images: postSEO?.headline ? imageUrl : ImagePlaceholder.src,
      url: postSEO?.url || 'itsnotquitemidnight.xyz',
    },
    twitter: {
      card: 'summary_large_image',
      title: postSEO?.headline,
      description: postSEO?.description,
      images: postSEO?.headline ? imageUrl : ImagePlaceholder.src,
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
