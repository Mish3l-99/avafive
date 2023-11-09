"use client";

import { useState } from "react";

interface Props {
  des: string;
}

type TabState = "des" | "related" | "reviews";

const ProductBottom = ({ des }: Props) => {
  const [tab, setTab] = useState<TabState>("des");

  return (
    <div className="mt-6 md:mt-12">
      <div className="bg-grey rounded-lg py-2 px-4 flex space-x-4 md:space-x-12">
        <button
          onClick={() => setTab("des")}
          className={`py-1 px-3 rounded paragraph-m-16 duration-300 ease-in ${
            tab === "des" ? "bg-primary text-bright" : "text-typeLow"
          }`}
        >
          Product Description
        </button>
        <button
          onClick={() => setTab("related")}
          className={`py-1 px-3 rounded paragraph-m-16 duration-300 ease-in ${
            tab === "related" ? "bg-primary text-bright" : "text-typeLow"
          }`}
        >
          Related Products
        </button>
        <button
          onClick={() => setTab("reviews")}
          className={`py-1 px-3 rounded paragraph-m-16 duration-300 ease-in ${
            tab === "reviews" ? "bg-primary text-bright" : "text-typeLow"
          }`}
        >
          Ratings and Reviews
        </button>
      </div>

      <>
        {tab === "des" && (
          <div className="mt-4">
            <p className="paragraph-m-16 text-typeLow">{des}</p>
          </div>
        )}
        {tab === "related" && (
          <div className="mt-4">
            <p className="paragraph-m-16 text-typeLow">Related</p>
          </div>
        )}
        {tab === "reviews" && (
          <div className="mt-4">
            <p className="paragraph-m-16 text-typeLow">Reviews</p>
          </div>
        )}
      </>
    </div>
  );
};

export default ProductBottom;
