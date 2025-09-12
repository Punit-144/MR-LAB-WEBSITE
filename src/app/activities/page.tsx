"use client";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import MobileNav from "../components/MobileNav";
import ActivityCard from "../components/ActivityCard";
import { activities } from "../data/activities";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ActivitiesPage() {
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

      {/* Activities Content */}
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col gap-8 mt-28 md:mt-32">
        <Heading heading="Activities" />
        <section>
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {activities.map((activity, index) => (
              <ActivityCard key={index} index={index} activity={activity} />
            ))}
          </div>
        </section>
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
