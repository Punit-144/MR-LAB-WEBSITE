// "use client";

// import Navbar from "../../../components/Navbar";
// import MobileNav from "../../../components/MobileNav";
// import Footer from "../../../sections/Footer";
// import { useEffect, useState } from "react";
// import { FaArrowUp } from "react-icons/fa";
// import Link from "next/link";

// export default function VadnagarGamePage() {
//   const [activeTab, setActiveTab] = useState(0);
//   const [openNavi, setOpenNavi] = useState(false);
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 300);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <main className="w-full overflow-x-hidden relative text-black font-poppins flex flex-col gap-32">
//       <MobileNav
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//         openNavi={openNavi}
//         setOpenNavi={setOpenNavi}
//       />
//       <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

//       {/* Title & Intro */}
//       <section className="w-full mt-28 md:mt-32 text-center px-6">
//         <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
//           Gamification of Vadnagar Heritage Site
//         </h1>
//         <p className="max-w-3xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed">
//           A single-player 2D side-scrolling mobile game to raise awareness about
//           the historically rich ASI excavation site at Vadnagar, Gujarat. The game
//           merges storytelling with gameplay mechanics to educate users about
//           the site's archaeology and significance.
//         </p>

//         {/* Back Navigation */}
//         <Link
//           href="/projects/cultural-innovation"
//           className="text-sm text-primary underline hover:text-black transition mt-4 inline-block"
//         >
//           ← Back to Cultural Innovation
//         </Link>
//       </section>

//       {/* Video Demo */}
//       <section className="w-[90%] md:w-[60%] mx-auto mt-10">
//         <div className="aspect-video rounded-lg overflow-hidden shadow-md">
//           <video controls className="w-full h-full object-cover">
//             <source src="/Game ASI.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       </section>

//       {/* Project Highlights */}
//       <section className="w-[90%] md:w-[80%] mx-auto mt-4">
//         <h2 className="text-2xl font-semibold text-primary mb-4">Project Highlights</h2>
//         <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
//           <li>Playable 2D mobile game set in the heritage-rich Vadnagar site</li>
//           <li>Story-driven exploration of ASI findings and historical artifacts</li>
//           <li>Educational gameplay encouraging cultural awareness among youth</li>
//           <li>Integrated learning through quests, trivia, and site-based challenges</li>
//         </ul>
//       </section>

//       {/* Technologies Used */}
//       <section className="w-[90%] md:w-[80%] mx-auto mt-6">
//         <h2 className="text-2xl font-semibold text-primary mb-4">Technologies Used</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
//           <div className="bg-gray-100 p-3 rounded shadow">Unity 2D</div>
//           <div className="bg-gray-100 p-3 rounded shadow">Tilemap System</div>
//           <div className="bg-gray-100 p-3 rounded shadow">C# Scripting</div>
//           <div className="bg-gray-100 p-3 rounded shadow">AR Sprite Integration</div>
//           <div className="bg-gray-100 p-3 rounded shadow">Mobile Optimization</div>
//           <div className="bg-gray-100 p-3 rounded shadow">Gamified Education Framework</div>
//         </div>
//       </section>

//       <Footer />

//       {/* Back to Top Button */}
//       {showScrollTop && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all z-[150]"
//           aria-label="Back to top"
//         >
//           <FaArrowUp />
//         </button>
//       )}
//     </main>
//   );
// }














"use client";

import Navbar from "../../../components/Navbar";
import MobileNav from "../../../components/MobileNav";
import Footer from "../../../sections/Footer";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";

export default function VadnagarGamePage() {
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
          Gamification of Vadnagar Heritage Site
        </h1>
        <p className="max-w-3xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed">
          A single-player 2D side-scrolling mobile game to raise awareness about
          the historically rich ASI excavation site at Vadnagar, Gujarat. The game
          merges storytelling with gameplay mechanics to educate users about
          the site&apos;s archaeology and significance.
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
            <source src="/Game ASI.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="w-[90%] md:w-[80%] mx-auto mt-4">
        <h2 className="text-2xl font-semibold text-primary mb-4">Project Highlights</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
          <li>Playable 2D mobile game set in the heritage-rich Vadnagar site</li>
          <li>Story-driven exploration of ASI findings and historical artifacts</li>
          <li>Educational gameplay encouraging cultural awareness among youth</li>
          <li>Integrated learning through quests, trivia, and site-based challenges</li>
        </ul>
      </section>

      {/* Technologies Used */}
      <section className="w-[90%] md:w-[80%] mx-auto mt-6">
        <h2 className="text-2xl font-semibold text-primary mb-4">Technologies Used</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
          <div className="bg-gray-100 p-3 rounded shadow">Unity 2D</div>
          <div className="bg-gray-100 p-3 rounded shadow">Tilemap System</div>
          <div className="bg-gray-100 p-3 rounded shadow">C# Scripting</div>
          <div className="bg-gray-100 p-3 rounded shadow">AR Sprite Integration</div>
          <div className="bg-gray-100 p-3 rounded shadow">Mobile Optimization</div>
          <div className="bg-gray-100 p-3 rounded shadow">Gamified Education Framework</div>
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