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
        source: "/cart/c/:path*",
        destination: "https://0idbp3-r4.myshopify.com/cart/c/:path*"
      }
    ];
  }
};

export default nextConfig;
