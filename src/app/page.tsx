import Image from "next/image";
import "./globals.css";
import Nav from "./components/navbar";
import Footer from "./components/footer";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import Autoplay from "embla-carousel-autoplay";
import ImageCarousel from "./components/carousel";

export default function Home() {
    return (
        <>
            {/* <div className='grid grid-cols-12 gap-2'>
      <div></div>
     <div className='col-start-3 col-span-8'> <Nav/></div> 
      <div></div>
      <div className='col-start-2 col-end-12'> */}
            <ImageCarousel />
            {/* </div>
    <div className='col-start-2 col-end-12'></div>
    </div>
   <Footer/> */}
        </>
    );
}
