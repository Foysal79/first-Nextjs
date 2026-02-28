import Image from "next/image";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import type { IProduct } from "@/type";

const ProductsCard = ({ product }: { product: IProduct }) => {
  const isLowStock = product.stock <= 20;

  return (
    <Card className="group flex h-full flex-col o">
      {/* Image */}
      <div className="relative aspect-[16/10] w-full ">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
        />

        {/* Top badges */}
        <div className="absolute left-3 top-3 flex gap-2">
          <Badge variant="secondary">{product.category}</Badge>
          {isLowStock && <Badge variant="destructive">Low stock</Badge>}
        </div>

        {/* Rating pill */}
        <div className="absolute right-3 top-3 rounded-full bg-black/60 px-2 py-1 text-xs text-white backdrop-blur">
          <span className="inline-flex items-center gap-1">
            <Star className="h-3.5 w-3.5" />
            {product.rating}
          </span>
        </div>
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

      {/* Content */}
      <CardContent className="mt-auto space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold">${product.price}</span>
          <span className="text-muted-foreground">Stock: {product.stock}</span>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="pt-0">
        <Button className="w-full">View Product</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductsCard;
