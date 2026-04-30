/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/**"
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/cart/:path*",
        destination: "https://0idbp3-r4.myshopify.com/cart/:path*"
      },
      {
        source: "/checkouts/:path*",
        destination: "https://0idbp3-r4.myshopify.com/checkouts/:path*"
      }
    ];
  }
};

export default nextConfig;
