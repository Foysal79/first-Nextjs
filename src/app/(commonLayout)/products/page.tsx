import ProductsCard from "@/component/ProductsCard";
import { service } from "@/service/postService";
import { IProduct } from "@/type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My products",
  description: "this my all over product page",
};

const Products = async () => {
  const products = await service.getProductDetails();
  console.log(products);
  return (
    <div>
      <h1 className="text-center text-5xl font-semibold py-10">All Products</h1>
      <div className="grid grid-cols-4 gap-5 p-10">
        {products.map((product: IProduct) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
