/** @type {import('next').NextConfig} */

const { webpack } = require('next/dist/compiled/webpack/webpack')
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com"
      },
    ],
  },
  webpack: (config, {dev, isServer}) => {
    if(dev){   
        // 개발 환경 설정
    } else {
      // 프로덕션 환경 설정
    }
    return config
  }
}

module.exports = nextConfig