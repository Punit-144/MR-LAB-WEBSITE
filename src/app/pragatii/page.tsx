"use client";
import { useState } from "react";
import PragatiiNavbar from "./PragatiiNavbar";
import Image from "next/image";
import Link from "next/link";

export default function PragatiiPage() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleLockedClick = (sectionName: string, unlockDate: string) => {
    setModalMessage(
      `🚀 Access to ${sectionName} is locked right now. It will open on ${unlockDate}. Stay tuned!`
    );
    setShowModal(true);
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <PragatiiNavbar onLockedClick={handleLockedClick} />

      {/* HERO SECTION etc. */}
      {/* Keep your existing code below */}


      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-4"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/pragatii-bg.png"
            alt="Hero Background"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-sm tracking-widest uppercase text-cyan-300 mb-2">
            iHub Drishti Foundation, IIT Jodhpur in association with TISC
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">
            LAUNCHES HACKATHON
          </h1>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-cyan-300">
            PRAGATII
          </h2>
          <p className="text-lg md:text-xl">
            Lighting the way to technological advancement
          </p>
          <p className="text-cyan-300 mt-4">
            PROGRAM FOR ACCELERATION AND GROWTH IN AI AND XR FUSION TECHNOLOGY
            DEVELOPMENT FOR INNOVATIVE IDEAS
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-cyan-300">
          Welcome to iHub Drishti Foundation
        </h2>
        <p className="text-lg mb-4 text-gray-300">
          iHub Drishti Foundation, the Technology Innovation Hub at IIT Jodhpur
          focused on Computer Vision (CV), Augmented Reality (AR), and Virtual
          Reality (VR) in association with TISC, is initiating a hackathon for
          students, researchers, entrepreneurs, and startups.
        </p>
        <p className="text-lg mb-4 text-gray-300">
          iHub Drishti is a Section-8, Not-for-Profit Organisation promoted by
          IIT Jodhpur under the National Mission on Interdisciplinary
          Cyber-Physical Systems (NM-ICPS). TISC is a Section-8 Company promoted
          by IIT Jodhpur and a Govt. of India-recognized TBI.
        </p>
      </section>

      {/* PHOTOS SECTION */}
<section className="py-16 px-4 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold mb-8 text-center text-cyan-300">
    Highlights from Pragatii 1.0
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Pragatii Photo 1 */}
    <div className="w-full h-[300px] overflow-hidden rounded-lg hover:scale-105 transition duration-300">
      <Image
        src="/pragatii1.png"
        alt="Pragatii Photo 1"
        width={800}
        height={600}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Pragatii Photo 2 */}
    <div className="w-full h-[300px] overflow-hidden rounded-lg hover:scale-105 transition duration-300">
      <Image
        src="/pragatii2.png"
        alt="Pragatii Photo 2"
        width={800}
        height={600}
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</section>

      {/* TILES SECTION */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-cyan-300">
          Explore Pragatii 2.0
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Registration Tile */}
          <div
            className="relative p-6 bg-white/10 backdrop-blur rounded-lg cursor-pointer hover:bg-white/20 transition"
            onClick={() => handleLockedClick("Registration", "20 August 2025")}
          >
            <h3 className="text-xl font-bold mb-2">Registration 🔒</h3>
            <p>Opens soon for participants</p>
          </div>

          {/* Prize Tile */}
          <div
            className="relative p-6 bg-white/10 backdrop-blur rounded-lg cursor-pointer hover:bg-white/20 transition"
            onClick={() => handleLockedClick("Prize", "10 September 2025")}
          >
            <h3 className="text-xl font-bold mb-2">Prize 🔒</h3>
            <p>Details about awards and prize money</p>
          </div>

          {/* Timeline Tile */}
          <Link
            href="#timeline"
            className="p-6 bg-white/10 backdrop-blur rounded-lg hover:bg-white/20 transition block"
          >
            <h3 className="text-xl font-bold mb-2">Timeline</h3>
            <p>View key dates and milestones</p>
          </Link>

          {/* Partners Tile */}
          <Link
            href="#partners"
            className="p-6 bg-white/10 backdrop-blur rounded-lg hover:bg-white/20 transition block"
          >
            <h3 className="text-xl font-bold mb-2">Partners</h3>
            <p>Industry collaboration opportunities</p>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-8 text-center text-gray-400 text-sm">
        <div className="flex justify-center space-x-4 mb-4">
          <Link href="#">
            <span className="hover:text-cyan-300">Twitter</span>
          </Link>
          <Link href="#">
            <span className="hover:text-cyan-300">Facebook</span>
          </Link>
          <Link href="#">
            <span className="hover:text-cyan-300">Instagram</span>
          </Link>
          <Link href="#">
            <span className="hover:text-cyan-300">LinkedIn</span>
          </Link>
        </div>
        <p>
          © 2025 iHub Drishti Foundation, IIT Jodhpur — All Rights Reserved.
        </p>
      </footer>

      {/* LOCK MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white text-black p-8 rounded-lg max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4 text-center">
              🔒 Access Locked
            </h3>
            <p className="mb-6 text-center">{modalMessage}</p>
            <button
              className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 block mx-auto"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}


// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function PragatiiPage() {
//   const [showModal, setShowModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState("");

//   const handleLockedClick = (sectionName: string, unlockDate: string) => {
//     setModalMessage(
//       `🚀 Access to ${sectionName} is locked right now. It will open on ${unlockDate}. Stay tuned!`
//     );
//     setShowModal(true);
//   };

//   return (
//     <main className="min-h-screen bg-black text-white font-sans">
//       {/* NAVBAR */}
//       <nav className="flex justify-between items-center px-8 py-4 bg-black/70 backdrop-blur sticky top-0 z-50">
//         <div className="flex space-x-4 items-center">
//           {/* Logo */}
//           <Image
//             src="/iHub Logo.png"
//             width={100}
//             height={40}
//             alt="TIH Logo"
//             className="object-contain"
//           />
//           {/* <span className="text-xl font-bold tracking-wide text-cyan-300">
//             PRAGATII
//           </span> */}
//         </div>
//         <ul className="flex space-x-6 text-sm font-semibold">
//           <li>
//             <Link href="#hero" className="hover:text-cyan-300">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="#about" className="hover:text-cyan-300">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link href="#timeline" className="hover:text-cyan-300">
//               Timeline
//             </Link>
//           </li>
//           <li>
//             <Link href="#partners" className="hover:text-cyan-300">
//               Partners
//             </Link>
//           </li>
//           <li>
//             <button
//               onClick={() =>
//                 handleLockedClick("Registration", "20 August 2025")
//               }
//               className="hover:text-cyan-300 flex items-center"
//             >
//               Registration <span className="ml-1">🔒</span>
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => handleLockedClick("Prize", "10 September 2025")}
//               className="hover:text-cyan-300 flex items-center"
//             >
//               Prize <span className="ml-1">🔒</span>
//             </button>
//           </li>
//           <li>
//             <Link href="#contact" className="hover:text-cyan-300">
//               Contact
//             </Link>
//           </li>
//         </ul>
//         <div className="space-x-4">
//           <button className="border border-cyan-300 text-cyan-300 px-3 py-1 rounded hover:bg-cyan-300 hover:text-black transition">
//             Submit Query
//           </button>
//           <button className="border border-cyan-300 text-cyan-300 px-3 py-1 rounded hover:bg-cyan-300 hover:text-black transition">
//             Download Brochure
//           </button>
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <section
//         id="hero"
//         className="relative min-h-screen flex flex-col justify-center items-center text-center px-4"
//       >
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <Image
//             src="/pragatii-bg.png"
//             alt="Hero Background"
//             fill
//             className="object-cover brightness-75"
//             priority
//           />
//         </div>

