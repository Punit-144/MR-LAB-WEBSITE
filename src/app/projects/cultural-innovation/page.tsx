// "use client";

// import Navbar from "../../components/Navbar";
// import MobileNav from "../../components/MobileNav";
// import Footer from "../../sections/Footer";
// import { useEffect, useState } from "react";
// import { FaArrowUp } from "react-icons/fa";
// import Image from "next/image";
// import Link from "next/link";

// export default function CulturalInnovationPage() {
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
//       {<Navbar activeTab={activeTab} setActiveTab={setActiveTab} />}

//       {/* Banner and Title */}
//       <section className="w-full mt-28 md:mt-32 text-center px-6">
//         <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
//           Cultural Innovation
//         </h1>
//         <p className="max-w-3xl mx-auto text-gray-700 text-sm md:text-base">
//           Preserving and celebrating heritage through XR technologies. Our work
//           includes AR-based storytelling, 3D monument reconstruction, virtual
//           museum experiences, and interactive cultural games.
//         </p>

//         {/* Back to Projects Button */}
//         <Link
//           href="/projects"
//           className="text-sm text-primary underline hover:text-black transition mt-4 inline-block"
//         >
//           ← Back to Projects
//         </Link>
      
//       </section>

//       {/* Project Highlights */}
//       <section className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

//         {/* Project Card 1 */}
//         <Link href="/projects/cultural-innovation/3d-reconstruction">
//         <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
//           <Image
//             src="/Chronicles-of-kiradu-cropped.jpg"
//             alt="3D Temple Reconstruction"
//             width={800}
//             height={400}
//             className="w-full h-61 object-cover"
//           />
//           <div className="p-4">
//             <h2 className="text-lg font-semibold text-primary mb-2">
//               3D Temple Reconstruction
//             </h2>
//             <p className="text-sm text-gray-600">
//               Digitally reconstructed temples and heritage sites like the
//               Kiradu Temple using 3D scanning and modeling, allowing users to
//               virtually explore lost structures.
//             </p>
//           </div>
//         </div>
//         </Link>


//         {/* Project Card 4 */}
//         <Link href="/projects/cultural-innovation/gamification-of-vadnagar">
//         <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
//           <Image
//             src="/vadnagar-asi.png"
//             alt="Gamification of Vadnagar"
//             width={800}
//             height={400}
//             className="w-full h-61 object-cover"
//           />
//           <div className="p-4">
//             <h2 className="text-lg font-semibold text-primary mb-2">
//               Gamification of Vadnagar Site
//             </h2>
//             <p className="text-sm text-gray-600">
//               Converted the historic Vadnagar site into a digital game-based
//               exploration platform, enabling engagement through quests, trivia,
//               and 3D navigation.
//             </p>
//           </div>
//         </div>
//         </Link>


//          {/* Project Card 3 */}
//         <Link href="/projects/cultural-innovation/dharohar">
//         <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
//           <Image
//             src="/Dharohar.jpg"
//             alt="Virtual Heritage Walk"
//             width={800}
//             height={400}
//             className="w-full h-50 object-cover"
//           />
//           <div className="p-4">
//             <h2 className="text-lg font-semibold text-primary mb-2">
//               Virtual Museum Walkthrough
//             </h2>
//             <p className="text-sm text-gray-600">
//               Offers an immersive walkthrough of heritage museums such as
//               Dharohar, blending education with interactive 3D visualization and
//               historical narration.
//             </p>
//           </div>
//         </div>
//         </Link>


//         {/* Project Card 5 */}
//         <Link href="/projects/cultural-innovation/digital-museums">
//         <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer">
//           <Image
//             src="/digital-museum.png"
//             alt="Digitization of Museums"
//             width={800}
//             height={400}
//             className="w-full h-61 object-cover"
//           />
//           <div className="p-4">
//             <h2 className="text-lg font-semibold text-primary mb-2">
//               Digitization of Museums
//             </h2>
//             <p className="text-sm text-gray-600">
//               3D-enhanced digital experiences for 5 Rajasthan museums, combining
//               scanned artifacts, guided narration, and interactive exploration.
//             </p>
//           </div>
//         </div>
//       </Link>
      
