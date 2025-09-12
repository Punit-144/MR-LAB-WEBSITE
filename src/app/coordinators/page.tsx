/* ORIGINAL CODE
"use client";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import Image from "next/image";
import MobileNav from "../components/MobileNav";
import { useState } from "react";
export default function Coordinator() {
  const [activeTab, setActiveTab] = useState(0);
  const [openNavi, setOpenNavi] = useState(false);
  return (
    <main className="w-full overflow-x-hidden relative text-black font-poppins flex flex-col gap-32">
      <MobileNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openNavi={openNavi}
        setOpenNavi={setOpenNavi}
      />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="w-full md:min-h-[70vh] mt-28 md:mt-32">
        <div className="scale-[80%] md:scale-100">
          <Heading heading="Vertial Coordinators" />
        </div>
        <section className="flex flex-col gap-20 mt-12">
          <div className="flex gap-6 md:gap-20 w-[70%] mx-auto">
            <div className="w-[40%] md:w-48 aspect-[333/390] rounded-xl overflow-hidden">
              <Image
                src="/core3.webp"
                width={400}
                height={300}
                alt="core"
                className="w-full md:h-full rounded-xl"
              />
            </div>
            <div className="relative w-[60%]  md:w-[100%] h-full">
              <h1 className="text-base md:text-2xl font-medium text-primary">
                Dr. Amit Bhardwaj
              </h1>
              <div className="w-full h-[30%] bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0"></div>
              <p className="text-xs md:text-base mt-3 h-32 overflow-hidden">
                Associate Professor,
                <br />
                Department of Electrical Engineering,
                <br />
                IIT Jodhpur, Rajasthan, India - 342037
              </p>
              <a href="http://home.iitj.ac.in/~amitb/" target="_blank">
                <button className="bg-white px-6 py-2 shadow-lg border-[1px] border-[#aeaeae] rounded-full  -bottom-4  absolute w-fit text-primary scale-75 md:scale-100">
                  See More
                </button>
              </a>
            </div>
          </div>
          <div className="flex gap-6 md:gap-20 w-[70%] mx-auto">
            <div className="w-[40%] md:w-48 aspect-[333/390] rounded-xl overflow-hidden">
              <Image
                src="/core1.webp"
                width={400}
                height={300}
                alt="core"
                className="w-full md:h-full rounded-xl"
              />
            </div>
            <div className="relative w-[60%]  md:w-[100%] h-full">
              <h1 className="text-base md:text-2xl font-medium text-primary">
                Dr. Rajendra Nagar
              </h1>
              <div className="w-full h-[30%] bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0"></div>
              <p className="text-xs md:text-base mt-3 h-32 overflow-hidden">
                Assistant Professor,
                <br />
                307, Department of Electrical Engineering
                <br />
                Indian Institute of Technology Jodhpur
              </p>
              <a href="http://home.iitj.ac.in/~rn/" target="_blank">
                <button className="bg-white shadow-lg px-6 py-2 rounded-full  -bottom-4  absolute w-fit text-primary border-[1px] border-[#aeaeae] scale-75 md:scale-100">
                  See More
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
 ORIGINAL CODE 
 */

















































 "use client";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar"; // Using the updated desktop Navbar with dropdowns
import Footer from "../sections/Footer";
import Image from "next/image";
import MobileNav from "../components/MobileNav";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Coordinator() {
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

      <div className="w-full md:min-h-[70vh] mt-28 md:mt-32">
        <div className="scale-[80%] md:scale-100">
          <Heading heading="Vertial Coordinators" />
        </div>
        <section className="flex flex-col gap-20 mt-12">
          {/* Coordinator 1 */}
          <div className="flex gap-6 md:gap-20 w-[70%] mx-auto">
            <div className="w-[40%] md:w-48 aspect-[333/390] rounded-xl overflow-hidden">
              <Image src="/core3.webp" width={400} height={300} alt="core" className="w-full md:h-full rounded-xl" />
            </div>
            <div className="relative w-[60%] md:w-[100%] h-full">
              <h1 className="text-base md:text-2xl font-medium text-primary">Dr. Amit Bhardwaj</h1>
              <div className="w-full h-[30%] bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0"></div>
              <p className="text-xs md:text-base mt-3 h-32 overflow-hidden">
                Associate Professor,<br />
                Department of Electrical Engineering,<br />
                IIT Jodhpur, Rajasthan, India - 342037
              </p>
              <a href="http://home.iitj.ac.in/~amitb/" target="_blank">
                <button className="bg-white px-6 py-2 shadow-lg border-[1px] border-[#aeaeae] rounded-full absolute -bottom-4 w-fit text-primary scale-75 md:scale-100">
                  See More
                </button>
              </a>
            </div>
          </div>

          {/* Coordinator 2 */}
          <div className="flex gap-6 md:gap-20 w-[70%] mx-auto">
            <div className="w-[40%] md:w-48 aspect-[333/390] rounded-xl overflow-hidden">
              <Image src="/core1.webp" width={400} height={300} alt="core" className="w-full md:h-full rounded-xl" />
            </div>
            <div className="relative w-[60%] md:w-[100%] h-full">
              <h1 className="text-base md:text-2xl font-medium text-primary">Dr. Rajendra Nagar</h1>
              <div className="w-full h-[30%] bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0"></div>
              <p className="text-xs md:text-base mt-3 h-32 overflow-hidden">
                Assistant Professor,<br />
                307, Department of Electrical Engineering<br />
                Indian Institute of Technology Jodhpur
              </p>
              <a href="http://home.iitj.ac.in/~rn/" target="_blank">
                <button className="bg-white shadow-lg px-6 py-2 rounded-full absolute -bottom-4 w-fit text-primary border-[1px] border-[#aeaeae] scale-75 md:scale-100">
                  See More
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      {/* Back to Top Button */}
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
