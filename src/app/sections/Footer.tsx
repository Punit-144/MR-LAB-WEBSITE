/*
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-content w-[90%] mx-auto md:w-full flex flex-col">
      <div className="w-[90%] h-[1px] bg-[#7A7A7A] my-6 mx-auto hidden md:block"></div>
      <section className="w-full h-full p-4 md:p-10 flex flex-col  md:flex-row  justify-center items-center gap-8 md:gap-20 md:items-start ">
        <Image
          src="/newlogo.png"
          alt="ihub"
          width={600}
          height={600}
          className="w-28 md:w-52 h-auto"
        />
        <section className="flex flex-col items-center md:items-start gap-4 text-black">
          <a
            href="mailto:arvrinfo@ihub-drishti.ai"
            className="flex items-center gap-2 text-sm md:text-base"
          >
            <Image
              src="/email.svg"
              alt="ihub"
              width={50}
              height={50}
              className="w-3 md:w-4 invert"
            />
            arvrinfo@ihub-drishti.ai
          </a>
          <a
            href="tel:02912802248"
            className="flex items-center gap-2 text-sm md:text-base"
          >
            <Image
              src="/phone.png"
              alt="ihub"
              width={50}
              height={50}
              className="w-3 md:w-4"
            />
            0291-2802248
          </a>

          <div className="--socials flex gap-4 mt-4">
            <Link
              href=""
              className=" group p-2 bg-white w-8 h-8 rounded-full aspect-square hover:bg-primary transition-all duration-100 ease-linear cursor-pointer scale-75 md:scale-100"
            >
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={50}
                height={50}
                className="h-full group-hover:invert"
              />
            </Link>
            <Link
              href=""
              className=" group p-2 bg-white w-8 h-8 rounded-full aspect-square hover:bg-primary transition-all duration-100 ease-linear cursor-pointer scale-75 md:scale-100"
            >
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={50}
                height={50}
                className="h-full invert group-hover:invert-0"
              />
            </Link>
            <Link
              href=""
              className=" group p-2 bg-white w-8 h-8 rounded-full aspect-square hover:bg-primary transition-all duration-100 ease-linear cursor-pointer scale-75 md:scale-100"
            >
              <Image
                src="/linkedin.svg"
                alt="Linkedin"
                width={50}
                height={50}
                className="h-full group-hover:invert"
              />
            </Link>
            <Link
              href=""
              className=" group p-2 bg-white w-8 h-8 rounded-full aspect-square hover:bg-primary transition-all duration-100 ease-linear cursor-pointer scale-75 md:scale-100"
            >
              <Image
                src="/x.svg"
                alt="x"
                width={50}
                height={50}
                className="h-full group-hover:invert"
              />
            </Link>
            <Link
              href=""
              className=" group p-2 bg-white w-8 h-8 rounded-full aspect-square hover:bg-primary transition-all duration-100 ease-linear cursor-pointer scale-75 md:scale-100"
            >
              <Image
                src="/youtube.svg"
                alt="youtube"
                width={50}
                height={50}
                className="h-full group-hover:invert"
              />
            </Link>
          </div>
        </section>
        <div className="flex  justify-between gap-12 md:gap-20">
          <a href="#focus">
            <section className="w-[50%] md:w-fit flex flex-col gap-2 text-xs">
              <h1 className="text-lg md:text-xl font-medium text-primary text-nowrap">
                Focus Area
              </h1>
              <p>Technology</p>
              <p>Application Area</p>
            </section>
          </a>
          <a href="#project">
            <section className="w-[50%] md:w-fit flex flex-col gap-2 text-xs">
              <h1 className="text-lg md:text-xl font-medium text-primary">
                Projects
              </h1>
              <p className="text-nowrap">Culture & Heritage</p>
              <p className="text-nowrap">Edtech</p>
              <p>Multi-sensory immersion Technologies</p>
              <p>Healthcare & Medical Education</p>
            </section>
          </a>
        </div>
      </section>

      <div className="--line w-full h-[6px] md:h-[12px] bg-primary"></div>
    </div>
  );
};

export default Footer;*/


























































