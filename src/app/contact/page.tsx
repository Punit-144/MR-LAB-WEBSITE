"use client";

import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
import Footer from "../sections/Footer";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ContactPage() {
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
      {/* Navbar */}
      <MobileNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openNavi={openNavi}
        setOpenNavi={setOpenNavi}
      />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Contact Content */}
      <div className="w-[90%] md:w-[80%] mx-auto mt-28 md:mt-32 flex flex-col items-center gap-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary text-center">
          Contact Us
        </h1>

        <section className="flex flex-col md:flex-row w-full justify-between items-start gap-12">
          {/* Left Section */}
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-black mb-4">Reach Us At</h2>
            <p className="text-sm md:text-base">
              📍 iHub Drishti Foundation, <br />
              Indian Institute of Technology Jodhpur, <br />
              NH 62, Karwar 342037, Jodhpur District, Rajasthan, India
            </p>
            <p className="text-sm md:text-base mt-4">
              ✉️ Email:{" "}
              <a href="mailto:ihubarvrinfo@ihub-drishti.ai" className="text-primary hover:underline">
                arvrinfo@ihub-drishti.ai
              </a>
            </p>
            <p className="text-sm md:text-base">
              📞 Phone:{" "}
              <a href="tel:02912802248" className="text-primary hover:underline">
                0291-2802248
              </a>
            </p>
          </div>

          {/* Right Section - Optional Contact Form */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-black mb-4">Send Us a Message</h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-primary"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-primary"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-primary"
              ></textarea>
              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>

      {/* Footer */}
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
