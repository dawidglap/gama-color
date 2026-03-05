// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "assets.aceternity.com",
    ],
    // facoltativo: abilita formati moderni
    // formats: ["image/avif", "image/webp"],
  },
  eslint: {
    // Non bloccare le build di produzione (Vercel) per warning/error ESLint
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "gama-kolor.pl",
          },
        ],
        destination: "https://gama-color.com.pl/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
