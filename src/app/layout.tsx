import Nav from './components/navbar'
import Head from 'next/head'
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('../app/components/footer'))
import { Metadata } from 'next'

export const metadata: Metadata = {
  icons: {
    icon: '/eraya.svg',
    shortcut: '/eraya.svg',
    apple: '/eraya.svg'
  },
  manifest: '/manifest.json',
  openGraph: {
    title:
      'Eraya Foods: Best Indian Makhana Exporter | Premium Makhana Supplier',
    description:
      'Eraya Foods is the leading exporter of premium foxnuts , makhana from Bihar, India. We offer organic, crunchy foxnuts with customizable packaging options for global distribution.',
    url: 'https://erayafoods.com',
    siteName: 'Eraya Foods',
    images: [
      {
        url: 'https://erayafoods.com/eraya.jpeg',
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
