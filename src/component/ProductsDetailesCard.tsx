import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IProduct } from "@/type";
import Image from "next/image";
import React from "react";




const ProductsDetailsCard = ({ product }: { product: IProduct }) => {


  return (
    <div>
      <Card className="group flex h-full flex-col o">
        {/* Image */}
        <div className="relative aspect-[16/10] w-full ">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(max-width: 468px) 100vw, (max-width: 0px) 33vw, 25vw"
          />
        </div>

        {/* Header */}
        <CardHeader className="pb-2">
          {/* fixed height title area to align all cards */}
          <CardTitle className="line-clamp-2 min-h-13 text-base">
            {product.name}
          </CardTitle>

          {/* consistent description height so cards align */}
          <CardDescription className="line-clamp-2 min-h-10">
            Premium quality product from our collection.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default ProductsDetailsCard;
