// src/app/components/GalleryImage.tsx
"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface GalleryImageProps {
  src: string;
  alt: string;
  description: string;
  onClick: () => void;
}

export default function GalleryImage({ src, alt, description, onClick }: GalleryImageProps) {
  // Hooks are now correctly called at the top level of this component
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      className="relative group rounded-lg overflow-hidden shadow-md bg-white cursor-pointer w-[400px] h-[250px]"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <Image
        src={src}
        alt={alt}
        width={400}
        height={250}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-4">
        <p className="text-white text-sm md:text-base text-center">
          {description}
        </p>
      </div>
    </motion.div>
  );
}