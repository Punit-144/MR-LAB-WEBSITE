// 'use client';

// import Navbar from "../components/Navbar";
// import MobileNav from "../components/MobileNav";
// import Footer from "../sections/Footer";
// import Image from "next/image";
// import { motion, useInView } from "framer-motion";
// import { useRef, useState, useEffect } from "react";
// import { FaArrowUp } from "react-icons/fa";

// const images = [
//   "/gallery/gallery1.jpg", "/gallery/gallery2.jpg", "/gallery/gallery3.jpg",
//   "/gallery/gallery4.jpg", "/gallery/gallery5.jpg", "/gallery/gallery6.jpg",
//   "/gallery/gallery7.jpg", "/gallery/gallery8.jpg", "/gallery/gallery9.jpg",
//   "/gallery/gallery10.jpg", "/gallery/gallery11.jpg", "/gallery/gallery12.jpg",
//   "/gallery/gallery13.jpg", "/gallery/gallery14.jpg", "/gallery/gallery15.jpg",
//   "/gallery/gallery16.jpg", "/gallery/gallery17.jpg", "/gallery/gallery18.jpg",
//   "/gallery/gallery19.jpg", "/gallery/gallery20.jpg", 
// ];

// const imageDescriptions = [
//   "Visitors exploring XR exhibit",
//   "Hands-on headset session",
//   "Chairman’s welcome visit",
//   "Interactive demo setup",
//   "Game booth – VR zone",
//   "Team members in action",
//   "Children engaging with VR",
//   "Booth overview – IIT Jodhpur",
//   "Welcoming audience at event",
//   "Public interaction zone",
//   "Heritage Walkthrough in VR",
//   "Emotive design showcase",
//   "STEM learning engagement",
//   "Youth exploring digital museum",
//   "Faculty visit during launch",
//   "Student-led demo session",
//   "Booth coordination team",
//   "AR storytelling preview",
//   "Hardware tech display",
//   "Guest touring lab setup",
  
// ];

// function chunkArray(arr: string[], size: number) {
//   const result = [];
//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size));
//   }
//   return result;
// }

// export default function GalleryPage() {
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

//   const rows = chunkArray(images, 2); // 3 images per row
//   const imageSize = { width: 400, height: 250 };

//   return (
//     <main className="w-full overflow-x-hidden relative text-black font-poppins flex flex-col gap-32">
//       <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} openNavi={openNavi} setOpenNavi={setOpenNavi} />
//       <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

//       {/* Header */}
//       <section className="w-full mt-28 md:mt-32 text-center px-6">
//         <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Gallery</h1>
//         <p className="max-w-2xl mx-auto text-gray-700 text-sm md:text-base">
//           A visual showcase of our work, events, and experiences across India.
//         </p>
//       </section>

//       {/* Image Grid */}
//       <section className="w-[90%] md:w-[85%] mx-auto flex flex-col gap-10">
//         {rows.map((row, idx) => {
//           const ref = useRef(null);
//           const isInView = useInView(ref, { once: true, margin: "-100px" });

//           return (
//             <motion.div
//               ref={ref}
//               key={idx}
//               className="flex flex-col md:flex-row justify-center items-center md:gap-6 gap-8"
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.1 }}
//             >
//               {row.map((img, i) => (
//                 <div
//                   key={i}
//                   className="bg-white rounded-lg shadow-md group overflow-hidden relative w-full md:w-[400px] h-[250px]"
//                 >
//                   <Image
//                     src={img}
//                     alt={`Gallery ${idx * 3 + i + 1}`}
//                     width={imageSize.width}
//                     height={imageSize.height}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center px-4">
//                     <p className="text-white text-center text-sm md:text-base font-medium">
//                       {imageDescriptions[idx * 3 + i]}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           );
//         })}
//       </section>

//       <Footer />

//       {/* Back to Top Button */}
//       {showScrollTop && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition z-[150]"
//           aria-label="Back to top"
//         >
//           <FaArrowUp />
//         </button>
//       )}
//     </main>
//   );
// }









// "use client";

// import Navbar from "../components/Navbar";
// import MobileNav from "../components/MobileNav";
// import Footer from "../sections/Footer";
// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import { FaArrowUp, FaTimes } from "react-icons/fa";

// const images = Array.from({ length: 21 }, (_, i) => `/gallery/gallery${i + 1}.jpg`);
// const imageDescriptions = [
//   "Visitors exploring XR exhibit", "Hands-on headset session", "Chairman’s welcome visit",
//   "Interactive demo setup", "Game booth – VR zone", "Team members in action",
//   "Children engaging with VR", "Booth overview – IIT Jodhpur", "Welcoming audience at event",
//   "Public interaction zone", "Heritage Walkthrough in VR", "Emotive design showcase",
//   "STEM learning engagement", "Youth exploring digital museum", "Faculty visit during launch",
//   "Student-led demo session", "Booth coordination team", "AR storytelling preview",
//   "Hardware tech display", "Guest touring lab setup", "Project awards & accolades"
// ];

// function chunkArray<T>(arr: T[], size: number): T[][] {
//   const result: T[][] = [];
//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size));
//   }
//   return result;
// }

// export default function GalleryPage() {
//   const [activeTab, setActiveTab] = useState(0);
//   const [openNavi, setOpenNavi] = useState(false);
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

