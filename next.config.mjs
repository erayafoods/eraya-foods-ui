/** @type {import('next').NextConfig} */
import withOptimizedImages from 'next-optimized-images'

const nextConfig = withOptimizedImages({
  webpack (config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  compiler: {
    removeConsole: true
  },
  async headers () {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value:
              'ALLOW-FROM https://drive.google.com  https://www.google.com/maps '
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googleapis.com https://*.gstatic.com https://*.google.com https://*.googleusercontent.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              img-src 'self' data: https://*.googleapis.com https://*.gstatic.com https://*.google.com https://*.googleusercontent.com;
              font-src 'self' https://fonts.gstatic.com;
              connect-src 'self' https://*.googleapis.com https://*.google.com https://*.gstatic.com;
              frame-src 'self' https://*.google.com;
            `
          }
        ]
      }
    ]
  }
})

export default nextConfig
