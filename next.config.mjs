/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
          pathname: "**"
        },
      ],
    },
  reactStrictMode: true,
};

export default nextConfig;
