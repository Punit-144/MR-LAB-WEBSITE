/** @type {import('next').NextConfig} */
/*const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;*/
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // Enables static export for Firebase Hosting
    images: {
      unoptimized: true,  // Required since Firebase does not support Next.js image optimization
    },
  };
  
  export default nextConfig;
  

  