'use client'

import { useState, FormEvent } from 'react'

export default function Form () {
  const [formData, setFormData] = useState({ email: '' })
  const [errors, setErrors] = useState<{ email?: string }>({})

  // Validation function (you can expand this as needed)
  const validateForm = () => {
    const newErrors: { email?: string } = {}
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    return newErrors
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch('/api/subscribe', {
          // Corrected the endpoint here
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })

        if (response.ok) {
          setFormData({ email: '' })
        } else {
          const errorData = await response.json()
          console.error('Submission error:', errorData.error)
        }
      } catch (error) {
        console.error('Network error:', error)
      }
    } else {
      setErrors(newErrors) // Set errors to show validation feedback
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className='block pt-4 pb-2'>
        Get the Latest Insights and Updates on Premium Foxnuts
      </label>
      <div className='max-w-sm flex items-center border rounded-md p-1'>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter your email'
          className='w-full p-2.5 outline-none'
          aria-label='Input your Email for Getting latest Insights and Updates on Premium Makhana from Eraya Foods'
        />
        <button
          type='submit'
          className='p-2.5 rounded-md text-white bg-[#5d1c34] outline-none shadow-md focus:shadow-none sm:px-5'
          aria-label='Subscribe for Updates'
        >
          Subscribe
        </button>
      </div>
      {errors.email && (
        <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
      )}
    </form>
  )
}
