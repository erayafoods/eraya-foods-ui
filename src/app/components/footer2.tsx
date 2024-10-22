'use client'
import React, { useState } from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IoMdSend } from 'react-icons/io'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    // Handle newsletter subscription logic here
    console.log('Subscribed:', email)
    setEmail('')
  }

  return (
    <footer className='bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='space-y-4'>
            <h3 className='text-2xl font-bold'>Company Name</h3>
            <p className='text-sm'>
              Creating innovative solutions for a better tomorrow.
            </p>
          </div>
          <div>
            <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              {['Home', 'About Us', 'Services', 'Contact'].map(item => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className='hover:text-blue-200 transition duration-300 ease-in-out'
                    aria-label={item}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className='text-lg font-semibold mb-4'>Connect With Us</h4>
            <div className='flex space-x-4'>
              {[
                { icon: FaFacebook, label: 'Facebook' },
                { icon: FaTwitter, label: 'Twitter' },
                { icon: FaInstagram, label: 'Instagram' },
                { icon: FaLinkedin, label: 'LinkedIn' }
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className='hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110'
                  aria-label={`Follow us on ${label}`}
                >
                  <Icon className='text-2xl' />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className='text-lg font-semibold mb-4'>Newsletter</h4>
            <form onSubmit={handleSubmit} className='space-y-2'>
              <div className='flex'>
                <input
                  type='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder='Enter your email'
                  className='flex-grow px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  required
                  aria-label='Email for newsletter'
                />
                <button
                  type='submit'
                  className='bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-700'
                  aria-label='Subscribe to newsletter'
                >
                  <IoMdSend className='text-xl' />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-blue-300 text-center'>
          <p className='text-sm'>
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
