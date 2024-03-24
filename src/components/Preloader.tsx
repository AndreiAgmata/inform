"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import Observer from "gsap/Observer";

function Preloader() {
  useEffect(() => {
    gsap.registerPlugin(Observer);

    Observer.create({
      target: ".pre-loader",
      type: "wheel, touch",
      preventDefault: true,
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(".preloader-text", {
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        delay: 0.5,
      }).to(".pre-loader", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1,
        ease: "expo.out",
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <section className="pre-loader w-full h-full bg-neutral-50 fixed top-0 left-0 z-[100] flex items-center justify-center">
      <h1 className="text-6xl preloader-text text-zinc-950 font-medium">
        WELCOME
      </h1>
    </section>
  );
}

export default Preloader;
