'use client'

import { useState, useEffect } from 'react'

const Brochure = () => {
  const [isViewerOpen, setViewerOpen] = useState(false)

  const openViewer = () => setViewerOpen(true)
  const closeViewer = () => setViewerOpen(false)

  useEffect(() => {
    const html = document.documentElement
    if (isViewerOpen) {
      html.style.overflow = 'hidden'
    } else {
      html.style.overflow = ''
    }
    return () => (html.style.overflow = '')
  }, [isViewerOpen])

  return (
    <div className='p-6 flex justify-center items-center h-screen'>
      <button
        className='px-4 py-2 bg-[#5d1c34] text-white rounded-md hover:bg-[#5d1c39] transition'
        onClick={openViewer}
        aria-label='Open Brochure Viewer'
      >
        View Brochure
      </button>

      {isViewerOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-scroll'
          role='dialog'
          aria-modal='true'
        >
          <div className='bg-white w-[90%] sm:w-[90%] md:w-[90%] lg:w-[100%] h-[90vh] md:h-[95vh] rounded-lg overflow-hidden shadow-lg relative'>
            <button
              className='absolute top-3 right-3 text-red-500 text-lg font-bold hover:text-red-700'
              onClick={closeViewer}
              aria-label='Close Brochure Viewer'
            >
              ✖
            </button>

            <iframe
              src='/brochure.pdf'
              className='w-full h-full border-none'
              title='Brochure Viewer'
              loading='lazy'
            ></iframe>
          </div>
        </div>
      )}
    </div>
  )
}

export default Brochure
