export const metadata = {
  title: 'Eraya Foods',
  description: 'From India’s Fields to the World’s Tables'
}
import Nav from './components/navbar'

import { Navbar } from '@nextui-org/navbar'
import './globals.css'
import Head from 'next/head'
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('../app/components/footer'))
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

        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='application-name' content='Eraya Foods' />
        <meta name='apple-mobile-web-app-title' content='Eraya Foods' />
        <meta name='theme-color' content='#000000' />
        <meta name='msapplication-navbutton-color' content='#000000' />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        />
        <meta name='msapplication-starturl' content='/' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />

        <link rel='icon' type='icon' sizes='192x192' href='/icon.ico' />
        <link
          rel='apple-touch-icon'
          type='icon'
          sizes='192x192'
          href='/icon.ico'
        />
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
