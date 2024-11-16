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

export default function Home () {
  return (
    <>
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

      <WhyChooseUs aria-label='Reasons to choose Eraya Foods for premium foxnuts' />
    </>
  )
}
