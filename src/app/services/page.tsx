// "use client";

// import Navbar from "../components/Navbar";
// import MobileNav from "../components/MobileNav";
// import Footer from "../sections/Footer";
// import { useEffect, useState } from "react";
// import { FaArrowUp } from "react-icons/fa";
// import DownloadBrochureButton from "../components/DownloadBrochureButton";
// import ServiceCard from "../components/ServiceCard";

// const services = [
//   {
//     title: "Industry Consulting",
//     description: "We collaborate with industries to develop tailored XR solutions, conduct feasibility studies, and deliver proofs of concept.",
//     icon: "/services/consulting.png",
//   },
//   {
//     title: "3D Modeling & Scanning",
//     description: "We create high-quality 3D assets, scan monuments and artifacts, and build VR-ready environments from real-world data.",
//     icon: "/services/scanning.png",
//   },
//   {
//     title: "Interactive Applications",
//     description: "We build AR/VR educational tools, cultural games, and product demonstrations using Unity and WebXR frameworks.",
//     icon: "/services/apps.png",
//   },
//   {
//     title: "XR Toolkits",
//     description: "Custom XR + AI toolkits for training, simulation, and classroom integration — optimized for mobile and headset deployment.",
//     icon: "/services/toolkit.png",
//   },
//   {
//     title: "Custom XR Labs",
//     description: "From hardware selection to content deployment, we help academic and industrial partners set up tailored XR labs.",
//     icon: "/services/lab.png",
//   },
//   {
//     title: "Outreach & Exhibitions",
//     description: "We design immersive booths and public experiences for exhibitions, science fairs, and outreach events.",
//     icon: "/services/exhibition.png",
//   },
// ];

// export default function ServicesPage() {
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
//       <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} openNavi={openNavi} setOpenNavi={setOpenNavi} />
//       <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

//       {/* Header Section */}
//       <section className="w-full mt-28 md:mt-32 text-center px-6">
//         <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h1>
//         <p className="max-w-2xl mx-auto text-gray-700 text-sm md:text-base">
//           From XR product development and consulting to immersive outreach and lab setup, we support a wide range of industry and academic needs.
//         </p>
//       </section>

//       {/* Service Cards */}
//       <section className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {services.map((service, i) => (
//           <ServiceCard
//             key={i}
//             title={service.title}
//             description={service.description}
//             icon={service.icon}
//           />
//         ))}
//       </section>

//       {/* Download Brochure */}
//       <div className="text-center mt-10">
//         <DownloadBrochureButton />
//       </div>

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

// import Navbar from "../components/Navbar";
// import MobileNav from "../components/MobileNav";
// import Footer from "../sections/Footer";
// import { useEffect, useState } from "react";
// import { FaArrowUp } from "react-icons/fa";
// import Image from "next/image";
// import Link from "next/link";

// const services = [
//   {
//     title: "Industry Consulting",
//     description:
//       "We collaborate with industries to develop tailored XR solutions, conduct feasibility studies, and deliver proofs of concept.",
//     icon: "/Service1.png",
//     link: "/services/industry-consulting",
//   },
//   {
//     title: "3D Modeling & Scanning",
//     description:
//       "We create high-quality 3D assets, scan monuments and artifacts, and build VR-ready environments from real-world data.",
//     icon: "/Service2.png",
//     link: "/services/3d-modeling-scanning",
//   },
//   {
//     title: "Interactive Applications",
//     description:
//       "We build AR/VR educational tools, cultural games, and product demonstrations using Unity and WebXR frameworks.",
//     icon: "/services/apps.png",
//     link: "/services/interactive-applications",
//   },
//   {
//     title: "XR Toolkits",
//     description:
//       "Custom XR + AI toolkits for training, simulation, and classroom integration — optimized for mobile and headset deployment.",
//     icon: "/services/toolkit.png",
//     link: "/services/xr-toolkits",
//   },
//   {
//     title: "Custom XR Labs",
//     description:
//       "From hardware selection to content deployment, we help academic and industrial partners set up tailored XR labs.",
//     icon: "/services/lab.png",
//     link: "/services/custom-xr-labs",
//   },
//   {
//     title: "Outreach & Exhibitions",
//     description:
//       "We design immersive booths and public experiences for exhibitions, science fairs, and outreach events.",
//     icon: "/services/exhibition.png",
//     link: "/services/outreach-exhibitions",
//   },
// ];

// export default function ServicesPage() {
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

//       {/* Header Section */}
//       <section className="w-full mt-28 md:mt-32 text-center px-6">
//         <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
//           Our Services
//         </h1>
//         <p className="max-w-2xl mx-auto text-gray-700 text-sm md:text-base">
//           From XR product development and consulting to immersive outreach and
//           lab setup, we support a wide range of industry and academic needs.
//         </p>
//       </section>

//       {/* Services Grid */}
//       <section className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {services.map((service, i) => (
//           <Link href={service.link} key={i}>
//             <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-xl transition">
//               {/* Image */}
//               <div className="w-full aspect-[4/3] relative">
//                 <Image
//                   src={service.icon}
//                   alt={service.title}
//                   fill
//                   className="object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//               </div>
//               {/* Content */}
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-primary mb-2">
//                   {service.title}
//                 </h3>
//                 <p className="text-sm text-gray-600">
//                   {service.description}
//                 </p>
//               </div>
//             </div>
//           </Link>
//         ))}
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

import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
import Footer from "../sections/Footer";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Industry Consulting",
    description:
      "We collaborate with industries to develop tailored XR solutions, conduct feasibility studies, and deliver proofs of concept.",
    icon: "/Service1.png",
  },
  {
    title: "3D Modeling & Scanning",
    description:
      "We create high-quality 3D assets, scan monuments and artifacts, and build VR-ready environments from real-world data.",
    icon: "/Service2.png",
  },
  {
    title: "Interactive Applications",
    description:
      "We build AR/VR educational tools, cultural games, and product demonstrations using Unity and WebXR frameworks.",
    icon: "/Service3.png",
  },
  {
    title: "XR Toolkits",
    description:
      "Custom XR + AI toolkits for training, simulation, and classroom integration — optimized for mobile and headset deployment.",
    icon: "/Service4.png",
  },
  {
    title: "Custom XR Labs",
    description:
      "From hardware selection to content deployment, we help academic and industrial partners set up tailored XR labs.",
    icon: "/Service5.png",
  },
  {
    title: "Outreach & Exhibitions",
    description:
      "We design immersive booths and public experiences for exhibitions, science fairs, and outreach events.",
    icon: "/Service6.png",
  },
];

export default function ServicesPage() {
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
          Our Services
        </h1>
        <p className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto">
          From XR product development and consulting to immersive outreach and
          lab setup, we support a wide range of industry and academic needs.
        </p>

        {/* Back to Projects Button
        <Link
          href="/projects"
          className="text-sm text-primary underline hover:text-black transition inline-block mx-auto"
        >
          ← Back to Projects
        </Link> */}
      </section>

      {/* Services Cards */}
      <section className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
        {services.map((service, i) => (
          <div
            key={i}
            className="group cursor-default overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-xl transition"
          >
            <div className="w-full aspect-[3/2] relative">
              <Image
                src={service.icon}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
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
