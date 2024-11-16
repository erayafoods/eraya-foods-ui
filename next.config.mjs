/** @type {import('next').NextConfig} */
import withOptimizedImages from 'next-optimized-images'

const nextConfig = withOptimizedImages({
  webpack (config, { isServer }) {
    // Add the string replace loader for disabling console logs in production
    if (!isServer && process.env.NODE_ENV === 'production') {
      config.module.rules.push({
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'string-replace-loader',
        options: {
          search: 'console.log',
          replace: '',
          flags: 'g'
        }
      })
    }

    // Add custom webpack rules (SVG handling)
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  async headers () {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
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
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://unpkg.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com;"
          }
        ]
      }
    ]
  }
})

export default nextConfig
