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

const jsonLd = {
  '@context': 'http://schema.org',
  '@graph': [
    {
      '@type': 'Product',
      sku: 'gradeA',
      image: 'https://erayafoods.com/gradeA.avif',
      name: 'Grade A Makhana',
      description:
        'Top quality foxnuts phool Makhana, ideal for premium snack packaging. Best Quality Graded, Round Shaped',
      size: '13mm-16mm',
      brand: {
        '@type': 'Brand',
        name: 'Eraya Foods'
      },
      hasCertification: {
        '@type': 'Certification',
        issuedBy: {
          '@type': 'Organization',
          name: 'fssai'
        }
      },
      offers: {
        '@type': 'Offer',
        url: 'https://erayafoods.com/gradeA.avif',
        itemCondition: 'https://schema.org/NewCondition',
        availability: 'https://schema.org/InStock',
        price: 12,
        priceCurrency: 'USD'
      }
    },
    {
      '@type': 'Product',
      sku: 'gradeB',
      image: 'https://erayafoods.com/gradeB.avif',
      name: 'Grade B Makhana',
      description:
        'Perfect for roasted or flavored foxnut production ,round Shaped',
      size: '16mm-19mm',
      brand: {
        '@type': 'Brand',
        name: 'Eraya Foods'
      },
      hasCertification: {
        '@type': 'Certification',
        issuedBy: {
          '@type': 'Organization',
          name: 'fssai'
        }
      },
      offers: {
        '@type': 'Offer',
        url: 'https://erayafoods.com/gradeB.avif',
        itemCondition: 'https://schema.org/NewCondition',
        availability: 'https://schema.org/InStock',
        price: 14,
        priceCurrency: 'USD'
      }
    },
    {
      '@type': 'Product',
      sku: 'gradeC',
      image: 'https://erayafoods.com/gradeC.avif',
      name: 'Grade C Makhana',
      description: 'Used in culinary recipes like curries, gravies, and snacks',
      size: '19mm+',
      brand: {
        '@type': 'Brand',
        name: 'Eraya Foods'
      },
      hasCertification: {
        '@type': 'Certification',
        issuedBy: {
          '@type': 'Organization',
          name: 'fssai'
        }
      },
      offers: {
        '@type': 'Offer',
        url: 'https://erayafoods.com/gradeC.avif',
        itemCondition: 'https://schema.org/NewCondition',
        availability: 'https://schema.org/InStock',
        price: 17,
        priceCurrency: 'USD'
      }
    },
    {
      '@type': 'Product',
      sku: 'smallPack',
      image: 'https://erayafoods.com/smallPackaged.avif',
      name: 'Raw Packaged makhana small pack',
      description: 'Small-sized packaged foxnuts for convenience stores',
      size: '17-19 mm',
      brand: {
        '@type': 'Brand',
        name: 'Eraya Foods'
      },
      hasCertification: {
        '@type': 'Certification',
        issuedBy: {
          '@type': 'Organization',
          name: 'fssai'
        }
      },
      offers: {
        '@type': 'Offer',
        url: 'https://erayafoods.com/smallPackaged.avif',
        itemCondition: 'https://schema.org/NewCondition',
        availability: 'https://schema.org/InStock',
        price: 4,
        priceCurrency: 'USD'
      }
    },
    {
      '@type': 'Product',
      sku: 'largePack',
      image: 'https://erayafoods.com/largePackaged.avif',
      name: 'Raw Packaged makhana Large pack',
      description: 'Bulk packaged foxnuts for large-scale retail.',
      size: '17-19 mm',
      brand: {
        '@type': 'Brand',
        name: 'Eraya Foods'
      },
      hasCertification: {
        '@type': 'Certification',
        issuedBy: {
          '@type': 'Organization',
          name: 'fssai'
        }
      },
      offers: {
        '@type': 'Offer',
        url: 'https://erayafoods.com/largePackaged.avif',
        itemCondition: 'https://schema.org/NewCondition',
        availability: 'https://schema.org/InStock',
        price: 9,
        priceCurrency: 'USD'
      }
    }
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
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className='max-w-screen-2xl content-center px-[2vw] pb-[6vh] bg-gray-100'>
        {/* Foxnut Grades Section */}
        <section className='py-16'>
          <h1
            className='text-4xl text-center font-extrabold text-gray-800 mb-12'
            style={{ fontFamily: ibm.style.fontFamily }}
          >
            Foxnut Grades & Packaged Raw Makhana
          </h1>

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
              <div
                className='p-6'
                style={{ fontFamily: inter.style.fontFamily }}
              >
                <h2 className='text-2xl font-bold text-gray-700 mb-4'>
                  Grade A
                </h2>
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
                <h2
                  className='text-2xl font-bold text-gray-700 mb-4'
                  style={{ fontFamily: inter.style.fontFamily }}
                >
                  Grade B
                </h2>
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
                <h2
                  className='text-2xl font-bold text-gray-700 mb-4'
                  style={{ fontFamily: inter.style.fontFamily }}
                >
                  Grade C
                </h2>
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
                <h2
                  className='text-2xl font-bold text-gray-700 mb-4'
                  style={{ fontFamily: inter.style.fontFamily }}
                >
                  Packaged Raw Makhana - Small
                </h2>
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
                <h2
                  className='text-2xl font-bold text-gray-700 mb-4'
                  style={{ fontFamily: inter.style.fontFamily }}
                >
                  Packaged Raw Makhana - Large
                </h2>
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
    </>
  )
}

export default Products
