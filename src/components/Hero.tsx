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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".title-letter",
        { yPercent: 110 },
        { yPercent: 0, duration: 1.5, ease: "expo.out", stagger: 0.15 }
      )
        .fromTo(
          ".title-apos",
          { yPercent: -110 },
          { yPercent: 0, duration: 1.5, ease: "expo.out" },
          "<0.15"
        )
        .fromTo(
          ".featured-hero .inner",
          { yPercent: 100 },
          { yPercent: 0, duration: 2, ease: "expo.out" },
          "<0.5"
        )
        .fromTo(
          ".featured-hero .inner > *",
          { yPercent: 100 },
          { yPercent: 0, duration: 2, ease: "expo.out" },
          "<0.15"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero container mx-auto flex flex-col items-center justify-start min-h-screen pt-9 sm:pt-10 lg:t-9 xl:pt-7 2xl:pt-5 ">
      <div
        className="title w-full px-6 mb-0 sm:mb-2 
      font-semibold italic overflow-hidden flex flex-row items-between justify-between
      sm:text-[9.25rem] md:text-[11.5rem] lg:text-[15rem] xl:text-[20rem] 2xl:text-[24rem] 
      sm:leading-[7.5rem] md:leading-[9rem] lg:leading-[12rem] xl:leading-[16rem] 2xl:leading-[20rem]"
      >
        <p className="title-letter">I</p>
        <p className="title-letter">N</p>
        <p className="title-apos">&apos;</p>
        <p className="title-letter">F</p>
        <p className="title-letter">O</p>
        <p className="title-letter">R</p>
        <p className="title-letter">M</p>
      </div>
      <div className="featured-hero flex-grow w-full px-6 text-zinc-950 flex">
        <div className="inner flex-grow w-full bg-neutral-50 p-5 flex flex-col items-start justify-start">
          <div className="wrapper w-full">
            <p className="text-sm tracking-wider font-medium">
              Mörk Kollektion
            </p>
            <p className=" text-4xl font-medium">Featured</p>
            <div className="featured-items w-full flex-grow grid grid-cols-2 xl:grid-cols-4 gap-4 mt-5">
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
      </div>
    </section>
  );
}

export default Hero;
