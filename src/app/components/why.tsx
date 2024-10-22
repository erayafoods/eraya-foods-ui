'use client'
import React from 'react'
import {
  FaUserShield,
  FaRocket,
  FaLightbulb,
  FaChartLine,
  FaHandshake,
  FaCog
} from 'react-icons/fa'

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Unparalleled Security',
      description:
        'State-of-the-art encryption and multi-factor authentication to keep your data safe.',
      icon: <FaUserShield className='text-4xl text-blue-500' />,
      image:
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'Lightning-Fast Performance',
      description:
        'Optimized infrastructure ensuring quick load times and smooth user experience.',
      icon: <FaRocket className='text-4xl text-red-500' />,
      image:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'Innovative Solutions',
      description:
        'Cutting-edge technology to solve complex problems with elegant simplicity.',
      icon: <FaLightbulb className='text-4xl text-yellow-500' />,
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80'
    },
    {
      title: 'Data-Driven Insights',
      description:
        'Advanced analytics to help you make informed decisions and drive growth.',
      icon: <FaChartLine className='text-4xl text-green-500' />,
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: '24/7 Customer Support',
      description:
        'Round-the-clock assistance to ensure your success and satisfaction.',
      icon: <FaHandshake className='text-4xl text-purple-500' />,
      image:
        'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80'
    },
    {
      title: 'Seamless Integration',
      description:
        'Easy-to-use APIs and plugins for smooth integration with your existing systems.',
      icon: <FaCog className='text-4xl text-gray-500' />,
      image:
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ]

  return (
    <section className='bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl font-extrabold text-gray-900 text-center mb-12'>
          Why Choose Us
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500'
              tabIndex='0'
              role='article'
              aria-label={`Feature: ${feature.title}`}
            >
              <div className='p-6'>
                <div className='flex items-center mb-4'>
                  {feature.icon}
                  <h3 className='ml-3 text-xl font-semibold text-gray-900'>
                    {feature.title}
                  </h3>
                </div>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className='w-full h-48 object-cover rounded-md mb-4'
                />
                <p className='text-gray-600'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
