import React from 'react'
import Image from 'next/image'

const WhyChooseUs: React.FC = () => {
  return (
    <div className='relative max-w-full mx-auto overflow-hidden  aspect-[16/9]'>
      <picture>
        <source srcSet='/ourStory.svg?webp' type='image/webp' />
        <Image
          src='/ourStory.svg'
          alt='Eraya Foods, the best foxnut exporter from India'
          layout='fill' // Ensures the image fits its container
          objectFit='cover' // Prevents stretching or distortion
          className='why-choose-us-image'
        />
      </picture>
    </div>
  )
}

export default WhyChooseUs
