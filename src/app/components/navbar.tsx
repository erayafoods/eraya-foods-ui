'use client'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from '@nextui-org/navbar'
import Logo from '../../public/eraya.svg'
import { Link } from '@nextui-org/react'
import '../globals.css'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Nav () {
  const currentPath = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact us', href: '/contact' }
  ]

  return (
    <Navbar className='sm:flex justify-evenly' onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <Logo style={{ width: '70px', padding: '3px' }} />
        </NavbarBrand>

        {/*  Mobile Navbar menu Toggler  */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
      </NavbarContent>

      {/* Desktop component  */}

      <NavbarContent className='hidden sm:flex  gap-14 justify-end'>
        <NavbarItem isActive={currentPath == '/'}>
          <Link color='foreground' href='/' className='hover:text-amber-600'>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={currentPath == '/about'}>
          <Link
            color='foreground'
            href='/about'
            className='hover:text-amber-600'
          >
            About us
          </Link>
        </NavbarItem>
        <NavbarItem isActive={currentPath == '/products'}>
          <Link
            color='foreground'
            href='/products'
            className='hover:text-amber-600'
          >
            Products
          </Link>
        </NavbarItem>
        <NavbarItem isActive={currentPath == '/contact'}>
          <Link
            color='foreground'
            href='/contact'
            className='hover:text-amber-600'
          >
            Contact us
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile component Menu  */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              className='w-full'
              href={item.href}
              size='lg'
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
