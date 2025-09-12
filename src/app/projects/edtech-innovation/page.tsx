// "use client";

// import Navbar from "../../components/Navbar";
// import MobileNav from "../../components/MobileNav";
// import Footer from "../../sections/Footer";
// import { useEffect, useState } from "react";
// import { FaArrowUp } from "react-icons/fa";
// import Image from "next/image";
// import Link from "next/link";

// export default function EdTechInnovationPage() {
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
//           EdTech Innovation
//         </h1>
//         <p className="max-w-3xl mx-auto text-gray-700 text-sm md:text-base">
//           Enhancing learning through immersive technologies in education.
//           Includes gamified classrooms, archaeological simulations, and VR-based science learning tools.
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
//         <Link href="/projects/edtech-innovation/baloney-gamified-physics-concepts">
//         <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
//           <Image
//             src="/BALONEY.png"
//             alt="Physics in VR"
//             width={800}
//             height={400}
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-4">
//             <h2 className="text-lg font-semibold text-primary mb-2">
//              Baloney – Gamified Physics Concepts
//             </h2>
//             <p className="text-sm text-gray-600">
//               This interactive experience transforms abstract physics principles into engaging gameplay. 
//               Students explore core concepts like kinetic energy, potential energy, gravity, and thermodynamics 
//               through hands-on virtual experiments, making complex topics intuitive and memorable.
//             </p>
//           </div>
//         </div>
//         </Link>
//         {/* Project Card 2 */}
//         <Link href="/projects/edtech-innovation/welding-vle">
//         <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
//           <Image
//             src="/projects/edtech2.jpg"
//             alt="Virtual Learning"
//             width={800}
//             height={400}
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-4">
//             <h2 className="text-lg font-semibold text-primary mb-2">
//               Virtual Learning Environment for Welding
//             </h2>
//             <p className="text-sm text-gray-600">
//               Classroom training is reimagined through immersive virtual simulations,
//               allowing learners to practice welding techniques in a safe, controlled,
//               and interactive digital environment.
//             </p>
//           </div>
//         </div>
//         </Link>
//         {/* Project Card 3 */}
//         <Link href="/projects/edtech-innovation/space-exploration">
//         <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
//           <Image
//             src="/projects/edtech3.jpg"
//             alt="Space Exploration"
//             width={800}
//             height={400}
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-4">
//             <h2 className="text-lg font-semibold text-primary mb-2">
//               Immersive Space Exploration in VR
//             </h2>
//             <p className="text-sm text-gray-600">
//               An immersive first-person VR experience simulating outer space using Unreal Engine, allowing users to freely explore celestial environments.
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

export default function EdTechInnovationPage() {
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
          EdTech Innovation
        </h1>
        <p className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto">
          Enhancing learning through immersive technologies in education. Our
          work includes gamified classrooms, archaeological simulations, and
          VR-based science learning tools.
        </p>

        {/* ← Back to Projects Button */}
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
        <Link href="/projects/edtech-innovation/baloney-gamified-physics-concepts">
          <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white">
            <div className="w-full aspect-[3/2] relative">
              <Image
                src="/BALONEY.png"
                alt="Baloney - Gamified Physics Concepts"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Baloney - Gamified Physics Concepts
              </h3>
              <p className="text-sm text-gray-600">
                This interactive experience transforms abstract physics
                principles into engaging gameplay. Students explore core
                concepts like kinetic energy, potential energy, gravity, and
                thermodynamics through hands-on virtual experiments, making
                complex topics intuitive and memorable.
              </p>
            </div>
          </div>
        </Link>

        {/* Card 2 */}
        <Link href="/projects/edtech-innovation/welding-vle">
          <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white">
            <div className="w-full aspect-[3/2] relative">
              <Image
                src="/Welding.png"
                alt="Virtual Learning Environment for Welding"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Virtual Learning Environment for Welding
              </h3>
              <p className="text-sm text-gray-600">
                Classroom training is reimagined through immersive virtual
                simulations, allowing learners to practice welding techniques in
                a safe, controlled, and interactive digital environment.
              </p>
            </div>
          </div>
        </Link>

        {/* Card 3 */}
        <Link href="/projects/edtech-innovation/space-exploration">
          <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white">
            <div className="w-full aspect-[3/2] relative">
              <Image
                src="/Space.png"
                alt="Immersive Space Exploration in VR"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Immersive Space Exploration in VR
              </h3>
              <p className="text-sm text-gray-600">
                An immersive first-person VR experience simulating outer space
                using Unreal Engine, allowing users to freely explore celestial
                environments.
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
