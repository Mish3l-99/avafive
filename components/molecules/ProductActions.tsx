"use client";

import { useCart } from "@/store/cart";
import { Product } from "@/typings";
import Image from "next/image";
import React from "react";

interface Props {
  product: Product;
}

const ProductActions = ({ product }: Props) => {
  const { addToCart } = useCart();

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => addToCart(product)}
        className="px-4 md:w-7/12 p-2 flex items-center justify-center space-x-4 rounded-lg border-[2px] border-primary bg-primary paragraph-m-16 text-bright"
      >
        <Image
          alt="bag icon"
          src="/icons/white-bag.svg"
          height={24}
          width={24}
        />
        <span>Add to bag</span>
      </button>
      <button className="px-4 md:w-5/12 p-2 flex items-center justify-center space-x-4 rounded-lg border-[2px] border-primary paragraph-m-16 text-primary">
        <Image
          alt="heart icon"
          src="/icons/primary-heart.svg"
          height={24}
          width={24}
        />
        <span>Add To Wishlist</span>
      </button>
    </div>
  );
};

export default ProductActions;
