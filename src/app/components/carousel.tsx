'use client'
import React, { useState, useEffect, useCallback, useRef } from 'react'
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from 'react-icons/fa'
import Image from 'next/image'

interface ImageType {
  src: string
  alt: string
}

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const images: ImageType[] = [
    {
      src: '/Home.svg',
      alt: 'Eraya foods:Best makhana Supplier,Raw ,Customized'
    },
    {
      src: '/Home_1.svg',
      alt: 'Premium organic foxnuts from Bihar, India - Crunchy, best foxnut supplier'
    },
    {
      src: '/Home_2.svg',
      alt: "Boost sales with Eraya's premium foxnuts, on-time delivery, support, packaging & marketing"
    },
    {
      src: '/Home_3.svg',
      alt: "From farmer's fields to world's table "
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
      timerRef.current = setInterval(nextSlide, 5000)
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
      className='relative max-w-full mx-auto overflow-hidden  aspect-ration[16/9]'
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role='region'
      aria-label='Image carousel'
    >
      {/* Carousel images */}
      <div
        className='flex transition-transform duration-700 bg-contain ease-in-out'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            className='flex-shrink-0 transition-opacity duration-700 ease-in-out '
            style={{ opacity: currentIndex === index ? 1 : 0.5 }}
            width={1920}
            height={1080}
            priority={index === 0} // Prioritize only the first image
            loading={index === 0 ? 'eager' : 'lazy'} // Lazy load all but the first image
          />
        ))}
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
      {/* <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-5 h-5 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  )
}

export default ImageCarousel
