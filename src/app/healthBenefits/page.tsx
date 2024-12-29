import React from 'react'
import Image from 'next/image'
const FoxnutBenefits: React.FC = () => {
  return (
    <section className='bg-gradient-to-b from-blue-50 to-blue-100  '>
      <picture>
        <source srcSet={'/benefits.svg'} type='image/webp' />
        <Image
          src={'/benefits.svg'}
          alt={'Benefits of Makhana'}
          width={1200}
          height={1200}
          className='w-full object-contain'
        />
      </picture>
    </section>
  )
}

export default FoxnutBenefits
