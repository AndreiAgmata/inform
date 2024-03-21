"use client";
import React, { useEffect, useState } from "react";
import SingleItem from "./SingleItem";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { Observer } from "gsap/Observer";

const items = [
  {
    image: "chair",
    type: "Lounge Chair",
    name: "Fåtöl",
    index: "index-1",
  },
  {
    image: "table",
    type: "Center Table",
    name: "Mittbord",
    index: "index-2",
  },
  {
    image: "lamp",
    type: "Floor Lamp",
    name: "Lampara",
    index: "index-3",
  },
  {
    image: "endTable",
    type: "End Table",
    name: "Andbord",
    index: "index-4",
  },
];

function SingleItems() {
  let currentIdx = 0;
  const [currentItem, setCurrentItem] = useState(items[currentIdx]);

  const scrollDown = (idx: number) => {
    const tl = gsap.timeline();

    tl.to(
      ".single-item .product-info .p-text",
      {
        yPercent: 110,
        duration: 1,
        ease: "expo.out",
      },
      "start"
    )
      .to(
        ".single-item .image-cover",
        {
          scaleY: 1,
          transformOrigin: "top",
          duration: 1,
          ease: "expo.out",
        },
        "start"
      )
      .call(() => {
        setCurrentItem(items[idx]);
        currentIdx = idx;
        tl.to(".single-item .image-cover", {
          scaleY: 0,
          transformOrigin: "bottom",
          duration: 2,
          ease: "expo.inOut",
        }).fromTo(
          ".single-item .product-info .p-text",
          { yPercent: -110 },
          {
            yPercent: 0,
            duration: 1,
            ease: "expo.inOut",
          },
          "<0.5"
        );
      });
  };

  const scrollUp = (idx: number) => {
    const tl = gsap.timeline();

    tl.to(
      ".single-item .product-info .p-text",
      {
        yPercent: -110,
        duration: 1,
        ease: "expo.out",
      },
      "start"
    )
      .to(
        ".single-item .image-cover",
        {
          scaleY: 1,
          transformOrigin: "bottom",
          duration: 1,
          ease: "expo.out",
        },
        "start"
      )
      .call(() => {
        setCurrentItem(items[idx]);
        currentIdx = idx;
        tl.to(".single-item .image-cover", {
          scaleY: 0,
          transformOrigin: "top",
          duration: 2,
          ease: "expo.inOut",
        }).fromTo(
          ".single-item .product-info .p-text",
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 1,
            ease: "expo.inOut",
          },
          "<0.5"
        );
      });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(Observer);

    Observer.create({
      target: ".single-items",
      type: "wheel, touch",
      preventDefault: true,
      onUp: () => {
        if (currentIdx !== 0) {
          console.log("up");
          scrollUp(currentIdx - 1);
        } else {
          gsap.to(window, {
            duration: 1,
            ease: "power3.inOut",
            scrollTo: ".vision",
          });
        }
      },
      onDown: () => {
        console.log("down");
        if (currentIdx <= 2) {
          scrollDown(currentIdx + 1);
        }
      },
    });
  }, []);

  return (
    <div className="single-items bottom-0 h-screen w-full overflow-hidden grid grid-cols-1">
      <SingleItem
        image={currentItem.image}
        type={currentItem.type}
        name={currentItem.name}
        index={currentItem.index}
      />
    </div>
  );
}

export default SingleItems;

{
  /* <SingleItem
image="table"
type="Center Table"
name="Mittbord"
index="index-2"
/>
<SingleItem
image="lamp"
type="Floor Lamp"
name="Golvlampa"
index="index-3"
/>
<SingleItem
image="endTable"
type="End Table"
name="Ändbord"
index="index-4"
/> */
}
