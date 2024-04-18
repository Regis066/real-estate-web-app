/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bayut-production.s3.eu-central-1.amazonaws.com",
        pathname: "/image/145426814/33973352624c48628e41f2ec460faba4",
      },
    ],
  },
};

export default nextConfig;