//         {/* Overlay Content */}
//         <div className="relative z-10 max-w-3xl mx-auto">
//           <p className="text-sm tracking-widest uppercase text-cyan-300 mb-2">
//             iHub Drishti Foundation, IIT Jodhpur in association with TISC
//           </p>
//           <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">
//             LAUNCHES HACKATHON
//           </h1>
//           <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-cyan-300">
//             PRAGATII
//           </h2>
//           <p className="text-lg md:text-xl">
//             Lighting the way to technological advancement
//           </p>
//           <p className="text-cyan-300 mt-4">
//             PROGRAM FOR ACCELERATION AND GROWTH IN AI AND XR FUSION TECHNOLOGY
//             DEVELOPMENT FOR INNOVATIVE IDEAS
//           </p>
//         </div>
//       </section>

//       {/* ABOUT SECTION */}
//       <section id="about" className="py-16 px-4 max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold mb-6 text-center text-cyan-300">
//           Welcome to iHub Drishti Foundation
//         </h2>
//         <p className="text-lg mb-4 text-gray-300">
//           iHub Drishti Foundation, the Technology Innovation Hub at IIT Jodhpur
//           focused on Computer Vision (CV), Augmented Reality (AR), and Virtual
//           Reality (VR) in association with TISC, is initiating a hackathon for
//           students, researchers, entrepreneurs, and startups.
//         </p>
//         <p className="text-lg mb-4 text-gray-300">
//           iHub Drishti is a Section-8, Not-for-Profit Organisation promoted by
//           IIT Jodhpur under the National Mission on Interdisciplinary
//           Cyber-Physical Systems (NM-ICPS). TISC is a Section-8 Company promoted
//           by IIT Jodhpur and a Govt. of India-recognized TBI.
//         </p>
//       </section>

