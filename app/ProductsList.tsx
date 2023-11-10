import { Product, ProductsResponse } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const fetchProducts = async (): Promise<Product[]> => {
  // taking 4 products from the api
  const res = await fetch("https://dummyjson.com/products?limit=4&skip=9");
  const jsoned: ProductsResponse = await res.json();

  return jsoned.products;
};

const ProductsList = async () => {
  const products = await fetchProducts();

  // console.log(products);

  return (
    <div className="py-4">
      <div className="container">
        <div className="flex justify-between items-center md:mb-4">
          <h2 className="text-dark heading-s-34">New Arrivals</h2>
          <button className="flex items-center space-x-2 text-primary paragraph-r-14">
            View All
            <Image
              alt="chevron-right icon"
              src="/icons/chevron-right.svg"
              height={24}
              width={24}
            />
          </button>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {products.map((prod: Product, i: number) => (
            <div key={i} className="col-span-12 md:col-span-6 lg:col-span-3">
              <Link href={`/product/${prod.id}`}>
                <div className="w-full aspect-square relative border rounded shadow mb-4">
                  <Image
                    alt="product img"
                    src={prod.thumbnail}
                    fill
                    className="object-center object-contain hover:scale-95 duration-200 z-[-1]"
                  />
                </div>
              </Link>
              <div className="flex justify-between text-typeHigh">
                <Link
                  href={`/product/${prod.id}`}
                  className="paragraph-m-16 hover:text-highlight"
                >
                  {prod.title}
                </Link>
                <button className="">
                  <Image
                    alt="fav icon"
                    src="/icons/heart.svg"
                    height={24}
                    width={24}
                    className="hover:scale-90 duration-500"
                  />
                </button>
              </div>
              <p className="text-typeLow paragraph-r-14 mb-1">{prod.brand}</p>
              <p className="paragraph-m-16">${prod.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
