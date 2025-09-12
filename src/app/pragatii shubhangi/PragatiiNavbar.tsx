// 'use client';
// import { useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const PragatiiNavbar = () => {
//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       const navbar = document.querySelector('nav'); // Get navbar element
//       const navbarHeight = navbar ? navbar.clientHeight : 80; // Default to 80px if not found
//       const elementPosition = element.offsetTop; // Get element's position relative to the document
//       window.scrollTo({
//         top: elementPosition - navbarHeight, // Adjust based on navbar height
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     // <nav className="bg-gray-900 text-white py-4 px-6 fixed w-full top-0 z-50">
//     <nav className="bg-gray-900 text-white py-4 px-6 fixed w-full top-0 z-50 shadow-md h-31 ">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Left side - Logos */}
//         <div className="flex items-center space-x-4">
//           <Link href="/">
//             <Image
//               src="/tih_ihub.jpg"
//               alt="TIH Logo"
//               width={100}
//               height={40}
//               className="object-contain"
//             />
//           </Link>
//         </div>

//         {/* Center - Navigation Links */}
//         <div className="flex items-center space-x-8">
//           <Link 
//             href="/"
//             className="hover:text-blue-400 transition-colors duration-300 text-sm font-semibold"
//           >
//             Home
//           </Link>
//           <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors duration-300 text-sm font-semibold">
//             About
//           </button>
//           <button onClick={() => scrollToSection('event')} className="hover:text-blue-400 transition-colors duration-300 text-sm font-semibold">
//             Event
//           </button>
//           <button onClick={() => scrollToSection('awards')} className="hover:text-blue-400 transition-colors duration-300 text-sm font-semibold">
//             Awards
//           </button>
//           <button onClick={() => scrollToSection('faq')} className="hover:text-blue-400 transition-colors duration-300 text-sm font-semibold">
//             FAQ
//           </button>
//           <button onClick={() => scrollToSection('timeline')} className="hover:text-blue-400 transition-colors duration-300 text-sm font-semibold">
//             Timeline
//           </button>
//           <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors duration-300 text-sm font-semibold">
//             Contact
//           </button>
//         </div>

//         {/* Right side - Action Buttons */}
//         <div className="flex items-center space-x-4">
//           <button
//             className="border border-blue-500 hover:bg-blue-500 text-white px-4 py-2 rounded text-sm font-semibold transition-all duration-300"
//             onClick={() => window.open("https://docs.google.com/forms/d/1gqgMyQUs8FnLYUrHMB81UbNetbAXRNTMaYijKXSvPU4/viewform?edit_requested=true", "_blank")}
//           >
//             REGISTER
//           </button>

//           <button className="border border-blue-500 hover:bg-blue-500 text-white px-4 py-2 rounded text-sm font-semibold transition-all duration-300">
//             DOWNLOAD BROCHURE
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default PragatiiNavbar;


'use client';

const PragatiiNavbar = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -100; // Adjust based on navbar height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-gray-900 text-white h-[7.75rem] fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10">
      <div className="text-2xl font-bold cursor-pointer" onClick={() => scrollToSection("home")}>
        PRAGATII Hackathon
      </div>
      <div className="space-x-6 hidden md:flex">
        {["home", "about", "event", "awards", "faq", "timeline", "contact"].map((id) => (
          <button key={id} onClick={() => scrollToSection(id)} className="hover:text-blue-400 transition duration-300">
            {id.toUpperCase()}
          </button>
        ))}
        <button
          onClick={() => window.open('/brochure.pdf', '_blank')}
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          DOWNLOAD BROCHURE
        </button>
      </div>
    </nav>
  );
};

export default PragatiiNavbar;