//       {/* PHOTOS SECTION */}
//       <section className="py-16 px-4 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold mb-8 text-center text-cyan-300">
//           Highlights from Pragatii 1.0
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <Image
//             src="/pragatii1.jpg"
//             alt="Pragatii Photo 1"
//             width={400}
//             height={300}
//             className="rounded-lg hover:scale-105 transition"
//           />
//           <Image
//             src="/pragatii2.jpg"
//             alt="Pragatii Photo 2"
//             width={400}
//             height={300}
//             className="rounded-lg hover:scale-105 transition"
//           />
//           <Image
//             src="/pragatii3.jpg"
//             alt="Pragatii Photo 3"
//             width={400}
//             height={300}
//             className="rounded-lg hover:scale-105 transition"
//           />
//         </div>
//       </section>

//       {/* TILES SECTION */}
//       <section className="py-16 px-4 max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold mb-8 text-center text-cyan-300">
//           Explore Pragatii 2.0
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Registration Tile */}
//           <div
//             className="relative p-6 bg-white/10 backdrop-blur rounded-lg cursor-pointer hover:bg-white/20 transition"
//             onClick={() => handleLockedClick("Registration", "20 August 2025")}
//           >
//             <h3 className="text-xl font-bold mb-2">Registration 🔒</h3>
//             <p>Opens soon for participants</p>
//           </div>

//           {/* Prize Tile */}
//           <div
//             className="relative p-6 bg-white/10 backdrop-blur rounded-lg cursor-pointer hover:bg-white/20 transition"
//             onClick={() => handleLockedClick("Prize", "10 September 2025")}
//           >
//             <h3 className="text-xl font-bold mb-2">Prize 🔒</h3>
//             <p>Details about awards and prize money</p>
//           </div>

//           {/* Timeline Tile */}
//           <Link
//             href="#timeline"
//             className="p-6 bg-white/10 backdrop-blur rounded-lg hover:bg-white/20 transition block"
//           >
//             <h3 className="text-xl font-bold mb-2">Timeline</h3>
//             <p>View key dates and milestones</p>
//           </Link>

