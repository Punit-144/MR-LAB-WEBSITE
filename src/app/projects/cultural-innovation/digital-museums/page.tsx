"use client";

import Navbar from "../../../components/Navbar";
import MobileNav from "../../../components/MobileNav";
import Footer from "../../../sections/Footer";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";

export default function DigitalMuseumsPage() {
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

      {/* Title & Intro */}
      <section className="w-full mt-28 md:mt-32 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Digitization of Five Rajasthan Museums
        </h1>
        <p className="max-w-3xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed">
          A government-backed project to digitally preserve heritage from museums in Alwar,
          Chittorgarh, Baran, Bundi, and Bharatpur — with 3D interactive experiences.
        </p>

        {/* Back Navigation */}
        <Link
          href="/projects/cultural-innovation"
          className="text-sm text-primary underline hover:text-black transition mt-4 inline-block"
        >
          ← Back to Cultural Innovation
        </Link>
      </section>

      {/* Video Demo */}
      <section className="w-[90%] md:w-[60%] mx-auto mt-10">
        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
          <video controls className="w-full h-full object-cover">
            <source src="/Digital_Museums.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="w-[90%] md:w-[80%] mx-auto mt-4">
        <h2 className="text-2xl font-semibold text-primary mb-4">Project Highlights</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          <li>Augmented with 3D interactive environments and virtual navigation</li>
          <li>Digitized artifact models and enhanced imagery with guided tours</li>
          <li>Clean UI with accessible controls and rich multimedia</li>
        </ul>
      </section>

      {/* Technologies Used */}
      <section className="w-[90%] md:w-[80%] mx-auto mt-6">
        <h2 className="text-2xl font-semibold text-primary mb-4">Technologies Used</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
          <div className="bg-gray-100 p-3 rounded shadow">Unity</div>
          <div className="bg-gray-100 p-3 rounded shadow">Unreal Engine</div>
          <div className="bg-gray-100 p-3 rounded shadow">Blender</div>
          <div className="bg-gray-100 p-3 rounded shadow">Oculus</div>
          <div className="bg-gray-100 p-3 rounded shadow">WebXR</div>
        </div>
      </section>

      <Footer />

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
