'use client'

import './globals.css'

import ImageCarousel from './components/carousel'

import WhyChooseUs from './components/why'

export default function Home () {
  return (
    <>
      <ImageCarousel />
      {/*  cool text*/}

      <div
        className=' text-gray-500 rounded-2xl py-5 max-w-screen-xl mx-auto md:px-8'
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        Since 2016, Eraya Foods has been proudly delivering the finest premium
        foxnuts, handpicked and meticulously crafted by skilled artisans in
        India. Our unwavering commitment to quality is reflected in every
        step—from sourcing the best raw materials to ensuring each nut is popped
        with precision for a crisp, flavorful experience. We blend tradition
        with innovation, bringing you a product that honors India's rich
        heritage while meeting modern standards of excellence. Whether for
        snacking or culinary use, our foxnuts offer unmatched taste, nutrition,
        and purity. Experience the natural goodness of Eraya Foods in every
        bite.
      </div>

      <WhyChooseUs />
    </>
  )
}
