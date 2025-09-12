import Image from "next/image";
import { useEffect } from "react";
export default function Hero() {
  useEffect(() => {
    const video = document.querySelector(".video-hero") as HTMLVideoElement;
    if (video) video.play();
  }, []);
  return (
    <div className="w-full h-screen relative overflow-y-hidden overflow-x-hidden">
      {/* <div className="bg-light_bg w-[110vw] h-[30vh] rounded-[100%] absolute -top-[15vh] left-1/2 -translate-x-1/2 hidden md:block"></div> */}
      {/* <div className="bg-gradient-to-t from-white to-[rgba(0,0,0,0)] w-[110vw] h-[30vh]  absolute -bottom-[5vh] left-1/2 -translate-x-1/2"></div> */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center parallax-container-2   hero-heading">
        <h1 className="text-4xl md:text-6xl lg:text-8xl   font-bold">
          iHub - Drishti
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl tracking-wide">
          Unleashing XR Potential
        </p>
        <p className="mt-2">AR-VR Vertical</p>
      </div>
      <video
        src="/demo-cut.mp4"
        width={1920}
        height={1080}
        className="video-hero"
        playsInline={true}
        autoPlay={true}
        muted={true}
        loop={true}
      ></video>
      <Image
        src="/hero.jpg"
        alt="ihub"
        width={1920}
        height={1080}
        className="hidden md:block absolute top-0 left-0 w-screen h-screen z-[-1]"
        priority={true}
      />
      <Image
        src="/mobile-hero.jpg"
        alt="ihub"
        width={1920}
        height={1080}
        className="md:hidden absolute top-0 left-0 w-screen h-screen z-[-1]"
        priority={true}
      />
      {/* <Image
        src="/iit.webp"
        alt="ihub"
        width={1920}
        height={1080}
        className="w-full h-full"
      /> */}
    </div>
  );
}
