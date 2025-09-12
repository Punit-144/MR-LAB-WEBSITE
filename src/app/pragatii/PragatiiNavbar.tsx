"use client";
import Link from "next/link";
import Image from "next/image";

interface PragatiiNavbarProps {
  onLockedClick: (sectionName: string, unlockDate: string) => void;
}

export default function PragatiiNavbar({
  onLockedClick,
}: PragatiiNavbarProps) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white z-50 shadow border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-14">
        {/* Left side - Logo and microsite name */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src="/ihub logo.png"
              alt="TIH Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>
          {/* Uncomment if you want site name beside logo */}
          {/* <span className="text-cyan-300 font-semibold text-lg">
            PRAGATII 2.0
          </span> */}
          {/* Uncomment if you want back link to MR Lab */}
          {/* <Link
            href="https://ar-vr.ihub-drishti.ai/"
            target="_blank"
            className="text-sm text-gray-400 hover:text-cyan-300 transition"
          >
            ← Back to AR-VR Lab
          </Link> */}
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <li>
            <Link href="#hero" className="hover:text-cyan-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-cyan-300">
              About
            </Link>
          </li>
      
          <li>
            <Link href="#partners" className="hover:text-cyan-300">
              Partners
            </Link>
          </li>
          <li>
            <button
              onClick={() =>
                onLockedClick("Registration", "20 August 2025")
              }
              className="hover:text-cyan-300 flex items-center"
            >
              Registration <span className="ml-1">🔒</span>
            </button>
          </li>
           <li>
            <button 
              onClick={() =>
                onLockedClick("Timeline", "10 September 2025")
              }
              className="hover:text-cyan-300 flex items-center"
              >
                Timeline <span className="ml-1">🔒</span>
              </button>
          </li>
          <li>
            <button
              onClick={() =>
                onLockedClick("Prize", "10 September 2025")
              }
              className="hover:text-cyan-300 flex items-center"
            >
              Prize <span className="ml-1">🔒</span>
            </button>
          </li>
          {/* <li>
            <Link href="#contact" className="hover:text-cyan-300">
              Contact
            </Link>
          </li> */}
        </ul>

        {/* Right CTA buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <button className="border border-cyan-300 text-cyan-300 px-3 py-1 rounded hover:bg-cyan-300 hover:text-black transition">
            Submit Query
          </button>
          <button className="border border-cyan-300 text-cyan-300 px-3 py-1 rounded hover:bg-cyan-300 hover:text-black transition">
            Download Brochure
          </button>
        </div>
      </div>
    </nav>
  );
}
