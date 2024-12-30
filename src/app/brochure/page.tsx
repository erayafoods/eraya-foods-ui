import Head from 'next/head'
import PdfViewer from '../components/pdfview'

export default function Home () {
  const pdfUrl =
    'https://drive.google.com/file/d/1WixaZXxoytwqvKCeLDvxOZAx3C6nwyKV/preview' // Replace with your PDF file path

  return (
    <div>
      <Head>
        <title>PDF Viewer</title>
        <meta name='description' content='A simple PDF viewer using Next.js' />
      </Head>
      <PdfViewer pdfUrl={pdfUrl} />
    </div>
  )
}
