import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Get in Touch | Eraya Foods – Premium  Phool Makhana, foxnuts',
  description:
    "Contact Eraya Foods, India's leading exporter of premium foxnuts and makhana. Inquire about partnerships, distributorship, or tailored business solutions.",
  keywords: [
    'Contact Eraya Foods',
    'Premium foxnuts ,makhana exporter contact',
    'Makhana supplier inquiry',
    'Foxnut export inquiry',
    'Partner with Eraya Foods',
    'Foxnuts, makhana business support',
    'Makhana export assistance',
    'Premium foxnuts,phool makhana supplier India',
    'Indian makhana exporter contact',
    'Customized foxnut,makhana packaging inquiry',
    'Global foxnuts, makhana exporter contact',
    'Eraya Foods inquiry form',
    'Foxnuts ,makhana trade support'
  ],
  alternates: {
    canonical: 'https://erayafoods.com/contact'
  }
}
import ContactUs from '../components/contactForm'
export default function Contact () {
  return (
    <>
      <ContactUs aria-label='Contact us by submitting this form' />
    </>
  )
}