//           {/* Partners Tile */}
//           <Link
//             href="#partners"
//             className="p-6 bg-white/10 backdrop-blur rounded-lg hover:bg-white/20 transition block"
//           >
//             <h3 className="text-xl font-bold mb-2">Partners</h3>
//             <p>Industry collaboration opportunities</p>
//           </Link>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-black py-8 text-center text-gray-400 text-sm">
//         <div className="flex justify-center space-x-4 mb-4">
//           <Link href="#">
//             <span className="hover:text-cyan-300">Twitter</span>
//           </Link>
//           <Link href="#">
//             <span className="hover:text-cyan-300">Facebook</span>
//           </Link>
//           <Link href="#">
//             <span className="hover:text-cyan-300">Instagram</span>
//           </Link>
//           <Link href="#">
//             <span className="hover:text-cyan-300">LinkedIn</span>
//           </Link>
//         </div>
//         <p>
//           © 2025 iHub Drishti Foundation, IIT Jodhpur — All Rights Reserved.
//         </p>
//       </footer>

//       {/* LOCK MODAL */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
//           <div className="bg-white text-black p-8 rounded-lg max-w-md w-full">
//             <h3 className="text-2xl font-bold mb-4 text-center">
//               🔒 Access Locked
//             </h3>
//             <p className="mb-6 text-center">{modalMessage}</p>
//             <button
//               className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 block mx-auto"
//               onClick={() => setShowModal(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }

// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function PragatiiPage() {
//   const [showModal, setShowModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState("");

//   const handleLockedClick = (sectionName: string, unlockDate: string) => {
//     setModalMessage(
//       `🚀 Access to ${sectionName} is locked right now. It will open on ${unlockDate}. Stay tuned!`
//     );
//     setShowModal(true);
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white">
//       {/* NAVBAR */}
//       <nav className="flex justify-between items-center px-8 py-4 bg-black/50 backdrop-blur sticky top-0 z-50">
//         <div className="flex space-x-4 items-center">
//           {/* Logo */}
//           <Image
//             src="/tih_ihub.jpg"
//             width={100}
//             height={40}
//             alt="TIH Logo"
//             className="object-contain"
//           />
//           <span className="text-xl font-bold tracking-wide text-cyan-400">
//             PRAGATII 2.0
//           </span>
//         </div>
//         <ul className="flex space-x-6 text-sm font-semibold">
//           <li>
//             <Link href="#hero" className="hover:text-cyan-400">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="#about" className="hover:text-cyan-400">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link href="#timeline" className="hover:text-cyan-400">
//               Timeline
//             </Link>
//           </li>
//           <li>
//             <Link href="#partners" className="hover:text-cyan-400">
//               Partners
//             </Link>
//           </li>
//           <li>
//             <button
//               onClick={() =>
//                 handleLockedClick("Registration", "20 August 2025")
//               }
//               className="hover:text-cyan-400 flex items-center"
//             >
//               Registration <span className="ml-1">🔒</span>
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => handleLockedClick("Prize", "10 September 2025")}
//               className="hover:text-cyan-400 flex items-center"
//             >
//               Prize <span className="ml-1">🔒</span>
//             </button>
//           </li>
//           <li>
//             <Link href="#contact" className="hover:text-cyan-400">
//               Contact
//             </Link>
//           </li>
//         </ul>
//         <div className="space-x-4">
//           <button className="border border-cyan-400 text-cyan-400 px-3 py-1 rounded hover:bg-cyan-400 hover:text-black transition">
//             Submit Query
//           </button>
//           <button className="border border-cyan-400 text-cyan-400 px-3 py-1 rounded hover:bg-cyan-400 hover:text-black transition">
//             Download Brochure
//           </button>
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <section
//         id="hero"
//         className="relative min-h-screen flex flex-col justify-center items-center text-center px-4"
//       >
//         {/* CSS-Generated Futuristic Background */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black via-purple-900 to-black">
//           <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,255,0.15)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
//         </div>

