/*"use client";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import MobileNav from "../components/MobileNav";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function MissionPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [openNavi, setOpenNavi] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <main className="w-full overflow-x-hidden relative text-black font-poppins flex flex-col gap-32">
      <MobileNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openNavi={openNavi}
        setOpenNavi={setOpenNavi}
      />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <section className="w-full max-w-6xl mx-auto px-6 pt-40 pb-16">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-primary">Mission & Vision</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-primary inline-block">Our Mission</h2>
          <p className="text-lg leading-loose text-justify">
            The TIH on Computer Vision and Augmented and Virtual Reality (CV and ARVR), named as iHub Drishti, will:<br /><br />
            <strong>(i)</strong> Focus on advancing the research outcomes in core problems related to CV and ARVR.<br />
            <strong>(ii)</strong> Augment imaging with additional (multimodal) sources of input such as haptics, language, and IoT to advance state-of-the-art.<br />
            <strong>(iii)</strong> Create technology solutions for socially relevant and industry-facing problems.<br />
            <strong>(iv)</strong> Support and nurture start-up ecosystems.<br />
            <strong>(v)</strong> Stimulate skilling and reskilling educational programs.<br />
            <strong>(vi)</strong> Advise governments for appropriate policy-related matters in the domain of CV and ARVR.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-primary inline-block">Core Research Areas</h2>
          <ul className="list-disc pl-6 text-lg leading-loose">
            <li>Seeing and Sensing</li>
            <li>Dependability</li>
            <li>Real-time Computer Vision Systems</li>
            <li>Data Collection, Curation and Annotation</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-primary inline-block">Application Areas</h2>
          <ul className="list-disc pl-6 text-lg leading-loose">
            <li>Computer Vision for Autonomous Systems</li>
            <li>Computer Vision for Better Living: Healthcare and Biosphere</li>
            <li>Imaging for Document Analysis</li>
            <li>CV and VR for Industry 4.0</li>
            <li>Dependable AR-VR for X</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-primary inline-block">Our Vision</h2>
          <p className="text-lg leading-loose text-justify">
            The proposed TIH will initially focus on fundamental research, developing Intellectual Properties and building prototypes (TRL 3–4). Based on the technologies generated, these IPs will be converted into products and then marketed in association with startups, industry, and its own team of executives. The experts, through iHub Drishti, will also provide consulting services to other companies and government institutions. It is envisioned that iHub Drishti will be self-sustaining by the end of five years with continuous growth in research, technology, and product portfolio.
          </p>
        </section>
      </section>

      <Footer />

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
*/





// "use client";

// import Navbar from "../components/Navbar";
// import MobileNav from "../components/MobileNav";
// import Footer from "../sections/Footer";
// import { useEffect, useState } from "react";
// import { FaArrowUp } from "react-icons/fa";

// export default function MissionPage() {
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

//       {/* Header */}
//       <section className="w-full mt-28 md:mt-32 text-center px-6">
//         <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Mission & Vision</h1>
//         <p className="max-w-2xl mx-auto text-black-700 text-sm md:text-base">
//           Learn about the driving goals and long-term vision behind iHub Drishti's AR/VR vertical.
//         </p>
//       </section>

//       {/* Card Layout */}
//       <section className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
//         <div className="rounded-lg shadow-md p-6 bg-white text-center">
//           <h2 className="text-xl font-semibold text-primary mb-3">Our Mission</h2>
//           <p className="text-sm font-poppins text-gray">
//            The mission of the Mixed Reality Lab at iHub Drishti is to pioneer cutting-edge research and development in the convergence of physical and digital realities.
//            We aim to design, develop, and deploy immersive Mixed Reality (MR) solutions that solve real-world challenges across domains such as healthcare, education, cultural heritage, industry 4.0, and human-computer interaction.
//            By integrating computer vision, augmented reality (AR), virtual reality (VR), haptics, IoT, and artificial intelligence, the lab strives to create inclusive and dependable MR systems.
//            Our mission includes nurturing a robust innovation ecosystem that connects researchers, startups, industry partners, and the government to bring transformative technologies from lab to life.
//           </p>
//         </div>

//         <div className="rounded-lg shadow-md p-6 bg-white text-center">
//           <h2 className="text-xl font-semibold text-primary mb-3">Our Vision</h2>
//           <p className="text-sm font-poppins text-gray">
//             Our vision is to become a nationally and globally recognized hub for Mixed Reality innovation that redefines how humans interact with technology and their environments.
//             We envision a future where immersive technologies empower individuals, enhance productivity, preserve cultural narratives, and bridge gaps in accessibility and communication.
//             By advancing state-of-the-art research, fostering interdisciplinary collaboration, and translating deep-tech into scalable solutions, the Mixed Reality Lab aspires to play a pivotal role in shaping the next generation of intelligent, interactive, and impactful experiences.
//             Through this, we aim to contribute meaningfully to India's journey as a leader in frontier technologies.
//           </p>
//         </div>
//       </section>

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




























"use client";

import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
import Footer from "../sections/Footer";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function MissionPage() {
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
      <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} openNavi={openNavi} setOpenNavi={setOpenNavi} />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Header */}
      <section className="w-full mt-28 md:mt-32 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Mission & Vision</h1>
        <p className="max-w-2xl mx-auto text-black-700 text-sm md:text-base">
          Learn about the driving goals and long-term vision behind iHub Drishti&apos;s AR/VR vertical.
        </p>
      </section>

      {/* Card Layout */}
      <section className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="rounded-lg shadow-md p-6 bg-white text-center">
          <h2 className="text-xl font-semibold text-primary mb-3">Our Mission</h2>
          <p className="text-sm font-poppins text-gray">
           The mission of the Mixed Reality Lab at iHub Drishti is to pioneer cutting-edge research and development in the convergence of physical and digital realities.
           We aim to design, develop, and deploy immersive Mixed Reality (MR) solutions that solve real-world challenges across domains such as healthcare, education, cultural heritage, industry 4.0, and human-computer interaction.
           By integrating computer vision, augmented reality (AR), virtual reality (VR), haptics, IoT, and artificial intelligence, the lab strives to create inclusive and dependable MR systems.
           Our mission includes nurturing a robust innovation ecosystem that connects researchers, startups, industry partners, and the government to bring transformative technologies from lab to life.
          </p>
        </div>

        <div className="rounded-lg shadow-md p-6 bg-white text-center">
          <h2 className="text-xl font-semibold text-primary mb-3">Our Vision</h2>
          <p className="text-sm font-poppins text-gray">
            Our vision is to become a nationally and globally recognized hub for Mixed Reality innovation that redefines how humans interact with technology and their environments.
            We envision a future where immersive technologies empower individuals, enhance productivity, preserve cultural narratives, and bridge gaps in accessibility and communication.
            By advancing state-of-the-art research, fostering interdisciplinary collaboration, and translating deep-tech into scalable solutions, the Mixed Reality Lab aspires to play a pivotal role in shaping the next generation of intelligent, interactive, and impactful experiences.
            Through this, we aim to contribute meaningfully to India&apos;s journey as a leader in frontier technologies.
          </p>
        </div>
      </section>

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