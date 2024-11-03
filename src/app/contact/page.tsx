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
      // Hide the alert after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
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
      <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='bg-white rounded-2xl shadow-xl overflow-hidden'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              {/* Form Section */}
              <div className='p-8 lg:p-12'>
                <h2 className='text-xl text-gray-900 mb-6'>
                  Connect with Us <br /> We’d Love to Hear From You!
                </h2>
                <form onSubmit={handleSubmit} className='space-y-6'>
                  {/* Name Field */}
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
                      } transition duration-150 ease-in-out hover:shadow-lg  `}
                      aria-invalid={errors.name ? 'true' : 'false'}
                    />
                    {errors.name && (
                      <p className='mt-1 text-sm text-red-600' role='alert'>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
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
                      } transition duration-150 ease-in-out hover:shadow-lg  `}
                      aria-invalid={errors.email ? 'true' : 'false'}
                      autoComplete='email'
                    />
                    {errors.email && (
                      <p className='mt-1 text-sm text-red-600' role='alert'>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
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
                      } transition duration-150 ease-in-out hover:shadow-lg  `}
                      aria-invalid={errors.phone ? 'true' : 'false'}
                    />
                    {errors.phone && (
                      <p className='mt-1 text-sm text-red-600' role='alert'>
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
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
                      } transition duration-150 ease-in-out hover:shadow-lg  `}
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
                      className='w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out transform hover:-translate-y-0.5'
                      aria-label='Send message'
                    >
                      Send Message
                    </button>
                  </div>

                  {/* Alert Message */}
                  {submitted && (
                    <div
                      className='p-6 bg-gray-200 shadow-lg rounded-lg text-gray-800 text-lg font-semibold text-center mt-4 transition-transform transform  '
                      role='alert'
                    >
                      Thank you for your message! We will reach out to you soon!
                    </div>
                  )}
                </form>
              </div>

              {/* Image Section */}
              <div className='backgroundImage2'>
                <div className='relative p-8  text-black'>
                  <div className='relative'>
                    <h3 className='text-2xl font-bold mb-8'>Get in Touch</h3>
                    <div className='space-y-6'>
                      <div className='flex items-center space-x-4  text-black'>
                        <FiMail className='w-6 h-6  hover:text-stone-600 transition duration-200' />
                        <span>info@erayafoods.com</span>
                      </div>
                      <div className='flex items-center space-x-4 text-black'>
                        <FiPhone className='w-6 h-6    hover:text-black transition duration-200' />
                        <span> +91 9266462227</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* end of this section */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