//         {/* Overlay Content */}
//         <div className="relative z-10 max-w-3xl mx-auto">
//           <p className="text-sm tracking-widest uppercase text-cyan-400 mb-2">
//             iHub Drishti Foundation, IIT Jodhpur in association with TISC
//           </p>
//           <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white neon-glow">
//             LAUNCHES HACKATHON
//           </h1>
//           <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-cyan-400 neon-glow">
//             PRAGATII
//           </h2>
//           <p className="text-lg md:text-xl">
//             Lighting the way to technological advancement
//           </p>
//           <p className="text-cyan-300 mt-4">
//             PROGRAM FOR ACCELERATION AND GROWTH IN AI AND XR FUSION TECHNOLOGY
//             DEVELOPMENT FOR INNOVATIVE IDEAS
//           </p>
//         </div>
//       </section>

//       {/* ABOUT SECTION */}
//       <section id="about" className="py-16 px-4 max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold mb-6 text-center neon-glow">
//           Welcome to iHub Drishti Foundation
//         </h2>
//         <p className="text-lg mb-4">
//           iHub Drishti Foundation, the Technology Innovation Hub at IIT Jodhpur
//           focused on Computer Vision (CV), Augmented Reality (AR), and Virtual
//           Reality (VR) in association with TISC, is initiating a hackathon for
//           students, researchers, entrepreneurs, and startups.
//         </p>
//         <p className="text-lg mb-4">
//           iHub Drishti is a Section-8, Not-for-Profit Organisation promoted by
//           IIT Jodhpur under the National Mission on Interdisciplinary
//           Cyber-Physical Systems (NM-ICPS). TISC is a Section-8 Company promoted
//           by IIT Jodhpur and a Govt. of India-recognized TBI.
//         </p>
//       </section>

//       {/* PHOTOS SECTION */}
//       <section className="py-16 px-4 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold mb-8 text-center neon-glow">
//           Highlights from Pragatii 1.0
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <Image
//             src="/pragatii1.jpg"
//             alt="Pragatii Photo 1"
//             width={400}
//             height={300}
//             className="rounded-lg hover:scale-105 transition"
//           />
//           <Image
//             src="/pragatii2.jpg"
//             alt="Pragatii Photo 2"
//             width={400}
//             height={300}
//             className="rounded-lg hover:scale-105 transition"
//           />
//           <Image
//             src="/pragatii3.jpg"
//             alt="Pragatii Photo 3"
//             width={400}
//             height={300}
//             className="rounded-lg hover:scale-105 transition"
//           />
//         </div>
//       </section>

//       {/* TILES SECTION */}
//       <section className="py-16 px-4 max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold mb-8 text-center neon-glow">
//           Explore Pragatii 2.0
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Registration Tile */}
//           <div
//             className="relative p-6 bg-white/10 backdrop-blur rounded-lg cursor-pointer hover:bg-white/20 transition"
//             onClick={() => handleLockedClick("Registration", "20 August 2025")}
//           >
//             <h3 className="text-xl font-bold mb-2">Registration 🔒</h3>
//             <p>Opens soon for participants</p>
//             <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition">
//               <span className="text-white text-lg font-bold">
//                 🔒 Locked
//               </span>
//             </div>
//           </div>

//           {/* Prize Tile */}
//           <div
//             className="relative p-6 bg-white/10 backdrop-blur rounded-lg cursor-pointer hover:bg-white/20 transition"
//             onClick={() => handleLockedClick("Prize", "10 September 2025")}
//           >
//             <h3 className="text-xl font-bold mb-2">Prize 🔒</h3>
//             <p>Details about awards and prize money</p>
//             <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition">
//               <span className="text-white text-lg font-bold">
//                 🔒 Locked
//               </span>
//             </div>
//           </div>

//           {/* Timeline Tile */}
//           <Link
//             href="#timeline"
//             className="p-6 bg-white/10 backdrop-blur rounded-lg hover:bg-white/20 transition block"
//           >
//             <h3 className="text-xl font-bold mb-2">Timeline</h3>
//             <p>View key dates and milestones</p>
//           </Link>

