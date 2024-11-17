'use client'

export default function Form () {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <label className='block pt-4 pb-2'>
        Get the Latest Insights and Updates on Premium Foxnuts
      </label>
      <div className='max-w-sm flex items-center border rounded-md p-1'>
        <input
          type='email'
          placeholder='Enter your email'
          className='w-full p-2.5 outline-none'
          aria-label='Input your Email for Getting latest Insights and Updates on Premium Makhana from Eraya Foods'
        />
        {/* <button
          className='p-2.5 rounded-md text-white bg-[#5d1c34] outline-none shadow-md focus:shadow-none sm:px-5'
          aria-label='Subscribe for Updates'
        > */}
        <button
          className='px-4 py-2 rounded-md text-white bg-[#977D2C] hover:bg-[#5D4B1A] transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-[#5D4B1A] focus:ring-offset-2'
          aria-label='Subscribe for Updates'
        >
          Subscribe
        </button>
      </div>
    </form>
  )
}
