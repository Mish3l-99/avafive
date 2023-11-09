import Image from "next/image";
import React from "react";

interface Props {
  rate: number;
}

const Stars = ({ rate }: Props) => {
  return (
    <div className="text-yellow-600 flex gap-x-[1px] text-sm mb-1">
      {[...Array(5)].map((star, it) =>
        it < rate ? (
          <Image
            key={it}
            alt="full star icon"
            src="/icons/star.svg"
            height={24}
            width={24}
          />
        ) : (
          <Image
            key={it}
            alt="empty star icon"
            src="/icons/empty-star.svg"
            height={24}
            width={24}
          />
        )
      )}
    </div>
  );
};

export default Stars;
