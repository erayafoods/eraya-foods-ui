/** @type {import('next').NextConfig} */

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
  }
})

export default nextConfig

// const nextConfig = {
//   webpack (config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ['@svgr/webpack']
//     })
//     return config
//   },
//   eslint: {
//     ignoreDuringBuilds: true
//   }
// }

//export default nextConfig
