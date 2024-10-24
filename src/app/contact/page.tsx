'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react'
import { FiMail, FiPhone } from 'react-icons/fi'

interface FormData {
  name: string
  email: string
  phone?: string // Optional phone number
  message: string
}

interface Errors {
  name?: string
  email?: string
  phone?: string // Error for optional phone
  message?: string
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '', // Initialize phone as empty
    message: ''
  })

  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState<boolean>(false)

  const validateForm = (): Errors => {
    const newErrors: Errors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    // Optional phone number validation (if provided)
    if (formData.phone && !/^\+?[1-9]\d{1,14}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number format'
    }
    return newErrors
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    } else {
      setErrors(newErrors)
    }
  }

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Cast name to keyof Errors
    if (name in errors) {
      setErrors(prev => ({
        ...prev,
        [name as keyof Errors]: '' // Assert name as keyof Errors
      }))
    }
  }

  return (
    <>
      <div className='p-5 md:p-10 w-full'>
        <h2 className='breadcrumb'>
          <span className='text-gray-600 hover:text-gray-900 cursor-pointer'>
            Home
          </span>{' '}
          / Contact us
        </h2>
      </div>
      <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='bg-white rounded-2xl shadow-xl overflow-hidden'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              {/* Form Section */}
              <div className='p-8 lg:p-12'>
                <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                  Contact Us
                </h2>
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700'
                      aria-label='Name'
                    >
                      Name*
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-md shadow-sm py-2 px-3 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 border ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      } transition duration-150 ease-in-out hover:shadow-lg hover:scale-105`}
                      aria-invalid={errors.name ? 'true' : 'false'}
                    />
                    {errors.name && (
                      <p className='mt-1 text-sm text-red-600' role='alert'>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700'
                      aria-label='Email'
                    >
                      Email*
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-md shadow-sm py-2 px-3 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 border ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } transition duration-150 ease-in-out hover:shadow-lg hover:scale-105`}
                      aria-invalid={errors.email ? 'true' : 'false'}
                      autoComplete='email'
                    />
                    {errors.email && (
                      <p className='mt-1 text-sm text-red-600' role='alert'>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-medium text-gray-700'
                      aria-label='Phone'
                    >
                      Phone Number
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-md shadow-sm py-2 px-3 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 border ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      } transition duration-150 ease-in-out hover:shadow-lg hover:scale-105`}
                      aria-invalid={errors.phone ? 'true' : 'false'}
                    />
                    {errors.phone && (
                      <p className='mt-1 text-sm text-red-600' role='alert'>
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-gray-700'
                      aria-label='Message'
                    >
                      Message*
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      rows={6} // Increased rows for better height
                      value={formData.message}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-md shadow-sm py-2 px-3 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 border ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      } transition duration-150 ease-in-out hover:shadow-lg hover:scale-105`}
                      aria-invalid={errors.message ? 'true' : 'false'}
                    />
                    {errors.message && (
                      <p className='mt-1 text-sm text-red-600' role='alert'>
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <button
                      type='submit'
                      className='w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out transform hover:-translate-y-0.5'
                      aria-label='Send message'
                    >
                      Send Message
                    </button>
                  </div>

                  {submitted && (
                    <div
                      className='p-4 bg-green-100 rounded-md text-green-700 text-center'
                      role='alert'
                    >
                      Thank you for your message!
                    </div>
                  )}
                </form>
              </div>

              {/* Image Section */}
              <div className='relative p-8 bg-gray-800 text-white'>
                <div
                  className='absolute inset-0 bg-cover bg-center opacity-10'
                  style={{
                    backgroundImage:
                      'url(https://images.unsplash.com/photo-1557426272-fc759fdf7a8d)'
                  }}
                />
                <div className='relative'>
                  <h3 className='text-2xl font-bold mb-8'>Get in Touch</h3>
                  <div className='space-y-6'>
                    <div className='flex items-center space-x-4'>
                      <FiMail className='w-6 h-6 text-gray-200 hover:text-gray-100 transition duration-200' />
                      <span className='text-gray-200 hover:text-gray-100 transition duration-200'>
                        ankush@erayafoods.com
                      </span>
                    </div>
                    <div className='flex items-center space-x-4'>
                      <FiPhone className='w-6 h-6 text-gray-200 hover:text-gray-100 transition duration-200' />
                      <span className='text-gray-200 hover:text-gray-100 transition duration-200'>
                        +91 9266462227
                      </span>
                    </div>
                  </div>
                </div>

                <div className='mt-12'>
                  <h4 className='text-xl font-semibold mb-4'>Office Hours</h4>
                  <p className='text-gray-300'>
                    Monday - Friday: 9:00 AM - 6:00 PM (IST)
                    <br />
                    Saturday: 10:00 AM - 4:00 PM (IST)
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
