import React from 'react'
import Image from 'next/image'

const Roadmap: React.FC = () => {
  return (
    <div className='relative max-w-full mx-auto overflow-hidden aspect-[16/9]'>
      <picture>
        <source srcSet='/roadmap.svg?webp' type='image/webp' />
        <Image
          src='/roadmap.svg'
          alt='Eraya Foods, the best foxnut exporter from India'
          layout='fill' // Ensures the image fills the container
          objectFit='cover' // Prevents stretching or distortion
          className='roadmap-image'
          priority // Optimizes loading for important images
        />
      </picture>
    </div>
  )
}

export default Roadmap
