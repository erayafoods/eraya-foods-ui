import Image from 'next/image'
import './globals.css'
import Nav from './components/navbar'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card ,CardContent} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
export default function Home () {
  return (
   
    <div className='grid grid-cols-12 gap-2'>
      <div></div>
     <div className='col-start-3 col-span-8'> <Nav/></div> 
      <div></div>
      <div className='col-start-2 col-end-12'>
      <Carousel >
      <CarouselContent >
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center h-screen">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
    
      </CarouselContent>
      <CarouselPrevious  className='w-14 h-14'/>
      <CarouselNext className='w-14 h-14' />
    </Carousel>
    </div>
    <div className='col-start-2 col-end-12'></div>
    </div>
  
  );
}
