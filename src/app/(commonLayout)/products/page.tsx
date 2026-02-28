import ProductsCard from "@/component/ProductsCard";
import { IProduct } from "@/type";

const Products = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  const products = await res.json();
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
