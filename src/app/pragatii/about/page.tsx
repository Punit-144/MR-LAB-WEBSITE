"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white relative font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pragatii-bg.png"
          alt="Background"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-cyan-300 text-center">
          About iHub Drishti
        </h1>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          iHub Drishti, IIT Jodhpur is a Technology Innovation Hub focussed
          around “Computer Vision, Augmented Reality and Virtual Reality.” It is
          a Section-8, Not-for-profit Organisation, promoted by and at the
          Indian Institute of Technology Jodhpur under a National Mission on
          Interdisciplinary Cyber Physical Systems (NM-ICPS) of the Government
          of India. The hub, steered by the Hub Governing Board and the Director
          of the TIH, will host teams of faculty members, research scholars,
          developers and scientists who will work towards developing the
          technologies. Further, four different kinds of partners are
          identified: (i) research collaborators from national and international
          institutions, (ii) domain expert partner institutions, (iii) hub and
          spoke model (mentor-mentee) based partner institutions, and (iv)
          research labs and industry including startups. The TIH envisions
          creating an ecosystem in and around the thematic areas and building
          collaborations with other TIHs to foster the overall growth and
          development of CPS technologies. The facility would include a mix of
          office and laboratory spaces with state-of-the-art infrastructure
          facilities, that will cater to the collaborating institutions. The
          TIH will also build a network of researchers and developers, both
          externally hired and from the student body, such that in the next 5
          years, iHub Drishti becomes the main hub of technologies related to
          computer vision, virtual and augmented reality in the entire country.
        </p>

        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          Cyber-physical systems (CPS) sense, process, and react to information
          from the physical world. They are created by combining computation,
          networking, and physical processes with intelligence. The human visual
          system can be perceived as a perfect example of a CPS. It sees,
          processes, connects to other body parts, and acts based on the
          information analyzed. In the entire process, it also ensures that
          humans operate safely even in the presence of uncertainties and
          resource constraints. The TIH at IIT Jodhpur, named as iHub Drishti,
          will focus on building cyber-physical systems for computer vision,
          augmented reality (AR), and virtual reality (VR). Our mission is to
          build technologies and systems focusing on trusted vision for a secure
          and better living.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          Computer vision involves acquiring, processing, analyzing and
          understanding a given image or scene. The fundamental concept has been
          there for more than six decades now, however, the application in
          unconstrained real-world problems has started more recently. The
          omnipresent sensors and cameras provide the opportunity to integrate
          the core vision technology with the network of sensors to propose
          solutions for a host of problems, ranging from defense to medical to
          education. The success of autonomous cars, which operate as a very
          complex integration of a multitude of sensors with computer vision and
          artificial intelligence algorithms, is an astounding example of a
          cyber-physical system and the advancement and accessibility it can
          provide. On the contrary, augmented reality and virtual reality are
          not more than two decades old. AR and VR provide an interactive
          experience of a real-world or a digital world environment. With
          increasing sophistication in the performance of AR and VR, they are
          becoming very popular and their applications are being explored in a
          number of industries, for instance, retail, education, defense
          training, gaming, and entertainment. In 2017, the global market for
          computer vision stood valued over USD 9.2 billion and is expected to
          surpass a valuation of USD 48.3 billion by 2023. The augmented reality
          market was valued at USD 4.21 billion in 2017 and is expected to reach
          USD 60.55 billion by 2023, at a CAGR of 40.29% between 2018 and 2023.
          Similarly, the virtual reality market was valued at USD 5.12 billion
          in 2017 and is expected to reach USD 34.08 billion by 2023, at a CAGR
          of 33.95% between 2018 and 2023.
        </p>
      </div>
    </main>
  );
}
