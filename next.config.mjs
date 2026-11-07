/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: "/privacy", destination: "/here/privacy", permanent: true },
      { source: "/terms", destination: "/here/terms", permanent: true },
      { source: "/community-guidelines", destination: "/here/community-guidelines", permanent: true },
      { source: "/help", destination: "/here/help", permanent: true },
      { source: "/g/:shareId", destination: "/here/g/:shareId", permanent: true },
    ];
  },
};

export default nextConfig;
