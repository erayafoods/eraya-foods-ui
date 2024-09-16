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
  import { useState } from 'react'; 
  export default function Nav() {
    const currentPath = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems=[{'name':'Home','href':'/'},{'name':'About us','href':'/about'}, {'name':'Products','href':'/products'}, {'name':'Contact us','href':'/contact'}];

    return (
      <Navbar className='sm:flex justify-evenly' onMenuOpenChange={setIsMenuOpen}>
        

        <NavbarContent>
         

        {/*  Logo Place  */}
        <NavbarBrand>
          <p className='font-bold text-inherit'>Eraya Foods logo here </p>
        </NavbarBrand>
        

         {/*  Mobile Navbar menu Toggler  */}
         <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        </NavbarContent>

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

       { /* Mobile component Menu  */}
       <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
       
      </Navbar>
    );
  }
  
