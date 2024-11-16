import React from 'react'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import Image from 'next/image'
interface FounderData {
  name: string
  title: string
  image: string
  bio: string
  quote: string
  socialMedia: {
    linkedin: string
    twitter: string
    description: string
  }
}

import { Inter, IBM_Plex_Serif } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  weight: '400'
})
const ibm = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: '700'
})

const FounderSection: React.FC = () => {
  const founders: FounderData[] = [
    {
      name: 'Ankush Kumar',
      title: 'Founder & CEO',
      image: '/ankush.avif',
      bio: 'Bringing over 7 years of expertise as an engineer and entrepreneur, Ankush Kumar is committed to setting new standards in the foxnut industry. His focus is on providing the highest quality foxnuts, bridging the gap between B2B and B2C needs, and ensuring exceptional value for all clients. Passionate about quality and innovation, Ankush strives to make Eraya Foods a trusted name worldwide.',
      quote:
        "Success isn't just in the products we deliver, but in the trust and value we bring to those who enjoy them.",
      socialMedia: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        description:
          'Social Media of Ankush Kumar ,Founder & CEO of Eraya Foods '
      }
    },
    {
      name: 'Anubhi Shah',
      title: 'COO',
      image: '/anubhi.avif',
      bio: 'With a background in hotel management, Anubhi Shah brings a unique perspective as the Chief Operating Officer at Eraya, expertly blending operational efficiency with a customer-first approach. Her commitment is to create seamless experiences that embody Eraya’s dedication to quality and service, ensuring each step aligns with the highest standards for the satisfaction of both clients and partners.',
      quote:
        'True service goes beyond meeting expectations; it’s about anticipating needs and creating lasting value in every experience.',
      socialMedia: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        description: 'Social Media of Anubhi Shah ,COO of Eraya Foods'
      }
    }
  ]

  return (
    <div className='py-[5vh]'>
      <h1
        className='text-center font-bold text-cyan-950 text-5xl'
        style={{ fontFamily: ibm.style.fontFamily }}
      >
        Meet Our Team
      </h1>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12'>
        {founders.map((founder, index) => (
          <div
            key={index}
            className='bg-white rounded-2xl shadow-xl overflow-hidden'
          >
            <div className='md:flex'>
              <div className='md:flex-shrink-0 md:w-1/2'>
                {
                  <Image
                    src={`${founder.image}`}
                    alt={`Founder ${founder.name}`}
                    width={150}
                    height={150}
                    loading='lazy'
                    className='h-full w-full object-cover transform hover:scale-105 transition-transform duration-300'
                  />
                }
              </div>

              <div
                className='p-8 md:w-1/2'
                style={{ fontFamily: inter.style.fontFamily }}
              >
                <div className='uppercase tracking-wide text-sm text-indigo-600 font-semibold'>
                  {founder.title}
                </div>
                <h2 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                  {founder.name}
                </h2>

                <p className='mt-4 text-lg text-gray-600'>{founder.bio}</p>

                <blockquote className='mt-6 border-l-4 border-indigo-600 pl-4 italic text-gray-600'>
                  {founder.quote}
                </blockquote>

                <div className='mt-8 flex items-center space-x-6'>
                  <a
                    href={founder.socialMedia.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-600 hover:text-indigo-600'
                    aria-label={founder.socialMedia.description}
                  >
                    <FaLinkedin className='h-6 w-6' />
                  </a>
                  <a
                    href={founder.socialMedia.twitter}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-600 hover:text-indigo-600'
                    aria-label={founder.socialMedia.description}
                  >
                    <FaTwitter className='h-6 w-6' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FounderSection
