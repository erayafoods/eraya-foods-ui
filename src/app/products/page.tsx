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
    image: '/5_sutta.avif',
    alt: '5 Sutta Foxnuts',
    title: '5 Sutta Makhana',
    description: 'Ideal for health food brands focusing on high-grade quality.',
    specifications: `Specification: High Grade, Evenly Sized\nSize: Approximately 15.85 mm in diameter`
  },
  {
    image: '/6_sutta.avif',
    alt: '6 Sutta Foxnuts',
    title: '6 Sutta Makhana',
    description: 'Preferred by gourmet chefs for unique culinary applications.',
    specifications: `Specification: High Quality, Larger Foxnuts\nSize: Approximately 19.02 mm in diameter.`
  },
  {
    image: '/4_sutta.avif',
    alt: '4 Sutta Foxnuts',
    title: '4 Sutta Makhana',
    description: 'Best for bulk usage in food manufacturing and exports.',
    specifications: `Specification: Premium Quality, Slight Oval Shaped\nSize:  Approximately 12.68 mm in diameter.`
  },
  {
    image: '/gitanjali.avif',
    alt: 'Gitanjali Mix Foxnuts',
    title: 'Gitanjali Mix Makhana',
    description:
      'A premium mix, perfect for diverse culinary and packaging needs.',
    specifications: `Specification: Mixed Quality Graded, Multiple Sizes\nSize: Mix of 4,5+ Sutta`
  },
  {
    image: '/1_sutta.avif',
    alt: '1 Sutta Foxnuts',
    title: '1 Sutta Makhana',
    description: 'Top-quality foxnuts, ideal for premium snack packaging.',
    specifications: `Specification: Best Quality Graded, Round Shaped\nSize: Approximately 3.17 mm in diameter.`
  },
  {
    image: '/2_sutta.avif',
    alt: '2 Sutta Foxnuts',
    title: '2 Sutta Makhana',
    description: 'Perfect for roasted or flavored foxnut production.',
    specifications: `Specification: Best Quality Graded, Round Shaped\nSize:  Approximately 6.34 mm in diameter.`
  },
  {
    image: '/3_sutta.avif',
    alt: '3 Sutta Foxnuts',
    title: '3 Sutta Makhana',
    description: 'Used in culinary recipes like curries, gravies, and snacks.',
    specifications: `Specification: Best Quality Graded, Round Shaped\nSize: Approximately 9.51 mm in diameter.`
  },
  {
    image: '/customized.avif',
    alt: 'Customized Packaging',
    title: 'White Label Customized Packaging',
    description:
      'Tailored packaging solutions that meet diverse culinary requirements, offering a premium mix of high-quality ingredients for various packaging needs.',
    specifications: `Specification: Premium Quality Graded, Multiple Sizes\nSize: Mix of 4, 5+ Sutta`
  },
  {
    image: '/greenCardamom.jpeg',
    alt: 'Green Cardamom',
    title: 'Premium Green Cardamom',
    description:
      'Fresh and aromatic green cardamom pods, carefully selected for their rich flavor and superior quality, ideal for culinary and packaging needs.',
    specifications: `Specification: Bold Graded, 8mm and 8.5mm\nSize: Multiple Size Grades Available`
  },
  {
    image: '/blackPepper.webp',
    alt: 'Black Pepper',
    title: 'Bold Black Pepper',
    description:
      'High-grade black pepper sourced from the finest farms, offering bold flavor and strong aroma, perfect for diverse culinary applications.',
    specifications: `Specification: Idukki Bold 630GL, Mini Bold 580GL\nSize: Multiple Grades Available`
  },
  {
    image: '/coriander.webp',
    alt: 'Coriander Seeds',
    title: 'Pure Coriander Seeds',
    description:
      'Aromatic and flavorful coriander seeds, ensuring freshness and purity, ideal for both domestic and international packaging standards.',
    specifications: `Specification: 99% Purity, Husk Removed\nSize: Available in Bulk Quantities`
  },
  {
    image: '/cuminSeeds.webp',
    alt: 'Cumin Seeds',
    title: 'Aromatic Cumin Seeds',
    description:
      'Highly aromatic cumin seeds with a distinct flavor, sourced and processed for premium quality, suitable for various culinary uses.',
    specifications: `Specification: 99.5% Purity (Singapore Quality), 99% Purity (Dubai Quality)\nSize: Multiple Sizes Available`
  },
  {
    image: '/cashewNuts.jpg',
    alt: 'Cashew Nuts',
    title: 'Premium Cashew Nuts',
    description:
      'Finest quality cashew nuts, handpicked and processed to ensure premium standards, perfect for white label and bulk packaging.',
    specifications: `Specification: Graded Quality, W180, W240, W320\nSize: Multiple Grades Available`
  }
]

const Products = () => {
  return (
    <>
      <div className='content-center px-[2vh] md:px-[8vh] pb-[6vh] bg-gray-100'>
        <section className='py-16'>
          <h1
            className='text-2xl text-center font-extrabold text-gray-800 mb-12'
            style={{ fontFamily: ibm.style.fontFamily }}
          >
            Explore Our Products
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-[6vw]'>
            {products.map((product, index) => (
              <div>
                <div
                  key={index}
                  className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-50 p-6'
                >
                  <picture>
                    <source
                      srcSet={`${product.image}?webp`}
                      type='image/webp'
                    />
                    <Image
                      src={product.image}
                      alt={product.alt}
                      width={100}
                      height={100}
                      className='w-full h-56 object-contain rounded-lg mb-4'
                    />
                  </picture>
                  <div className='p-4 bg-[#964663]'>
                    <h2 className='text-xl font-bold text-white mb-4 '>
                      {product.title}
                    </h2>
                  </div>
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
