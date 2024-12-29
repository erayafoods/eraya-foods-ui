import Link from 'next/link'
import styles from './styles/notFound.module.css'

export default function NotFound () {
  return (
    <div className={styles.backgroundImage4}>
      <div
        className='flex items-start
       justify-center h-screen bg-cover bg-center'
      >
        <div className='text-black  text-end'>
          <Link href='/'>
            <div
              aria-label='Return to the homepage'
              className='text-black  font-extrabold text-5xl'
            >
              Return
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