//         {/* Project Card 2 */}
//         <Link href="/projects/cultural-innovation/charitram">
//         <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
//           <Image
//             src="/charitram.jpg"
//             alt="AR Storytelling App"
//             width={800}
//             height={400}
//             className="w-full h-80 object-cover"
//           />
//           <div className="p-4">
//             <h2 className="text-lg font-semibold text-primary mb-2">
//               chARitram - AR Storytelling
//             </h2>
//             <p className="text-sm text-gray-600">
//               chARitram is an interactive AR application that brings ancient
//               Indian mythology and folk tales to life through animation and
//               spatial storytelling.
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


// "use client";

// import Navbar from "../../components/Navbar";
// import MobileNav from "../../components/MobileNav";
// import Footer from "../../sections/Footer";
// import { useEffect, useState } from "react";
// import { FaArrowUp } from "react-icons/fa";
// import Link from "next/link";
// import Image from "next/image";

// export default function CulturalInnovationPage() {
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

//       {/* Page Header */}
//       <section className="w-[90%] md:w-[80%] mx-auto mt-28 md:mt-32 text-center flex flex-col gap-6">
//         <h1 className="text-4xl md:text-5xl font-bold text-primary">
//           Cultural Innovation
//         </h1>
//         <p className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto">
//           Preserving and celebrating heritage through XR technologies.
//           Our work includes AR-based storytelling, 3D monument reconstruction, virtual museum experiences, 
//           and interactive cultural games.
//         </p>
//       </section>
      

//       {/* Project Cards */}
//       <section className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
         
//          {/* Card 1 */}
//         <Link href="/projects/cultural-innovation/3d-reconstruction">
//           <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white">
//             <div className="w-full aspect-[3/2] relative">
//               <Image
//                 src="/Chronicles-of-kiradu-three.jpg"
//                 alt="3D Temple Reconstruction"
//                 fill
//                 className="object-cover transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-primary mb-2">
//                 3D Temple Reconstruction
//               </h3>
//               <p className="text-sm text-gray-600">
//                 A PC & VR puzzle-adventure game set in the mystical Kiradu
//                 Temples in Rajasthan, blending cultural lore and gamification.
//               </p>
//             </div>
//           </div>
//         </Link>
        
//         {/* Card 2 */}
//         <Link href="/projects/cultural-innovation/gamification-of-vadnagar">
//           <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white">
//             <div className="w-full aspect-[3/2] relative">
//               <Image
//                 src="/vadnagar-asi.png"
//                 alt="Gamification of Vadnagar"
//                 fill
//                 className="object-cover transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-primary mb-2">
//                 Gamification of Vadnagar
//               </h3>
//               <p className="text-sm text-gray-600">
//                 A 2D mobile game to raise awareness about ASI's Vadnagar
//                 excavation site through interactive storytelling.
//               </p>
//             </div>
//           </div>
//         </Link>

//         {/* Card 3 */}
//         <Link href="/projects/cultural-innovation/dharohar">
//           <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white">
//             <div className="w-full aspect-[3/2] relative">
//               <Image
//                 src="/dharohar three.png "
//                 alt="Dharohar - Immersive Museum"
//                 fill
//                 className="object-cover transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-primary mb-2">
//                 Dharohar - Immersive Museum
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Offers an immersive walkthrough of heritage museums such as
//                 Dharohar, blending education with interactive 3D visualization and
//                 historical narration.
//               </p>
//             </div>
//           </div>
//         </Link>

        
//         {/* Card 4 */}
//         <Link href="/projects/cultural-innovation/digital-museums">
//           <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white">
//             <div className="w-full aspect-[3/2] relative">
//               <Image
//                 src="/Digitization-museum-three.png"
//                 alt="Digitization of Museums"
//                 fill
//                 className="object-cover transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-primary mb-2">
//                 Digitization of Museums
//               </h3>
//               <p className="text-sm text-gray-600">
//                 3D-enhanced digital experiences for 5 Rajasthan museums, combining
//                 scanned artifacts, guided narration, and interactive exploration.
//               </p>
//             </div>
//           </div>
//         </Link>


