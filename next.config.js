/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["themoviedb.org"]
  },
  typescript:{
    ignoreBuildErrors:true,
  }
}

module.exports = nextConfig
