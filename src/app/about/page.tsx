// import aboutPic from '../../public/about-bg-image.jpeg'
// import network from '../../public/network.jpeg'
// import artisans from '../../public/artisans.jpeg'
// import handpick from '../../public/handpick.jpg'
// import fssai from '../../public/fssai.png'
// import apeda from '../../public/APEDA.png'
// import fieo from '../../public/fieo.png'
// import fda from '../../public/fda.png'
// import iso from '../../public/iso-22000.webp'
// import Image from 'next/image'

// export default function About () {
//   return (
//     <>
//       {/* Updated Image Section */}
//       <div className='relative h-[300px] sm:h-[500px] md:h-[600px] w-full'>
//         <Image
//           src={aboutPic}
//           alt='About Us Background'
//           fill
//           className='rounded-lg object-cover'
//         />
//       </div>

'use client'
import '../globals.css'
import { useState, useEffect } from 'react'
import aboutPic from '../../public/about-bg-image.jpeg'
import network from '../../public/network.jpeg'
import artisans from '../../public/artisans.jpeg'
import handpick from '../../public/handpick.jpg'
import fssai from '../../public/fssai.png'
import apeda from '../../public/APEDA.png'
import fieo from '../../public/fieo.png'
import fda from '../../public/fda.png'
import iso from '../../public/iso-22000.webp'
import Image from 'next/image'

export default function About () {
  // State to control opacity of aboutPic
  const [aboutPicOpacity, setAboutPicOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const fadeStart = 0 // Where the fade effect starts
      const fadeEnd = 800 // Point at which image is fully faded
      const scrollY = window.scrollY
      const newOpacity = Math.max(
        1 - (scrollY - fadeStart) / (fadeEnd - fadeStart),
        0
      )
      setAboutPicOpacity(newOpacity)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* Updated Image Section with Fade Effect */}
      <div className='relative h-[300px] sm:h-[500px] md:h-[600px] w-full'>
        <Image
          src={aboutPic}
          alt='About Us Background'
          fill
          style={{
            opacity: aboutPicOpacity,
            transition: 'opacity 0.2s ease-out'
          }}
          className='rounded-lg object-cover'
        />
      </div>

      <section className='py-12'>
        <h2 className='text-2xl md:text-3xl font-semibold text-center py-6'>
          WHO ARE WE
        </h2>
        <div className='px-6 lg:px-32 text-center text-sm md:text-base'>
          Since 2016, we’ve proudly shared Bihar’s rich heritage, the birthplace
          of our premium foxnuts, with the world. Honoring our family’s legacy,
          we offer 100% organic, pure, and natural foxnuts—cultivated with care
          to the highest standards. With every bite, our customers enjoy the
          unmatched taste and health benefits of this superfood, while
          supporting sustainable practices and our commitment to farmer success.
          By partnering with us, you gain a product that not only meets rising
          consumer demand for healthy snacks but also helps drive your sales
          growth. Together, we build a sustainable future, supporting our
          farmers and fueling your business success.
        </div>
      </section>

      <section className=' py-12'>
        <h2 className='text-2xl md:text-3xl font-semibold text-center py-6'>
          Our Commitment to Quality
        </h2>

        {/* Responsive Grid Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-6 lg:px-32'>
          {/* Handpicked Section */}
          <div className='relative group overflow-hidden rounded-lg shadow-lg'>
            <Image
              src={handpick}
              alt='Handpicked Foxnuts'
              width={500}
              height={350}
              className='rounded-lg object-cover transform transition-transform duration-500 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center'>
              <p className='text-white text-2xl font-medium px-4 text-center'>
                Excellence drives us. We deliver the finest foxnuts, sourced
                directly from Bihar’s native farms, using sustainable practices
                that support both the planet and our economy
              </p>
            </div>
          </div>

          {/* Farmer Network Section */}
          <div className='relative group overflow-hidden rounded-lg shadow-lg'>
            <Image
              src={network}
              alt='Farmer Network'
              width={500}
              height={350}
              className='rounded-lg object-cover transform transition-transform duration-500 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center'>
              <p className='text-white text-2xl font-medium px-4 text-center'>
                Our Trusted Farmer Network brings you the finest foxnuts,
                carefully harvested and hand-popped to preserve quality and
                flavor.
              </p>
            </div>
          </div>

          {/* Artisans Section */}
          <div className='relative group overflow-hidden rounded-lg shadow-lg'>
            <Image
              src={artisans}
              alt='Artisans'
              width={500}
              height={350}
              className='rounded-lg object-cover transform transition-transform duration-500 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center'>
              <p className='text-white text-2xl font-medium px-4 text-center'>
                Our artisans expertly pop each foxnut, preserving its natural
                goodness and elevating flavor to ensure top quality in every
                bite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className='py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 px-6 lg:px-32'>
          <div className=''>
            <h3 className='font-semibold text-xl'>Mission</h3>
            <p className='pt-4 text-sm md:text-base'>
              Our mission is to be a trusted partner, delivering pure,
              high-quality foxnuts with a commitment to sustainability that
              supports both the environment and our farmers.
            </p>
            <p className='pt-2 text-sm md:text-base'>
              Guided by
              <span className='font-semibold'>
                Vasudhaiva Kutumbakam—the world as one family
              </span>{' '}
              we build lasting relationships with importers by providing
              cost-effective solutions, timely support, and shared values.
            </p>
          </div>

          <div className=''>
            <h3 className='font-semibold text-xl'>Vision</h3>
            <p className='pt-4 text-sm md:text-base'>
              Our vision is to make premium foxnuts a household staple,
              promoting healthier lifestyles with a nutritious alternative to
              unhealthy snacks—especially for diabetics, pregnant women, and
              children.
            </p>
            <p className='pt-2 text-sm md:text-base'>
              We honor our farmers’ dedication, upholding values of quality and
              sustainability as the core of our brand.
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className='py-12'>
        <h3 className='text-2xl font-semibold text-center py-6'>
          Certificates & Recognitions
        </h3>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-6 px-6 lg:px-32'>
          <div className='bg-gray-100 rounded-lg h-64 flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
            <Image src={fssai} height={160} alt={'We have FSSAI Certificate'} />
          </div>
          <div className='bg-gray-100 rounded-lg h-64 flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
            <Image
              src={fda}
              height={160}
              alt={'We have FDA Certificate for USA importers'}
            />
          </div>
          <div className='bg-gray-100 rounded-lg h-64 flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
            <Image
              src={fieo}
              height={160}
              alt={'We have FIEO Certificate from Indian government'}
            />
          </div>
          <div className='bg-gray-100 rounded-lg h-64 flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
            <Image src={apeda} height={160} alt={'We have APEDA Certificate'} />
          </div>
          <div className='bg-gray-100 rounded-lg h-64 flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
            <Image
              src={iso}
              height={160}
              alt={'We have ISO-22000 Certificate'}
            />
          </div>
        </div>
      </section>
    </>
  )
}
