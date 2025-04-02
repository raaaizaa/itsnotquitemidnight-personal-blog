import PostDetail from '@/components/post/post-detail/PostDetail';
import { getPostDetail } from '@/services/getPost';
import { getPostId } from '@/utils/get-post-id-utils';

export default async function PostDetailWrapper() {
  const id = await getPostId();
  const { postDetails } = await getPostDetail(id);

  return <PostDetail post={postDetails} />;
}
