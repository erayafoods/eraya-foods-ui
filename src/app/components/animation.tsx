import { useState } from 'react'
import ImageCarousel from './carousel'
const AnimateEraya = () => {
  const [hovered, setHovered] = useState(false)

  return (
    <div className='flex items-center bg-cover bg-no-repeat bg-top h-screen'>
      <div
        className='w-[40vw] mx-auto flex items-center justify-center h-[80%] text-[10vw] font-bold'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {['E', 'R', 'A', 'Y', 'A', '', 'F', 'O', 'O', 'D', 'S'].map(
          (char, index) => (
            <span
              key={index}
              className={`transition-transform ease-in-out duration-300 relative ${
                hovered && index === 0
                  ? 'mt-[-30px] rotate-[-20deg]'
                  : hovered && index === 1
                  ? 'mt-[-40px] ml-[10px] rotate-[5deg]'
                  : hovered && index === 2
                  ? 'mt-[15px] ml-[10px] rotate-[12deg]'
                  : hovered && index === 3
                  ? 'mt-[-25px] rotate-[5deg]'
                  : hovered && index === 4
                  ? 'mt-[-40px] ml-[5px] rotate-[-10deg]'
                  : hovered && index === 6
                  ? 'mt-[-25px] ml-[5px] rotate-[8deg]'
                  : hovered && index === 8
                  ? 'mt-[-20px] ml-[3px] rotate-[-7deg]'
                  : ''
              }`}
            >
              {char}
            </span>
          )
        )}
      </div>
    </div>
  )
}

export default AnimateEraya
