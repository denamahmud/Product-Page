/** @type {import('next').NextConfig} */

 

const nextConfig = {  
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
        