//           {/* Partners Tile */}
//           <Link
//             href="#partners"
//             className="p-6 bg-white/10 backdrop-blur rounded-lg hover:bg-white/20 transition block"
//           >
//             <h3 className="text-xl font-bold mb-2">Partners</h3>
//             <p>Industry collaboration opportunities</p>
//           </Link>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-black py-8 text-center text-gray-400 text-sm">
//         <div className="flex justify-center space-x-4 mb-4">
//           <Link href="#">
//             <span className="hover:text-cyan-400">Twitter</span>
//           </Link>
//           <Link href="#">
//             <span className="hover:text-cyan-400">Facebook</span>
//           </Link>
//           <Link href="#">
//             <span className="hover:text-cyan-400">Instagram</span>
//           </Link>
//           <Link href="#">
//             <span className="hover:text-cyan-400">LinkedIn</span>
//           </Link>
//         </div>
//         <p>
//           © 2025 iHub Drishti Foundation, IIT Jodhpur — All Rights Reserved.
//         </p>
//       </footer>

//       {/* LOCK MODAL */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
//           <div className="bg-white text-black p-8 rounded-lg max-w-md w-full neon-border">
//             <h3 className="text-2xl font-bold mb-4 text-center">
//               🔒 Access Locked
//             </h3>
//             <p className="mb-6 text-center">{modalMessage}</p>
//             <button
//               className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 block mx-auto"
//               onClick={() => setShowModal(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }

// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function PragatiiPage() {
//   const [showModal, setShowModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState("");

//   const handleLockedClick = (sectionName: string, unlockDate: string) => {
//     setModalMessage(
//       `🚀 Access to ${sectionName} is locked right now. It will open on ${unlockDate}. Stay tuned!`
//     );
//     setShowModal(true);
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white">
//       {/* NAVBAR */}
//       <nav className="flex justify-between items-center px-8 py-4 bg-black/50 backdrop-blur sticky top-0 z-50">
//         <div className="flex space-x-4 items-center">
//           {/* Logo */}
//           <Image
//             src="/tih_ihub.jpg"
//             width={100}
//             height={40}
//             alt="TIH Logo"
//             className="object-contain"
//           />
//           <span className="text-xl font-bold tracking-wide text-cyan-400">
//             PRAGATII 2.0
//           </span>
//         </div>
//         <ul className="flex space-x-6 text-sm font-semibold">
//           <li>
//             <Link href="#hero" className="hover:text-cyan-400">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="#about" className="hover:text-cyan-400">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link href="#timeline" className="hover:text-cyan-400">
//               Timeline
//             </Link>
//           </li>
//           <li>
//             <Link href="#partners" className="hover:text-cyan-400">
//               Partners
//             </Link>
//           </li>
//           <li>
//             <button
//               onClick={() =>
//                 handleLockedClick("Registration", "20 August 2025")
//               }
//               className="hover:text-cyan-400 flex items-center"
//             >
//               Registration <span className="ml-1">🔒</span>
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => handleLockedClick("Prize", "10 September 2025")}
//               className="hover:text-cyan-400 flex items-center"
//             >
//               Prize <span className="ml-1">🔒</span>
//             </button>
//           </li>
//           <li>
//             <Link href="#contact" className="hover:text-cyan-400">
//               Contact
//             </Link>
//           </li>
//         </ul>
//         <div className="space-x-4">
//           <button className="border border-cyan-400 text-cyan-400 px-3 py-1 rounded hover:bg-cyan-400 hover:text-black transition">
//             Submit Query
//           </button>
//           <button className="border border-cyan-400 text-cyan-400 px-3 py-1 rounded hover:bg-cyan-400 hover:text-black transition">
//             Download Brochure
//           </button>
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <section
//         id="hero"
//         className="relative min-h-screen flex flex-col justify-center items-center text-center px-4"
//       >
//         {/* Background */}
//         <div className="absolute inset-0 bg-[url('/hackathon-bg.jpg')] bg-cover bg-center brightness-50" />
//         {/* Overlay Content */}
//         <div className="relative z-10 max-w-3xl mx-auto">
//           <p className="text-sm tracking-widest uppercase text-cyan-400 mb-2">
//             iHub Drishti Foundation, IIT Jodhpur in association with TISC
//           </p>
//           <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white neon-glow">
//             LAUNCHES HACKATHON
//           </h1>
//           <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-cyan-400 neon-glow">
//             PRAGATII
//           </h2>
//           <p className="text-lg md:text-xl">
//             Lighting the way to technological advancement
//           </p>
//           <p className="text-cyan-300 mt-4">
//             PROGRAM FOR ACCELERATION AND GROWTH IN AI AND XR FUSION TECHNOLOGY
//             DEVELOPMENT FOR INNOVATIVE IDEAS
//           </p>
//         </div>
//       </section>

