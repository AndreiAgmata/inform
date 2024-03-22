"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import gsap from "gsap";

interface SingleItemProps {
  image: string;
  type: string;
  name: string;
  index: number;
}

function SingleItem({ image, type, name, index }: SingleItemProps) {
  return (
    <section
      className={`single-item container mx-auto px-6 pb-6 h-screen text-zinc-950 w-full overflow-hidden ${index}`}
    >
      <div className="inner w-full h-full bg-neutral-50 pt-16 px-6 pb-6 flex flex-col items-center justify-center">
        <div className="content grid grid-cols-2 flex-grow w-full gap-5">
          <div className="image-wrapper w-full h-auto relative overflow-hidden">
            <div className="image-cover main-image-cover w-full h-full absolute top-0 left-0 z-10 bg-neutral-50 scale-y-0"></div>
            <Image
              src={`/images/${image}/${image}1.jpg`}
              alt="selected product image"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <div className="product-info flex flex-row items-start justify-between">
            <div className="details flex flex-col items-start justify-between h-full">
              <div className="mt-auto product-text">
                <div className="clip-path">
                  <p className="p-text font-medium text-2xl text-zinc-600 overflow-hidden">
                    {type}
                  </p>
                </div>
                <div className="clip-path">
                  <p className="p-text font-medium text-8xl overflow-hidden">
                    {name}
                  </p>
                </div>
              </div>
            </div>
            <div className="images-selection grid grid-rows-3 gap-4">
              <div className="image-wrapper w-24 h-auto aspect-[1/1.3125] relative">
                <div
                  className="image-cover h-full absolute top-0 left-0 z-10 bg-neutral-50 scale-y-0"
                  style={{ width: "calc(100% + 2px)" }}
                ></div>
                <Image
                  src={`/images/${image}/${image}1.jpg`}
                  alt="swivel chair"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="image-wrapper w-24 h-auto aspect-[1/1.3125] relative overflow-hidden">
                <div
                  className="image-cover h-full absolute top-0 left-0 z-10 bg-neutral-50 scale-y-0"
                  style={{ width: "calc(100% + 2px)" }}
                ></div>
                <Image
                  src={`/images/${image}/${image}2.jpg`}
                  alt="swivel chair"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="image-wrapper w-24 h-auto aspect-[1/1.3125] relative overflow-hidden">
                <div
                  className="image-cover h-full absolute top-0 left-0 z-10 bg-neutral-50 scale-y-0"
                  style={{ width: "calc(100% + 2px)" }}
                ></div>
                <Image
                  src={`/images/${image}/${image}3.jpg`}
                  alt="swivel chair"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleItem;
