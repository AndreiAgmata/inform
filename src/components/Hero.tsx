"use client";
import React, { useEffect, useState } from "react";
import FeaturedItem from "./FeaturedItem";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { Observer } from "gsap/Observer";

function Hero() {
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(Observer);

    Observer.create({
      target: ".hero",
      type: "wheel, touch",
      preventDefault: true,
      onUp: () => {
        // console.log("up");
        gsap.to(window, {
          duration: 1,
          ease: "power3.inOut",
          scrollTo: ".hero",
        });
      },
      onDown: () => {
        console.log("down");
        const visionElement = document.querySelector(".vision");
        if (visionElement) {
          const visionBottom = visionElement.getBoundingClientRect().bottom;
          const windowHeight = window.innerHeight;
          const scrollPosition = visionBottom - windowHeight;
          gsap.to(window, {
            duration: 1,
            ease: "power3.inOut",
            scrollTo: { y: scrollPosition },
          });
        }
      },
    });
  }, []);

  return (
    <section className="hero container mx-auto flex flex-col items-center justify-start h-full pt-3 sm:pt-6 md:pt-9 lg:pt-8 xl:pt-5 2xl:pt-3">
      <div className="title px-6 mb-0 sm:mb-2">
        <h1
          className="font-semibold tracking-tighter 
        leading-[9.75rem] lg:leading-[13rem] xl:leading-[17rem] 2xl:leading-[21rem] 
        sm:text-[9.55rem] md:text-[11.65rem] lg:text-[15.83rem] xl:text-[20rem] 2xl:text-[24.1rem]
        ms-[-10px] lg:ms-[-14px] xl:ms-[-16px]"
        >
          IN&apos;FORM
        </h1>
      </div>

      <div className="featured h-full w-full px-6 text-zinc-950">
        <div className="inner h-full w-full bg-neutral-50 p-5 flex flex-col items-start justify-start">
          <p className="text-sm tracking-wider font-medium">Mörk Kollektion</p>
          <p className=" text-4xl font-medium">Featured</p>
          <div className="featured-items w-full flex-grow grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            <FeaturedItem
              image="/images/chair/chair1.jpg"
              type="Lounge Chair"
              name="Fåtöl"
            />
            <FeaturedItem
              image="/images/table/table1.jpg"
              type="Center Table"
              name="Mittbord"
            />
            <FeaturedItem
              image="/images/lamp/lamp1.jpg"
              type="Floor Lamp"
              name="Lampara"
            />
            <FeaturedItem
              image="/images/endTable/endTable1.jpg"
              type="End Table"
              name="Ändbord"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
