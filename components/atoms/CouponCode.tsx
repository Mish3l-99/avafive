import React from "react";

const CouponCode = () => {
  return (
    <div className="flex-1 p-3 rounded bg-grey flex items-center ">
      <input
        type="text"
        className="outline-none w-full paragraph-m-16 placeholder:text-typeLow bg-transparent"
        placeholder="Apply Valid Pincode"
      />
      <button className="text-primary heading-m-14">CHECK</button>
    </div>
  );
};

export default CouponCode;
