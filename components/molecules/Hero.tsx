import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="py-4 md:py-8 ">
      <div className="container">
        <div className="bg-[url('/images/hero.png')] rounded-2xl flex justify-end py-4 md:py-8">
          <div className="p-4 md:p-6 text-primary flex flex-col bg-[#DEDEDE]/70 rounded-l-3xl max-w-[720px]">
            <h2 className="heading-b-40">Carry your Funk</h2>
            <p className="mt-4 heading-s-20 max-w-[430px]">
              Trendy handbags collection for your party animal
            </p>
            <button className="mt-8 bg-primary hover:shadow hover:scale-95 duration-200 flex space-x-2 px-6 py-2 w-fit rounded text-bright">
              <Image
                alt="arrow icon"
                src="/icons/white-arrow.svg"
                height={24}
                width={24}
              />
              <span>See more</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
