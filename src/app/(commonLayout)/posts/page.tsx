import PostCard from "@/component/postCard";
import { service } from "@/service/postService";
import { Post } from "@/type";

const PostPage = async () => {
  // api management use service components
  const posts = await service.getBlogPost();
  console.log(posts);
  return (
    <div>
      <h1 className="text-center text-5xl font-semibold py-10">post page</h1>
      <div className="m-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostPage;
