import ImageCarousel from './components/carousel'

import WhyChooseUs from './components/why'
import { Metadata } from 'next'
import Roadmap from './components/roadmap'
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
    <div className='bg-[#f5f5ef] '>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className='mb-[3vh] md:mb-[12vh]  '>
        <ImageCarousel aria-label='Foxnut highlights by Eraya Foods' />
      </div>
      <div className='mb-[3vh] md:mb-[12vh]'>
        <WhyChooseUs />
      </div>
      <div className='mb-[3vh] md:mb-[12vh]'>
        <Roadmap />
      </div>
    </div>
  )
}