//       {/* ABOUT SECTION */}
//       <section id="about" className="py-16 px-4 max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold mb-6 text-center neon-glow">
//           Welcome to iHub Drishti Foundation
//         </h2>
//         <p className="text-lg mb-4">
//           iHub Drishti Foundation, the Technology Innovation Hub at IIT Jodhpur
//           focused on Computer Vision (CV), Augmented Reality (AR), and Virtual
//           Reality (VR) in association with TISC, is initiating a hackathon for
//           students, researchers, entrepreneurs, and startups.
//         </p>
//         <p className="text-lg mb-4">
//           iHub Drishti is a Section-8, Not-for-Profit Organisation promoted by
//           IIT Jodhpur under the National Mission on Interdisciplinary
//           Cyber-Physical Systems (NM-ICPS). TISC is a Section-8 Company promoted
//           by IIT Jodhpur and a Govt. of India-recognized TBI.
//         </p>
//       </section>

//       {/* PHOTOS SECTION */}
//       <section className="py-16 px-4 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold mb-8 text-center neon-glow">
//           Highlights from Pragatii 1.0
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <Image
//             src="/pragatii1.jpg"
//             alt="Pragatii Photo 1"
//             width={400}
//             height={300}
//             className="rounded-lg hover:scale-105 transition"
//           />
//           <Image
//             src="/pragatii2.jpg"
//             alt="Pragatii Photo 2"
//             width={400}
//             height={300}
//             className="rounded-lg hover:scale-105 transition"
//           />
//           <Image
//             src="/pragatii3.jpg"
//             alt="Pragatii Photo 3"
//             width={400}
//             height={300}
//             className="rounded-lg hover:scale-105 transition"
//           />
//         </div>
//       </section>

//       {/* TILES SECTION */}
//       <section className="py-16 px-4 max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold mb-8 text-center neon-glow">
//           Explore Pragatii 2.0
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Registration Tile */}
//           <div
//             className="relative p-6 bg-white/10 backdrop-blur rounded-lg cursor-pointer hover:bg-white/20 transition"
//             onClick={() => handleLockedClick("Registration", "20 August 2025")}
//           >
//             <h3 className="text-xl font-bold mb-2">Registration 🔒</h3>
//             <p>Opens soon for participants</p>
//             <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition">
//               <span className="text-white text-lg font-bold">
//                 🔒 Locked
//               </span>
//             </div>
//           </div>

//           {/* Prize Tile */}
//           <div
//             className="relative p-6 bg-white/10 backdrop-blur rounded-lg cursor-pointer hover:bg-white/20 transition"
//             onClick={() => handleLockedClick("Prize", "10 September 2025")}
//           >
//             <h3 className="text-xl font-bold mb-2">Prize 🔒</h3>
//             <p>Details about awards and prize money</p>
//             <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition">
//               <span className="text-white text-lg font-bold">
//                 🔒 Locked
//               </span>
//             </div>
//           </div>

//           {/* Timeline Tile */}
//           <Link
//             href="#timeline"
//             className="p-6 bg-white/10 backdrop-blur rounded-lg hover:bg-white/20 transition block"
//           >
//             <h3 className="text-xl font-bold mb-2">Timeline</h3>
//             <p>View key dates and milestones</p>
//           </Link>

