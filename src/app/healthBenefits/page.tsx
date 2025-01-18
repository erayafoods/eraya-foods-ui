import React from 'react'
import Image from 'next/image'
const FoxnutBenefits: React.FC = () => {
  return (
    <section className='bg-[#f3f8db] '>
      <picture>
        <source srcSet={'/nutrition.svg'} type='image/webp' />
        <Image
          src={'/nutrition.svg'}
          alt={
            'Makhana, also known as fox nuts or lotus seeds, is a nutrient-dense snack offering several health benefits. Per 100 grams, makhana provides approximately 347 calories, 9.7 grams of protein, 76.9 grams of carbohydrates, 14.5 grams of dietary fiber, and 0.6 grams of fat. ' +
            'TATA AIG INSURANCE. It is also rich in essential minerals such as calcium, magnesium, iron, and phosphorus'
          }
          width={1080}
          height={1080}
          className='w-4/6 mx-auto'
        />
      </picture>
      <picture>
        <source srcSet={'/benefits.svg'} type='image/webp' />
        <Image
          src={'/benefits.svg'}
          alt={
            'Makhana (fox nuts) offer health benefits like diabetes management, kidney health, bone strength, energy boost, blood pressure regulation, diarrhea management, insomnia relief, weight loss aid, and skin health.'
          }
          width={1200}
          height={1200}
          className='w-4/6 mx-auto'
        />
      </picture>
    </section>
  )
}

export default FoxnutBenefits