//         {/* Card 5 */}
//         <Link href="/projects/cultural-innovation/charitram">
//           <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white">
//             <div className="w-full aspect-[3/2] relative">
//               <Image
//                 src="/charitram.jpg"
//                 alt="AR Storytelling App"
//                 fill
//                 className="object-cover transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-primary mb-2">
//                 chARitram - AR Storytelling
//               </h3>
//               <p className="text-sm text-gray-600">
//                 chARitram is an interactive AR application that brings ancient
//                 Indian mythology and folk tales to life through animation and
//                 spatial storytelling.
//               </p>
//             </div>
//           </div>
//         </Link>
//       </section>
      

//       <Footer />

//       {/* Scroll to Top Button */}
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














// "use client";

// import Navbar from "../../components/Navbar";
// import MobileNav from "../../components/MobileNav";
// import Footer from "../../sections/Footer";
// import { useEffect, useState } from "react";
// import { FaArrowUp } from "react-icons/fa";
// import Link from "next/link";
// import Image from "next/image";

// export default function CulturalInnovationPage() {
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

//       {/* Page Header */}
//       <section className="w-[90%] md:w-[80%] mx-auto mt-28 md:mt-32 text-center flex flex-col gap-6">
//         <h1 className="text-4xl md:text-5xl font-bold text-primary">
//           Cultural Innovation
//         </h1>
//         <p className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto">
//           Preserving and celebrating heritage through XR technologies.
//           Our work includes AR-based storytelling, 3D monument reconstruction, virtual museum experiences, 
//           and interactive cultural games.
//         </p>

//         {/* ← Back to Projects Button */}
//         <Link
//           href="/projects"
//           className="text-sm text-primary underline hover:text-black transition inline-block mx-auto"
//         >
//           ← Back to Projects
//         </Link>
//       </section>

//       {/* Project Cards */}
//       <section className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
         
//         {/* Card 1 */}
//         <Link href="/projects/cultural-innovation/3d-reconstruction">
//           <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white">
//             <div className="w-full aspect-[3/2] relative">
//               <Image
//                 src="/Chronicles-of-kiradu-three.jpg"
//                 alt="3D Temple Reconstruction"
//                 fill
//                 className="object-cover transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-primary mb-2">
//                 3D Temple Reconstruction
//               </h3>
//               <p className="text-sm text-gray-600">
//                 A PC & VR puzzle-adventure game set in the mystical Kiradu
//                 Temples in Rajasthan, blending cultural lore and gamification.
//               </p>
//             </div>
//           </div>
//         </Link>

//         {/* Card 2 */}
//         <Link href="/projects/cultural-innovation/gamification-of-vadnagar">
//           <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white">
//             <div className="w-full aspect-[3/2] relative">
//               <Image
//                 src="/vadnagar-asi.png"
//                 alt="Gamification of Vadnagar"
//                 fill
//                 className="object-cover transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-primary mb-2">
//                 Gamification of Vadnagar
//               </h3>
//               <p className="text-sm text-gray-600">
//                 A 2D mobile game to raise awareness about ASI's Vadnagar
//                 excavation site through interactive storytelling.
//               </p>
//             </div>
//           </div>
//         </Link>

//         {/* Card 3 */}
//         <Link href="/projects/cultural-innovation/dharohar">
//           <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white">
//             <div className="w-full aspect-[3/2] relative">
//               <Image
//                 src="/dharohar three.png"
//                 alt="Dharohar - Immersive Museum"
//                 fill
//                 className="object-cover transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-primary mb-2">
//                 Dharohar - Immersive Museum
//               </h3>
//               <p className="text-sm text-gray-600">
//                 Offers an immersive walkthrough of heritage museums such as
//                 Dharohar, blending education with interactive 3D visualization and
//                 historical narration.
//               </p>
//             </div>
//           </div>
//         </Link>

