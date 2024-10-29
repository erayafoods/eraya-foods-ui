import React from 'react'
import Image from 'next/image'
const Products = () => {
  return (
    <div className='max-w-screen-2xl content-center px-[8vw] pb-[8vh] bg-gray-100'>
      {/* Foxnut Grades Section */}
      <section className='py-16'>
        <h2 className='text-4xl text-center font-extrabold text-gray-800 mb-12'>
          Foxnut Grades & Packaged Raw Makhana
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-8'>
          {/* Row 1 - 3 Cards */}
          <div className='bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform'>
            <picture>
              <source src='/faq.jpg?webp' type='image/webp' />
              <Image
                src='/faq.jpg'
                alt='Grade B Foxnuts'
                width={120}
                height={200}
                className='w-full h-48 object-cover'
              />
            </picture>
            <div className='p-6'>
              <h3 className='text-2xl font-bold text-gray-700 mb-4'>Grade A</h3>
              <p className='text-gray-600'>
                Top quality foxnuts, ideal for premium snack packaging.
              </p>
              <p className='text-gray-600 mt-4'>
                Specification: Best Quality Graded, Round Shaped
                <br />
                <br />
                Size: 14mm-16mm
                <br />
                Mandi: 4 sutta
                <br />
                Bag Size: 10kg
              </p>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform'>
            <picture>
              <source src='/faq.jpg?webp' type='image/webp' />
              <Image
                src='/faq.jpg'
                alt='Grade B Foxnuts'
                width={120}
                height={200}
                className='w-full h-48 object-cover'
              />
            </picture>
            <div className='p-6'>
              <h3 className='text-2xl font-bold text-gray-700 mb-4'>Grade B</h3>
              <p className='text-gray-600'>
                Perfect for roasted or flavored foxnut production.
              </p>
              <p className='text-gray-600 mt-4'>
                Specification: Best Quality Graded, Round Shaped
                <br />
                Ready to use, No Wastage
                <br />
                Size: [Insert Size Here]
                <br />
                Mandi: [Insert Mandi Here]
                <br />
                Bag Size: [Insert Bag Size Here]
              </p>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform'>
            <picture>
              <source src='/faq.jpg?webp' type='image/webp' />
              <Image
                src='/faq.jpg'
                alt='Grade C Foxnuts'
                width={120}
                height={200}
                className='w-full h-48 object-cover'
              />
            </picture>
            <div className='p-6'>
              <h3 className='text-2xl font-bold text-gray-700 mb-4'>Grade C</h3>
              <p className='text-gray-600'>
                Used in culinary recipes like curries, gravies, and snacks.
              </p>
              <p className='text-gray-600 mt-4'>
                Specification: Best Quality Graded, Round Shaped
                <br />
                Ready to use, No Wastage
                <br />
                Size: [Insert Size Here]
                <br />
                Mandi: [Insert Mandi Here]
                <br />
                Bag Size: [Insert Bag Size Here]
              </p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-8 mt-8'>
          {/* Row 2 - 3 Cards */}
          <div className='bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform'>
            <picture>
              <source src='/faq.jpg?webp' type='image/webp' />
              <Image
                src='/faq.jpg'
                alt='Packaged Raw Makhana - Small'
                width={120}
                height={200}
                className='w-full h-48 object-cover'
              />
            </picture>
            <div className='p-6'>
              <h3 className='text-2xl font-bold text-gray-700 mb-4'>
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
                Size: [Insert Size Here]
                <br />
                Mandi: [Insert Mandi Here]
                <br />
                Bag Size: [Insert Bag Size Here]
              </p>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform'>
            <picture>
              <source src='/faq.jpg?webp' type='image/webp' />
              <Image
                src='/faq.jpg'
                alt='Packaged Raw Makhana - Large'
                width={120}
                height={200}
                className='w-full h-48 object-cover'
              />
            </picture>
            <div className='p-6'>
              <h3 className='text-2xl font-bold text-gray-700 mb-4'>
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
                Size: [Insert Size Here]
                <br />
                Mandi: [Insert Mandi Here]
                <br />
                Bag Size: [Insert Bag Size Here]
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
