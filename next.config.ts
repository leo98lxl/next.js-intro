import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { 
        protocol: "https",
        hostname: "https://futuramaapi.com/",
       },
       { 
        protocol: "https",
        hostname: "https://placehold.co",
       },
    ],
  },
}

export default nextConfig;