//           {/* Partners Tile */}
//           <Link
//             href="#partners"
//             className="p-6 bg-white/10 backdrop-blur rounded-lg hover:bg-white/20 transition block"
//           >
//             <h3 className="text-xl font-bold mb-2">Partners</h3>
//             <p>Industry collaboration opportunities</p>
//           </Link>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-black py-8 text-center text-gray-400 text-sm">
//         <div className="flex justify-center space-x-4 mb-4">
//           <Link href="#">
//             <span className="hover:text-cyan-400">Twitter</span>
//           </Link>
//           <Link href="#">
//             <span className="hover:text-cyan-400">Facebook</span>
//           </Link>
//           <Link href="#">
//             <span className="hover:text-cyan-400">Instagram</span>
//           </Link>
//           <Link href="#">
//             <span className="hover:text-cyan-400">LinkedIn</span>
//           </Link>
//         </div>
//         <p>
//           © 2025 iHub Drishti Foundation, IIT Jodhpur — All Rights Reserved.
//         </p>
//       </footer>

//       {/* LOCK MODAL */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
//           <div className="bg-white text-black p-8 rounded-lg max-w-md w-full neon-border">
//             <h3 className="text-2xl font-bold mb-4 text-center">
//               🔒 Access Locked
//             </h3>
//             <p className="mb-6 text-center">{modalMessage}</p>
//             <button
//               className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 block mx-auto"
//               onClick={() => setShowModal(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }


// // app/pragatii/page.tsx

// "use client";
// import { useState } from "react";
// import Link from "next/link";

// export default function PragatiiLanding() {
//   const [showPartners, setShowPartners] = useState(false);

//   const handlePartnersClick = () => {
//     setShowPartners(true);
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-r from-indigo-600 to-blue-500 text-white flex flex-col items-center justify-center p-8">
//       <h1 className="text-4xl font-bold mb-4">Welcome to Pragatii 2.0</h1>
//       <p className="text-lg mb-8 text-center max-w-2xl">
//         India's premier Hackathon for AI and XR Fusion. Right now, our call for
//         industry partners is open. Other sections are locked for an exciting
//         reveal soon!
//       </p>

//       <div className="grid grid-cols-3 gap-8">
//         {/* Locked Tile - Prizes */}
//         <div className="relative p-6 bg-white/10 rounded-lg cursor-not-allowed">
//           <h2 className="text-xl font-bold">Prizes</h2>
//           <p className="text-sm">₹10 Lakh prize pool</p>
//           <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center">
//             <span className="text-white text-lg font-bold">🔒 Locked</span>
//           </div>
//         </div>

//         {/* Locked Tile - Schedule */}
//         <div className="relative p-6 bg-white/10 rounded-lg cursor-not-allowed">
//           <h2 className="text-xl font-bold">Schedule</h2>
//           <p className="text-sm">Key dates and milestones</p>
//           <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center">
//             <span className="text-white text-lg font-bold">🔒 Locked</span>
//           </div>
//         </div>

//         {/* Active Tile - Partners */}
//         <div
//           className="p-6 bg-white/20 rounded-lg cursor-pointer hover:bg-white/30 transition-all"
//           onClick={handlePartnersClick}
//         >
//           <h2 className="text-xl font-bold">Industry Partners</h2>
//           <p className="text-sm">Open for Collaboration</p>
//         </div>
//       </div>

//       {/* Partners Section Modal */}
//       {showPartners && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
//           <div className="bg-white text-black p-8 rounded-lg max-w-lg w-full">
//             <h2 className="text-2xl font-bold mb-4">
//               Industry Partnership Opportunities
//             </h2>
//             <p className="mb-4">
//               Pragatii 2.0 is seeking partners from industry to support and
//               collaborate in shaping the future of AI and XR Fusion technologies.
//               Partner with us for brand visibility, talent scouting, and
//               innovation.
//             </p>
//             <p className="mb-4">
//               Reach out to us at:{" "}
//               <a
//                 href="mailto:arvrinfo@ihub-drishti.ai"
//                 className="text-blue-600 font-bold"
//               >
//                 arvrinfo@ihub-drishti.ai
//               </a>
//             </p>
//             <button
//               className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//               onClick={() => setShowPartners(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }
