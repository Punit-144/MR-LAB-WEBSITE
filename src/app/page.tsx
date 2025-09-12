"use client";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
{/*import Discover from "./sections/Discover";*/}
//import Activities from "./sections/Activities";
import MRLabs from "./sections/MRLabs";
import MobileNav from "./components/MobileNav";
import Footer from "./sections/Footer";
import { useEffect, useState } from "react";
{/*import Events from "./sections/Events";*/}
import Projects from "./sections/Projects";
{/*import News from "./sections/News";*/}
import { FaArrowUp } from "react-icons/fa";

export default function Home() {
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
    <main className="w-full overflow-x-hidden relative text-black font-poppins flex flex-col gap-20">
      <MobileNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openNavi={openNavi}
        setOpenNavi={setOpenNavi}
      />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Hero />
      {/*<Discover activeTab={activeTab} setActiveTab={setActiveTab} />*/}
      <MRLabs/>
      <Projects />
      {/*<News />*/}
      {/* <Events /> */}
      {/*<Activities />*/}
      {/*<Team />*/}
      <Footer />

      {/* Floating Back to Top Button */}
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