//         {/* Card 4 */}
//         <Link href="/projects/cultural-innovation/digital-museums">
//           <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white">
//             <div className="w-full aspect-[3/2] relative">
//               <Image
//                 src="/Digitization-museum-three.png"
//                 alt="Digitization of Museums"
//                 fill
//                 className="object-cover transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-primary mb-2">
//                 Digitization of Museums
//               </h3>
//               <p className="text-sm text-gray-600">
//                 3D-enhanced digital experiences for 5 Rajasthan museums, combining
//                 scanned artifacts, guided narration, and interactive exploration.
//               </p>
//             </div>
//           </div>
//         </Link>

//         {/* Card 5 */}
//         <Link href="/projects/cultural-innovation/charitram">
//           <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white">
//             <div className="w-full aspect-[3/2] relative">
//               <Image
//                 src="/charitram.jpg"
//                 alt="AR Storytelling App"
//                 fill
//                 className="object-cover transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-primary mb-2">
//                 chARitram - AR Storytelling
//               </h3>
//               <p className="text-sm text-gray-600">
//                 chARitram is an interactive AR application that brings ancient
//                 Indian mythology and folk tales to life through animation and
//                 spatial storytelling.
//               </p>
//             </div>
//           </div>
//         </Link>
//       </section>

//       <Footer />

//       {/* Scroll to Top Button */}
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
import Link from "next/link";
import Image from "next/image";

export default function CulturalInnovationPage() {
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
          Cultural Innovation
        </h1>
        <p className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto">
          Preserving and celebrating heritage through XR technologies.
          Our work includes AR-based storytelling, 3D monument reconstruction, virtual museum experiences, 
          and interactive cultural games.
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
        <Link href="/projects/cultural-innovation/3d-reconstruction">
          <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white">
            <div className="w-full aspect-[3/2] relative">
              <Image
                src="/Chronicles-of-kiradu-three.jpg"
                alt="3D Temple Reconstruction"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-primary mb-2">
                3D Temple Reconstruction
              </h3>
              <p className="text-sm text-gray-600">
                A PC & VR puzzle-adventure game set in the mystical Kiradu
                Temples in Rajasthan, blending cultural lore and gamification.
              </p>
            </div>
          </div>
        </Link>

        {/* Card 2 */}
        <Link href="/projects/cultural-innovation/gamification-of-vadnagar">
          <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white">
            <div className="w-full aspect-[3/2] relative">
              <Image
                src="/vadnagar-asi.png"
                alt="Gamification of Vadnagar"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Gamification of Vadnagar
              </h3>
              <p className="text-sm text-gray-600">
                A 2D mobile game to raise awareness about ASI&apos;s Vadnagar
                excavation site through interactive storytelling.
              </p>
            </div>
          </div>
        </Link>

        {/* Card 3 */}
        <Link href="/projects/cultural-innovation/dharohar">
          <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white">
            <div className="w-full aspect-[3/2] relative">
              <Image
                src="/dharohar three.png"
                alt="Dharohar - Immersive Museum"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Dharohar - Immersive Museum
              </h3>
              <p className="text-sm text-gray-600">
                Offers an immersive walkthrough of heritage museums such as
                Dharohar, blending education with interactive 3D visualization and
                historical narration.
              </p>
            </div>
          </div>
        </Link>

        {/* Card 4 */}
        <Link href="/projects/cultural-innovation/digital-museums">
          <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white">
            <div className="w-full aspect-[3/2] relative">
              <Image
                src="/Digitization-museum-three.png"
                alt="Digitization of Museums"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Digitization of Museums
              </h3>
              <p className="text-sm text-gray-600">
                3D-enhanced digital experiences for 5 Rajasthan museums, combining
                scanned artifacts, guided narration, and interactive exploration.
              </p>
            </div>
          </div>
        </Link>

        {/* Card 5 */}
        <Link href="/projects/cultural-innovation/charitram">
          <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white">
            <div className="w-full aspect-[3/2] relative">
              <Image
                src="/charitram.jpg"
                alt="AR Storytelling App"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-primary mb-2">
                chARitram - AR Storytelling
              </h3>
              <p className="text-sm text-gray-600">
                chARitram is an interactive AR application that brings ancient
                Indian mythology and folk tales to life through animation and
                spatial storytelling.
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