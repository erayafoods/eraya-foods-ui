'use client'
import '../globals.css'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
const FounderSection = dynamic(() => import('../components/founder'))
import Image from 'next/image'
import { Inter, IBM_Plex_Serif } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  weight: '400'
})
const ibm = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: '700'
})
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
        <picture>
          <source srcSet='/about-bg-image.avif?webp' type='image/webp' />
          <Image
            src={'/about-bg-image.avif'}
            alt='About Us Background Image'
            fill
            style={{
              opacity: aboutPicOpacity,
              transition: 'opacity 0.2s ease-out'
            }}
            className='rounded-lg object-cover'
          />
        </picture>
      </div>

      <section className='py-12'>
        <h2
          className='text-3xl md:text-3xl font-semibold text-center py-6'
          style={{ fontFamily: ibm.style.fontFamily }}
        >
          WHO ARE WE
        </h2>
        <div
          className='px-6  text-gray-600 text-2xl lg:px-32 text-center  md:text-base'
          style={{ fontFamily: inter.style.fontFamily }}
        >
          Since 2016, we’ve been proudly sharing the finest foxnuts from Bihar,
          the birthplace of our premium, organic, and pure foxnuts, with the
          world. Rooted in our family’s legacy, we ensure that every batch of
          our foxnuts is cultivated with care and adheres to the highest
          standards of quality. With each bite, our customers experience not
          only the unmatched flavor and health benefits of this superfood but
          also the assurance that they are supporting sustainable agricultural
          practices and empowering local farmers. By partnering with Eraya
          Foods, you’re not just getting a top-quality product that caters to
          the growing demand for healthy snacks; you're also driving your
          business growth while contributing to a sustainable future. Let’s
          build success together—fueling your sales and supporting the farmers
          who make it all possible.
        </div>
      </section>

      <section className=' py-12'>
        <h2
          className='text-2xl md:text-3xl font-semibold text-center py-6'
          style={{ fontFamily: ibm.style.fontFamily }}
        >
          Our Commitment to Quality
        </h2>

        {/* Responsive Grid Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-6 lg:px-32  '>
          {/* Handpicked Section */}
          <div className='relative group overflow-hidden rounded-lg shadow-lg h-[350px]'>
            <picture>
              <source srcSet='/handpick.avif?webp' type='image/webp' />
              <Image
                src={'/handpick.avif'}
                alt='Handpicked Foxnuts/Makhana from India which has traditional authentic taste, pureness and is free from machine processing '
                layout='fill'
                objectFit='cover'
                loading='lazy'
                className='rounded-lg object-cover transform transition-transform duration-500 group-hover:scale-110'
              />
            </picture>
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center'>
              <p className='text-white text-2xl font-medium px-4 text-center'>
                Excellence drives us. We deliver the finest foxnuts, sourced
                directly from Bihar’s native farms, using sustainable practices
                that support both the planet and our economy
              </p>
            </div>
          </div>

          {/* Farmer Network Section */}
          <div className='relative group overflow-hidden rounded-lg shadow-lg h-[350px] '>
            <picture className='w-full h-full'>
              <source srcSet='/network.avif?webp' type='image/webp' />
              <Image
                src={'/network.avif'}
                alt='We have reliable network of farmers for foxnut,makhana, eurayle nuts which makes us trust worthy in on time delevery with premium products'
                loading='lazy'
                layout='fill'
                objectFit='cover'
                className='rounded-lg object-cover transform transition-transform duration-500 group-hover:scale-110'
              />
            </picture>
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center'>
              <p className='text-white text-2xl font-medium px-4 text-center'>
                Our Trusted Farmer Network brings you the finest foxnuts,
                carefully harvested and hand-popped to preserve quality and
                flavor.
              </p>
            </div>
          </div>

          {/* Artisans Section */}
          <div className='relative group overflow-hidden rounded-lg shadow-lg h-[350px] '>
            <picture>
              <source srcSet='/artisans.avif?webp' type='image/webp' />
              <Image
                src={'/artisans.avif'}
                alt='Eurayle nuts, foxnuts, makhana is not just an agriculutral product .It has to go through artisan craft of heating the seeds in phases and then popping it in proper timing'
                layout='fill'
                objectFit='cover'
                loading='lazy'
                className='rounded-lg object-cover transform transition-transform duration-500 group-hover:scale-110'
              />
            </picture>
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
            <h3
              className='font-semibold text-xl'
              style={{ fontFamily: ibm.style.fontFamily }}
            >
              Mission
            </h3>
            <p
              className=' text-gray-600 pt-4 text-sm md:text-base'
              style={{ fontFamily: inter.style.fontFamily }}
            >
              Our mission is to be a trusted partner, delivering pure,
              high-quality foxnuts with a commitment to sustainability that
              supports both the environment and our farmers.
            </p>
            <p
              className='text-gray-600 pt-2 text-sm md:text-base'
              style={{ fontFamily: inter.style.fontFamily }}
            >
              Guided by
              <span className='text-gray-600 font-semibold'>
                Vasudhaiva Kutumbakam—the world as one family
              </span>{' '}
              we build lasting relationships with importers by providing
              cost-effective solutions, timely support, and shared values.
            </p>
          </div>

          <div>
            <h3
              className='font-semibold text-xl'
              style={{ fontFamily: inter.style.fontFamily }}
            >
              Vision
            </h3>
            <p
              className='text-gray-600 pt-4 text-sm md:text-base'
              style={{ fontFamily: inter.style.fontFamily }}
            >
              Our vision is to make premium foxnuts a household staple,
              promoting healthier lifestyles with a nutritious alternative to
              unhealthy snacks—especially for diabetics, pregnant women, and
              children.
            </p>
            <p
              className=' text-gray-600 pt-2 text-sm md:text-base'
              style={{ fontFamily: inter.style.fontFamily }}
            >
              We honor our farmers’ dedication, upholding values of quality and
              sustainability as the core of our brand.
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className='py-12'>
        <h3
          className='text-2xl font-semibold text-center py-6'
          style={{ fontFamily: ibm.style.fontFamily }}
        >
          Certificates & Recognitions
        </h3>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-6 px-6 lg:px-32'>
          <div className='bg-gray-100 rounded-lg h-64 flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
            <picture>
              <source srcSet='/fssai.avif?webp' type='image/wbep' />
              <Image
                src={'/fssai.avif'}
                height={160}
                width={160}
                alt={'We have FSSAI Certificate'}
              />
            </picture>
          </div>
          <div className='bg-gray-100 rounded-lg h-64 flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
            <picture>
              <source srcSet='/fda.avif?webp' type='image/webp' />
              <Image
                src={'/fda.avif'}
                height={160}
                width={160}
                alt={'We have FDA Certificate for USA importers'}
              />
            </picture>
          </div>
          <div className='bg-gray-100 rounded-lg h-64 flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
            <picture>
              <source srcSet='/fieo.avif?webp' type='image/webp' />
              <Image
                src={'/fieo.avif'}
                height={160}
                width={160}
                alt={'We have FIEO Certificate from Indian government'}
              />
            </picture>
          </div>
          <div className='bg-gray-100 rounded-lg h-64 flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
            <picture>
              {/* Use path directly in `srcSet` for WebP source */}
              <source srcSet='/APEDA.avif?webp' type='image/webp' />
              {/* Fallback image */}
              <Image
                src='/APEDA.avif'
                height={160}
                width={160}
                alt='We have APEDA Certificate'
                loading='lazy'
                className='rounded-lg'
              />
            </picture>
          </div>
          <div className='bg-gray-100 rounded-lg h-64 flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
            <Image
              src={'/iso-22000.avif'}
              height={160}
              width={160}
              alt={'We have ISO-22000 Certificate'}
            />
          </div>
        </div>
      </section>

      <FounderSection />
    </>
  )
}
