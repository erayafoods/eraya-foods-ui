import { CardContent, CardTitle } from '@/components/ui/card'
import '../globals.css'
import { Card, CardBody, CardHeader, CardFooter } from '@nextui-org/react'
import aboutPic from '../../public/about-bg-image.jpeg'
import network from '../../public/network.jpeg'
import artisans from '../../public/artisans.jpeg'
import handpick from '../../public/handpick.jpg'
import Image from 'next/image'

export default function About () {
  return (
    <>
      <h2 className='p-5 md:p-10 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight w-full text-center'>
        About us
      </h2>

      {/* Updated Image Section */}
      <div className='relative h-[300px] sm:h-[500px] md:h-[600px] w-full'>
        <Image
          src={aboutPic}
          alt='About Us Background'
          fill
          className='rounded-lg object-cover'
        />
      </div>

      <section className='py-12'>
        <h2 className='text-3xl font-semibold text-center py-6'>WHO ARE WE</h2>
        <div className='px-6 lg:px-32 text-center'>
          Since 2016, we have proudly embraced the rich heritage of Bihar, the
          birthplace of our exceptional foxnuts. We are honored to extend our
          family legacy of domestic trade into the international market,
          offering 100% organic, pure, and natural foxnuts. These are cultivated
          with care and precision to uphold the highest standards of excellence.
        </div>
      </section>

      <section className='bg-[#F7FCFE] py-12'>
        <h2 className='text-3xl font-semibold text-center py-6'>
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
              <p className='text-white text-lg font-medium px-6 text-center'>
                Excellence is at the heart of our business. We are devoted to
                delivering only the finest foxnuts, sourced from Bihar's native
                growing regions. Our extensive network of grassroots farmers
                employs sustainable practices that benefit both the planet and
                economy.
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
              <p className='text-white text-lg font-medium px-6 text-center'>
                Our Trusted Farmer Network: Bringing You the Best Foxnuts from
                the Source. We ensure that each foxnut is carefully harvested
                and hand-popped with precision, preserving its quality and
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
              <p className='text-white text-lg font-medium px-6 text-center'>
                Our artisans skillfully heat and pop each foxnut, preserving its
                natural goodness and enhancing its flavor to deliver superior
                quality. We go the extra mile to ensure every nut meets the
                highest standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className='py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 px-6 lg:px-32'>
          <div className=''>
            <h3 className='font-bold text-2xl'>Mission</h3>
            <p className='pt-4'>
              Our mission is to be a trusted partner, delivering high-quality,
              pure foxnuts that surpass expectations. We prioritize
              sustainability, ensuring eco-friendly practices that benefit both
              the environment and our farmers. Our goal is to foster strong
              relationships with importers and buyers through mutual respect,
              offering cost-effective solutions and timely support.
            </p>
            <p className='pt-2'>
              Inspired by{' '}
              <span className='font-semibold'>
                Vasudhaiva Kutumbakam—the world as one family,
              </span>{' '}
              we aim to unite global communities through our commitment to
              quality and shared values.
            </p>
          </div>

          <div className=''>
            <h3 className='font-bold text-2xl'>Vision</h3>
            <p className='pt-4'>
              Our vision is to make premium-quality foxnuts a staple in every
              home, promoting a healthier lifestyle. We aim to position our
              foxnuts as a go-to superfood, providing a nutritious alternative
              to unhealthy snacks for diabetics, pregnant women, and children.
            </p>
            <p className='pt-2'>
              Honoring our farmers' dedication, we are committed to their
              success and recognition, ensuring our values of quality and
              sustainability remain the foundation of our brand.
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
          <div className='bg-gray-100 rounded-lg h-36 flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
            A
          </div>
          <div className='bg-gray-100 rounded-lg h-36 flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
            B
          </div>
          <div className='bg-gray-100 rounded-lg h-36 flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
            C
          </div>
          <div className='bg-gray-100 rounded-lg h-36 flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
            D
          </div>
          <div className='bg-gray-100 rounded-lg h-36 flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
            E
          </div>
        </div>
      </section>
    </>
  )
}
