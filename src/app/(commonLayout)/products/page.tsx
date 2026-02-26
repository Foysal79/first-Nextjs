const Products = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();
  console.log(products);
  return (
    <div>
      <h1>All Products</h1>
      <div>
        {
            
        }
      </div>
    </div>
  );
};

export default Products;
