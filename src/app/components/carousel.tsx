import React, { useState, useEffect, useCallback, useRef } from 'react'
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from 'react-icons/fa'
import Image, { StaticImageData } from 'next/image'
import family from '../../public/family.jpeg'
import handpick from '../../public/handpick.jpg'
import network from '../../public/network.jpeg'
import artisans from '../../public/artisans.jpeg'
interface ImageType {
  src: StaticImageData
  alt: string
}

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const images: ImageType[] = [
    {
      src: handpick,
      alt: 'Handpicked'
    },
    {
      src: family,
      alt: 'Family'
    },
    {
      src: network,
      alt: 'Network'
    },
    {
      src: artisans,
      alt: 'Artisans'
    }
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
  }, [images.length])

  const prevSlide = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + images.length) % images.length
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const togglePlayPause = () => {
    setIsPlaying(prev => !prev)
  }

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(nextSlide, 4000)
    } else if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPlaying, nextSlide])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide()
    } else if (e.key === 'ArrowRight') {
      nextSlide()
    } else if (e.key === ' ') {
      togglePlayPause()
    }
  }

  return (
    <div
      className='relative max-w-full mx-auto overflow-hidden shadow-lg rounded-lg'
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role='region'
      aria-label='Image carousel'
    >
      {/* Carousel images */}
      <div
        className='flex transition-transform duration-700 ease-in-out'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            className='w-full h-[75vh] md:h-[80vh] object-cover flex-shrink-0 transition-opacity duration-700 ease-in-out'
            style={{ opacity: currentIndex === index ? 1 : 0.5 }}
            width={1920}
            height={1080}
            priority
          />
        ))}
      </div>

      {/* Text overlay */}
      <div className='absolute inset-0 flex justify-center items-center'>
        <h1 className='text-white text-xl md:text-6xl md:text-[8vw] font-bold tracking-wide text-white font-bold flex space-x-2'>
          <div className='animate-wave-1'>E</div>
          <div className='animate-wave-2'>R</div>
          <div className='animate-wave-3'>A</div>
          <div className='animate-wave-4'>Y</div>
          <div className='animate-wave-5'>A</div>
          <div className='w-4'></div> {/* Space between words */}
          <div className='animate-wave-6'>F</div>
          <div className='animate-wave-7'>O</div>
          <div className='animate-wave-8'>O</div>
          <div className='animate-wave-9'>D</div>
          <div className='animate-wave-10'>S</div>
        </h1>
      </div>

      {/* Previous/Next buttons */}
      <button
        onClick={prevSlide}
        className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
        aria-label='Previous image'
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
        aria-label='Next image'
      >
        <FaChevronRight />
      </button>

      {/* Carousel indicators */}
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel
