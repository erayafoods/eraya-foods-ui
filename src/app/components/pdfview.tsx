import React from 'react'

// Define the type for props
interface PdfViewerProps {
  pdfUrl: string
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  return (
    <>
      <div className='w-full h-screen flex justify-center items-center overflow-hidden bg-gray-100'>
        <div className='w-[100vh] h-[90vh] md:w-[90-vh] border-4 border-white shadow-lg'>
          <iframe
            src={pdfUrl}
            className='border-none w-full h-full'
            allowFullScreen
          />
        </div>
      </div>
    </>
  )
}

export default PdfViewer
