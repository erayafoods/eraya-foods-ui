import Nav from './components/navbar'
import Head from 'next/head'
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('../app/components/footer'))
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eraya Foods: Best Indian Foxnut Exporter | Premium Makhana Supplier',
  description:
    'Eraya Foods is the leading Indian exporter of premium foxnuts and makhana. Explore organic, crunchy foxnuts with customizable packaging and global reach.',
  keywords: [
    'Eraya Foods',
    'Premium Foxnuts',
    'Makhana',
    'Best Indian Makhana',
    'Foxnut Exporter',
    'Organic Foxnuts',
    'Indian Makhana',
    'Prickly Water Lily - Food',
    'Euryale Ferox Benefits',
    'Makhana Benefits',
    'Makhana Nutrition',
    'Makhana Calories',
    'Makhana Food',
    'Makhana Health Benefits'
  ],
  icons: {
    icon: '/icon.ico',
    shortcut: '/icon-192x192.png',
    apple: '/icon-192x192.png'
  },
  manifest: '/manifest.json',
  openGraph: {
    title:
      'Eraya Foods: Best Indian Foxnut Exporter | Premium Makhana Supplier',
    description:
      'Eraya Foods is the leading exporter of premium foxnuts and makhana from Bihar, India. We offer organic, crunchy foxnuts with customizable packaging options for global distribution.',
    url: 'https://erayafoods.com',
    siteName: 'Eraya Foods',
    images: [
      {
        url: 'https://erayafoods.com/eraya.svg',
        width: 1200,
        height: 630,
        alt: 'Eraya Foods Premium Foxnuts'
      }
    ],
    type: 'website'
  }
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='flex flex-col min-h-screen'>
        <Nav />
        {children}
        <div className='mt-auto'>
          <Footer />
        </div>
      </body>
    </html>
  )
}
