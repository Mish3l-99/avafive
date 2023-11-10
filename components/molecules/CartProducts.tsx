"use client";

import { useCart } from "@/store/cart";
import Image from "next/image";
import React from "react";

const CartProducts = () => {
  const { products, removeFromCart } = useCart();

  return (
    <div className="my-4 md:mt-4 md:mb-16">
      <div className="hidden border-b pb-2 md:grid grid-cols-12 gap-2">
        <div className="col-span-6 paragraph-m-16 text-typeLow">
          Product Name
        </div>
        <div className="col-span-2 paragraph-m-16 text-typeLow">Price</div>
        <div className="col-span-2 paragraph-m-16 text-typeLow">Qty</div>
        <div className="col-span-2 paragraph-m-16 text-typeLow">Subtotal</div>
      </div>
      <>
        {products.length > 0 ? (
          <>
            {products.map((prod, i) => {
              const { title, brand, price, thumbnail } = prod;
              return (
                <div
                  key={i}
                  className="my-2 border-b mb-2 pb-10 md:pb-2 grid grid-cols-12 gap-2 relative"
                >
                  <div className="col-span-12 md:col-span-6 flex items-center space-x-2">
                    <Image
                      alt="pImage"
                      src={thumbnail}
                      width={75}
                      height={75}
                      className="border rounded-lg"
                    />
                    <div className="flex flex-col space-y-2">
                      <h5 className="paragraph-m-16 text-typeHigh">{title}</h5>
                      <p className="paragraph-r-16 text-typeLow">{brand}</p>
                      <p className="paragraph-r-16 text-typeLow">Qty - 1</p>
                    </div>
                  </div>
                  <div className="col-span-4 md:col-span-2 paragraph-r-14 text-typeHigh">
                    <span className="md:hidden text-xs">price:</span> ${price}
                  </div>
                  <div className="col-span-4 md:col-span-2 paragraph-r-14 text-typeHigh">
                    <span className="md:hidden text-xs">Qty:</span> 1
                  </div>
                  <div className="col-span-4 md:col-span-2 paragraph-r-14 text-typeHigh">
                    <span className="md:hidden text-xs">subtotal:</span> $
                    {price}
                  </div>

                  <div className="absolute bottom-2 right-3 flex space-x-4 items-center">
                    <button className="text-primary underline paragraph-m-16 font-bold">
                      Move to Wishlist
                    </button>
                    <button
                      onClick={() => removeFromCart(prod)}
                      className="text-error underline paragraph-m-16 font-bold"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <p className="mt-6 text-error">Cart empty !</p>
        )}
      </>
    </div>
  );
};

export default CartProducts;
