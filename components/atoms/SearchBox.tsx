import Image from "next/image";
import React from "react";

const SearchBox = () => {
  return (
    <div className="flex w-full md:w-[362px] items-center space-x-2 py-3 px-2 bg-grey rounded">
      <Image alt="search icon" src="/icons/search.svg" height={24} width={24} />
      <input
        className="w-full outline-none bg-transparent placeholder:text-typeLow"
        placeholder="Search for products or brands....."
        type="text"
      />
    </div>
  );
};

export default SearchBox;
