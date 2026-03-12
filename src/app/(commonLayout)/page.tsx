"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import ProfileImage from "@/assets/1.png";
import ProductsCard from "@/component/ProductsCard";
import { service } from "@/service/postService";
import { useEffect, useState } from "react";
import { IProduct } from "@/type";

const HomePage = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/dashboard");
  };

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await service.getProductDetails();
        setProducts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch Product", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-6xl font-semibold text-center my-10">
        Hello Next js Page
      </h1>

      <button
        className="border rounded-3xl p-3 flex m-auto mt-10"
        onClick={handleNavigation}
      >
        Dashboard
      </button>

      <h1 className="text-3xl font-semibold text-center mt-4">
        Feature Product
      </h1>

      <div className="grid grid-cols-4 gap-4 max-w-5/6 mx-auto">
        {products.slice(0, 4).map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>

      <h1 className="text-center m-5 font-semibold text-blue-700">
        Local img use (public folder use)
      </h1>
      <Image
        src="/1.png"
        alt="coming soon"
        width={300}
        height={300}
        className="m-auto"
      />

      <h1 className="text-center m-5 font-semibold text-green-500">
        Local img use (asset folder use)
      </h1>
      <Image
        src={ProfileImage}
        alt="coming soon"
        width={300}
        height={300}
        className="m-auto"
      />

      <h1 className="text-center m-5 font-semibold text-red-500">
        Remote img use
      </h1>
      <Image
        src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*kUKiJUFeCs4rKjjGNUtvUQ.png"
        alt="coming soon"
        width={300}
        height={300}
        className="m-auto"
      />
    </div>
  );
};

export default HomePage;