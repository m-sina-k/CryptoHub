/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@cryptohub/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.coinranking.com",
      },
    ],
  },
}
