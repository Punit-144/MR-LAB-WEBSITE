"use client";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import TeamCard from "../components/TeamCard";
import { team } from "../data/team";
import MobileNav from "../components/MobileNav";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [openNavi, setOpenNavi] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <main className="w-full overflow-x-hidden relative text-black font-poppins flex flex-col gap-32">
      <MobileNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openNavi={openNavi}
        setOpenNavi={setOpenNavi}
      />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <section className="w-full relative pt-28 pb-12 z-10">
        <div className="w-full h-[40%] bg-gradient-to-b from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.1)] absolute top-0 left-0 z-0"></div>
        <div className="w-full h-[20%] bg-gradient-to-t from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.1)] absolute bottom-0 left-0 z-0"></div>

        <div className="w-[80%] mx-auto flex flex-col gap-8 relative z-10">
          <Heading heading="Team" />

          <div className="flex items-center justify-center w-full gap-8">
            {team.map(
              (member, index) =>
                member.type === "core" && (
                  <TeamCard
                    key={index}
                    name={member.name}
                    img={member.img}
                    designation={member.designation}
                    position={member.position}
                  />
                )
            )}
          </div>

          <Heading heading="Research & Development" small />
          <div className="flex flex-wrap justify-center items-center w-full md:w-[80%] lg:w-[70%] mx-auto gap-4">
            {team.map(
              (member, index) =>
                member.type === "rnd" && (
                  <TeamCard
                    key={index}
                    name={member.name}
                    img={member.img}
                    designation={member.designation}
                    small
                  />
                )
            )}
          </div>

          <Heading heading="Design Team" small />
          <div className="flex flex-wrap justify-center items-center w-full md:w-[80%] lg:w-[70%] mx-auto gap-4">
            {team.map(
              (member, index) =>
                member.type === "design" && (
                  <TeamCard
                    key={index}
                    name={member.name}
                    img={member.img}
                    designation={member.designation}
                    small
                  />
                )
            )}
          </div>

          <Heading heading="Development Team" small />
          <div className="flex flex-wrap justify-center items-center w-full md:w-[80%] lg:w-[70%] mx-auto gap-4">
            {team.map(
              (member, index) =>
                member.type === "development" && (
                  <TeamCard
                    key={index}
                    name={member.name}
                    img={member.img}
                    designation={member.designation}
                    small
                  />
                )
            )}
          </div>

          <Heading heading="Animation + VFX" small />
          <div className="flex flex-wrap justify-center items-center w-full md:w-[80%] lg:w-[70%] mx-auto gap-4">
            {team.map(
              (member, index) =>
                member.type === "animation" && (
                  <TeamCard
                    key={index}
                    name={member.name}
                    img={member.img}
                    designation={member.designation}
                    small
                  />
                )
            )}
          </div>
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