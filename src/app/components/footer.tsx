"use client";
import {
  footerCompanyLinks,
  footerSocialLinks,
  footerSupportLinks,
} from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import eraya from "@/public/eraya1.webp";

const Footer = () => {
  return (
    <footer className="h-auto w-full text-dark">
      <div className="wrapper relative h-full">
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/"
            title="home page link"
            className="relative flex w-fit items-center gap-x-4 p-4 sm:col-span-2 lg:col-auto lg:flex-col lg:gap-y-4"
          >
            <Image
              src={eraya}
              alt="Eraya Logo"
              title="Eraya Logo"
              width={90}
              height={90}
            />
            <span className="font-dream text-3xl font-semibold tracking-wider">
              Eraya
            </span>
          </Link>

          {/* about the company */}
          <div className="p-4">
            <p className="my-4 text-xl font-medium">Company</p>
            {footerCompanyLinks.map((item: any, index: number) => (
              <div key={index} className="py-1">
                <Link href={item.link} title={item.title}>
                  {item.name}
                </Link>
              </div>
            ))}
          </div>

          {/* support links */}
          <div className="p-4">
            <p className="my-4 text-xl font-medium">Support</p>
            {footerSupportLinks.map((item: any, index: number) => (
              <div key={index} className="py-1">
                <Link href={item.link} title={item.title}>
                  {item.name}
                </Link>
              </div>
            ))}
          </div>

          {/* social links */}
          <div className="p-4">
            <p className="my-4 text-xl font-medium">Social</p>
            <div className="flex gap-x-2">
              {footerSocialLinks.map((item: any, index: number) => (
                <div key={index} className="py-1">
                  <Link
                    href={item.link}
                    target="_blank"
                    title={`${item.alt} link`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      title={`${item.alt} logo`}
                      width={36}
                      height={36}
                      priority
                      className={`object-cover bg-black rounded-full ${index === 2 ? "p-2" : ""}`}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-center text-xs tracking-wide text-black/60">
          Copyright &copy; 2023 Eraya<sup>&trade;</sup> All right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
