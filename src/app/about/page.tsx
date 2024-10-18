import { CardContent, CardTitle } from '@/components/ui/card'
import '../globals.css'
import { Card, CardBody, CardHeader, CardFooter } from '@nextui-org/react'
import aboutPic from '../../public/about-bg-image.jpeg'
import network from '../../public/network.jpeg'
import artisans from '../../public/artisans.jpeg'
import handpick from '../../public/handpick.jpg'
import Image from 'next/image'

export default function about () {
  return (
    <>
      <h2 className='p-5 md:p-10 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight w-full'>
        About us
      </h2>

      <div className='h-[600px]'>
        <Image src={aboutPic} className='w-full h-5/6' alt='aboutPic'></Image>
      </div>

      <div>
        <h2 className='py-10 font-semibold font-mono text-center text-3xl'>
          WHO ARE WE
        </h2>
        <div className='px-8 lg:px-28 md:px-16 '>
          Since 2016, we have proudly embraced the rich heritage of Bihar, the
          birthplace of our exceptional foxnuts. We are honored to extend our
          family legacy of domestic trade into the international market,
          offering 100% organic, pure, and natural foxnuts. These are cultivated
          with care and precision to uphold the highest standards of excellence.
        </div>

        <h2 className='md:py-10 font-semibold font-sans text-center text-3xl '>
          Our Commitment to Quality
        </h2>
        <div className='hidden md:grid md:grid-rows-3 md:bg-[#F7FCFE]'>
          <div className='grid grid-cols-12 gap-1 px-8 lg:px-28 md:px-16'>
            <Image
              src={handpick}
              width={500}
              className='col-start-2 col-span-3 pt-36 rounded-lg'
              alt='Handpick'
            ></Image>{' '}
            <div className='col-start-7 col-span-5 text-center pt-40'>
              Excellence is at the heart of our business. We are devoted to
              delivering only the finest foxnuts, sourced from Bihar's native
              growing regions, where the soil, terrain, and climate are
              perfectly suited for premium cultivation. Our extensive network of
              grassroots farmers employs environmentally sustainable practices
              that are both economically advantageous and beneficial for the
              planet.
            </div>{' '}
          </div>

          <div className='grid grid-cols-12 gap-1'>
            {' '}
            <div className='col-start-2 col-span-5 text-center pt-40'>
              Our Trusted Farmer Network: Bringing You the Best Foxnuts, From
              the Source At Eraya Foods, we take pride in our extensive network
              of dedicated farmers spread across the heartland of Bihar, the
              native region of the finest foxnuts. Our partnership with local
              farmers ensures that each foxnut is carefully harvested and
              hand-popped with precision, preserving its quality and flavor.
              With a reliable and ethical supply chain, we guarantee consistent,
              premium-quality foxnuts, tailored to meet the demands of
              discerning global importers. Our commitment to transparency,
              sustainability, and excellence makes us your trusted partner for
              the best foxnuts, every time.
            </div>{' '}
            <Image
              src={network}
              width={500}
              className='col-start-9 col-span-3 pt-36 rounded-lg'
              alt='network'
            ></Image>{' '}
          </div>

          <div className='grid grid-cols-12 gap-1'>
            <Image
              src={artisans}
              width={500}
              className='col-start-2 col-span-3 pt-36 rounded-lg '
              alt='artisans'
            ></Image>{' '}
            <div className='col-start-7 col-span-5 text-center pt-40'>
              We understand that the quality of our foxnuts directly impacts
              your business. That’s why we go the extra mile to ensure every nut
              meets the highest standards of freshness and purity. Our foxnuts
              are distinguished by their superior quality. Each nut is carefully
              handpicked to guarantee freshness and is skillfully heated and
              popped by artisans, preserving its natural goodness and enhancing
              its flavor.
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-rows-2 md:gap-20  md:py-10 gap-8 py-4 px-8 lg:px-28 md:px-16'>
        <div className=''>
          <div className='font-extrabold'>Mission</div>
          Our mission is to be a trusted partner, delivering high-quality, pure
          foxnuts that surpass expectations. We prioritize sustainability,
          ensuring eco-friendly practices that benefit both the environment and
          our farmers. With a focus on hygiene and excellence, we provide
          products that are safe and delightful. Our goal is to foster strong
          relationships with importers and buyers through mutual respect,
          offering cost-effective solutions and timely support. Inspired by{' '}
          <div className='font-semibold'>
            Vasudhaiva Kutumbakam—the world as one family{' '}
          </div>{' '}
          We aim to unite global communities through our commitment to quality
          and shared values.
        </div>
        <div className=''>
          <div className='font-extrabold'>Vision</div>
          Our vision is to make premium-quality foxnuts a staple in every home,
          promoting a healthier lifestyle. We aim to position our foxnuts as a
          go-to superfood, providing a nutritious alternative to unhealthy
          snacks for diabetics, pregnant women, and children. As part of a
          global initiative for well-being, we envision a future where nations
          collaborate for health and sustainability. Honoring our farmers'
          dedication, we are committed to their success and recognition,
          ensuring our values of quality and sustainability remain the
          foundation of our brand
        </div>
      </div>
      <h3 className='md:pt-32 font-semibold font-sans px-8 lg:px-28 md:px-16 pt-6 text-2xl'>
        Certificates & Recognitions
      </h3>
      <div className='grid grid-cols-12 gap:10 px-8 lg:px-28 md:px-16'>
        <div className='col-start-2 col-span-2'>A</div>
        <div className='col-start-4 col-span-2'>B</div>
        <div className='col-start-6 col-span-2'>C</div>
        <div className='col-start-8 col-span-2'>D</div>
      </div>
    </>
  )
}
