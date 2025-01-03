import '../globals.css'
import dynamic from 'next/dynamic'
const FounderSection = dynamic(() => import('../components/founder'))
import Image from 'next/image'
import { Inter, IBM_Plex_Serif } from 'next/font/google'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'About Eraya Foods – Your Trusted Foxnut,Makhana Partner',
  description:
    'Eraya Foods: Trusted supplier of premium, handpicked foxnuts from Bihar, India. Committed to quality, innovation, and fueling business growth.',
  keywords: [
    'Premium Phool Makhana',
    'Organic Phool Makhana',
    'Handpicked Makhana from Bihar',
    'Pure and Natural Makhana',
    'Healthy Makhana Snacks',
    'Sustainably Sourced Phool Makhana',
    'Superfood Makhana',
    'Makhana for Healthy Living',
    'Phool Makhana for Diabetics',
    'Phool Makhana for Pregnant Women',
    'Phool Makhana for Kids',
    'Makhana: The Perfect Snack Alternative',
    'High-Quality Phool Makhana',
    'Freshly Popped Phool Makhana',
    'Traditional Makhana Craftsmanship',
    'Farm-to-Fork Phool Makhana',
    'Certified Phool Makhana Supplier',
    'Ethical Sourcing of Makhana',
    'Phool Makhana Exporter',
    'Makhana for Global Markets',
    'Sustainable Makhana Farming',
    'Delicious and Nutritious Makhana',
    'Artisan-Crafted Phool Makhana',
    'Trusted Makhana Supplier',
    'Phool Makhana for Every Occasion',
    'Quick and Easy Makhana Recipes',
    'Makhana Recipe Ideas',
    'Tasty Makhana Snack Recipes',
    'Crunchy Makhana Snack',
    'Spiced Makhana Recipes',
    'Makhana as a Healthy Snack',
    'Guilt-Free Makhana Snack',
    'Flavorful Makhana Recipe Collection'
  ],
  alternates: {
    canonical: 'https://erayafoods.com/about'
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

import FadeImage from '../components/fadeImage'
export default function About () {
  // State to control opacity of aboutPic

  return (
    <>
      <FadeImage />
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
                alt='Handpicked Foxnuts/Makhana from India with traditional taste, purity, and no machine processing'
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
                alt='Reliable network of farmers for premium foxnuts, makhana, Euryale nuts & on-time delivery'
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
                alt='Euryale nuts, foxnuts, makhana go through artisan craft of heating and popping at right time'
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
              style={{ fontFamily: ibm.style.fontFamily }} // Assuming this is the preferred font for titles
            >
              Mission
            </h3>
            <p
              className='text-gray-600 pt-4 text-sm md:text-base'
              style={{ fontFamily: inter.style.fontFamily }} // Assuming this is the preferred font for paragraph text
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
              style={{ fontFamily: ibm.style.fontFamily }} // Apply the same title font style here for consistency
            >
              Vision
            </h3>
            <p
              className='text-gray-600 pt-4 text-sm md:text-base'
              style={{ fontFamily: inter.style.fontFamily }} // Use the same font family for vision text
            >
              Our vision is to make premium foxnuts a household staple,
              promoting healthier lifestyles with a nutritious alternative to
              unhealthy snacks—especially for diabetics, pregnant women, and
              children.
            </p>
            <p
              className='text-gray-600 pt-2 text-sm md:text-base'
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
          className='text-xl sm:text-2xl md:text-3xl font-semibold text-center py-12'
          style={{ fontFamily: ibm.style.fontFamily }}
        >
          Certificates & Recognitions
        </h3>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 px-4 md:px-10 lg:px-32'>
          {[
            {
              src: '/fssai.avif',
              webp: '/fssai.avif?webp',
              alt: 'FSSAI Certificate'
            },
            {
              src: '/fieo.avif',
              webp: '/fieo.avif?webp',
              alt: 'FIEO Certificate from Indian government'
            },
            {
              src: '/APEDA.avif',
              webp: '/APEDA.avif?webp',
              alt: 'APEDA Certificate'
            }
          ].map(({ src, webp, alt }, index) => (
            <div
              key={index}
              className='bg-gray-100 rounded-lg h-64 flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl'
            >
              <picture>
                <source srcSet={webp} type='image/webp' />
                <Image
                  src={src}
                  height={160}
                  width={160}
                  alt={alt}
                  loading='lazy'
                  className='rounded-md'
                />
              </picture>
            </div>
          ))}
        </div>
      </section>

      <FounderSection />
    </>
  )
}
