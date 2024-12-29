import Image from 'next/image'

export default function Brochure () {
  return (
    <div>
      {/* Wrapper div to constrain the image */}
      <div
        style={{
          position: 'relative', // Required for layout="fill"
          width: '100%', // Constrain width
          height: '90vh' // Set a specific height for the image
        }}
      >
        <picture>
          <source srcSet='/comingSoon.avif?webp' type='image/webp' />
          <Image
            src='/comingSoon.avif'
            alt='Eraya Foods, the best foxnut exporter from India'
            layout='fill' // Ensures the image fits its container
            objectFit='cover' // Prevents stretching or distortion
            className='comingSoon'
          />
        </picture>
      </div>
    </div>
  )
}
