"use client";

import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
import Footer from "../sections/Footer";
import View3D from "@egjs/react-view3d";
import "@egjs/react-view3d/css/view3d-bundle.min.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function MRLabPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [openNavi, setOpenNavi] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="w-full overflow-x-hidden relative text-black font-poppins flex flex-col gap-32">
      <MobileNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openNavi={openNavi}
        setOpenNavi={setOpenNavi}
      />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* MR Labs Content */}
      <div className="w-full h-[80vh] md:h-screen overflow-hidden mt-28 md:mt-32">
        <div className="w-full h-[80vh] md:h-screen relative parallax-container overflow-x-hidden">

          {/* Floating Items */}
          {/* Hololens */}
          <div className="flex flex-col items-center gap-2 absolute top-[10%] right-8 md:right-16 lg:right-24">
            <Image src="/Hololens1.png" alt="Hololens" width={500} height={500} className="w-24 md:w-40 lg:w-60 h-auto floater" />
            <span className="text-[0.65rem] md:text-sm font-medium">Hololens</span>
          </div>

          {/* Nvidia Omniverse */}
          <div className="flex flex-col items-center absolute top-[5%] md:top-[15%] left-4 md:left-10 lg:left-12">
            <Image src="/gpu.webp" alt="Omniverse" width={500} height={500} className="w-24 md:w-40 lg:w-60 h-auto floater" />
            <span className="text-[0.65rem] md:text-sm font-medium">Nvidia Omniverse</span>
          </div>

          {/* 3D Scanner */}
          <div className="flex flex-col items-center absolute bottom-[10%] right-2 md:right-12">
            <Image src="/scanner.jpg" alt="3D Scanner" width={500} height={500} className="w-24 md:w-40 lg:w-60 h-auto floater" />
            <span className="text-[0.65rem] md:text-sm font-medium">3D Scanner</span>
          </div>

          {/* Oculus Quest 2 */}
          <div className="flex flex-col items-center absolute bottom-[5%] left-1/2 -translate-x-1/2">
            <Image src="/oculus2.jpg" alt="Oculus Quest 2" width={500} height={500} className="w-24 md:w-40 lg:w-60 h-auto floater" />
            <span className="text-[0.65rem] md:text-sm font-medium">Oculus Quest 2</span>
          </div>

          {/* HTC Vive Pro */}
          <div className="flex flex-col items-center absolute bottom-[20%] left-8 md:left-20 lg:left-4">
            <Image src="/vive.webp" alt="Vive Pro" width={500} height={500} className="w-24 md:w-40 lg:w-60 h-auto floater" />
            <span className="text-[0.65rem] md:text-sm font-medium">HTC Vive Pro</span>
          </div>

          {/* Center 3D Object */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pop-in-out">
            <View3D
              tag="div"
              src="/meta3.glb"
              canvasClass="myclass"
              className="w-[100vw] h-[100vh] pointer-events-none scale-75 md:scale-100"
              zoom={{ doubleTap: false }}
              scrollable={false}
              rotate={{ scale: 5, duration: 2000 }}
              autoplay={true}
              wheelScrollable={false}
            />
          </div>

          {/* Center Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgba(255,255,255,0.4)] backdrop-blur-[2px] p-4 rounded-xl w-full md:w-fit">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-[4rem] text-white text-center font-bold mb-4"
              style={{ textShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
              initial={{ opacity: 0.7, translateY: -50, scale: 0.5 }}
              whileInView={{ opacity: 1, translateY: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Mixed Reality Labs
            </motion.h1>
            <p className="text-black text-center font-medium text-sm md:text-lg lg:text-xl w-fit mx-auto">
              Infrastructure for XR Development
            </p>
          </div>

        </div>
      </div>

      <Footer />

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all z-[150]"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </main>
  );
}
