'use client'
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
import '../globals.css'

export default function ImageCarousel () {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000
        })
      ]}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className='p-1'>
              <Card>
                <CardContent className='flex items-center justify-center h-screen'>
                  <span className='text-4xl font-semibold'>{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='w-20 h-20 left-4' />
      <CarouselNext className='w-20 h-20 right-4' />
    </Carousel>
  )
}
