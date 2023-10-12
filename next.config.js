/** @type {import('next').NextConfig} */


const isPrad = process.env.NODE_ENV = 'production';

const nextConfig = { 
          basePath : isPrad ?  "next-blog-deployment" : "",
          output :  'export',
          reactStrictMode: true,
          images: {
            remotePatterns: [
              {
                protocol: 'https',
                hostname: 'cdn.miswag.me',
                port: '',
                pathname: '/images/**',
              },
            ],
          },
        }
 module.exports = nextConfig
        