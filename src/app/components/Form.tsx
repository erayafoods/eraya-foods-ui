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
        />
        <button className='p-2.5 rounded-md text-white bg-[#5d1c34] outline-none shadow-md focus:shadow-none sm:px-5'>
          Subscribe
        </button>
      </div>
    </form>
  )
}
