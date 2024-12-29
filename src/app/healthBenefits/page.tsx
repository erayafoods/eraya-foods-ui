import React from 'react'
import Image from 'next/image'
const FoxnutBenefits: React.FC = () => {
  return (
    <section className='bg-[#f3f8db] '>
      <picture>
        <source srcSet={'/nutrition.svg'} type='image/webp' />
        <Image
          src={'/nutrition.svg'}
          alt={'Nutriotional value of Makhana'}
          width={1080}
          height={1080}
          className='w-4/6 mx-auto'
        />
      </picture>
      <picture>
        <source srcSet={'/benefits.svg'} type='image/webp' />
        <Image
          src={'/benefits.svg'}
          alt={'Benefits of Makhana'}
          width={1200}
          height={1200}
          className='w-4/6 mx-auto'
        />
      </picture>
    </section>
  )
}

export default FoxnutBenefits
