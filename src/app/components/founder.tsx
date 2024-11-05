'use client'
import React, { useState } from 'react'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

const FounderSection = () => {
  const [followingStatus, setFollowingStatus] = useState({})

  const founders = [
    {
      name: 'Ankush Kumar',
      title: 'Founder & CEO',
      image: '/ankush.jpeg',
      bio: 'Bringing over 7 years of expertise as an engineer and entrepreneur, Ankush Kumar is committed to setting new standards in the foxnut industry. His focus is on providing the highest quality foxnuts, bridging the gap between B2B and B2C needs, and ensuring exceptional value for all clients. Passionate about quality and innovation, Ankush strives to make Eraya Foods a trusted name worldwide.',
      quote:
        "Success isn't just in the products we deliver, but in the trust and value we bring to those who enjoy them.",
      socialMedia: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com'
      }
    },
    {
      name: 'Anubhi Shah',
      title: 'COO',
      image: '/anubhi.jpeg',
      bio:
        'With a background in hotel management, Anubhi Shah brings a unique perspective as the Chief Operating Officer at Eraya, expertly blending operational efficiency with a customer-first approach. Her commitment is to create seamless experiences that embody Eraya' +
        "'" +
        's dedication to quality and service, ensuring each step aligns with the highest standards for the satisfaction of both clients and partners.',
      quote:
        'True service goes beyond meeting expectations; it’s about anticipating needs and creating lasting value in every experience.',
      socialMedia: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com'
      }
    }
    // Add more founder data here as needed
  ]

  const handleImageError = index => {
    setFollowingStatus(prevStatus => ({
      ...prevStatus,
      [`imageError${index}`]: true
    }))
  }

  const toggleFollow = index => {
    setFollowingStatus(prevStatus => ({
      ...prevStatus,
      [`isFollowing${index}`]: !prevStatus[`isFollowing${index}`]
    }))
  }

  return (
    <div className='py-[5vh]'>
      <div className='text-center font-bold text-cyan-950 text-5xl'>
        Meet Our Team
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12'>
        {founders.map((founder, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='bg-white rounded-2xl shadow-xl overflow-hidden'
          >
            <div className='md:flex'>
              <div className='md:flex-shrink-0 md:w-1/2'>
                {!followingStatus[`imageError${index}`] ? (
                  <img
                    src={`${founder.image}`}
                    alt={`Founder ${founder.name}`}
                    className='h-full w-full object-cover transform hover:scale-105 transition-transform duration-300'
                    onError={() => handleImageError(index)}
                  />
                ) : (
                  <div className='h-full w-full bg-gray-200 flex items-center justify-center'>
                    <span className='text-gray-500'>Image not available</span>
                  </div>
                )}
              </div>

              <div className='p-8 md:w-1/2'>
                <div className='uppercase tracking-wide text-sm text-indigo-600 font-semibold'>
                  {founder.title}
                </div>
                <h1 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                  {founder.name}
                </h1>

                <p className='mt-4 text-lg text-gray-500'>{founder.bio}</p>

                <blockquote className='mt-6 border-l-4 border-indigo-600 pl-4 italic text-gray-600'>
                  {founder.quote}
                </blockquote>

                <div className='mt-8 flex items-center space-x-6'>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={founder.socialMedia.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-600 hover:text-indigo-600'
                  >
                    <FaLinkedin className='h-6 w-6' />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={founder.socialMedia.twitter}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-600 hover:text-indigo-600'
                  >
                    <FaTwitter className='h-6 w-6' />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={founder.socialMedia.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-600 hover:text-indigo-600'
                  >
                    <FaGithub className='h-6 w-6' />
                  </motion.a>
                </div>

                <div className='mt-8 flex flex-wrap gap-4'></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default FounderSection
