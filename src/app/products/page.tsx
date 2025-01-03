import React from 'react'
import Image from 'next/image'
import { Inter, IBM_Plex_Serif } from 'next/font/google'
import { Metadata } from 'next'
import WhatsAppButton from '../components/whatsapp'

export const metadata: Metadata = {
  title: 'Explore organic Foxnuts, Phool Makhana | Eraya Foods Products',
  description:
    "Explore Eraya Foods' premium foxnuts and makhana, sourced from Bihar, India. Organic, roasted, flavored options for healthy snacking and culinary needs.",
  keywords: [
    'premium phool makhana,foxnuts',
    'raw phool makhana,foxnuts',
    'packaged phool makhana,foxnuts',
    'Grade A phool makhana,foxnuts',
    'Grade B phool makhana,foxnuts',
    'Grade C phool makhana,foxnuts',
    'bulk phool makhana,foxnuts supplier',
    'healthy snacks',
    'organic phool makhana,foxnuts',
    'raw phool makhana,foxnuts exporter',
    'phool makhana,foxnuts packaging',
    'best quality phool makhana,foxnuts',
    'Bihar phool makhana,foxnuts',
    'large-scale retail phool makhana',
    'wholesale phool makhana,foxnuts',
    'culinary phool makhana,foxnuts',
    'flavored phool makhana,foxnuts production',
    'phool makhana,foxnuts for snacks',
    'retail phool makhana,foxnuts packaging',
    'Eraya Foods phool makhana,foxnuts',
    'phool makhana,foxnuts'
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
    specifications: `Specification: Best Quality Graded, Round Shaped\nSize: Approximately 3.17 mm in diameter.`
  },
  {
    image: '/2_sutta.avif',
    alt: '2 Sutta Foxnuts',
    title: '2 Sutta',
    description: 'Perfect for roasted or flavored foxnut production.',
    specifications: `Specification: Best Quality Graded, Round Shaped\nSize:  Approximately 6.34 mm in diameter.`
  },
  {
    image: '/3_sutta.avif',
    alt: '3 Sutta Foxnuts',
    title: '3 Sutta',
    description: 'Used in culinary recipes like curries, gravies, and snacks.',
    specifications: `Specification: Best Quality Graded, Round Shaped\nSize: Approximately 9.51 mm in diameter.`
  },
  {
    image: '/4_sutta.avif',
    alt: '4 Sutta Foxnuts',
    title: '4 Sutta',
    description: 'Best for bulk usage in food manufacturing and exports.',
    specifications: `Specification: Premium Quality, Slight Oval Shaped\nSize:  Approximately 12.68 mm in diameter.`
  },
  {
    image: '/5_sutta.avif',
    alt: '5 Sutta Foxnuts',
    title: '5 Sutta',
    description: 'Ideal for health food brands focusing on high-grade quality.',
    specifications: `Specification: High Grade, Evenly Sized\nSize: Approximately 15.85 mm in diameter`
  },
  {
    image: '/6_sutta.avif',
    alt: '6 Sutta Foxnuts',
    title: '6 Sutta',
    description: 'Preferred by gourmet chefs for unique culinary applications.',
    specifications: `Specification: High Quality, Larger Foxnuts\nSize: Approximately 19.02 mm in diameter.`
  },
  {
    image: '/gitanjali.avif',
    alt: 'Gitanjali Mix Foxnuts',
    title: 'Gitanjali Mix',
    description:
      'A premium mix, perfect for diverse culinary and packaging needs.',
    specifications: `Specification: Mixed Quality Graded, Multiple Sizes\nSize: Mix of 4,5+ Sutta`
  },
  {
    image: '/customized.avif',
    alt: 'Customized Packaging',
    title: 'White Label Customized Packaging',
    description:
      'Tailored packaging solutions that meet diverse culinary requirements, offering a premium mix of high-quality ingredients for various packaging needs.',
    specifications: `Specification: Premium Quality Graded, Multiple Sizes\nSize: Mix of 4, 5+ Sutta`
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

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-[6vw]'>
            {products.map((product, index) => (
              <div
                key={index}
                className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-50 p-6'
              >
                <picture>
                  <source srcSet={`${product.image}?webp`} type='image/webp' />
                  <Image
                    src={product.image}
                    alt={product.alt}
                    width={100}
                    height={100}
                    className='w-full h-56 object-contain rounded-lg mb-4'
                  />
                </picture>
                <div className='p-4'>
                  <h2 className='text-2xl font-bold text-gray-700 mb-4'>
                    {product.title}
                  </h2>
                  <p className='text-gray-600 mb-4'>{product.description}</p>
                  <p className='text-gray-600 text-sm mt-2 whitespace-pre-line'>
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
