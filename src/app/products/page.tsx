import React from 'react'
import Image from 'next/image'
import { Inter, IBM_Plex_Serif } from 'next/font/google'
import { Metadata } from 'next'

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
    image: '/gradeA.avif',
    alt: 'Grade A Foxnuts',
    title: 'Grade A',
    description: 'Top quality foxnuts, ideal for premium snack packaging.',
    specifications: `Specification: Best Quality Graded, Round Shaped
Size: 13mm-16mm
Mandi: 4 sutta
Bag Size: 5kg/8kg/10kg`
  },
  {
    image: '/gradeB.avif',
    alt: 'Grade B Foxnuts',
    title: 'Grade B',
    description: 'Perfect for roasted or flavored foxnut production.',
    specifications: `Specification: Best Quality Graded, Round Shaped
Ready to use, No Wastage
Size: 16mm -19 mm
Mandi: 5 sutta
Bag Size: 5kg/8kg/10kg`
  },
  {
    image: '/gradeC.avif',
    alt: 'Grade C Foxnuts',
    title: 'Grade C',
    description: 'Used in culinary recipes like curries, gravies, and snacks.',
    specifications: `Specification: Best Quality Graded, Round Shaped
Size: 19mm+
Mandi: 6 sutta
Bag Size: 5kg/8kg/10kg`
  }
]

const Products = () => {
  return (
    <>
      <div className='max-w-screen-2xl content-center px-[2vw] pb-[6vh] bg-gray-100'>
        <section className='py-16'>
          <h1
            className='text-4xl text-center font-extrabold text-gray-800 mb-12'
            style={{ fontFamily: ibm.style.fontFamily }}
          >
            Foxnut Grades & Packaged Raw Makhana
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto lg:px-[6vw]'>
            {products.map((product, index) => (
              <div
                key={index}
                className='bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform'
              >
                <picture>
                  <source srcSet={`${product.image}?webp`} type='image/webp' />
                  <Image
                    src={product.image}
                    alt={product.alt}
                    width={120}
                    height={200}
                    className='w-full h-48 object-cover'
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
      </div>
    </>
  )
}

export default Products
