// "use client";

// import Navbar from "../../components/Navbar";
// import MobileNav from "../../components/MobileNav";
// import Footer from "../../sections/Footer";
// import { useEffect, useState } from "react";
// import { FaArrowUp } from "react-icons/fa";
// import Image from "next/image";
// import Link from "next/link";

// export default function MedTechInnovationPage() {
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

//       {/* Banner and Title */}
//       <section className="w-full mt-28 md:mt-32 text-center px-6">
//         <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
//           MedTech Innovation
//         </h1>
//         <p className="max-w-3xl mx-auto text-gray-700 text-sm md:text-base">
//           Innovating medical education and healthcare through immersive simulation, emotional intelligence agents, and AI-enabled training tools.
//         </p>

//         {/* Back to Projects Button */}
//         <Link
//           href="/projects"
//           className="text-sm text-primary underline hover:text-black transition mt-4 inline-block"
//         >
//           ← Back to Projects
//         </Link>
//         {/* back to projects button */}
//       </section>

//       {/* Project Highlights */}
//       <section className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Project Card 1 */}
//         <Link href="/projects/medtech-innovation/pedicle-haptics">
//         <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
//           <Image
//             src="/projects/medtech1.jpg"
//             alt="VR Surgical Training"
//             width={800}
//             height={400}
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-4">
//             <h2 className="text-lg font-semibold text-primary mb-2">
//               Pedicle Probe Haptic Feedback System
//             </h2>
//             <p className="text-sm text-gray-600">
//               A VR-integrated haptic system that simulates drilling and torque feedback for surgical training. Designed to enhance hand-eye coordination and tactile response in spine procedures.
//             </p>
//           </div>
//         </div>
//         </Link>
//         {/* Project Card 2 */}
//         <Link href="/projects/medtech-innovation/virtual-cpr">
//         <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
//           <Image
//             src="/projects/medtech2.jpg"
//             alt="Emotional AI Agent"
//             width={800}
//             height={400}
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-4">
//             <h2 className="text-lg font-semibold text-primary mb-2">
//               Virtual CPR Training Environment
//             </h2>
//             <p className="text-sm text-gray-600">
//              A guided VR module that teaches CPR techniques through interactive prompts and scenario-based simulations, making emergency response training more accessible and intuitive.
//             </p>
//           </div>
//         </div>
//         </Link>
//         {/* Project Card 3 */}
//         <Link href="/projects/medtech-innovation/haptic-simulator">
//         <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
//           <Image
//             src="/projects/medtech3.jpg"
//             alt="Patient Safety App"
//             width={800}
//             height={400}
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-4">
//             <h2 className="text-lg font-semibold text-primary mb-2">
//               Abdomen Palpation & Pulse Simulator
//             </h2>
//             <p className="text-sm text-gray-600">
//               Combines deformable object physics with haptic rendering to replicate abdominal pulse detection and surface diagnosis for realistic examination practice.
//             </p>
//           </div>
//         </div>
//         </Link>
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

import Navbar from "../../components/Navbar";
import MobileNav from "../../components/MobileNav";
import Footer from "../../sections/Footer";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function MedTechInnovationPage() {
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

      {/* Page Header */}
      <section className="w-[90%] md:w-[80%] mx-auto mt-28 md:mt-32 text-center flex flex-col gap-6">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          MedTech Innovation
        </h1>
        <p className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto">
          Innovating medical education and healthcare through immersive simulation, emotional intelligence agents, and AI-enabled training tools.
        </p>

        {/* Back to Projects Button */}
        <Link
          href="/projects"
          className="text-sm text-primary underline hover:text-black transition inline-block mx-auto"
        >
          ← Back to Projects
        </Link>
      </section>

      {/* Project Cards */}
      <section className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
        
        {/* Card 1 */}
        <Link href="/projects/medtech-innovation/pedicle-haptics">
          <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white">
            <div className="w-full aspect-[3/2] relative">
              <Image
                src="/Pedicle Probe.png"
                alt="VR Surgical Training"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Pedicle Probe Haptic Feedback System
              </h3>
              <p className="text-sm text-gray-600">
                A VR-integrated haptic system that simulates drilling and torque feedback for surgical training. Designed to enhance hand-eye coordination and tactile response in spine procedures.
              </p>
            </div>
          </div>
        </Link>

        {/* Card 2 */}
        <Link href="/projects/medtech-innovation/virtual-cpr">
          <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white">
            <div className="w-full aspect-[3/2] relative">
              <Image
                src="/CPR.png"
                alt="Emotional AI Agent"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Virtual CPR Training Environment
              </h3>
              <p className="text-sm text-gray-600">
                A guided VR module that teaches CPR techniques through interactive prompts and scenario-based simulations, making emergency response training more accessible and intuitive.
              </p>
            </div>
          </div>
        </Link>

        {/* Card 3 */}
        <Link href="/projects/medtech-innovation/haptic-simulator">
          <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white">
            <div className="w-full aspect-[3/2] relative">
              <Image
                src="/Abdomen Palpation Simulator.png"
                alt="Patient Safety App"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Abdomen Palpation & Pulse Simulator
              </h3>
              <p className="text-sm text-gray-600">
                Combines deformable object physics with haptic rendering to replicate abdominal pulse detection and surface diagnosis for realistic examination practice.
              </p>
            </div>
          </div>
        </Link>
      </section>

      <Footer />

      {/* Scroll to Top Button */}
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

