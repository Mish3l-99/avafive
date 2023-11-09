"use client";

import Image from "next/image";
import React, { useState } from "react";
import CouponCode from "./CouponCode";

const CouponDrop = () => {
  const [dropped, setdropped] = useState<boolean>(false);

  return (
    <>
      <div className="flex items-center pb-2 border-b justify-between">
        <h5 className="paragraph-m-16 text-dark">Apply Coupon Code</h5>
        <button onClick={() => setdropped(!dropped)}>
          <Image
            alt="chevron-bottom icon"
            src="/icons/chevron-bottom.svg"
            height={24}
            width={24}
          />
        </button>
      </div>
      <div className="mt-5 md:mt-8 max-w-[328px]">
        {dropped && <CouponCode />}
      </div>
    </>
  );
};

export default CouponDrop;
