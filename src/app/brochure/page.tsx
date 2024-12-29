'use client'

import { useState, useEffect } from 'react'

const Brochure = () => {
  const [isViewerOpen, setViewerOpen] = useState(false)

  const openViewer = () => setViewerOpen(true)
  const closeViewer = () => setViewerOpen(false)

  // Prevent background scrolling when modal is open
  useEffect(() => {
    const body = document.body
    if (isViewerOpen) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = ''
    }

    // Cleanup: Reset overflow when the modal is closed or component unmounts
    return () => {
      body.style.overflow = ''
    }
  }, [isViewerOpen])

  return (
    <div className='p-6 flex justify-center items-center h-screen'>
      {/* Button to open PDF viewer */}
      <button
        className='px-4 py-2 bg-[#5d1c34] text-white rounded-md hover:bg-[#5d1c39] transition'
        onClick={openViewer}
        aria-label='Open Brochure Viewer'
      >
        View Brochure
      </button>

      {/* Conditional rendering for PDF viewer */}
      {isViewerOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto'
          role='dialog'
          aria-modal='true'
        >
          {/* Modal for PDF viewer */}
          <div className='bg-white w-[90%] sm:w-[90%] md:w-[90%] lg:w-[100%] h-[90vh] md:h-[95vh] rounded-lg overflow-hidden shadow-lg relative'>
            {/* Close button */}
            <button
              className='absolute top-3 right-3 text-red-500 text-lg font-bold hover:text-red-700'
              onClick={closeViewer}
              aria-label='Close Brochure Viewer'
            >
              ✖
            </button>

            {/* PDF iframe */}
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
