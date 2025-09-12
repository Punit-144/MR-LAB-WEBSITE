"use client";

import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
import Footer from "../sections/Footer";
import CourseCard from "../components/CourseCard";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";

const courses = [
  {
    title: "Summer Training Program - XR Edition",
    description:
      "1-week intensive residential training in XR, AI, Robotics, and UI/UX, led by IIT experts.",
    image: "Blue and Purple Clean Gradient Healthcare Flyer.png", 
    link: "/courses/summer-training",
  },
 
  {
    title: "Unreal Training - Immersive Online Sessions",
    description:
      "Understand how Unreal Engine enhances XR experiences, including intelligent interactions and environment adaptation.",
    image: "/Unreal.png", 
    link: "/courses/unreal-training",
  },

   {
    title: "XR Bootcamp",
    description:
      "Master XR Development to build AR/VR applications with realistic physics, animation, and interaction.",
    image: "/XR Bootcamp Digital Graphic Design.png", 
    link: "/courses/xr-bootcamp",
  },
];

export default function CoursesPage() {
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

      {/* Header Section */}
      <div className="w-[90%] md:w-[80%] mx-auto mt-28 md:mt-32 flex flex-col items-center gap-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Courses</h1>
        <p className="text-sm md:text-base text-gray-700 max-w-2xl">
          Explore our curated courses in XR, Computer Vision, AI, and more.
          Designed for skill-building with hands-on learning and certification.
        </p>
      </div>

      {/* Courses Grid */}
      <section className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {courses.map((course, index) =>
          course.link ? (
            <Link href={course.link} key={index}>
              <CourseCard
                title={course.title}
                description={course.description}
                image={course.image}
              />
            </Link>
          ) : (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              image={course.image}
            />
          )
        )}
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
