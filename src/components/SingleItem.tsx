"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import { Observer } from "gsap/Observer";

const items = [
  {
    image: "chair",
    type: "Lounge Chair",
    name: "Fåtöl",
    index: 0,
  },
  {
    image: "table",
    type: "Center Table",
    name: "Mittbord",
    index: 1,
  },
  {
    image: "lamp",
    type: "Floor Lamp",
    name: "Lampara",
    index: 2,
  },
  {
    image: "endTable",
    type: "End Table",
    name: "Andbord",
    index: 3,
  },
  {
    image: "gray-chair",
    type: "Lounge Chair",
    name: "Silya",
    index: 4,
  },
  {
    image: "gray-table",
    type: "Center Table",
    name: "LaMesa",
    index: 5,
  },
  {
    image: "gray-lamp",
    type: "Floor Lamp",
    name: "Källa",
    index: 6,
  },
  {
    image: "gray-endTable",
    type: "End Table",
    name: "Bilog",
    index: 7,
  },
];

function SingleItem() {
  const [currIndex, setCurrIndex] = useState(0);
  const [currItem, setCurrItem] = useState(items[currIndex]);
  const [selectedImage, setSelectedImage] = useState(`${currItem.image}1`);
  const [switchingImage, setSwitchingImage] = useState(false);

  const changeSelectedImage = (imageSrc: string) => {
    setSwitchingImage(true);
    if (switchingImage) {
      return;
    }

    const tl = gsap.timeline();
    tl.to(
      `.${selectedImage}`,
      {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1,
        ease: "expo.out",
      },
      "start"
    )
      .to(
        ".main-image-cover",
        {
          scaleY: 1,
          transformOrigin: "top",
          duration: 1,
          ease: "expo.out",
        },
        "start"
      )
      .to(
        `.${imageSrc}`,
        {
          scaleX: 1,
          transformOrigin: "left",
          duration: 1,
          ease: "expo.out",
        },
        "start"
      )
      .call(() => {
        setSelectedImage(imageSrc);
        tl.to(".main-image-cover", {
          scaleY: 0,
          transformOrigin: "top",
          duration: 1,
          ease: "expo.inOut",
        });
        setSwitchingImage(false);
      });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(Observer);

    const changeItem = (scrollDirection: string) => {
      const transformOrigin = scrollDirection === "down" ? "top" : "bottom";
      const tl = gsap.timeline();
      const indicatorDelay = scrollDirection === "down" ? 0 : 0.35;
      tl.to(
        `.${selectedImage}`,
        {
          scaleX: 0,
          transformOrigin: "left",
          duration: 1,
          ease: "expo.out",
        },
        "start"
      )
        .to(
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
            transformOrigin: transformOrigin,
            duration: 1,
            ease: "expo.out",
          },
          "start"
        )
        .call(() => {
          if (scrollDirection === "down") {
            setCurrItem(items[currIndex + 1]);
            setSelectedImage(`${items[currIndex + 1].image}1`);
            setCurrIndex(currIndex + 1);
          } else {
            setCurrItem(items[currIndex - 1]);
            setSelectedImage(`${items[currIndex - 1].image}1`);
            setCurrIndex(currIndex - 1);
          }
          tl.to(".single-item .image-cover", {
            scaleY: 0,
            transformOrigin: transformOrigin,
            duration: 1,
            ease: "expo.in",
          })
            .fromTo(
              ".single-item .product-info .p-text",
              { yPercent: 110 },
              {
                yPercent: 0,
                duration: 1,
                ease: "expo.inOut",
              },
              "<0.5"
            )
            .to(
              `.${items[currIndex].image}1`,
              {
                scaleX: 1,
                transformOrigin: "left",
                duration: 1,
                ease: "expo.out",
                delay: indicatorDelay,
              },
              "<0.25"
            );
        });
    };

    const ctx = gsap.context(() => {
      Observer.create({
        target: ".single-item",
        type: "wheel, touch",
        preventDefault: true,
        onUp: () => {
          if (currIndex !== 0) {
            changeItem("up");
          } else {
            gsap.to(window, {
              duration: 1,
              ease: "power3.inOut",
              scrollTo: ".vision",
            });
          }
        },
        onDown: () => {
          if (currIndex !== 7) {
            changeItem("down");
          }
        },
      });
    });

    return () => ctx.revert();
  }, [currIndex, selectedImage]);

  //startup animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".single-item",
          start: "top center+=200",
          // markers: true,
          // toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".single-item .image-cover",
        { scaleY: 1 },
        {
          scaleY: 0,
          transformOrigin: "top",
          duration: 1,
          ease: "expo.in",
          delay: 0.5,
        }
      )
        .fromTo(
          ".single-item .product-info .p-text",
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 1,
            ease: "expo.inOut",
          },
          "<0.5"
        )
        .fromTo(
          ".select-indicator-1",
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left",
            duration: 1,
            ease: "expo.out",
          },
          "<0.5"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="single-item container mx-auto px-6 pb-6 h-screen text-zinc-950 w-full overflow-hidden relative z-40">
      <div className="inner w-full h-full bg-neutral-50 pt-16 px-6 pb-6 flex flex-col items-center justify-center">
        <div className="content flex flex-col lg:grid lg:grid-cols-2 flex-grow w-full gap-5">
          <div
            className="image-wrapper w-full h-auto aspect-square md:aspect-[6/5] lg:aspect-auto relative overflow-hidden"
            style={{ backgroundColor: "#EAEAEA" }}
          >
            <div className="image-cover main-image-cover w-full h-full absolute top-0 left-0 z-10 bg-neutral-50 scale-y-0"></div>
            <Image
              src={`/images/${currItem.image}/${selectedImage}.jpg`}
              alt="selected product image"
              fill
              className="object-contain"
              sizes="100%"
            />
          </div>
          <div className="product-info flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between">
            <div className="details flex flex-col items-start justify-between h-full mt-4 lg:mt-0">
              <div className="mt-auto product-text">
                <div className="clip-path">
                  <p className="p-text font-medium text-2xl text-zinc-600 overflow-hidden">
                    {currItem.type}
                  </p>
                </div>
                <div className="clip-path">
                  <p className="p-text font-medium text-7xl lg:text-7xl xl:text-8xl pb-5 overflow-hidden">
                    {currItem.name}
                  </p>
                </div>
              </div>
            </div>
            <div className="images-selection flex flex-row lg:grid lg:grid-rows-3 gap-4">
              <div
                className="image-wrapper w-24 h-auto aspect-[1/1.3125] relative cursor-pointer"
                onClick={() => changeSelectedImage(`${currItem.image}1`)}
              >
                <div
                  className="image-cover h-full absolute top-0 left-0 z-10 bg-neutral-50 scale-y-0"
                  style={{ width: "calc(100% + 2px)" }}
                ></div>
                <Image
                  src={`/images/${currItem.image}/${currItem.image}1.jpg`}
                  alt="swivel chair"
                  fill
                  className="object-cover"
                  sizes="100%"
                />
                <div
                  className={`select-indicator-1 ${currItem.image}1 absolute bottom-0 left-0 w-full h-[3px] bg-gray-700 scale-x-0`}
                ></div>
              </div>
              <div
                className="image-wrapper w-24 h-auto aspect-[1/1.3125] relative overflow-hidden cursor-pointer"
                onClick={() => changeSelectedImage(`${currItem.image}2`)}
              >
                <div
                  className="image-cover h-full absolute top-0 left-0 z-10 bg-neutral-50 scale-y-0"
                  style={{ width: "calc(100% + 2px)" }}
                ></div>
                <Image
                  src={`/images/${currItem.image}/${currItem.image}2.jpg`}
                  alt="swivel chair"
                  fill
                  className="object-cover"
                  sizes="100%"
                />
                <div
                  className={`select-indicator-2 ${currItem.image}2 absolute bottom-0 left-0 w-full h-[3px] bg-gray-700 scale-x-0`}
                ></div>
              </div>
              <div
                className="image-wrapper w-24 h-auto aspect-[1/1.3125] relative overflow-hidden cursor-pointer"
                onClick={() => changeSelectedImage(`${currItem.image}3`)}
              >
                <div
                  className="image-cover h-full absolute top-0 left-0 z-10 bg-neutral-50 scale-y-0"
                  style={{ width: "calc(100% + 2px)" }}
                ></div>
                <Image
                  src={`/images/${currItem.image}/${currItem.image}3.jpg`}
                  alt="swivel chair"
                  fill
                  className="object-cover"
                  sizes="100%"
                />
                <div
                  className={`select-indicator-3 ${currItem.image}3 absolute bottom-0 left-0 w-full h-[3px] bg-gray-700 scale-x-0`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleItem;
