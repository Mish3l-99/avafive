import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-gray-200 p-4 ">
      <div className="container">
        <p className="paragraph-r-14 text-center">
          We are currently experiencing local customs clearance delays. For the
          latest updates, please check your order status{" "}
          <Link
            href="#"
            className="underline hover:text-highlight mb-1 text-primary"
          >
            here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Banner;
