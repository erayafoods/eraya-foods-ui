"use client";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
  } from '@nextui-org/navbar'
  import { Link,Spacer} from '@nextui-org/react'
  import '../globals.css'
  import { usePathname} from 'next/navigation'

  export default function Nav() {
    const currentPath = usePathname();
    return (
      <Navbar className='sm:flex justify-evenly'>

        {/*  Logo Place  */}
        <NavbarBrand>
          <p className='font-bold text-inherit'>Eraya Foods logo here </p>
        </NavbarBrand>
      
       { /* Desktop component  */}
      
        <NavbarContent className='hidden sm:flex  gap-14 justify-end '>
          <NavbarItem isActive={currentPath=='/'}>
            <Link color='foreground' href='/' >Home</Link>
          </NavbarItem>
          <NavbarItem isActive={currentPath=='/products'}>
            <Link color='foreground' href='/products' >
              Products
            </Link>
          </NavbarItem>
          <NavbarItem isActive={currentPath=='/about'}>
            <Link color='foreground' href='/about' >
              About us
            </Link>
          </NavbarItem>
          <NavbarItem isActive={currentPath=='/contact'}>
            <Link color='foreground' href='/contact' >
              Contact us
            </Link>
          </NavbarItem>
        </NavbarContent>

       { /* Mobile component  */}
      
       
      </Navbar>
    );
  }
  
