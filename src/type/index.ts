export type IProduct = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
  image: string;
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
