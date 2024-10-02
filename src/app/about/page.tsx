import { CardContent, CardTitle } from '@/components/ui/card'
import '../globals.css'
import { Card, CardBody, CardHeader, CardFooter } from '@nextui-org/react'
import aboutPic from '../images/about-bg-image.jpeg'
import network from '../images/network.jpeg';
import artisans from '../images/artisans.jpeg';
import handpick from '../images/handpick.jpg';
import Image from 'next/image'

export default function about () {
  
  return (
    <>
      <h2 className=' px-7 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight w-full'>
        About us
      </h2>
     
        <div>
          <Card>
            <CardContent>
              <Image src={aboutPic} height={500}></Image>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className='py-10 font-semibold font-mono text-center text-3xl'>
            {' '}
            WHO ARE WE
          </h2>
          <div className='px-10 md:px-28'>
            Since 2016, we have proudly embraced the rich heritage of Bihar, the
            birthplace of our exceptional foxnuts. We are honored to extend our
            family legacy of domestic trade into the international market,
            offering 100% organic, pure, and natural foxnuts. These are
            cultivated with care and precision to uphold the highest standards
            of excellence.
          </div>

          <h2 className='md:py-10 font-semibold font-sans text-center text-3xl '>
            Our Commitment to Quality
          </h2>
          <div className='grid grid-rows-3'>
            <div className='grid grid-cols-12 gap-1'><Image src={handpick} width={500} className='col-start-2 col-span-3 pt-36'></Image> <div className='col-start-7 col-span-5 text-center pt-40'>Excellence is at the heart of our business. We are devoted to delivering only the finest foxnuts, sourced from Bihar's native growing regions, where the soil, terrain, and climate are perfectly suited for premium cultivation. Our extensive network of grassroots farmers employs environmentally sustainable practices that are both economically advantageous and beneficial for the planet.</div> </div>
    
            <div className='grid grid-cols-12 gap-1'> <div className='col-start-2 col-span-5 text-center pt-40'>Our Trusted Farmer Network: Bringing You the Best Foxnuts, From the Source

At Eraya Foods, we take pride in our extensive network of dedicated farmers spread across the heartland of Bihar, the native region of the finest foxnuts. Our partnership with local farmers ensures that each foxnut is carefully harvested and hand-popped with precision, preserving its quality and flavor. With a reliable and ethical supply chain, we guarantee consistent, premium-quality foxnuts, tailored to meet the demands of discerning global importers. Our commitment to transparency, sustainability, and excellence makes us your trusted partner for the best foxnuts, every time.</div> <Image src={network} width={500} className='col-start-9 col-span-3 pt-36 '></Image> </div>

            
<div className='grid grid-cols-12 gap-1'><Image src={artisans} width={500} className='col-start-2 col-span-3 pt-36 '></Image> <div className='col-start-7 col-span-5 text-center pt-40'>We understand that the quality of our foxnuts directly impacts your business. That’s why we go the extra mile to ensure every nut meets the highest standards of freshness and purity. Our foxnuts are distinguished by their superior quality. Each nut is carefully handpicked to guarantee freshness and is skillfully heated and popped by artisans, preserving its natural goodness and enhancing its flavor.</div></div>
         
      </div>
      </div>
    
    </>
  )
}
