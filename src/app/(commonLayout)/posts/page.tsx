import PostCard from "@/component/postCard";
import { Post } from "@/type";

const PostPage = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
  );
  const posts = await res.json();
  console.log(posts);
  return (
    <div>
      <h1 className="text-center text-5xl font-semibold py-10">post page</h1>
      <div>
        {posts.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostPage;
