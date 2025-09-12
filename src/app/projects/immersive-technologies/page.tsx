// "use client";

// import Navbar from "../../components/Navbar";
// import MobileNav from "../../components/MobileNav";
// import Footer from "../../sections/Footer";
// import { useEffect, useState } from "react";
// import { FaArrowUp } from "react-icons/fa";
// import Image from "next/image";
// import Link from "next/link";

// export default function ImmersiveTechPage() {
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

//       {/* Title Section */}
//       <section className="w-full mt-28 md:mt-32 text-center px-6">
//         <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
//           Immersive Technologies
//         </h1>
//         <p className="max-w-3xl mx-auto text-gray-700 text-sm md:text-base">
//           Explore our multi-sensory innovations including haptics, olfactory feedback, XR-based food experiences, and emotion-enabled virtual reality systems.
//         </p>

//         {/* back to projects button */}
//         <Link
//           href="/projects"
//           className="text-sm text-primary underline hover:text-black transition mt-4 inline-block"
//         >
//           ← Back to Projects
//         </Link>
//       </section>

//       {/* Project Highlights */}
//       <section className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Card 1 */}
//         <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
//           <Image
//             src="/projects/immersive1.jpg"
//             alt="Olfactory VR"
//             width={800}
//             height={400}
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-4">
//             <h2 className="text-lg font-semibold text-primary mb-2">Olfactory Virtual Reality</h2>
//             <p className="text-sm text-gray-600">
//               Integrated scent systems into VR environments to enhance realism for education, mental health, and immersive retail demos.
//             </p>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
//           <Image
//             src="/projects/immersive2.jpg"
//             alt="Food XR"
//             width={800}
//             height={400}
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-4">
//             <h2 className="text-lg font-semibold text-primary mb-2">Multisensory XR Food Experiences</h2>
//             <p className="text-sm text-gray-600">
//               Created virtual food tasting modules that simulate taste and smell cues for dietary training, culinary education, and food-tech R&D.
//             </p>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
//           <Image
//             src="/projects/immersive3.jpg"
//             alt="Emotional VR"
//             width={800}
//             height={400}
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-4">
//             <h2 className="text-lg font-semibold text-primary mb-2">Emotion-enabled Immersion</h2>
//             <p className="text-sm text-gray-600">
//               Developed VR characters with emotion detection and response capabilities using facial cues and AI-based sentiment analysis.
//             </p>
//           </div>
//         </div>

//         {/* Card 4 */}
//         <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
//           <Image
//             src="/projects/immersive4.jpg"
//             alt="Haptic Feedback Systems"
//             width={800}
//             height={400}
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-4">
//             <h2 className="text-lg font-semibold text-primary mb-2">Advanced Haptic Feedback Systems</h2>
//             <p className="text-sm text-gray-600">
//               Built haptic gloves and suits for realistic physical feedback in VR environments, ideal for industrial training and rehabilitation.
//             </p>
//           </div>
//         </div>
//       </section>

//       <Footer />

//       {/* Scroll to Top */}
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
