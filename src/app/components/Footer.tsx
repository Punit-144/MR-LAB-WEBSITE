'use client';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="mb-4">
            <Image
              src="/tih_ihub.jpg" // Make sure to add your logo to the public folder
              alt="iHub Drishti Logo"
              width={200}
              height={80}
              className="object-contain"
            />
          </div>

          {/* Centered Contact Information */}
          <div className="text-center space-y-2">
            <p>iHub Drishti Foundation,</p>
            <p>Indian Institute of Technology Jodhpur</p>
            <p>NH 62 Nagaur Road, Karwar 342037</p>
            <p>Jodhpur District, Rajasthan, India</p>
            <p className="mt-4">admin@ihub-drishti.ai</p>
          </div>

          <div className="w-full mt-8 pt-8 border-t border-gray-800 text-center">
            <p>© Copyright 2024 by TIH. All Rights Reserved.</p>
            <p>Designed by iHub Drishti Foundation</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 