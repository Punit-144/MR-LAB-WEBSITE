"use client";

import Navbar from "../../components/Navbar";
import MobileNav from "../../components/MobileNav";
import Footer from "../../sections/Footer";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Image from "next/image";

export default function ComingSoonPage() {
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
      <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} openNavi={openNavi} setOpenNavi={setOpenNavi} />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Coming Soon Header */}
      <section className="w-full mt-28 md:mt-32 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Coming Soon</h1>
        <p className="max-w-2xl mx-auto text-gray-700 text-sm md:text-base">
          Stay tuned for new and exciting research and development projects that are currently in progress at iHub Drishti Foundation.
        </p>
      </section>

      {/* Placeholder Card */}
      <section className="w-[90%] md:w-[60%] mx-auto mt-8">
        <div className="rounded-xl overflow-hidden border border-dashed border-gray-300 p-8 text-center bg-white shadow-md">
          <Image
            src="/projects/coming-soon.jpg"
            alt="Coming Soon"
            width={600}
            height={400}
            className="mx-auto mb-6 rounded-md"
          />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Innovative XR + AI Fusion Project</h2>
          <p className="text-sm text-gray-600 mb-4">
            A new project combining real-time spatial computing and generative AI in mixed reality environments, focused on intelligent industrial training and rapid prototyping.
          </p>
          {/* Email Notify Box */}
          <form className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-2/3 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition"
            >
              Notify Me
            </button>
          </form>
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


{/*
  
  Use This Code if you want to add the back to the project button
  
  
  
  "use client";

import Navbar from "../../../components/Navbar";
import MobileNav from "../../../components/MobileNav";
import Footer from "../../../sections/Footer";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function ComingSoonPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [openNavi, setOpenNavi] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [email, setEmail] = useState("");

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! We will notify you at: ${email}`);
    setEmail("");
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

      {/* Title }
      <section className="w-full mt-28 md:mt-32 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Coming Soon
        </h1>
        <p className="max-w-2xl mx-auto text-gray-700 text-sm md:text-base">
          We are cooking up new and exciting projects in XR, AI, Cultural Tech, and Simulation. Stay tuned for groundbreaking initiatives launching soon.
        </p>

        {/* back to projects button }
        <Link
          href="/projects"
          className="text-sm text-primary underline hover:text-black transition mt-4 inline-block"
        >
          ← Back to Projects
        </Link>
      </section>

      {/* Visual + Notify }
      <section className="w-full flex flex-col items-center justify-center mt-12 px-4">
        <Image
          src="/projects/coming-soon.jpg"
          alt="Coming Soon"
          width={800}
          height={400}
          className="rounded-xl w-full max-w-2xl object-cover shadow-xl"
        />
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email to get notified"
            className="w-full md:w-[350px] px-4 py-3 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-black transition-all text-sm font-medium"
          >
            Notify Me
          </button>
        </form>
      </section>

      <Footer />

      {/* Scroll to Top }
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
*/}
