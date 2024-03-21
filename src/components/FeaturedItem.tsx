import Image from "next/image";
import React from "react";

interface FeaturedItemProps {
  image: string;
  type: string;
  name: string;
}

function FeaturedItem({ image, type, name }: FeaturedItemProps) {
  return (
    <div className="featured-item flex flex-col items-start">
      <div
        className="image-container w-full py-2"
        style={{ backgroundColor: "#EAEAEA" }}
      >
        <div className="image-wrapper w-full h-auto aspect-[1/1.3125] relative">
          <Image
            src={image}
            alt="swivel chair"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
      <p className="mt-4 font-medium text-xl">{type}</p>
      <p className="font-medium text-3xl">{name}</p>
    </div>
  );
}

export default FeaturedItem;

// #eaeaea
