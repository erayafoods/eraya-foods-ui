"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import eraya from "@/public/eraya1.webp";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathName = usePathname();
  console.log(pathName, "pathName");

  // Here I'm adding a scroll event listener to check if the page has been scrolled down
  useEffect(() => {
    const handleScroll = () => {
      // Checking if the page has been scrolled down by more than 50px (or adjust this value)
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Adding the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-20 transition-colors duration-300 ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="wrapper flex items-center justify-between py-3 text-white">
        <Link
          href="/"
          title="home page link"
          className="flex h-10 w-10 items-center"
        >
          <Image
            src={eraya}
            alt="brand_logo"
            title="brand logo"
            className="h-full w-full"
          />
        </Link>
        <div className="hidden items-center gap-x-5 md:flex">
          <Link
            href="/"
            title="home"
            className={`${
              pathName === "/"
                ? "text-primary"
                : `${isScrolled ? "text-black" : "text-white"}`
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            title="about us page"
            className={`${
              pathName === "/about"
                ? "text-primary"
                : `${isScrolled ? "text-black" : "text-white"}`
            }`}
          >
            About Us
          </Link>
          <Link
            href="/products"
            title="products page"
            className={`${
              pathName === "/products"
                ? "text-primary"
                : `${isScrolled ? "text-black" : "text-white"}`
            }`}
          >
            Products
          </Link>
          <Link
            href="/contact"
            title="contact us page"
            className={`${
              pathName === "/contact"
                ? "text-primary"
                : `${isScrolled ? "text-black" : "text-white"}`
            }`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
