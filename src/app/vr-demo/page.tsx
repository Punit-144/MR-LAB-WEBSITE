// "use client";

// import Navbar from "../components/Navbar";
// import Footer from "../sections/Footer";
// import { useState, useEffect } from "react";
// import { FaArrowUp } from "react-icons/fa";

// export default function VRDemoPage() {
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 300);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <main className="w-full min-h-screen text-black font-poppins overflow-x-hidden">
//       <Navbar />

//       {/* Title */}
//       <section className="mt-28 md:mt-32 text-center px-6">
//         <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
//           Charitram – 360° VR Demo
//         </h1>
//         <p className="max-w-2xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed">
//           Immerse yourself in this spiritual 360° VR video experience crafted by iHub Drishti. Best viewed with a VR headset or 360-view browser support.
//         </p>
//       </section>

//       {/* YouTube Embed */}
//       <section className="w-[90%] md:w-[60%] mx-auto mt-10">
//         <div className="aspect-video rounded-lg overflow-hidden shadow-md">
//           <iframe
//             width="100%"
//             height="100%"
//             src="https://www.youtube.com/embed/9A5w0VQiNn8"
//             title="Charitram VR Experience"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowFullScreen
//             className="w-full h-full"
//           ></iframe>
//         </div>
//       </section>

//       <Footer />

//       {/* Scroll to Top */}
//       {showScrollTop && (
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="fixed bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all z-[150]"
//           aria-label="Back to top"
//         >
//           <FaArrowUp />
//         </button>
//       )}
//     </main>
//   );
// }
