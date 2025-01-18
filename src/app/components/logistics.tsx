import React from 'react'
import Image from 'next/image'

const Logistics: React.FC = () => {
  return (
    <div className='relative max-w-full mx-auto overflow-hidden  aspect-[16/9]'>
      <picture>
        <source srcSet='/1.jpg?webp' type='image/webp' />
        <Image
          src='/1.jpg'
          alt='Eraya Foods, the best foxnut exporter from India'
          layout='fill'
          objectFit='cover'
          className='why-choose-us-image'
        />
      </picture>
    </div>
  )
}

export default Logistics
