import React from 'react'
import Image from 'next/image'
import { Inter, IBM_Plex_Serif } from 'next/font/google'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Explore Premium Foxnuts ,Phool Makhana | Eraya Foods Products',
  description:
    'Discover Eraya Foods wide range of premium foxnuts and makhana. From organic raw foxnuts to roasted, flavored options, our products are sourced from Bihar, India, and tailored for global markets. Perfect for healthy snacking and culinary needs',
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
  ]
}

const inter = Inter({
  subsets: ['latin'],
  weight: '400'
})
const ibm = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: '700'
})
const Products = () => {
  return (
    <div className='max-w-screen-2xl content-center px-[2vw] pb-[6vh] bg-gray-100'>
      {/* Foxnut Grades Section */}
      <section className='py-16'>
        <h2
          className='text-4xl text-center font-extrabold text-gray-800 mb-12'
          style={{ fontFamily: ibm.style.fontFamily }}
        >
          Foxnut Grades & Packaged Raw Makhana
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto lg:px-[6vw]'>
          {/* Row 1 - 3 Cards */}
          <div className='bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform'>
            <picture>
              <source srcSet='/gradeA.avif?webp' type='image/webp' />
              <Image
                src='/gradeA.avif'
                alt='Grade B Foxnuts'
                width={120}
                height={200}
                className='w-full h-48 object-cover'
              />
            </picture>
            <div className='p-6' style={{ fontFamily: inter.style.fontFamily }}>
              <h3 className='text-2xl font-bold text-gray-700 mb-4'>Grade A</h3>
              <p className='text-gray-600'>
                Top quality foxnuts, ideal for premium snack packaging.
              </p>
              <p className='text-gray-600 mt-4'>
                Specification: Best Quality Graded, Round Shaped
                <br />
                <br />
                Size: 13mm-16mm
                <br />
                Mandi: 4 sutta
                <br />
                Bag Size: 5kg/8kg/10kg
              </p>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform'>
            <picture>
              <source srcSet='/gradeB.avif?webp' type='image/webp' />
              <Image
                src='/gradeB.avif'
                alt='Grade B Foxnuts'
                width={120}
                height={200}
                className='w-full h-48 object-cover'
              />
            </picture>
            <div className='p-6'>
              <h3
                className='text-2xl font-bold text-gray-700 mb-4'
                style={{ fontFamily: inter.style.fontFamily }}
              >
                Grade B
              </h3>
              <p className='text-gray-600'>
                Perfect for roasted or flavored foxnut production.
              </p>
              <p className='text-gray-600 mt-4'>
                Specification: Best Quality Graded, Round Shaped
                <br />
                Ready to use, No Wastage
                <br />
                Size: 16mm -19 mm
                <br />
                Mandi: 5 sutta
                <br />
                Bag Size: 5kg/8kg/10kg
              </p>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform'>
            <picture>
              <source srcSet='/gradeC.avif?webp' type='image/webp' />
              <Image
                src='/gradeC.avif'
                alt='Grade C Foxnuts'
                width={120}
                height={200}
                className='w-full h-48 object-cover'
              />
            </picture>
            <div className='p-6'>
              <h3
                className='text-2xl font-bold text-gray-700 mb-4'
                style={{ fontFamily: inter.style.fontFamily }}
              >
                Grade C
              </h3>
              <p className='text-gray-600'>
                Used in culinary recipes like curries, gravies, and snacks.
              </p>
              <p className='text-gray-600 mt-4'>
                Specification: Best Quality Graded, Round Shaped
                <br />
                Ready to use, No Wastage
                <br />
                Size: 19mm+
                <br />
                Mandi: 6 sutta
                <br />
                Bag Size: 5kg/8kg/10kg
              </p>
            </div>
          </div>
          {/* </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto mt-8'>
          Row 2 - 3 Cards */}
          <div className='bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform'>
            <picture>
              <source srcSet='/smallPackaged.avif?webp' type='image/webp' />
              <Image
                src='/smallPackaged.avif'
                alt='Packaged Raw Makhana - Small'
                width={120}
                height={200}
                className='w-full h-48 object-cover'
              />
            </picture>
            <div className='p-6'>
              <h3
                className='text-2xl font-bold text-gray-700 mb-4'
                style={{ fontFamily: inter.style.fontFamily }}
              >
                Packaged Raw Makhana - Small
              </h3>
              <p className='text-gray-600'>
                Small-sized packaged foxnuts for convenience stores.
              </p>
              <p className='text-gray-600 mt-4'>
                Specification: Best Quality Graded, Round Shaped
                <br />
                Ready to use, No Wastage
                <br />
                Size: 17-19 mm
                <br />
                Package Size: 200g
              </p>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform'>
            <picture>
              <source srcSet='/largePackaged.avif?webp' type='image/webp' />
              <Image
                src='/largePackaged.avif'
                alt='Packaged Raw Makhana - Large'
                width={120}
                height={200}
                className='w-full h-48 object-cover'
              />
            </picture>
            <div className='p-6'>
              <h3
                className='text-2xl font-bold text-gray-700 mb-4'
                style={{ fontFamily: inter.style.fontFamily }}
              >
                Packaged Raw Makhana - Large
              </h3>
              <p className='text-gray-600'>
                Bulk packaged foxnuts for large-scale retail.
              </p>
              <p className='text-gray-600 mt-4'>
                Specification: Best Quality Graded, Round Shaped
                <br />
                Ready to use, No Wastage
                <br />
                Size: 17-19mm
                <br />
                Package Size: 500g
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
