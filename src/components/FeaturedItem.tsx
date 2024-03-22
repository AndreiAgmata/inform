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
        className="image-wrapper w-full h-auto aspect-square sm:aspect-[1.5/1.25] md:aspect-[2/1.35] lg:aspect-[1/2] xl:aspect-[1/1.5] 2xl:aspect-[1/1.1] relative"
        style={{ backgroundColor: "#EAEAEA" }}
      >
        <Image
          src={image}
          alt="swivel chair"
          fill
          sizes="100%"
          className="object-cover sm:object-contain md:object-contain xl:object-contain 2xl:object-cover"
        />
      </div>
      <p className="mt-4 font-medium text-xl">{type}</p>
      <p className="font-medium text-3xl">{name}</p>
    </div>
  );
}

export default FeaturedItem;

// #eaeaea
