"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import FeaturedItem from "./FeaturedItem";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { Observer } from "gsap/Observer";

interface heroProps {
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

function Hero({ setCurrentPage }: heroProps) {
  const [action, setAction] = useState("showFeatured");

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
        if (action !== "showFeatured") {
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
            setCurrentPage(2);
          }
        } else {
          console.log("here");
          const tl = gsap.timeline();
          tl.to(".featured-hero .inner", {
            yPercent: -100,
            duration: 2,
            ease: "expo.out",
          })
            .to(
              ".featured-hero .inner > *",
              {
                yPercent: -100,
                duration: 2,
                ease: "expo.out",
              },
              "<0.25"
            )
            .call(() => {
              console.log("show finsihed");
              setAction("showNextPage");
            });
        }
      },
    });
  }, [action]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".title-letter",
        { yPercent: 110 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.5,
          ease: "expo.out",
          stagger: 0.15,
          delay: 0.75,
        }
      )
        .fromTo(
          ".title-apos",
          { yPercent: -110 },
          { duration: 1.5, ease: "expo.out" },
          "<0.15"
        )
        .fromTo(
          ".action-desc",
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: "expo.in" },
          "<0.5"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero container mx-auto flex flex-col items-center justify-start min-h-screen  pt-9 sm:pt-10 lg:t-9 xl:pt-7 2xl:pt-5 ">
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
      <div className="action-desc absolute bottom-12">
        <p className="font-medium underline text-xl">SCROLL DOWN</p>
      </div>
      <div className="featured-hero flex-grow w-full px-6 text-zinc-950 flex">
        <div className="inner flex-grow w-full bg-neutral-50 p-5 flex flex-col items-start justify-start translate-y-full">
          <div className="wrapper w-full translate-y-full">
            <p className="text-sm tracking-wider font-medium ">
              Mörk Kollektion
            </p>
            <p className=" text-4xl font-medium">Featured</p>
            <div className="featured-items w-full flex-grow grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-5">
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
