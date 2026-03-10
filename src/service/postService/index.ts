 const getBlogPost = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
    {
      cache: "no-store",
    },
  );

  return await res.json();
};

export const service = {
getBlogPost,

}