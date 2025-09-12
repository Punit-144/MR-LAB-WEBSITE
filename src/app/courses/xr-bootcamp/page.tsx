"use client";

import Navbar from "../../components/Navbar";
import MobileNav from "../../components/MobileNav";
import Footer from "../../sections/Footer";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function SummerTrainingPage() {
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

      {/* Title & Poster */}
      <section className="w-full mt-28 md:mt-32 text-center px-6 flex flex-col items-center gap-6">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          XR Bootcamp - Immersive On-Campus Sessions
        </h1>
        <p className="max-w-3xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed">
          XR Bootcamp is designed to provide you with skill sets required for XR development.
          XR is the future of interactive experiences.
        </p>

        {/* Poster
        <section className="w-[90%] md:w-[30%] mx-auto mt-8">
            <div className="rounded-lg overflow-hidden shadow-md">
             <Image
                src="/Summer_Training_Program.png"
                alt="Summer Training Program Poster"
                width={800}
                height={1000}
                className="w-full h-auto object-contain"
               />
            </div>
        </section> */}


        {/* Back Navigation & Poster */}
        <Link
          href="/courses"
          className="text-sm text-primary underline hover:text-black transition mt-2 inline-block"
        >
          ← Back to Courses
        </Link>
        <section className="w-[90%] md:w-[30%] mx-auto mt-8">
          <div className="rounded-lg overflow-hidden shadow-md">
        <Image
          src="/XR BOOTCAMP FLYER.png"
          alt="XR BOOTCAMP "
          width={800}
          height={500}
          className="rounded-lg shadow-md"
        />
        </div>
        </section>
      </section>

      {/* Highlights */}
      <section className="w-[90%] md:w-[80%] mx-auto mt-6">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Program Highlights
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          <li>60 hours practical sessions from industry experts</li>
          <li>510+ Mock tests with upto 1 year accessibility </li>
          <li>10 days duration</li>
        </ul>
      </section>

      {/* Opportunity */}
      <section className="w-[90%] md:w-[80%] mx-auto mt-1 "> {/*original mt was 8*/}
        <h2 className="text-2xl font-semibold text-primary mb-4">Special Opportunity</h2>
        <p className="text-sm text-gray-700">
          Exciting Prizes for top performers
        </p>
      </section>  

      {/* Fees */}
      <section className="w-[90%] md:w-[80%] mx-auto mt-1"> {/*original mt was 8*/}
        <h2 className="text-2xl font-semibold text-primary mb-4">Course Fee</h2>
        <p className="text-sm text-gray-700">
          ₹1,00,000/- +GST for Working professionals 
        </p>
        <p className="text-sm text-gray-700">
          ₹80,000/- +GST for Students 
        </p>
      </section>

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
