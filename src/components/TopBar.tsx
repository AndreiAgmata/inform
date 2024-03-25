"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

interface topBarProps {
  currentPage: number;
}

function TopBar({ currentPage }: topBarProps) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".top-bar",
        { yPercent: -110 },
        { yPercent: 0, duration: 1, ease: "expo.out", delay: 1.25 }
      );
    });

    return () => ctx.revert();
  }, []);
  return (
    <section className="top w-full fixed top-0 z-50 bg-zinc-950">
      <div className="top-bar container mx-auto flex items-center justify-between px-6 pt-3 pb-2">
        <p className="font-light">IN&apos;FORM STUDIO</p>
        <p className="font-light hidden md:block">
          CURATED COLLECTION OF FURNITURE FW 23&apos;
        </p>
        <p className="font-light hidden md:block">INTERIOR SPACES</p>
        <p className="font-light ">PAGE {currentPage} OF 10</p>
      </div>
    </section>
  );
}

export default TopBar;