//   useEffect(() => {
//     const handleScroll = () => setShowScrollTop(window.scrollY > 300);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   const rows = chunkArray(images, 2);
//   const containerSize = { width: 400, height: 250 };

//   return (
//     <main className="w-full overflow-x-hidden relative text-black font-poppins flex flex-col gap-32">
//       <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} openNavi={openNavi} setOpenNavi={setOpenNavi} />
//       <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

//       {/* Title */}
//       <section className="w-full mt-28 md:mt-32 text-center px-6">
//         <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Gallery</h1>
//         <p className="max-w-2xl mx-auto text-gray-700 text-sm md:text-base">
//           Explore moments from events, exhibitions, and our immersive experiences.
//         </p>
//       </section>

//       {/* Gallery Grid */}
//       <section className="w-[90%] md:w-[85%] mx-auto flex flex-col gap-12">
//         {rows.map((row, idx) => {
//           const ref = useRef(null);
//           const isInView = useInView(ref, { once: true });

//           return (
//             <motion.div
//               ref={ref}
//               key={idx}
//               className="flex flex-col md:flex-row gap-8 justify-center items-center"
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5, delay: 0.1 }}
//             >
//               {row.map((img, i) => (
//                 <div
//                   key={i}
//                   onClick={() => setLightbox({ src: img, alt: imageDescriptions[idx * 3 + i] })}
//                   className="relative group rounded-lg overflow-hidden shadow-md bg-white cursor-pointer"
//                   style={{ width: containerSize.width, height: containerSize.height }}
//                 >
//                   <Image
//                     src={img}
//                     alt={`Gallery ${idx * 3 + i + 1}`}
//                     width={containerSize.width}
//                     height={containerSize.height}
//                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-4">
//                     <p className="text-white text-sm md:text-base text-center">
//                       {imageDescriptions[idx * 3 + i]}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           );
//         })}
//       </section>

//       <Footer />

//       {/* Back to Top Button */}
//       {showScrollTop && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition z-[150]"
//           aria-label="Back to top"
//         >
//           <FaArrowUp />
//         </button>
//       )}

//       {/* Lightbox Overlay */}
//       <AnimatePresence>
//         {lightbox && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-[200]"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setLightbox(null)}
//           >
//             <div className="relative max-w-[90vw] max-h-[80vh] w-auto">
//               <Image
//                 src={lightbox.src}
//                 alt={lightbox.alt}
//                 width={1000}
//                 height={600}
//                 className="rounded-lg max-h-[80vh] object-contain"
//               />
//               <button
//                 onClick={() => setLightbox(null)}
//                 className="absolute -top-4 -right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full p-2"
//               >
//                 <FaTimes className="text-xl" />
//               </button>
//             </div>
//             <p className="text-white mt-4 text-sm md:text-base text-center px-4">
//               {lightbox.alt}
//             </p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </main>
//   );
// }











"use client";

import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
import Footer from "../sections/Footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp, FaTimes } from "react-icons/fa";
import GalleryImage from "../components/GalleryImage"; // <-- We now import our new component

const images = Array.from({ length: 21 }, (_, i) => `/gallery/gallery${i + 1}.jpg`);
const imageDescriptions = [
  "Visitors exploring XR exhibit", "Hands-on headset session", "Chairman’s welcome visit",
  "Interactive demo setup", "Game booth – VR zone", "Team members in action",
  "Children engaging with VR", "Booth overview – IIT Jodhpur", "Welcoming audience at event",
  "Public interaction zone", "Heritage Walkthrough in VR", "Emotive design showcase",
  "STEM learning engagement", "Youth exploring digital museum", "Faculty visit during launch",
  "Student-led demo session", "Booth coordination team", "AR storytelling preview",
  "Hardware tech display", "Guest touring lab setup", "Project awards & accolades"
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [openNavi, setOpenNavi] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Helper to chunk the images into rows of 2
  const imageChunks = images.reduce((acc, item, i) => {
    const chunkIndex = Math.floor(i / 2);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(item);
    return acc;
  }, [] as string[][]);

  return (
    <main className="w-full overflow-x-hidden relative text-black font-poppins flex flex-col gap-32">
      <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} openNavi={openNavi} setOpenNavi={setOpenNavi} />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <section className="w-full mt-28 md:mt-32 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Gallery</h1>
        <p className="max-w-2xl mx-auto text-gray-700 text-sm md:text-base">
          Explore moments from events, exhibitions, and our immersive experiences.
        </p>
      </section>

      <section className="w-[90%] md:w-[85%] mx-auto flex flex-col gap-12">
        {imageChunks.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {row.map((src, colIndex) => {
              const imageIndex = rowIndex * 2 + colIndex;
              return (
                // Here we use our new, corrected component inside the loop
                <GalleryImage
                  key={src}
                  src={src}
                  alt={imageDescriptions[imageIndex]}
                  description={imageDescriptions[imageIndex]}
                  onClick={() => setLightbox({ src, alt: imageDescriptions[imageIndex] })}
                />
              );
            })}
          </div>
        ))}
      </section>

      <Footer />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition z-[150]"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-[200]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <div className="relative max-w-[90vw] max-h-[80vh] w-auto">
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={1000}
                height={600}
                className="rounded-lg max-h-[80vh] object-contain"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full p-2"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            <p className="text-white mt-4 text-sm md:text-base text-center px-4">
              {lightbox.alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}