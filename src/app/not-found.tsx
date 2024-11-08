import Link from 'next/link'
import styles from './styles/notFound.module.css'
export default function NotFound () {
  return (
    <div className={styles.backgroundImage4}>
      <div className='flex items-center justify-center h-screen bg-cover bg-center'>
        <div className='bg-white bg-opacity-40 rounded-lg shadow-lg p-10 text-center'>
          <Link href='/'>
            <div className='px-6 py-3 bg-blue-600 opacity-80 text-white rounded-lg hover:bg-blue-700 transition duration-300'>
              Return Home
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
