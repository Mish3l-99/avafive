"use client";

import { useCart } from "@/store/cart";
import React, { useEffect, useState } from "react";

const Badge = () => {
  const [count, setCount] = useState<number>(0);

  const { products, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    setCount(products.length);
  }, [products]);

  return (
    <div className="z-30 absolute top-[3px] right-0 bg-bright p-[2px] rounded-full flex items-center justify-center">
      {count > 0 ? (
        <div className="bg-highlight w-[14px] h-[14px] text-[9px] flex items-center justify-center text-bright rounded-full">
          {count}
        </div>
      ) : (
        <div className="bg-highlight h-[8px] w-[8px] rounded-full" />
      )}
    </div>
  );
};

export default Badge;
