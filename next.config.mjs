// /** @type {import('next').NextConfig} */
// import withOptimizedImages from 'next-optimized-images'

// const nextConfig = withOptimizedImages({
//   webpack (config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ['@svgr/webpack']
//     })

//     return config
//   },
//   eslint: {
//     ignoreDuringBuilds: true
//   },
//   compiler: {
//     removeConsole: true
//   },
//   async headers () {
//     return [
//       {
//         source: '/(.*)',
//         headers: [
//           {
//             key: 'X-Frame-Options',
//             value: 'SAMEORIGIN' // Ensures the app can embed only safe origins
//           },
//           {
//             key: 'Referrer-Policy',
//             value: 'strict-origin-when-cross-origin'
//           },
//           {
//             key: 'X-Content-Type-Options',
//             value: 'nosniff'
//           },
//           {
//             key: 'Content-Security-Policy',
//             value:
//               "default-src 'self'; " +
//               "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://unpkg.com https://www.google-analytics.com; " +
//               "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
//               "img-src 'self' data: https://drive.google.com https://maps.googleapis.com; " +
//               "font-src 'self' https://fonts.gstatic.com; " +
//               "connect-src 'self' https://www.google-analytics.com; " +
//               "frame-src 'self' https://www.google.com https://maps.google.com https://maps.googleapis.com;"
//           }
//         ]
//       }
//     ]
//   }
// })

// export default nextConfig

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
            value: 'SAMEORIGIN' // Ensures the app can embed only safe origins
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
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://unpkg.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https://*.googleusercontent.com https://maps.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://www.google-analytics.com",
              "frame-src 'self' https://www.google.com https://maps.google.com https://maps.googleapis.com"
            ].join('; ')
          }
        ]
      }
    ]
  }
})

export default nextConfig
