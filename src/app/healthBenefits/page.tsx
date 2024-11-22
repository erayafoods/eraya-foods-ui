import React from 'react'

const FoxnutBenefits: React.FC = () => {
  const benefits = [
    {
      title: 'Rich in Nutrients',
      description:
        'Packed with protein, magnesium, and potassium, foxnuts provide essential nutrients for a healthy lifestyle.'
    },
    {
      title: 'Supports Weight Management',
      description:
        'Low-calorie and high in fiber, foxnuts keep you full longer and support weight control.'
    },
    {
      title: 'Good for the Heart',
      description:
        'High magnesium levels promote healthy blood pressure and reduce the risk of heart issues.'
    },
    {
      title: 'Boosts Bone Health',
      description:
        'Rich in calcium and phosphorus, foxnuts strengthen bones and improve skeletal health.'
    },
    {
      title: 'Gluten-Free and Low-Allergen',
      description:
        'Naturally gluten-free, foxnuts are ideal for people with celiac disease or gluten intolerance.'
    },
    {
      title: 'Promotes Healthy Skin',
      description:
        'Antioxidants in foxnuts help fight free radicals, giving you radiant and youthful skin.'
    }
  ]

  const nutrients = [
    { nutrient: 'Protein', amount: '9.7 g' },
    { nutrient: 'Fiber', amount: '14.5 g' },
    { nutrient: 'Calories', amount: '347' },
    { nutrient: 'Calcium', amount: '60 mg' },
    { nutrient: 'Iron', amount: '1.4 mg' },
    { nutrient: 'Carbohydrates', amount: '76.9 g' }
  ]

  return (
    <section className='bg-gradient-to-b from-blue-50 to-blue-100 py-16 px-6 md:px-20'>
      <div className='max-w-4xl mx-auto text-center'>
        <h1 className='text-4xl font-extrabold text-gray-800 mb-6'>
          Health Benefits of Foxnuts
        </h1>
        <p className='text-gray-600 text-lg mb-8'>
          Foxnuts, a superfood from nature, offer numerous health benefits.
          Here’s why they should be part of your daily diet.
        </p>
        <div className='overflow-hidden mb-12'>
          <table className='w-full max-w-lg mx-auto border-collapse bg-white rounded-lg shadow-md'>
            <thead className='bg-[#5d1c34] text-white'>
              <tr>
                <th className='py-3 px-4 font-semibold text-lg border-r border-gray-300'>
                  Nutrient
                </th>
                <th className='py-3 px-4 font-semibold text-lg'>Amount</th>
              </tr>
            </thead>
            <tbody>
              {nutrients.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  } border-b border-gray-300`}
                >
                  <td className='py-3 px-4 text-gray-800 select-none border-r border-gray-300'>
                    {item.nutrient}
                  </td>
                  <td className='py-3 px-4 text-gray-600 select-none'>
                    {item.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className='relative group bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 p-8'
            >
              <div
                className='absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl'
                aria-hidden='true'
              ></div>
              <h2 className='text-2xl font-semibold text-gray-800 group-hover:text-[#5d1c34] mb-4 transition-colors duration-300'>
                {benefit.title}
              </h2>
              <p className='text-gray-600 group-hover:text-gray-800 transition-colors duration-300'>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FoxnutBenefits
