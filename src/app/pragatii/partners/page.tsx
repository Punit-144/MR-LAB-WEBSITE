"use client";
import Image from "next/image";

export default function PartnersPage() {
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
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-cyan-300 text-center">
          Call for Industry Partners & Collaborators
        </h1>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed text-center">
          <strong>What we are looking for?</strong>
          <br />
          Problem statements in the following domains:
        </p>
        <ul className="list-disc list-inside text-gray-300 text-lg mb-8 space-y-2">
          <li>3D Computer Vision for XR Development</li>
          <li>eXtended Reality for Industry 5.0</li>
          <li>Gen-AI for XR Development</li>
        </ul>
        <p className="text-lg text-gray-300 leading-relaxed text-center">
          <span className="block mb-2">
            <strong>PRAGATII</strong> brings together problem solvers to develop
            tech-driven answers to technology challenges.
          </span>
          If you want the brightest minds across the nation to solve your
          industry problem, contact us for more details or fill the form here.
        </p>
      </div>
    </main>
  );
}
