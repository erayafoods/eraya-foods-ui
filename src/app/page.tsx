'use client'
import Image from 'next/image'
import './globals.css'
import Nav from './components/navbar'
import Footer from './components/footer'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import Autoplay from 'embla-carousel-autoplay'
import ImageCarousel from './components/carousel'
import Tea from '../public/tea.svg'
export default function Home () {
  return (
    <>
      <ImageCarousel />
      {/*  cool text*/}

      <div className='text-left font-sans px-44 py-20'>
        Since 2016, Eraya Foods has been proudly delivering the finest premium
        foxnuts, handpicked and meticulously crafted by skilled artisans in
        India. Our unwavering commitment to quality is reflected in every
        step—from sourcing the best raw materials to ensuring each nut is popped
        with precision for a crisp, flavorful experience. We blend tradition
        with innovation, bringing you a product that honors India's rich
        heritage while meeting modern standards of excellence. Whether for
        snacking or culinary use, our foxnuts offer unmatched taste, nutrition,
        and purity. Experience the natural goodness of Eraya Foods in every bite
      </div>

      <section
        id='features'
        className='container mx-auto px-2 space-y-6 py-8 md:py-12 lg:py-20'
      >
        <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
          <h2 className='font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
            WHY CHOOSE US
          </h2>

          <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 '>
            Choose us for our unwavering commitment to quality, blending
            tradition with innovation to deliver premium products that are
            sourced responsibly and crafted with care, ensuring a natural,
            flavorful experience every time.
          </p>
        </div>

        <div className='mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 '>
          <div className='relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2'>
            <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
              {/* Image1 here  */}
              <Image src={Tea} alt='Handpicked' width={12} height={12} />

              <div className='space-y-2'>
                <h3 className='font-bold'>Handpicked</h3>
                <p className='text-sm text-muted-foreground'>
                  Handpicked with care, delivering premium quality in every
                  bite, ensuring a delightful experience that celebrates
                  nature's finest flavors and craftsmanship
                </p>
              </div>
            </div>
          </div>

          <div className='relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2'>
            <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
              <svg viewBox='0 0 24 24' className='h-12 w-12 fill-current'>
                <path d='M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z'></path>
              </svg>
              <div className='space-y-2'>
                <h3 className='font-bold'>Artisanal Craftsmanship</h3>
                <p className='text-sm'>
                  Masterfully crafted, each nut is carefully heated and popped
                  with a perfect balance of art and science, delivering
                  unmatched taste.
                </p>
              </div>
            </div>
          </div>

          <div className='relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2'>
            <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
              <svg viewBox='0 0 24 24' className='h-12 w-12 fill-current'>
                <path d='M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z'></path>
              </svg>
              <div className='space-y-2'>
                <h3 className='font-bold'>Quality Assurance</h3>
                <p className='text-sm text-muted-foreground'>
                  Our unwavering commitment to quality assurance ensures each
                  product meets the highest standards, reinforcing your trust in
                  every delicious bite
                </p>
              </div>
            </div>
          </div>

          <div className='relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2'>
            <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
              <svg viewBox='0 0 24 24' className='h-12 w-12 fill-current'>
                <path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z'></path>
              </svg>
              <div className='space-y-2'>
                <h3 className='font-bold'>Authentic Sourcing </h3>
                <p className='text-sm text-muted-foreground'>
                  Locally sourced from Bihar, our foxnuts celebrate the rich
                  heritage and unique flavors of the region, ensuring
                  exceptional quality.
                </p>
              </div>
            </div>
          </div>

          <div className='relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2'>
            <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
              <svg
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth={'1'}
                className='h-12 w-12 fill-current'
              >
                <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
              </svg>
              <div className='space-y-2'>
                <h3 className='font-bold'>Natural Goodness</h3>
                <p className='text-sm text-muted-foreground'>
                  Embrace the essence of nature with our organic foxnuts,
                  crafted to perfection and free from artificial additives,
                  ensuring pure goodness.
                </p>
              </div>
            </div>
          </div>

          <div className='relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2'>
            <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
              <svg viewBox='0 0 24 24' className='h-12 w-12 fill-current'>
                <path d='M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z'></path>
              </svg>
              <div className='space-y-2'>
                <h3 className='font-bold'>Tradition Meets Innovation</h3>
                <p className='text-sm text-muted-foreground'>
                  Embrace our foxnuts, where sustainable farming practices blend
                  tradition with modern techniques, preserving nature's essence
                  while ensuring freshness and quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
