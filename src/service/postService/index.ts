 const getBlogPost = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
    {
      cache: "no-store",
    },
  );

  return await res.json();
};

const getProductDetails = async () => {
const res = await fetch("http://localhost:5000/products", {
cache : "no-store",
})
return await res.json();
}


const product = async () => {


}

export const service = {
getBlogPost,
getProductDetails,
product
}