import Nav from './components/navbar'
import Head from 'next/head'
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('../app/components/footer'))
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eraya Foods - Premium Foxnuts, Makhana Supplier',
  description:
    'Premium foxnuts and makhana from Bihar , India. Eraya Foods offers organic, customizable products with unmatched quality and export support.',
  keywords: [
    'Eraya Foods',
    'Premium Foxnuts',
    'Makhana',
    'Best Indian Makhana,Foxnut Exporter',
    'Organic Foxnuts',
    'Indian Makhana',
    'Prickly water lily - Food',
    'euryale ferox benefitsBreakout',
    'makhana benefits',
    'makhana nutrition',
    'makhana calories',
    'Makhana Food',
    'makhana health benefits'
  ]
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <Head>
        <link rel='icon' href='/icon.ico' type='image/svg+xml' />
        <link rel='manifest' href='manifest.json' />
        <title>
          Eraya Foods: Best Indian Foxnut Exporter | Premium Makhana Supplier
        </title>
        <meta
          name='description'
          content='Eraya Foods is the leading Indian exporter of premium foxnuts and makhana. Explore organic, crunchy foxnuts with customizable packaging and global reach.'
        />
        <link rel='manifest' href='/manifest.json' />
        <link rel='icon' sizes='192x192' href='/icon-192x192.png' />
        <link rel='apple-touch-icon' sizes='192x192' href='/icon-192x192.png' />
      </Head>
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
