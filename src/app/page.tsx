import "./globals.css";
import ImageCarousel from "./components/carousel";
import Faq from "@/components/faq";

export default function Home() {
  return (
    <>
      {/* <div className='grid grid-cols-12 gap-2'>
      <div></div>
     <div className='col-start-3 col-span-8'> <Nav/></div> 
      <div></div>
      <div className='col-start-2 col-end-12'> */}
      {/* </div>
    <div className='col-start-2 col-end-12'></div>
    </div>
   <Footer/> */}
      <section className="h-auto min-h-screen w-full">
        <ImageCarousel />
        <Faq />
      </section>
    </>
  );
}
