import ProductsDetailsCard from "@/component/ProductsDetailesCard";

// SSR to SSG convert use generateStaticParams function .
export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();

  return products.map((product: any) => ({
    productId: String(product.id),
  }));
};

// Dynamic Meta Data title and descriptions 
export const generateMetadata = async ({params} : {params : Promise<{ productId: string }>}) => {
 const {productId} = await params;
 const res = await fetch(`http://localhost:5000/products/${productId}`);
 const product = await res.json();

 return {
  title : product?.name,
  description : product.category
 }
  
}
// individual blog page
const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  // send id or params and find the id
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
