'use client'
import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
// Define the structure of the nav link
interface NavLink {
  name: string
  id: string
  describe: string
  dropdown?: NavLink[] // Optional dropdown property
}
import { Poppins } from 'next/font/google'
const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
})
const Navbar: React.FC = () => {
  const currentPath = usePathname()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleNavbar = () => setIsOpen(prev => !prev)
  const toggleDropdown = () => setIsDropdownOpen(prev => !prev)

  const handleLinkClick = (link: string, event: React.MouseEvent) => {
    event.preventDefault() // Prevent default anchor behavior
    setIsOpen(false)
    setIsDropdownOpen(false)

    if (currentPath === `/${link}` || (link === '' && currentPath === '/')) {
      // If already on the target path, scroll to the element
      const element = document.getElementById(link)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Navigate to the new path
      window.location.href = `/${link}`
    }
  }

  const navLinks: NavLink[] = [
    {
      name: 'Home',
      id: '',
      describe: 'Home Page of Eraya foods :the best foxnut exporter from India'
    },
    {
      name: 'About',
      id: 'about',
      describe: 'About Page of Eraya foods :the best foxnut exporter from India'
    },
    {
      name: 'Products',
      id: 'products',
      describe:
        'Products Page of Eraya foods :the best foxnut exporter from India'
    },
    {
      name: 'Contact Us',
      id: 'contact',
      describe:
        'Contact Page of Eraya foods :the best foxnut exporter from India'
    },
    {
      name: 'FAQS',
      id: 'help',
      describe: 'FAQS Page of Eraya foods :your questions answered'
    },
    {
      name: 'Blog',
      id: 'blog',
      describe: 'Blog Page of Eraya foods :latest updates and articles'
    }
  ]

  return (
    <nav
      className='sticky top-0 z-10 bg-[#f5f5ef] shadow-md pt-2 md:pt-4 '
      style={{ fontFamily: poppins.style.fontFamily }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0 md:hidden'>
            <a
              aria-label='Navbar Menu Button'
              href='/'
              onClick={event => handleLinkClick('', event)}
              className='flex items-center'
            >
              <picture>
                <source srcSet='/eraya_2.svg?webp' type='image/webp' />
                <Image
                  src={'/eraya_2.svg'}
                  alt='Eraya Foods, the best foxnut exporter from India'
                  width={70}
                  height={70}
                  style={{ width: '70px', padding: '3px' }}
                />
              </picture>
              <span className='ml-2 text-xl font-bold text-gray-800'></span>
            </a>
          </div>
          <div className='hidden md:flex justify-center w-full'>
            <div className='flex space-x-8'>
              <div className='flex space-x-8'>
                {navLinks.slice(0, 3).map(link => (
                  <a
                    key={link.id}
                    aria-label={link.describe}
                    href={`/${link.id}`}
                    onClick={event => handleLinkClick(link.id, event)}
                    className={`${
                      currentPath === `/${link.id}`
                        ? 'font-extrabold text-black'
                        : 'text-gray-600 hover:text-amber-600'
                    } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out`}
                    aria-current={
                      currentPath === `/${link.id}` ? 'page' : undefined
                    }
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <picture>
                <source srcSet='/eraya_2.svg?webp' type='image/webp' />
                <Image
                  src={'/eraya_2.svg'}
                  alt='Eraya Foods, the best foxnut exporter from India'
                  width={70}
                  height={70}
                  style={{ width: '70px', padding: '3px' }}
                />
              </picture>

              <div className='flex space-x-8'>
                {navLinks.slice(3).map(link => (
                  <a
                    key={link.id}
                    aria-label={link.describe}
                    href={`/${link.id}`}
                    onClick={event => handleLinkClick(link.id, event)}
                    className={`${
                      currentPath === `/${link.id}`
                        ? 'font-extrabold text-black'
                        : 'text-gray-600 hover:text-amber-600'
                    } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out`}
                    aria-current={
                      currentPath === `/${link.id}` ? 'page' : undefined
                    }
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className='-mr-2 flex md:hidden'>
            <button
              onClick={toggleNavbar}
              className='bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-amber-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:font-bold'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {navLinks.map(link => (
              <div key={link.id}>
                <a
                  href={`/${link.id}`}
                  onClick={event => handleLinkClick(link.id, event)}
                  className={`${
                    currentPath === `/${link.id}`
                      ? 'font-bold text-black'
                      : 'text-gray-600 hover:text-amber-600'
                  } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ease-in-out`}
                  aria-current={
                    currentPath === `/${link.id}` ? 'page' : undefined
                  }
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {error && (
        <div
          className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
          role='alert'
        >
          <strong className='font-bold'>Error:</strong>
          <span className='block sm:inline'> {error}</span>
        </div>
      )}
    </nav>
  )
}

export default Navbar
