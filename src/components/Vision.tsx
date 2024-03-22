"use client";
import React, { useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import { Observer } from "gsap/Observer";
import FeaturedItem from "./FeaturedItem";
import SplitType from "split-type";

function Vision() {
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(Observer);

    Observer.create({
      target: ".vision",
      type: "wheel, touch",
      preventDefault: true,
      onUp: () =>
        gsap.to(window, {
          duration: 1,
          ease: "power3.inOut",
          scrollTo: ".hero",
        }),
      onDown: () =>
        gsap.to(window, {
          duration: 1,
          ease: "power3.inOut",
          scrollTo: ".single-items",
        }),
    });
  }, []);

  useEffect(() => {
    const text = new SplitType(".vision-text");
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vision",
          start: "top center+=200",
          // markers: true,
          // toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".word",
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1,
          ease: "expo.out",
          stagger: 0.15,
          delay: 0.5,
        }
      );
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {}, []);
  return (
    <section className="vision container mx-auto px-6 text-zinc-950 w-full h-screen">
      <div className="content h-full bg-neutral-50 p-5 flex flex-col items-start justify-end">
        <div className="featured h-full w-full text-zinc-950 mt-6">
          <div className="inner h-full w-full bg-neutral-50 flex flex-col items-start justify-start">
            <div className="featured-items w-full flex-grow grid grid-cols-2 xl:grid-cols-4 gap-4 mt-5">
              <FeaturedItem
                image="/images/gray-chair/gray-chair1.jpg"
                type="Lounge Chair"
                name="Silya"
              />
              <FeaturedItem
                image="/images/gray-table/gray-table1.jpg"
                type="Center Table"
                name="LaMesa"
              />
              <FeaturedItem
                image="/images/gray-lamp/gray-lamp1.jpg"
                type="Floor Lamp"
                name="Källa"
              />
              <FeaturedItem
                image="/images/gray-endTable/gray-endTable1.jpg"
                type="End Table"
                name="Bilog"
              />
            </div>
          </div>
        </div>
        <p className="text-lg tracking-wider font-medium">OUR VISION</p>
        <p className="vision-text font-medium text-2xl sm:text-4xl lg:text-6xl xl:text-7xl sm:pe-24">
          Elegant, timeless pieces for refined residences, enhancing simple
          living areas.
        </p>
      </div>
    </section>
  );
}

export default Vision;
