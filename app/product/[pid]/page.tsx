import Breadcrumb from "@/components/atoms/Breadcrumb";
import CouponCode from "@/components/atoms/CouponCode";
import Stars from "@/components/atoms/Stars";
import MyCarousel from "@/components/molecules/MyCarousel";
import ProductActions from "@/components/molecules/ProductActions";
import ProductBottom from "@/components/molecules/ProductBottom";
import { Product } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  params: {
    pid: string;
  };
}

const fetchProduct = async (pid: string) => {
  // taking one product full data
  const res = await fetch(`https://dummyjson.com/products/${pid}`);
  const product: Product = await res.json();

  return product;
};

const ProductPage = async ({ params: { pid } }: Props) => {
  const product = await fetchProduct(pid);
  const {
    title,
    category,
    images,
    brand,
    price,
    rating,
    description,
    discountPercentage,
  } = product;

  const prevPrice = ((price * 100) / (100 - discountPercentage)).toFixed(2);

  // console.log(product);

  return (
    <>
      <Breadcrumb stages={[category, title]} />
      <div className="container">
        <div className="mt-4 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            <MyCarousel images={images} />
          </div>
          <div className="col-span-12 lg:col-span-6 flex flex-col space-y-6">
            <div className="">
              <h1 className="text-dark heading-s-34">{title}</h1>
              <h4 className="text-typeLow heading-s-20">{brand}</h4>
            </div>
            <Stars rate={rating} />

            <div className="flex flex-col md:flex-row md:items-center space-x-2 lg:space-x-8">
              <p className="text-typeHigh heading-b-40">${price}</p>
              <div className="flex items-center space-x-2 lg:space-x-8">
                <p className="text-lightText heading-s-34 line-through">
                  ${prevPrice}
                </p>
                <p className="text-[#FF404B] heading-s-20">
                  {discountPercentage}%OFF
                </p>
              </div>
            </div>
            <hr className="w-full h-[1px] bg-gray-300" />

            <div className="mb-4 flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-start md:space-x-4">
              <div className="shrink-0">
                <h6 className="text-typeHigh heading-s-b-20">
                  Delivery Details
                </h6>
                <p className="text-typeLow paragraph-r-16 max-w-[200px]">
                  Check estimated delivery date/pickup option.
                </p>
              </div>
              <CouponCode />
            </div>

            <div className="flex items-center space-x-2">
              <h6 className="text-dark heading-s-b-20">Quantity:</h6>
              <div className="border border-primary rounded w-[73px] flex justify-between">
                <Image
                  alt="minus icon"
                  src="/icons/minus.svg"
                  height={24}
                  width={24}
                />
                <span>1</span>
                <Image
                  alt="plus icon"
                  src="/icons/plus.svg"
                  height={24}
                  width={24}
                />
              </div>
            </div>

            <div className="">
              <div className="p-4 rounded flex space-x-2 border border-primary max-w-[391px]">
                <div className="">
                  <p className="paragraph-m-16 text-typeHigh">
                    Get upto 30% Off on order value above $100
                  </p>
                  <Link className="text-primary heading-m-14" href="#">
                    Terms & Conditions
                  </Link>
                </div>
                <div className="flex flex-col items-center p-3 bg-grey rounded">
                  <span className="text-typeLow heading-m-14">Use Code</span>
                  <span className="text-typeHigh paragraph-m-16">ORDER100</span>
                </div>
              </div>
            </div>

            <ProductActions product={product} />
          </div>
        </div>

        {/* review and description */}

        <ProductBottom des={description} />
      </div>
    </>
  );
};

export default ProductPage;
