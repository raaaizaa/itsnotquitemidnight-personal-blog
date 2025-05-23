import PostDetail from '@/components/post/post-detail/PostDetail';
import { getPostDetail } from '@/services/getPostDetail';
import { getPostId } from '@/utils/url-utils';

export default async function PostDetailWrapper() {
  const id = await getPostId();
  const { postDetails } = await getPostDetail(id);

  return <PostDetail post={postDetails} />;
}
