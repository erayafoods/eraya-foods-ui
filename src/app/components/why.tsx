'use client'
import React from 'react'
import {
  FaHandHoldingHeart,
  FaTools,
  FaLightbulb,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaLeaf
} from 'react-icons/fa'

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Handpicked Foxnuts',
      description:
        'Carefully selected from local farms, each foxnut is handpicked to ensure the best quality and taste.',
      icon: <FaHandHoldingHeart className='text-4xl text-green-500' />,
      image:
        'https://images.unsplash.com/photo-1506808547685-e2ba962ded36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'Artisanal Craftsmanship',
      description:
        'Our artisans use traditional methods, carefully popping each foxnut to achieve the perfect texture and flavor.',
      icon: <FaTools className='text-4xl text-blue-500' />,
      image:
        'https://images.unsplash.com/photo-1563245371-bf340eb86f78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'Quality Assurance',
      description:
        'We maintain stringent quality checks, ensuring that each batch of foxnuts meets our high standards for freshness and flavor.',
      icon: <FaCheckCircle className='text-4xl text-yellow-500' />,
      image:
        'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'Authentic Sourcing',
      description:
        'Sourced directly from the fertile plains of Bihar, India, our foxnuts carry the authenticity of their origin.',
      icon: <FaMapMarkerAlt className='text-4xl text-red-500' />,
      image:
        'https://images.unsplash.com/photo-1536184071535-705a10c539b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'Natural Goodness',
      description:
        'Our foxnuts are 100% natural and free from artificial additives, offering the pure goodness of nature in every bite.',
      icon: <FaLeaf className='text-4xl text-green-500' />,
      image:
        'https://images.unsplash.com/photo-1573164574391-d0a908e33fdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'Tradition Meets Innovation',
      description:
        'We blend the rich tradition of foxnut harvesting with modern techniques to bring you a premium, innovative product.',
      icon: <FaLightbulb className='text-4xl text-orange-500' />,
      image:
        'https://images.unsplash.com/photo-1558976825-198b2b1e295c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
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
