import React, { useEffect, useState } from "react";
import Image from "next/image";
import { events } from "../data/events";

export default function Carousel() {
  const length = events.length;
  const [currImage, setCurrImage] = useState(0);
  const handleNextClick = () => {
    setCurrImage((prevCurrImage) => (prevCurrImage + 1) % length);
  };

  const handlePrevClick = () => {
    setCurrImage((prevCurrImage) => (prevCurrImage - 1 + length) % length);
  };

  const prevImage = (currImage - 1 + length) % length;
  const nextImage = (currImage + 1) % length;

  return (
    <div className="w-full h-full">
      <section className=" relative w-full h-full md:scale-90">
        <div className="hidden md:block w-[35%] aspect-[500/333] rounded-xl border-[3px] border-black/50 shadow-[0px_10px_20px_rgba(0,0,0,0.5)] bg-white z-[50] absolute top-1/2 left-0 translate-y-1/2">
          <Image
            src={`/${events[prevImage].img}`}
            alt={events[prevImage].name}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[100%] md:w-[55%] aspect-[500/333] rounded-xl border-[3px] border-black/50 shadow-[0px_10px_20px_rgba(0,0,0,0.5)] bg-white z-[100] absolute top-12 left-1/2 -translate-x-1/2 ">
          <Image
            src={`/${events[currImage].img}`}
            alt={events[currImage].name}
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-xl"
          />
          <Image
            className="absolute -bottom-16 invert-[50%]  left-[15%] rotate-90 cursor-pointer"
            src="/caret-down.png"
            alt="Previous"
            width={30}
            height={30}
            onClick={handlePrevClick}
          />
          <Image
            className="absolute -bottom-16 invert-[50%]  right-[15%] -rotate-90 cursor-pointer"
            src="/caret-down.png"
            alt="Next"
            width={30}
            height={40}
            onClick={handleNextClick}
          />
        </div>
        <div className="hidden md:block w-[35%] aspect-[500/333] rounded-xl border-[3px] border-black/50 shadow-[0px_10px_20px_rgba(0,0,0,0.5)] bg-white z-[50] absolute top-1/2 right-0 translate-y-1/2">
          <Image
            src={`/${events[nextImage].img}`}
            alt={events[nextImage].name}
            width={500}
            height={500}
            className="w-full h-full object-cover"
            onClick={handleNextClick}
          />
        </div>
      </section>
    </div>
  );
}
