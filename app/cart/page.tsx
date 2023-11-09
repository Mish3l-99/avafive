import Breadcrumb from "@/components/atoms/Breadcrumb";
import CouponDrop from "@/components/atoms/CouponDrop";
import CartProducts from "@/components/molecules/CartProducts";
import React from "react";

const CartPage = () => {
  // console.log(products);
  return (
    <div>
      <Breadcrumb stages={["My Cart"]} />
      <div className="container">
        <h1 className="heading-s-34 text-primary my-4">My Cart</h1>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-7">
            <div className=""></div>
            <div className="mt-4">
              <CartProducts />
              <CouponDrop />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <h3 className="text-dark heading-s-b-20 pb-2 border-b">
              Order Summary
            </h3>

            <div className="mt-4 flex flex-col space-y-1">
              <div className="flex justify-between">
                <span className="text-typeLow paragraph-m-16">Sub Total</span>
                <span className="text-typeHigh paragraph-m-16">$1112</span>
              </div>
              <div className="flex justify-between">
                <span className="text-typeLow paragraph-m-16">Discount</span>
                <span className="text-typeHigh paragraph-m-16">-$38</span>
              </div>
              <div className="flex justify-between">
                <span className="text-typeLow paragraph-m-16">
                  Delivery Fee
                </span>
                <span className="text-typeHigh paragraph-m-16">$17</span>
              </div>
              <div className="flex justify-between ">
                <span className="text-typeHigh paragraph-m-16 font-bold">
                  Grand Total
                </span>
                <span className="text-typeHigh paragraph-m-16 font-bold">
                  $1112
                </span>
              </div>
            </div>

            <div className="mt-6 md:mt-10 flex items-center space-x-4">
              <button className="px-4 md:w-6/12 p-2 flex items-center justify-center space-x-4 rounded-lg border-[2px] border-primary bg-primary text text-bright paragraph-m-16">
                Place Order
              </button>
              <button className="px-4 md:w-6/12 p-2 flex items-center justify-center space-x-4 rounded-lg border-[2px] border-primary text-primary paragraph-m-16">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
