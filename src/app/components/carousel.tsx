"use client";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import pic1 from "@/public/pic1.jpg";
import pic2 from "@/public/pic2.jpg";
import pic3 from "@/public/pic3.jpg";
import pic4 from "@/public/about-bg-image.jpeg"
import pic5 from "@/public/artisans.jpeg"

export default function Home() {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const publicImages = useMemo(() => [pic4,pic5,pic1, pic2, pic3], []);

  // Handle image transitions using useEffect
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (currentImage < publicImages.length - 1) {
        setCurrentImage(currentImage + 1);
      } else {
        setCurrentImage(0);
      }
    }, 5000); // Set transition interval to 5 seconds

    // Cleanup function to clear the timer when the component unmounts
    return () => clearTimeout(timerId);
  }, [currentImage, publicImages]);

  return (
    <div className="h-[74vh] lg:h-screen w-full">
      <div className="relative h-full overflow-hidden">
        {/* <div className="z-10 absolute inset-0 bottom-56 bg-gradient-to-t from-transparent to-neutral-950" /> */}

        <div
          className="container-snap flex space-x-4"
          ref={scrollContainerRef}
          style={{ width: "100%" }} // Set total width
        >
          <Image
            title={"Eraya Foods Image"}
            alt={"Eraya Landing Image"}
            src={publicImages[currentImage]}
            fill
            className="h-full w-full object-cover"
          />
        </div>

        <div className="wrapper relative z-10 mt-28 flex flex-col justify-center space-y-20 text-white">
          <h1 className={`flex flex-col text-5xl tracking-wide lg:text-7xl`}>
            <span>Eraya</span>
            <span>Foods</span>
            <span>Your Go To,</span>
            <span className="stroked-letter text-primary">Food Store</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
