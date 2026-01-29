const DynamicBlogPage = async ({ params }) => {
  console.log(await params);
  const { blogId } = await params;
  return (
    <div>
      <h1 className="text-3xl">Dynamic Blog Page Id : {blogId}</h1>
    </div>
  );
};

export default DynamicBlogPage;
