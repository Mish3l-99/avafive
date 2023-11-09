"use client";

import Image from "next/image";
import React, { useState } from "react";

interface Props {
  images: string[];
}

const MyCarousel = ({ images }: Props) => {
  const [activeIndex, setActiveIndex] = useState(images.length - 1);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  const nextImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const prevImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  return (
    <div className="w-full">
      <div className="relative w-full aspect-square ">
        <Image
          src={images[activeIndex]}
          alt="Image"
          className="absolute top-0 left-0 w-full h-full transition-opacity duration-500 rounded-2xl"
          fill
        />
      </div>
      <div className="flex space-x-4 items-center justify-center mt-4 relative">
        <Image
          alt="chevron-left icon"
          src="/icons/chevron-left.svg"
          height={24}
          width={24}
          onClick={() => prevImage()}
          className="absolute left-1 transform -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer"
        />
        <div className="flex-1 flex items-center justify-center space-x-1 bg-blue-40">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-[40px] lg:w-[75px] aspect-square "
            >
              <Image
                src={image}
                alt="Image"
                className={`m-2 cursor-pointer transition-opacity rounded-lg border duration-500 ${
                  index === activeIndex ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => handleImageClick(index)}
                fill
              />
            </div>
          ))}
        </div>
        <Image
          alt="chevron-right icon"
          src="/icons/chevron-right.svg"
          height={24}
          width={24}
          onClick={() => nextImage()}
          className="absolute right-1 transform translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MyCarousel;
