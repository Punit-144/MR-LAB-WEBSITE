"use client";

import Navbar from "../../../components/Navbar";
import MobileNav from "../../../components/MobileNav";
import Footer from "../../../sections/Footer";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";

export default function PedicleProbePage() {
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
          Pedicle Probe – Haptic Feedback System
        </h1>
        <p className="max-w-3xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed">
          A virtual simulation paired with hardware for spine surgery training. This system mimics real-time force and torque sensations,
          helping surgeons improve precision and tactile understanding of pedicle screw placement.
        </p>

        {/* Back Navigation */}
        <Link
          href="/projects/medtech-innovation"
          className="text-sm text-primary underline hover:text-black transition mt-4 inline-block"
        >
          ← Back to MedTech Innovation
        </Link>
      </section>

      {/* Video Demo */}
      <section className="w-[90%] md:w-[60%] mx-auto mt-10">
        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
          <video controls className="w-full h-full object-cover">
            <source src="/Haptics surgery.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="w-[90%] md:w-[80%] mx-auto mt-4">
        <h2 className="text-2xl font-semibold text-primary mb-4">Project Highlights</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          <li>Simulates force feedback and rotation resistance for realistic surgical training.</li>
          <li>Reinforces hand-eye coordination during delicate screw insertion procedures.</li>
          <li>Helps residents and trainees build confidence in high-risk spine operations.</li>
          <li>Integrated virtual visualization with real-time physical device feedback.</li>
        </ul>
      </section>

      {/* Technologies Used */}
      <section className="w-[90%] md:w-[80%] mx-auto mt-6">
        <h2 className="text-2xl font-semibold text-primary mb-4">Technologies Used</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
          <div className="bg-gray-100 p-3 rounded shadow">Haptic Device API</div>
          <div className="bg-gray-100 p-3 rounded shadow">VR Development (Unity)</div>
          <div className="bg-gray-100 p-3 rounded shadow">Force & Torque Sensor Integration</div>
          <div className="bg-gray-100 p-3 rounded shadow">Mechanical Design with 3D Printed Parts</div>
          <div className="bg-gray-100 p-3 rounded shadow">Physics Simulation Engine</div>
          <div className="bg-gray-100 p-3 rounded shadow">Real-time Feedback Loop</div>
        </div>
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
