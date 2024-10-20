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

export default function Home () {
  return (
    <>
      <ImageCarousel />
      {/*  cool text*/}
      <div className='text-left font-sans p-12'>
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
    </>
  )
}