'use client';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white w-full px-6 pt-12 pb-6 mt-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">

        {/* Logo, Address, and Institution Info */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <Image src="/ihub logo.png" alt="iHub Drishti Logo" width={160} height={80} className="object-contain" />
          <div className="text-center md:text-left">
            <p className="text-white font-medium">iHub Drishti Foundation</p>
            <p className="text-gray-400 text-sm">Indian Institute of Technology Jodhpur</p>
            <p className="text-gray-400 text-sm mt-2">
              NH 62 Nagaur Road, Karwar 342037,<br />
              Jodhpur, Rajasthan, India
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="text-base font-semibold text-white">Contact Us</h3>
          <div className="flex items-center gap-2">
            <Image src="/email.svg" alt="email" width={16} height={16} />
            <a href="mailto:ihubarvrinfo@ihub-drishti.ai" className="text-gray-400 hover:underline">
              arvrinfo@ihub-drishti.ai
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/phone.png" alt="phone" width={16} height={16} className="invert brightness-200" />
            <span className="text-gray-400">0291-2802248</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col items-center md:items-end justify-center">
          <div className="--socials flex gap-4 mt-4">
            <Link
              href=""
              className="group p-2 bg-white w-8 h-8 rounded-full aspect-square hover:bg-primary transition-all duration-100 ease-linear cursor-pointer scale-75 md:scale-100"
            >
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={20}
                height={20}
                className="h-full w-full"
              />
            </Link>
            <Link
              href=""
              className="group p-2 bg-white w-8 h-8 rounded-full aspect-square hover:bg-primary transition-all duration-100 ease-linear cursor-pointer scale-75 md:scale-100"
            >
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
                className="h-full invert group-hover:invert-0"
              />
            </Link>
            <Link
              href=""
              className="group p-2 bg-white w-8 h-8 rounded-full aspect-square hover:bg-primary transition-all duration-100 ease-linear cursor-pointer scale-75 md:scale-100"
            >
              <Image
                src="/linkedin.svg"
                alt="Linkedin"
                width={20}
                height={20}
                className="h-full w-full"
              />
            </Link>
            <Link
              href=""
              className="group p-2 bg-white w-8 h-8 rounded-full aspect-square hover:bg-primary transition-all duration-100 ease-linear cursor-pointer scale-75 md:scale-100"
            >
              <Image
                src="/x.svg"
                alt="x"
                width={20}
                height={20}
                className="h-full w-full"
              />
            </Link>
            <Link
              href=""
              className="group p-2 bg-white w-8 h-8 rounded-full aspect-square hover:bg-primary transition-all duration-100 ease-linear cursor-pointer scale-75 md:scale-100"
            >
              <Image
                src="/youtube.svg"
                alt="youtube"
                width={20}
                height={20}
                className="h-full w-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



















































/*'use client';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white w-full px-6 pt-12 pb-6 mt-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        {/* Logo and Address }
        <div className="flex flex-col items-center md:items-start gap-3">
          <Image src="/tih_ihub.jpg" alt="iHub Drishti Logo" width={160} height={80} className="object-contain" />
          <div className="mt-2 text-center md:text-left">
            <p className="text-white font-medium">iHub Drishti Foundation</p>
            <p className="text-gray-400 text-sm">Indian Institute of Technology Jodhpur</p>
          </div>
        </div>

        {/* Contact Info }
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="text-base font-semibold text-white">Contact</h3>
          <p className="text-gray-400 text-center md:text-left leading-relaxed">
            NH 62 Nagaur Road, Karwar 342037<br />
            Jodhpur District, Rajasthan, India
          </p>
          <div className="flex items-center gap-2">
            <Image src="/email.svg" alt="email" width={16} height={16} className="w-[18px] h-[18px]" />
            <a href="mailto:ihubarvrinfo@ihub-drishti.ai" className="text-gray-400 hover:underline">
              ihubarvrinfo@ihub-drishti.ai
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/phone.png" alt="phone" width={16} height={16} className="invert brightness-200" />
            <span className="text-gray-400">0291-2802248</span>
          </div>
        </div>

        {/* Social Media Icons }
        <div className="flex flex-col items-center md:items-end justify-center">
          <div className="--socials flex gap-4 mt-4">
            <Link
              href=""
              className="group p-2 bg-white w-8 h-8 rounded-full aspect-square hover:bg-primary transition-all duration-100 ease-linear cursor-pointer scale-75 md:scale-100"
            >
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={50}
                height={50}
                className="h-full w-full"
              />
            </Link>
            <Link
              href=""
              className="group p-2 bg-white w-8 h-8 rounded-full aspect-square hover:bg-primary transition-all duration-100 ease-linear cursor-pointer scale-75 md:scale-100"
            >
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={50}
                height={50}
                className="h-full invert group-hover:invert-0"
              />
            </Link>
            <Link
              href=""
              className="group p-2 bg-white w-8 h-8 rounded-full aspect-square hover:bg-primary transition-all duration-100 ease-linear cursor-pointer scale-75 md:scale-100"
            >
              <Image
                src="/linkedin.svg"
                alt="Linkedin"
                width={50}
                height={50}
                className="h-full w-full"
              />
            </Link>
            <Link
              href=""
              className="group p-2 bg-white w-8 h-8 rounded-full aspect-square hover:bg-primary transition-all duration-100 ease-linear cursor-pointer scale-75 md:scale-100"
            >
              <Image
                src="/x.svg"
                alt="x"
                width={50}
                height={50}
                className="h-full w-full"
              />
            </Link>
            <Link
              href=""
              className="group p-2 bg-white w-8 h-8 rounded-full aspect-square hover:bg-primary transition-all duration-100 ease-linear cursor-pointer scale-75 md:scale-100"
            >
              <Image
                src="/youtube.svg"
                alt="youtube"
                width={50}
                height={50}
                className="h-full w-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



*/


