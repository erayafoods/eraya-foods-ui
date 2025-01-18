import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get in Touch | Eraya Foods – Premium Phool Makhana, Foxnuts',
  description:
    "Contact Eraya Foods, India's leading exporter of premium foxnuts and makhana. Inquire about partnerships, distributorship, or tailored business solutions.",
  keywords: [
    'Contact Eraya Foods',
    'Premium foxnuts, makhana exporter contact',
    'Phool Makhana supplier inquiry',
    'Foxnut, Phool Makhana export inquiry',
    'Partner with Eraya Foods',
    'Foxnuts,Phool Makhana business support',
    'Phool Makhana export assistance',
    'Premium foxnuts, Phool Makhana supplier India',
    'Indian Makhana exporter contact',
    'Customized foxnut, Makhana packaging inquiry',
    'Global foxnuts, Makhana exporter contact',
    'Eraya Foods inquiry form',
    'Foxnuts, Phool Makhana trade support'
  ],
  alternates: {
    canonical: 'https://erayafoods.com/contact'
  }
}

import ContactUs from '../components/contactForm'
import WhatsAppButton from '../components/whatsapp'

export default function Contact () {
  return (
    <>
      <ContactUs />
      <div className='flex justify-around items-center my-8'>
        <iframe
          title='Google Map of Eraya Foods Location'
          src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d218.95432852576604!2d77.09321853443376!3d28.59169816259517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgali%20number%2031%2C%20near%20pradhan%20chowk%2C%20palam%2C%20new%20delhi.%20pin%20code%3A%20110045!5e0!3m2!1sen!2sin!4v1736840060191!5m2!1sen!2sin'
          className='w-full max-w-[600px] aspect-video border-2 border-gray-300 shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105'
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
      <WhatsAppButton />
    </>
  )
}
