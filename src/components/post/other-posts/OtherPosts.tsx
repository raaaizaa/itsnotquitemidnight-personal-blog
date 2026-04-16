import { PostProps } from '@/types/post';
import LoadingPostCard from '@/components/shared/post-card/LoadingPostCard';
import PostCard from '@/components/shared/post-card/PostCard';

const POST_COUNT = 4;

export default function OtherPosts({ posts }: { posts: PostProps[] }) {
  const displayedPosts = posts?.slice(0, POST_COUNT);

  return (
    <div className="flex flex-col w-full gap-6 max-sm:gap-6">
      <p className="font-inter-bold text-2xl md:text-4xl m-0 max-sm:text-2xl">
        See other posts here
      </p>
      {!displayedPosts ? (
        <div className="w-full">
          {Array.from({ length: POST_COUNT }).map((_, index) => (
            <LoadingPostCard key={index} />
          ))}
        </div>
      ) : (
        <div className="w-full">
          {displayedPosts?.map((post, index) => (
            <PostCard post={post} key={`${post.id}-${index}`} />
          ))}
        </div>
      )}
    </div>
  );
}
