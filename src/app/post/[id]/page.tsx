import { Metadata } from 'next';
import { getPostDetail } from '@/services/posts';
import { getBaseUrl, getPostId } from '@/utils/url-utils';
import ImagePlaceholder from '../../../../public/meta-image-formatted.png';
import OtherPostsWrapper from '@/wrapper/OtherPostsWrapper';
import PostDetail from '@/components/post/post-detail/PostDetail';

export async function generateMetadata(): Promise<Metadata> {
  const id = await getPostId();
  const { post_seo } = await getPostDetail(id);

  const baseUrl = await getBaseUrl();

  const baseOGImage = `${baseUrl}/api/og`;

  const title = post_seo?.headline || '';
  const date = post_seo?.created_at || '';
  const tag = post_seo?.tag || '';

  const encodedTitle = encodeURIComponent(title);
  const encodedDate = encodeURIComponent(date);
  const encodedTag = encodeURIComponent(tag);

  const imageUrl =
    post_seo?.image ||
    `${baseOGImage}?title=${encodedTitle}&date=${encodedDate}&tag=${encodedTag}` ||
    ImagePlaceholder.src;

  return {
    title: post_seo?.headline,
    description: post_seo?.description,
    openGraph: {
      type: 'article',
      title: post_seo?.headline,
      description: post_seo?.description,
      images: post_seo?.headline ? imageUrl : ImagePlaceholder.src,
      url: post_seo?.url || 'itsnotquitemidnight.xyz',
    },
    twitter: {
      card: 'summary_large_image',
      title: post_seo?.headline,
      description: post_seo?.description,
      images: post_seo?.headline ? imageUrl : ImagePlaceholder.src,
    },
    other: {
      author: 'Raiza',
    },
  };
}

export default async function Post() {
  const id = await getPostId();
  const { post_detail } = await getPostDetail(id);

  return (
    <div className="flex flex-col justify-start items-start m-auto max-w-2xl box-border mb-11 gap-20 max-md:max-w-lg max-sm:max-w-none max-sm:p-6 max-sm:mb-0">
      <PostDetail post={post_detail} />
      <OtherPostsWrapper />
    </div>
  );
}
