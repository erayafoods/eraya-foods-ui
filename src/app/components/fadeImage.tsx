'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
export default function FadeImage () {
  const [aboutPicOpacity, setAboutPicOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const fadeStart = 0 // Where the fade effect starts
      const fadeEnd = 800 // Point at which image is fully faded
      const scrollY = window.scrollY
      const newOpacity = Math.max(
        1 - (scrollY - fadeStart) / (fadeEnd - fadeStart),
        0
      )
      setAboutPicOpacity(newOpacity)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className='relative h-[300px] sm:h-[500px] md:h-[600px] w-full'>
      <picture>
        <source srcSet='/about-bg-image.avif?webp' type='image/webp' />
        <Image
          src={'/about-bg-image.avif'}
          alt='About Us Background Image'
          fill
          style={{
            opacity: aboutPicOpacity,
            transition: 'opacity 0.2s ease-out'
          }}
          className='rounded-lg object-cover'
        />
      </picture>
    </div>
  )
}
