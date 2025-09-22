// "use client";
// import Navbar from "@/app/components/Navbar";
// import Footer from "@/app/sections/Footer";
// import Image from "next/image";
// import MobileNav from "@/app/components/MobileNav";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Head from "next/head";
// import Link from "next/link";
// import LoadingSpinner from "@/app/components/LoadingSpinner";

// export default function CultureHeritagePage() {
//   const [activeTab, setActiveTab] = useState(0);
//   const [openNavi, setOpenNavi] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading time
//     setTimeout(() => setIsLoading(false), 1000);
//   }, []);

//   if (isLoading) {
//     return <LoadingSpinner />;
//   }

//   return (
//     <>
//       <Head>
//         <title>Culture & Heritage Projects - MR Lab</title>
//         <meta 
//           name="description" 
//           content="Explore our Culture & Heritage projects including museum digitization and AR storytelling" 
//         />
//       </Head>

//       <main className="w-full overflow-x-hidden relative text-black font-poppins flex flex-col gap-32">
//         <MobileNav
//           activeTab={activeTab}
//           setActiveTab={setActiveTab}
//           openNavi={openNavi}
//           setOpenNavi={setOpenNavi}
//         />
//         <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        
//         {/* Breadcrumb Navigation */}
//         <div className="w-[80%] mx-auto mt-24">
//           <nav className="flex text-gray-500 text-sm">
//             <Link href="/" className="hover:text-primary">
//               Home
//             </Link>
//             <span className="mx-2">/</span>
//             <Link href="/#project" className="hover:text-primary">
//               Projects
//             </Link>
//             <span className="mx-2">/</span>
//             <span className="text-primary">Culture & Heritage</span>
//           </nav>
//         </div>

//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="w-full md:min-h-[70vh]"
//         >
//           <div className="w-[80%] mx-auto">
//             <motion.h1 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2 }}
//               className="text-3xl font-bold text-primary mb-8"
//             >
//               Culture & Heritage Projects
//             </motion.h1>
            
//             {/* Project 1 */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden"
//             >
//               <div className="relative w-full h-[400px] overflow-hidden">
//                 <Image
//                   src="/museum-digitization.jpg"
//                   alt="Museum Digitization"
//                   fill
//                   className="object-cover transition-transform duration-300 hover:scale-105"
//                 />
//               </div>
//               <div className="p-6">
//                 <h2 className="text-2xl font-semibold mb-4 text-primary">
//                   Digitization of Five Museum of Rajasthan
//                 </h2>
//                 <p className="text-gray-700 leading-relaxed">
//                   This project involves the comprehensive digitization of five major museums in Rajasthan, 
//                   preserving and making accessible the rich cultural heritage of the region. Through advanced 
//                   digital technologies, we're creating detailed 3D scans and interactive experiences of 
//                   historical artifacts and exhibitions.
//                 </p>
//                 <div className="mt-4 flex gap-2 flex-wrap">
//                   <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
//                     3D Scanning
//                   </span>
//                   <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
//                     Digital Preservation
//                   </span>
//                   <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
//                     Museum Technology
//                   </span>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Project 2 */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden"
//             >
//               <div className="relative w-full h-[400px] overflow-hidden">
//                 <Image
//                   src="/charatram.jpg"
//                   alt="chARatram"
//                   fill
//                   className="object-cover transition-transform duration-300 hover:scale-105"
//                 />
//               </div>
//               <div className="p-6">
//                 <h2 className="text-2xl font-semibold mb-4 text-primary">
//                   chARatram: AR based Ancient storytelling
//                 </h2>
//                 <p className="text-gray-700 leading-relaxed">
//                   chARatram brings ancient paintings to life through Augmented Reality. This innovative 
//                   project allows visitors to experience historical narratives and cultural stories through 
//                   their mobile devices, creating an immersive and interactive learning experience.
//                 </p>
//                 <div className="mt-4 flex gap-2 flex-wrap">
//                   <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
//                     Augmented Reality
//                   </span>
//                   <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
//                     Storytelling
//                   </span>
//                   <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
//                     Interactive Experience
//                   </span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>

//         <Footer />
//       </main>
//     </>
//   );
// }





















"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/sections/Footer";
import Image from "next/image";
import MobileNav from "@/app/components/MobileNav";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import LoadingSpinner from "@/app/components/LoadingSpinner";

export default function CultureHeritagePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [openNavi, setOpenNavi] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Head>
        <title>Culture & Heritage Projects - MR Lab</title>
        <meta 
          name="description" 
          content="Explore our Culture & Heritage projects including museum digitization and AR storytelling" 
        />
      </Head>

      <main className="w-full overflow-x-hidden relative text-black font-poppins flex flex-col gap-32">
        <MobileNav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          openNavi={openNavi}
          setOpenNavi={setOpenNavi}
        />
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Breadcrumb Navigation */}
        <div className="w-[80%] mx-auto mt-24">
          <nav className="flex text-gray-500 text-sm">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/#project" className="hover:text-primary">
              Projects
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary">Culture & Heritage</span>
          </nav>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:min-h-[70vh]"
        >
          <div className="w-[80%] mx-auto">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-primary mb-8"
            >
              Culture & Heritage Projects
            </motion.h1>
            
            {/* Project 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative w-full h-[400px] overflow-hidden">
                <Image
                  src="/museum-digitization.jpg"
                  alt="Museum Digitization"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-primary">
                  Digitization of Five Museum of Rajasthan
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  This project involves the comprehensive digitization of five major museums in Rajasthan, 
                  preserving and making accessible the rich cultural heritage of the region. Through advanced 
                  digital technologies, we&apos;re creating detailed 3D scans and interactive experiences of 
                  historical artifacts and exhibitions.
                </p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    3D Scanning
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Digital Preservation
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Museum Technology
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative w-full h-[400px] overflow-hidden">
                <Image
                  src="/charatram.jpg"
                  alt="chARatram"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-primary">
                  chARatram: AR based Ancient storytelling
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  chARatram brings ancient paintings to life through Augmented Reality. This innovative 
                  project allows visitors to experience historical narratives and cultural stories through 
                  their mobile devices, creating an immersive and interactive learning experience.
                </p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Augmented Reality
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Storytelling
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Interactive Experience
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <Footer />
      </main>
    </>
  );
}