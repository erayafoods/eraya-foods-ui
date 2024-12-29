import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Get in Touch | Eraya Foods – Premium Phool Makhana, Foxnuts',
  description:
    "Contact Eraya Foods, India's leading exporter of premium foxnuts and makhana. Inquire about partnerships, distributorship, or tailored business solutions.",
  keywords: [
    'Contact Eraya Foods',
    'Premium foxnuts, makhana exporter contact',
    'Makhana supplier inquiry',
    'Foxnut export inquiry',
    'Partner with Eraya Foods',
    'Foxnuts, makhana business support',
    'Makhana export assistance',
    'Premium foxnuts, phool makhana supplier India',
    'Indian makhana exporter contact',
    'Customized foxnut, makhana packaging inquiry',
    'Global foxnuts, makhana exporter contact',
    'Eraya Foods inquiry form',
    'Foxnuts, makhana trade support'
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
      {/* <div className=' flex justify-center mb-8 bg-white'>
        
        <ul className='fixed flex space-x-6 bg-white'>
         
         
          <li className='border rounded-full flex items-center justify-center p-3'>
            <a
              href='https://www.linkedin.com/company/105248122/admin/dashboard/'
              aria-label='LinkedIn Page of Foxnut exporter Eraya Foods'
            >
              <span className='[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#0077b5]'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                  <path d='M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z' />
                </svg>
              </span>
            </a>
          </li>
          <li className='border rounded-full flex items-center justify-center p-3'>
            <a
              href='https://www.facebook.com/people/Eraya-Foods/61563902867735/'
              aria-label='Facebook Page of Foxnut exporter Eraya Foods'
            >
              <span className='[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#0077b5]'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>
                  <linearGradient
                    id='Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1'
                    x1='9.993'
                    x2='40.615'
                    y1='9.993'
                    y2='40.615'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop offset='0' stopColor='#2aa4f4'></stop>
                    <stop offset='1' stopColor='#007ad9'></stop>
                  </linearGradient>
                  <path
                    fill='url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)'
                    d='M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z'
                  ></path>
                  <path
                    fill='#fff'
                    d='M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z'
                  ></path>
                </svg>
              </span>
            </a>
          </li>
          <li className='border rounded-full flex items-center justify-center p-3'>
            <a
              href='https://www.instagram.com/erayafoods/'
              aria-label='Instagram Page of Foxnut exporter Eraya Foods'
            >
              <span className='[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                  <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.5 102.7-9 132.1z' />
                </svg>
              </span>
            </a>
          </li>
          <li className='border rounded-full flex items-center justify-center p-3'>
            <a
              href='https://www.x.com/erayafoods/'
              aria-label='Twitter Handle of Foxnut exporter Eraya Foods'
            >
              <span className='[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='100'
                  height='100'
                  viewBox='0 0 48 48'
                >
                  <path
                    fill='#212121'
                    fillRule='evenodd'
                    d='M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z M15.866,34L23.069,25.656 22.127,24.407 13.823,34z M24.45,21.721L25.355,23.01 33.136,14 31.136,14z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </span>
            </a>
          </li>
        </ul>
      </div> */}
      <ContactUs />
      <WhatsAppButton />
    </>
  )
}
