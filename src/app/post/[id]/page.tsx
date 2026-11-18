import { Metadata } from 'next';
import { getPostDetail } from '@/services/posts';
import { getBaseUrl, getPostId } from '@/utils/url-utils';
import ImagePlaceholder from '../../../../public/meta-image-formatted.png';
import PostDetail from '@/components/post/post-detail/PostDetail';
import OtherPostsWrapper from '@/wrapper/OtherPostsWrapper';

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
    <div className=" flex justify-center mb-8">
      <div>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a
          href="/"
          className="font-hit-me-punk w-full text-[48px] md:text-[60px] lg:text-[72px] flex justify-center py-8 text-[#A65A50] hover:scale-110">
          itsnotquitemidnight
        </a>
        <div className="px-8 max-w-[600px] w-full">
          <PostDetail post={post_detail} />
          <hr className="mt-4 mb-5 border-white" />
          <OtherPostsWrapper />
        </div>
      </div>
    </div>
  );
}
