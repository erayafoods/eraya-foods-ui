import React from 'react'

const WhatsAppButton: React.FC = () => {
  const whatsappNumber = '+919266462227' // Replace with your WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}`

  return (
    <div className='fixed bottom-5 right-5'>
      <a
        href={whatsappLink}
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition duration-300'
        aria-label='Chat with Eraya Foods on WhatsApp'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='white'
          viewBox='0 0 24 24'
          className='w-8 h-8'
        >
          <path d='M12 0C5.373 0 0 5.373 0 12c0 2.095.538 4.075 1.538 5.833L0 24l6.379-1.62A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.005 21.71a9.717 9.717 0 01-5.093-1.44l-.364-.229-3.788 1.016 1.016-3.788-.229-.364a9.727 9.727 0 01-1.44-5.094c0-5.357 4.363-9.72 9.72-9.72 5.356 0 9.72 4.363 9.72 9.72 0 5.357-4.364 9.72-9.72 9.72zm5.498-6.464c-.306-.153-1.81-.894-2.09-.996-.278-.101-.481-.153-.684.153-.2.307-.789.997-.967 1.204-.178.204-.356.229-.662.077-.306-.153-1.294-.477-2.465-1.523-.912-.812-1.529-1.816-1.706-2.122-.178-.307-.019-.47.134-.623.138-.136.306-.356.459-.536.152-.177.204-.306.306-.509.1-.204.05-.382-.026-.535-.076-.153-.684-1.65-.94-2.264-.248-.596-.5-.515-.684-.524l-.579-.012c-.2 0-.524.077-.799.382-.274.306-1.048 1.023-1.048 2.495s1.073 2.89 1.222 3.092c.15.204 2.113 3.225 5.133 4.523.718.308 1.279.494 1.716.633.72.229 1.375.197 1.892.12.577-.086 1.81-.741 2.065-1.455.255-.713.255-1.322.178-1.455-.077-.132-.276-.204-.582-.357z' />
        </svg>
      </a>
    </div>
  )
}

export default WhatsAppButton
