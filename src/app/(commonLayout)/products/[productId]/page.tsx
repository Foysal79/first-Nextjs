import ProductsDetailsCard from "@/component/ProductsDetailesCard";
export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();

  return products.map((product: any) => ({
    productId: String(product.id),
  }));
};

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { productId } = await params;

  const res = await fetch(`http://localhost:5000/products/${productId}`);
  const product = await res.json();
  console.log(product);
  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h1>Blog Details Page : {productId}</h1>
      <ProductsDetailsCard product={product} />
    </div>
  );
};

export default BlogDetailsPage;
