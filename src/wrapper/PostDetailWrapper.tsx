import PostDetail from '@/components/post/post-detail/PostDetail';
import { getPostDetail } from '@/services/getPost';
import { getPostId } from '@/utils/url-utils';

export default async function PostDetailWrapper() {
  const id = await getPostId();
  const { postDetails } = await getPostDetail(id);

  // @ts-expect-error data type thingy
  return <PostDetail post={postDetails} />;
}
