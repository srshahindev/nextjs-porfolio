import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**' // এর মানে হলো Unsplash এর যেকোনো পাথের ছবি সাপোর্ট করবে
      }
    ]
  }
}

export default nextConfig
