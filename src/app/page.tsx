import { Inter, IBM_Plex_Serif } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  weight: '400'
})
const ibm = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: '700'
})

import ImageCarousel from './components/carousel'

import WhyChooseUs from './components/why'
import { Metadata } from 'next'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  image: 'https://www.erayafoods.com/eraya.svg',
  url: 'https://www.erayafoods.com',
  sameAs: [
    'https://www.linkedin.com/company/eraya-foods/',
    'https://www.facebook.com/people/Eraya-Foods/61563902867735/',
    'https://www.instagram.com/erayafoods/',
    'https://x.com/erayafoods/'
  ],
  logo: 'https://www.erayafoods.com/eraya.svg',
  name: 'Eraya Foods',
  description:
    'Eraya foods is an Indian premium foxnut,Phool Makhana exporter,supplier',
  email: 'ankush@erayafoods.com',
  telephone: '+91 9266462227',
  address: {
    '@type': 'PostalAddress',
    streetAddress:
      'RZ 426, 2nd Floor, Gali Number 31 Near Pradhan Chowk, Palam',
    addressLocality: 'New Delhi',
    addressCountry: 'IN',
    addressRegion: 'New Delhi',
    postalCode: '110045'
  }
}
export const metadata: Metadata = {
  title: 'Eraya Foods: Best Foxnut Exporter | Premium Phool Makhana',
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
    'Makhana Food'
  ],
  alternates: {
    canonical: 'https://erayafoods.com'
  }
}
export default function Home () {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ImageCarousel aria-label='Foxnut highlights by Eraya Foods' />
      {/*  cool text*/}

      <section
        className='text-gray-600 rounded-2xl  py-5 max-w-screen-xl mx-auto md:px-8'
        aria-label='Eraya Foods Introduction'
      >
        <h1
          className='text-4xl font-extrabold leading-tight text-center text-gray-800'
          style={{ fontFamily: ibm.style.fontFamily }}
        >
          Welcome to Eraya Foods
        </h1>
        <p style={{ fontFamily: inter.style.fontFamily }}>
          Since 2016, Eraya Foods has been proudly delivering the finest premium
          foxnuts ( Makhana ), handpicked and meticulously crafted by skilled
          artisans in India. Our unwavering commitment to quality is reflected
          in every step—from sourcing the best raw materials to ensuring each
          nut is popped with precision for a crisp, flavorful experience.
        </p>
        <p style={{ fontFamily: inter.style.fontFamily }}>
          We blend tradition with innovation, bringing you a product that honors
          India's rich heritage while meeting modern standards of excellence.
          Whether for snacking or culinary use, our foxnuts ( Makhana ) offer
          unmatched taste, nutrition, and purity. Experience the natural
          goodness of Eraya Foods in every bite.
        </p>
      </section>

      {/* <WhyChooseUs aria-label='Reasons to choose Eraya Foods for premium foxnuts' /> */}
      <WhyChooseUs />
    </>
  )
}
