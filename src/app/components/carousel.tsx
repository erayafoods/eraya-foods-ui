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
      src: '/000.png',
      alt: 'Eraya foods:Best foxnut Supplier,Raw ,Customized'
    },
    {
      src: '/001.png',
      alt: 'Best Foxnut Supplier from India serving crunchy ,organic premium foxnuts sourced from lands of makhana :Bihar'
    },
    {
      src: '/002.png',
      alt: 'Sales multifold where Eraya foxnuts are sold.What sets us apart is our premium foxnuts, on time delevery, dedicated support in whole export process,customizable packaging,quality consistency  and genius marketing solutions to boost your sales!!'
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
      className='relative max-w-full mx-auto overflow-hidden shadow-lg rounded-lg aspect-[16/9]'
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
            className='w-full h-full object-contain flex-shrink-0 transition-opacity duration-700 ease-in-out'
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
