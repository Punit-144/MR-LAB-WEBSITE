"use client";

import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
import Footer from "../sections/Footer";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Image from "next/image"; 
import Link from "next/link";

const projects = [

  {
    title: "Cultural Innovation",
    description: "Preserving heritage using AR, VR, and 3D digital reconstruction.",
    img: "/cultural1.png",
    link: "/projects/cultural-innovation",
  },
  
  {
    title: "EdTech Innovation",
    description: "Gamification of education, archaeological XR, physics learning in VR.",
    img: "/edtech-innovation.png",
    link: "/projects/edtech-innovation",
  },

  {
    title: "MedTech Innovation",
    description: "Immersive VR for surgical training, patient simulation, emotional agents.",
    img: "/medtech-innovation.png",
    link: "/projects/medtech-innovation",
  },
  // {
  //   title: "Immersive Technologies",
  //   description: "Multi-sensory VR including olfactory systems and XR food experiences.",
  //   img: "/project-thumbnails/immersive.jpg",
  //   link: "/projects/immersive-technologies",
  // },
  {
    title: "Coming Soon",
    description: "Exciting new projects under development in XR, CV, and AI technologies.",
    img: "/coming-soon.png",
    link: "/projects/coming-soon",
  },
];

export default function ProjectsLandingPage() {
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

      {/* Main Projects Section */}
      <div className="w-[90%] md:w-[80%] mx-auto mt-28 md:mt-32 flex flex-col items-center gap-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary text-center">Our Projects</h1>
        <p className="text-center text-gray-700 text-sm md:text-base max-w-2xl leading-relaxed">
          Explore our pioneering initiatives in Cultural Heritage, EdTech, Medical Simulation, and Immersive Technologies. 
          We are blending the physical and digital worlds to innovate for the future.
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 w-full">
          {projects.map((project, index) => (
            <Link key={index} href={project.link} className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all">
              <div className="relative w-full h-80">
                <Image
                  src={project.img}
                  alt={project.title}  
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                /> 
              </div>
              <div className="bg-white p-6 flex flex-col gap-2">
                <h2 className="text-lg md:text-xl font-semibold text-primary">{project.title}</h2>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
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





// we are not doing the hover effect like the ghost of tsushima. i am confirming some things which will remail same and equal for all the cards :
// 1) All the background images should be in fixed aspect ratio of 3:2 with dimensions 1536 * 1024 pixels. 
// 2) I will not apply the hover effect as discussed previously i don't know about the future but i am confirming that i won't we doing this at present. 
// 3) All the cards images should have a sense of uniformity, for  example in cultural image picture the words "Cultural Innovation" is in the center of picture but text alignment is left sided i think, in the edtech innovation picture the text is in the upper central part of the image and the text alignment is also central so i thing this is the ideal picture and lastly in the medtech innovation picture the text is lower central half of the picture and the text is also centrally aligned and now i am thinking to remove the text all together in backgroud image to mantain a uniformity