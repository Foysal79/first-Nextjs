import { Post } from "@/type";


const PostCard = ({ post }: { post: Post }) => {
  return (
    <article className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
      <h2 className="text-lg font-semibold leading-snug line-clamp-2">
        {post.title}
      </h2>

      <p className="mt-3 text-sm leading-6 text-gray-600 line-clamp-4">
        {post.body}
      </p>

      <div className="mt-6 flex items-center justify-between text-xs text-gray-500">
        <span>Post #{post.id}</span>
        <span>User {post.userId}</span>
      </div>
    </article>
  );
};

export default PostCard;