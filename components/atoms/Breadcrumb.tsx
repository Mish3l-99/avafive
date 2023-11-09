import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  stages: string[];
}

const Breadcrumb = ({ stages }: Props) => {
  if (stages.length <= 0) return;

  return (
    <div className="my-4">
      <div className="container">
        <div className="flex items-center space-x-3 caption-m-12px md:paragraph-m-16 text-typeLow">
          <div>
            <Link href="/" className="hover:text-black">
              Home
            </Link>
          </div>
          {stages.map((item: string, i: number) => (
            <div key={i} className="flex items-center space-x-3">
              <Image
                alt="chevron-right icon"
                src="/icons/chevron-right.svg"
                height={24}
                width={24}
              />
              <Link href="#" className="hover:text-black">
                {item}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
