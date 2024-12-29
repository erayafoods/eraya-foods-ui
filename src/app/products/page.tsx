import React from 'react'
import Image from 'next/image'
import { Inter, IBM_Plex_Serif } from 'next/font/google'
import { Metadata } from 'next'
import WhatsAppButton from '../components/whatsapp'
export const metadata: Metadata = {
  title: 'Explore organic Foxnuts,Phool Makhana | Eraya Foods Products',
  description:
    "Explore Eraya Foods' premium foxnuts and makhana, sourced from Bihar, India. Organic, roasted, flavored options for healthy snacking and culinary needs.",
  keywords: [
    'premium phool makhana,foxnuts',
    'raw phool makhana,foxnuts',
    'packaged phool makhana,foxnuts',
    'Grade A phool makhana,foxnuts',
    'Grade B phool makhana,foxnuts',
    'Grade C phool makhana,foxnuts',
    'bulk phool makhana ,foxnuts supplier',
    'healthy snacks',
    'organic phool makhana,foxnuts',
    'raw phool makhana ,foxnuts exporter',
    'phool makhana,foxnuts packaging',
    'best quality phool makhana,foxnuts',
    'Bihar phool makhana,foxnuts',
    'large-scale retail phool makhana',
    'wholesale phool makhana,foxnut',
    'culinary phool makhana,foxnuts',
    'flavored phool makhana,foxnuts production',
    'phool makhana ,foxnuts for snacks',
    'retail phool makhana,foxnuts packaging',
    'Eraya Foods phool makhana,foxnuts',
    'phool makhana, foxnuts'
  ],
  alternates: {
    canonical: 'https://erayafoods.com/products'
  }
}

const inter = Inter({
  subsets: ['latin'],
  weight: '400'
})
const ibm = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: '700'
})
const products = [
  {
    image: '/1_sutta.avif',
    alt: '1 Sutta Foxnuts',
    title: '1 Sutta',
    description: 'Top-quality foxnuts, ideal for premium snack packaging.',
    specifications: `Specification: Best Quality Graded, Round Shaped
Size: 13mm-16mm`
  },
  {
    image: '/2_sutta.avif',
    alt: '2 Sutta Foxnuts',
    title: '2 Sutta',
    description: 'Perfect for roasted or flavored foxnut production.',
    specifications: `Specification: Best Quality Graded, Round Shaped
Size: 16mm-19mm`
  },
  {
    image: '/3_sutta.avif',
    alt: '3 Sutta Foxnuts',
    title: '3 Sutta',
    description: 'Used in culinary recipes like curries, gravies, and snacks.',
    specifications: `Specification: Best Quality Graded, Round Shaped
Size: 19mm+`
  },
  {
    image: '/4_sutta.avif',
    alt: '4 Sutta Foxnuts',
    title: '4 Sutta',
    description: 'Best for bulk usage in food manufacturing and exports.',
    specifications: `Specification: Premium Quality, Slight Oval Shaped
Size: 12mm-14mm`
  },
  {
    image: '/5_sutta.avif',
    alt: '5 Sutta Foxnuts',
    title: '5 Sutta',
    description: 'Ideal for health food brands focusing on high-grade quality.',
    specifications: `Specification: High Grade, Evenly Sized
Size: 14mm-16mm`
  },
  {
    image: '/6_sutta.avif',
    alt: '6 Sutta Foxnuts',
    title: '6 Sutta',
    description: 'Preferred by gourmet chefs for unique culinary applications.',
    specifications: `Specification: High Quality, Larger Foxnuts
Size: 17mm-19mm`
  },
  {
    image: '/gitanjali.avif',
    alt: 'Gitanjali Mix Foxnuts',
    title: 'Gitanjali Mix',
    description:
      'A premium mix, perfect for diverse culinary and packaging needs.',
    specifications: `Specification: Mixed Quality Graded, Multiple Sizes
Size: Varies (13mm-19mm)`
  }
]

const Products = () => {
  return (
    <>
      <div className='content-center px-[2vh] md:px-[8vh] pb-[6vh] bg-gray-100'>
        <section className='py-16'>
          <h1
            className='text-4xl text-center font-extrabold text-gray-800 mb-12'
            style={{ fontFamily: ibm.style.fontFamily }}
          >
            Products Catalogue
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-[6vw]'>
            {products.map((product, index) => (
              <div
                key={index}
                className='bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform p-[4vh]'
              >
                <picture>
                  <source srcSet={`${product.image}?webp`} type='image/webp' />
                  <Image
                    src={product.image}
                    alt={product.alt}
                    width={200}
                    height={200}
                    className='w-full h-48 object-contain'
                  />
                </picture>
                <div
                  className='p-6'
                  style={{ fontFamily: inter.style.fontFamily }}
                >
                  <h2 className='text-2xl font-bold text-gray-700 mb-4'>
                    {product.title}
                  </h2>
                  <p className='text-gray-600'>{product.description}</p>
                  <p className='text-gray-600 mt-4 whitespace-pre-line'>
                    {product.specifications}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <WhatsAppButton />
      </div>
    </>
  )
}

export default Products
