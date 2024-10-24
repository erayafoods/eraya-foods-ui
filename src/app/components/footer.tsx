'use client'
import '../globals.css'
import Logo from '../../public/eraya.svg'

export default function Footer () {
  const footerNavs = [
    {
      label: '',
      items: []
    },
    {
      label: 'Resources',
      items: [
        {
          href: '#',
          name: 'Guidelines'
        },
        {
          href: '#',
          name: 'Insights'
        },
        {
          href: '#',
          name: 'Specifications'
        },
        {
          href: '#',
          name: 'Logistics'
        }
      ]
    },
    {
      label: 'Navigation',
      items: [
        {
          href: '/about',
          name: 'About us'
        },
        {
          href: '/products',
          name: 'Products'
        },
        {
          href: '/contact',
          name: 'Contact us'
        },
        {
          href: '/help',
          name: 'Help Center'
        }
      ]
    }
  ]

  return (
    <footer className='text-gray-500 bg-zinc-50 rounded-2xl py-5 max-w-screen-xl mx-auto md:px-8'>
      <div className='flex flex-col md:flex-row justify-between md:space-x-10'>
        <div className='flex-1'>
          <div className='max-w-xs'>
            {/* <img src={Logo} className='w-32' /> */}
            <Logo style={{ width: '70px', padding: '3px' }} />
            <p className='leading-relaxed mt-2 text-[15px]'>
              Crafting Premium Foxnut Experiences Since 2016.
            </p>
          </div>
          <form onSubmit={e => e.preventDefault()}>
            <label className='block pt-4 pb-2'>
              Get the Latest Insights and Updates on Premium Foxnuts
            </label>
            <div className='max-w-sm flex items-center border rounded-md p-1'>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-full p-2.5 outline-none'
              />
              <button className='p-2.5 rounded-md text-white bg-indigo-600 outline-none shadow-md focus:shadow-none sm:px-5'>
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className='flex-1 flex justify-between mt-10 md:mt-0'>
          {footerNavs.slice(1).map((item, idx) => (
            <ul className='space-y-4 mx-4' key={idx}>
              {' '}
              {/* Added mx-4 for horizontal margin */}
              <h4 className='text-gray-800 font-medium'>{item.label}</h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <a
                    href={el.href}
                    className='hover:underline hover:text-indigo-600'
                  >
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className='mt-8 py-6 border-t items-center justify-between sm:flex'>
        <div className='mt-4 sm:mt-0'>
          &copy; {new Date().getFullYear()} Eraya Foods All rights reserved.
        </div>
        <div className='mt-6 sm:mt-0'>
          <ul className='flex items-center space-x-4'>
            <li className='w-10 h-10 border rounded-full flex items-center justify-center'>
              <a href='https://www.linkedin.com/company/105248122/admin/dashboard/'>
                <span className='[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#0077b5]'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                    <path d='M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z' />
                  </svg>
                </span>
              </a>
            </li>

            <li className='w-10 h-10 border rounded-full flex items-center justify-center'>
              <a href='https://www.facebook.com/people/Eraya-Foods/61563902867735/'>
                <svg
                  className='svg-icon w-6 h-6 text-blue-700'
                  viewBox='0 0 20 20'
                >
                  <path
                    fill='none'
                    d='M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z'
                  ></path>
                </svg>
              </a>
            </li>

            <li className='w-10 h-10 border rounded-full flex items-center justify-center'>
              <a href='https://www.instagram.com/erayafoods/'>
                <span className='[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                    <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.5 102.7-9 132.1z' />
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
