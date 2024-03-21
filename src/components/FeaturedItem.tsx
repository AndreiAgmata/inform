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
        className="image-wrapper w-full h-auto aspect-square md:aspect-[2/1.5] lg:aspect-[2/1.1] xl:aspect-[1/1.3125] relative"
        style={{ backgroundColor: "#EAEAEA" }}
      >
        <Image
          src={image}
          alt="swivel chair"
          fill
          sizes="100vw"
          className="object-cover md:object-contain xl:object-cover"
        />
      </div>
      <p className="mt-4 font-medium text-xl">{type}</p>
      <p className="font-medium text-3xl">{name}</p>
    </div>
  );
}

export default FeaturedItem;

// #eaeaea
