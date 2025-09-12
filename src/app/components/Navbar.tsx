/* Latest Code */
'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, Dispatch, SetStateAction } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

interface NavbarProps {
  activeTab?: number;
  setActiveTab?: Dispatch<SetStateAction<number>>;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[85%] z-[100] bg-[rgba(255,255,255,0.25)] backdrop-blur-md shadow-md rounded-lg px-4 md:px-6 py-2 transition-all duration-300">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src="/newlogo.png" alt="Logo" width={160} height={160} className="w-20 sm:w-24 md:w-28" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Items */}
        <ul className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto mt-2 md:mt-0 bg-white md:bg-transparent rounded-lg md:rounded-none shadow-lg md:shadow-none p-4 md:p-0 gap-4 md:gap-8 items-center font-semibold text-base`}>
          <li className="w-full md:w-auto text-center">
            <Link href="/" className="hover:text-primary block w-full">Home</Link>
          </li>

          {/* About Dropdown */}
          <li className="relative w-full md:w-auto text-center" onMouseEnter={() => handleMouseEnter("about")} onMouseLeave={handleMouseLeave}>
            <span className="flex items-center gap-1 cursor-pointer hover:text-primary justify-center">
              About Us <FaChevronDown className="text-xs mt-[1px]" />
            </span>
            {openDropdown === "about" && (
              <div className="absolute top-full left-0 md:left-1/2 md:-translate-x-1/2 mt-2 bg-white rounded-lg shadow-lg p-2 text-base min-w-[180px] w-full md:w-auto" onMouseEnter={() => handleMouseEnter("about")} onMouseLeave={handleMouseLeave}>
                <Link href="/mission" className="block px-4 py-2 hover:bg-slate-100 rounded">Mission & Vision</Link>
                <Link href="/coordinators" className="block px-4 py-2 hover:bg-slate-100 rounded">Vertical Coordinators</Link>
                <Link href="/team" className="block px-4 py-2 hover:bg-slate-100 rounded">Team</Link>
              </div>
            )}
          </li>

          {/* Projects */}
          <li className="w-full md:w-auto text-center">
             <Link href="/projects" className="flex items-center gap-1 hover:text-primary justify-center">
             Projects
            </Link>
          </li>

          {/* Services */}
          <li>
            <Link href="/services" className="hover:text-primary transition-all duration-100 ease-linear">
              Services
            </Link>
          </li>

          {/* Explore Dropdown */}
          <li className="relative w-full md:w-auto text-center" onMouseEnter={() => handleMouseEnter("explore")} onMouseLeave={handleMouseLeave}>
            <span className="flex items-center gap-1 cursor-pointer hover:text-primary justify-center">
              Explore <FaChevronDown className="text-xs mt-[1px]" />
            </span>
            {openDropdown === "explore" && (
              <div className="absolute top-full left-0 md:left-1/2 md:-translate-x-1/2 mt-2 bg-white rounded-lg shadow-lg p-2 text-base min-w-[200px] w-full md:w-auto" onMouseEnter={() => handleMouseEnter("explore")} onMouseLeave={handleMouseLeave}>
                {/* <Link href="/mrlab" className="block px-4 py-2 hover:bg-slate-100 rounded">MR LAB</Link> */}
                <Link href="/courses" className="block px-4 py-2 hover:bg-slate-100 rounded">Courses</Link>
                <Link href="/activities" className="block px-4 py-2 hover:bg-slate-100 rounded">Activities</Link>
                <Link href="/pragatii" className="block px-4 py-2 hover:bg-slate-100 rounded">Pragatti</Link>
                <Link href="/gallery" className="block px-4 py-2 hover:bg-slate-100 rounded">Gallery</Link>
                {/* <Link href="/vr-demo" className="block px-4 py-2 hover:bg-slate-100 rounded">VR-Demo</Link> */}
              </div>
            )}
          </li>

          {/* Contact Us */}
          <li className="w-full md:w-auto text-center">
            <Link href="/contact" className="hover:text-primary block w-full">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

















































/*'use client'; (ORIGINAL CODE)
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
interface Props {
  activeTab?: number;
  setActiveTab?: Dispatch<SetStateAction<number>>;
}
export default function Navbar({ activeTab, setActiveTab }: Props) {
  const [openTeamNav, setOpenTeamNav] = useState(false);
  const [openServiceNav, setOpenServiceNav] = useState(false);
  const [openPortfolioNav, setOpenPortfolioNav] = useState(false);

  return (
    <>
      {(openTeamNav || openServiceNav || openPortfolioNav) && (
        <div
          className="fixed top-0 left-0 w-screen hidden md:flex h-screen z-[20]"
          onMouseOver={() => {
            setOpenServiceNav(false);
            setOpenTeamNav(false);
            setOpenPortfolioNav(false);
          }}
        ></div>
      )}
      <nav className="hidden md:flex --navbar w-[80%]  justify-between items-center px-8 py-2 absolute top-4 left-1/2 -translate-x-1/2  rounded-xl  mx-auto z-[100]  bg-[rgba(255,255,255,0.3)] backdrop-blur-md">
        <Image
          alt="logo"
          src="/newlogo.png"
          width={200}
          height={200}
         className="w-28"
        />
        <section className="h-full">
          <ul className="flex gap-6 items-center h-full font-medium">
            <li>
              <a
                href="/#focus"
                className="hover:text-primary transition-all duration-100 ease-linear"
              >
                Focus Area
              </a>
            </li>
            <li>
              <a
                href="https://ihub-drishti.ai/hackathon/"
                 target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-all duration-100 ease-linear"
              >
                Projects
              </a>
            </li>
            <Link
                href="/pragatii"
                className="hover:text-primary transition-all duration-100 ease-linear"
              >
                Pragatii
              </Link>
            {/* <li
              className="relative hover:text-primary transition-all cursor-pointer duration-100 ease-linear"
              onMouseEnter={() => {
                setOpenPortfolioNav(true);
                setOpenTeamNav(false);
                setOpenServiceNav(false);
              }}
            >
             Portfolio
              {openPortfolioNav && (
                <div
                  className={`w-fit bg-white rounded-lg p-2 absolute top-6 -right-8 text-xs text-center flex flex-col gap-2   shadow-lg text-black`}
                  onMouseOver={() => setOpenPortfolioNav(true)}
                >
                  <a href="/">
                    <li className="text-nowrap hover:bg-slate-200 p-2 rounded-lg cursor-pointer">
                      dharohar
                    </li>
                  </a>
                  <a href="/">
                    <li className="text-nowrap hover:bg-slate-200 p-2 rounded-lg cursor-pointer">
                    museum
                    </li>
                  </a>
                  <a href="/">
                    <li className="text-nowrap hover:bg-slate-200 p-2 rounded-lg cursor-pointer">
                      Game development
                    </li>
                  </a>
                </div>
              )}
            </li> } ***Comment ends here***
            <li>
              <a
                href="/#mrlab"
                className="hover:text-primary transition-all duration-100 ease-linear"
              >
                MR Lab
              </a>
            </li>
            <li
              className="relative hover:text-primary transition-all cursor-pointer duration-100 ease-linear"
              onMouseEnter={() => {
                setOpenTeamNav(true);
                setOpenPortfolioNav(false);
                setOpenServiceNav(false);
              }}
            >
              People
              {openTeamNav && (
                <div
                  className={`w-fit bg-white rounded-lg p-2 absolute top-6 -right-8 text-xs text-center flex flex-col gap-2   shadow-lg text-black`}
                  onMouseOver={() => {
                    setOpenTeamNav(true);
                  }}
                >
                  <Link href="/coordinators">
                    <li className="text-nowrap hover:bg-slate-200 p-2 rounded-lg cursor-pointer">
                      Vertical Coordinators
                    </li>
                  </Link>
                  <a href="/#team">
                    <li className="text-nowrap hover:bg-slate-200 p-2 rounded-lg cursor-pointer">
                      Team
                    </li>
                  </a>
                </div>
              )}
            </li>

            <li
              className="relative hover:text-primary transition-all cursor-pointer duration-100 ease-linear"
              onMouseEnter={() => {
                setOpenServiceNav(true);
                setOpenTeamNav(false);
                setOpenPortfolioNav(false);
              }}
            >
              Services
              {openServiceNav && (
                <div
                  className={`w-fit bg-white rounded-lg p-2 absolute top-6 -right-8 text-xs text-center flex flex-col gap-2   shadow-lg text-black`}
                  onMouseOver={() => setOpenServiceNav(true)}
                >
                  <a href="/">
                    <li className="text-nowrap hover:bg-slate-200 p-2 rounded-lg cursor-pointer">
                      Projects Deliver Related to AR, VR and MR
                    </li>
                  </a>
                  <a href="/">
                    <li className="text-nowrap hover:bg-slate-200 p-2 rounded-lg cursor-pointer">
                      Consultancy Projects
                    </li>
                  </a>
                  <a href="/">
                    <li className="text-nowrap hover:bg-slate-200 p-2 rounded-lg cursor-pointer">
                      3D Rendering Services
                    </li>
                  </a>
                </div>
              )}
            </li>
            <li>
              <a
                href="/#activity"
                className="hover:text-primary transition-all duration-100 ease-linear"
              >
                Outreach Activity
              </a>
            </li>
          </ul>
        </section>
      </nav>
    </>
  );
} ORIGINAL CODE
*/ 


















































/*
PREVIOUSLY IMPROVED CODE
'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] transition-all duration-300 bg-[rgba(255,255,255,0.3)] backdrop-blur-md px-8 py-2 shadow-md">
      <div className="flex justify-between items-center max-w-[80%] mx-auto rounded-xl">
        {/* Logo }
        <Link href="/">
          <Image src="/newlogo.png" alt="Logo" width={200} height={200} className="w-28" />
        </Link>

        {/* Navigation Items }
        <ul className="flex gap-6 items-center font-medium">
          <li>
            <Link href="/" className="hover:text-primary">Home</Link>
          </li>

          {/* About Us Dropdown }
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="cursor-pointer hover:text-primary flex items-center gap-1">
              About Us <span className="text-xs">▼</span>
            </span>
            {openDropdown === "about" && (
              <div className="absolute top-full mt-2 bg-white rounded-lg shadow-lg p-2 text-sm" onMouseEnter={() => handleMouseEnter("about")} onMouseLeave={handleMouseLeave}>
                <Link href="/mission" className="block px-4 py-2 hover:bg-slate-100">Vision</Link>
                <Link href="/vertical coordinators" className="block px-4 py-2 hover:bg-slate-100">Vertical Coordinators</Link>
                <Link href="/team" className="block px-4 py-2 hover:bg-slate-100">Team</Link>
              </div>
            )}
          </li>

          {/* Projects Dropdown }
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("projects")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="cursor-pointer hover:text-primary flex items-center gap-1">
              Projects <span className="text-xs">▼</span>
            </span>
            {openDropdown === "projects" && (
              <div className="absolute top-full mt-2 bg-white rounded-lg shadow-lg p-2 text-sm" onMouseEnter={() => handleMouseEnter("projects")} onMouseLeave={handleMouseLeave}>
                <Link href="/projects/immersive-india" className="block px-4 py-2 hover:bg-slate-100">Immersive India</Link>
                <Link href="/projects/virtual-heritage" className="block px-4 py-2 hover:bg-slate-100">Virtual Heritage</Link>
              </div>
            )}
          </li>

          <li>
            <Link href="/#mrlab" className="hover:text-primary">MR Lab</Link>
          </li>

          {/* Services Dropdown }
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="cursor-pointer hover:text-primary flex items-center gap-1">
              Services <span className="text-xs">▼</span>
            </span>
            {openDropdown === "services" && (
              <div className="absolute top-full mt-2 bg-white rounded-lg shadow-lg p-2 text-sm" onMouseEnter={() => handleMouseEnter("services")} onMouseLeave={handleMouseLeave}>
                <Link href="/services/consulting" className="block px-4 py-2 hover:bg-slate-100">Consulting</Link>
                <Link href="/services/collaborations" className="block px-4 py-2 hover:bg-slate-100">Collaborations</Link>
                <Link href="/services/tool-development" className="block px-4 py-2 hover:bg-slate-100">Tool Development</Link>
              </div>
            )}
          </li>

          {/* Courses & Events Dropdown }
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("courses")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="cursor-pointer hover:text-primary flex items-center gap-1">
              Courses & Events <span className="text-xs">▼</span>
            </span>
            {openDropdown === "courses" && (
              <div className="absolute top-full mt-2 bg-white rounded-lg shadow-lg p-2 text-sm" onMouseEnter={() => handleMouseEnter("courses")} onMouseLeave={handleMouseLeave}>
                <Link href="/events/workshops" className="block px-4 py-2 hover:bg-slate-100">Workshops</Link>
                <Link href="/events/gamejams" className="block px-4 py-2 hover:bg-slate-100">Game Jams</Link>
                <Link href="/events/certifications" className="block px-4 py-2 hover:bg-slate-100">Certifications</Link>
              </div>
            )}
          </li>

          {/* Contact Us }
          <li>
            <Link href="/contact" className="hover:text-primary">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
Previously Improved Code*/























