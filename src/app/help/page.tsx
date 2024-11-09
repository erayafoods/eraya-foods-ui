'use client'
//we will change it to server component later to fetch FAQs and search query as well by splitting searchbar as client component and fetched-FAQs as server component
import React, { useState, useEffect, useRef } from 'react'
import { FaSearch, FaPlus, FaMinus } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '../styles/help.module.css'
interface FAQ {
  id: number
  question: string
  answer: string
}

const FAQSection = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      id: 1,
      question: "What makes Eraya Foods' foxnuts unique?",
      answer:
        'Our foxnuts are primarily sourced from Bihar, India, where they are cultivated using traditional methods. This ensures high quality, flavor, and nutritional value, setting us apart from competitors.'
    },
    {
      id: 2,
      question: "Are Eraya Foods' foxnuts organic?",
      answer:
        'Yes, we guarantee that our foxnuts are 100% organic, cultivated without synthetic fertilizers or pesticides, ensuring a natural and healthy snack option.'
    },
    {
      id: 3,
      question: 'What types of foxnuts do you offer?',
      answer:
        'We provide various grades of foxnuts suitable for culinary uses, snacking, and packaging. Options include raw, roasted, and flavored foxnuts to cater to different consumer preferences.'
    },
    {
      id: 4,
      question: 'How do you ensure the quality of your foxnuts?',
      answer:
        'We maintain strict quality control at every stage, from sourcing to processing, ensuring that only the best foxnuts are packaged and delivered to our customers.'
    },
    {
      id: 5,
      question: 'What support do you provide during trade and shipment?',
      answer:
        'We offer comprehensive support throughout the trade process, including assistance with documentation, customs clearance, and shipment tracking to ensure a smooth delivery experience.'
    },
    {
      id: 6,
      question: 'Do you offer FOB basis trade?',
      answer:
        'Yes, we provide flexible trading options, including Free on Board (FOB), allowing you to manage shipping arrangements according to your preferences.'
    },
    {
      id: 7,
      question: 'How does Eraya Foods assist with marketing?',
      answer:
        'We collaborate with our partners to develop tailored marketing strategies and provide promotional materials to enhance product visibility and drive sales in your market.'
    },
    {
      id: 8,
      question: 'What innovative packaging solutions do you offer?',
      answer:
        'Our packaging is eco-friendly and resealable, designed to preserve freshness and quality. We can also customize packaging for bulk orders to align with your branding needs.'
    },
    {
      id: 9,
      question: 'What certifications does Eraya Foods have?',
      answer:
        'Our products are certified by APEDA, FIEO, and FDA, which confirms our compliance with international food safety standards and regulations.'
    },
    {
      id: 10,
      question: 'Do you export foxnuts internationally?',
      answer:
        'Yes, we export high-quality foxnuts to various international markets, including North America, Europe, and Asia, catering to diverse customer needs.'
    },
    {
      id: 11,
      question: 'Can I place bulk orders for foxnuts?',
      answer:
        'Absolutely! We cater to bulk orders for businesses and importers, offering competitive pricing and logistics support tailored to your requirements.'
    },
    {
      id: 12,
      question: 'How do you ensure timely delivery of orders?',
      answer:
        'With our established network of farmers and operational experience since 2016, we prioritize efficient logistics and faster delivery times for our clients.'
    },
    {
      id: 13,
      question: 'Do you offer private labeling services?',
      answer:
        'Yes, we provide private labeling options, allowing businesses to sell our premium foxnuts under their own brand name.'
    },
    {
      id: 14,
      question: 'What is the shelf life of your foxnuts?',
      answer:
        'Our foxnuts have a shelf life of 6-8 months when stored properly in a cool, dry place, thanks to our moisture-resistant packaging.'
    },
    {
      id: 15,
      question: 'Where are your foxnuts sourced from?',
      answer:
        'We source our foxnuts exclusively from Bihar, where local farmers cultivate them with care and dedication, ensuring premium quality and taste.'
    },
    {
      id: 16,
      question: 'How can I place an order with Eraya Foods?',
      answer:
        'You can place orders through our website or contact our sales team directly for bulk purchases and inquiries.'
    },
    {
      id: 17,
      question: 'Do you offer samples for businesses?',
      answer:
        'Yes, we provide samples to importers and businesses interested in our products. Please reach out to our sales team to arrange a sample shipment.'
    },
    {
      id: 18,
      question: 'What health benefits do foxnuts provide?',
      answer:
        'Foxnuts are a rich source of protein, fiber, and essential minerals, promoting heart health, weight management, and suitable for diabetic diets.'
    },
    {
      id: 19,
      question: 'Are foxnuts gluten-free?',
      answer:
        'Yes, foxnuts are naturally gluten-free, making them a great snack choice for individuals with gluten sensitivities or dietary restrictions.'
    },
    {
      id: 20,
      question: 'What role do farmers play in your sourcing process?',
      answer:
        'We work closely with local farmers, providing them with fair trade practices and support, ensuring they receive equitable compensation for their high-quality crops.'
    },
    {
      id: 21,
      question: 'What types of customers do you cater to?',
      answer:
        'We serve a diverse clientele, including importers, retailers, and food manufacturers seeking high-quality foxnuts for their products.'
    },
    {
      id: 22,
      question: 'How do your foxnuts compare to other brands?',
      answer:
        'Our foxnuts are distinguished by their superior quality, organic certification, and unique flavor profiles, backed by a robust supply chain and customer support.'
    },
    {
      id: 23,
      question: 'Do you offer discounts for large orders?',
      answer:
        'Yes, we provide competitive pricing and discounts for bulk orders. Please contact our sales team to discuss your specific needs.'
    },
    {
      id: 24,
      question: 'How do you handle quality control?',
      answer:
        'Our quality assurance team conducts rigorous checks at each stage of production, ensuring that all foxnuts meet our high standards before reaching customers.'
    },
    {
      id: 25,
      question:
        'Can you provide information on the nutritional content of your foxnuts?',
      answer:
        'Our foxnuts are high in protein, low in calories, and rich in antioxidants, making them a healthy snack option for a balanced diet.'
    },
    {
      id: 26,
      question: 'What are the health benefits of foxnuts?',
      answer:
        'Foxnuts promote heart health, aid in weight management, and are ideal for those with diabetes due to their high nutritional value.'
    },
    {
      id: 27,
      question: 'How can I contact Eraya Foods for inquiries?',
      answer:
        "You can reach us through our website's contact form or directly via email or phone for any inquiries or support."
    },

    {
      id: 28,
      question: 'What are the payment options available?',
      answer:
        'We offer various payment options, including bank transfers and letters of credit, to facilitate smooth transactions for our international clients.'
    }
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [expandAll, setExpandAll] = useState(false)
  const [activeItems, setActiveItems] = useState<number[]>([])
  const [searchResults, setSearchResults] = useState<FAQ[]>([])
  const [error, setError] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const searchRef = useRef(null)

  const itemsPerPage = 9 // Number of FAQs per page
  const totalPages = Math.ceil(faqs.length / itemsPerPage)

  useEffect(() => {
    if (expandAll) {
      setActiveItems(faqs.map(faq => faq.id))
    } else {
      setActiveItems([])
    }
  }, [expandAll, faqs])

  useEffect(() => {
    if (searchTerm) {
      const filteredFaqs = faqs.filter(
        faq =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setSearchResults(filteredFaqs)
      setError(filteredFaqs.length === 0 ? 'No matching FAQs found.' : '')
    } else {
      setSearchResults([])
      setError('')
    }
  }, [searchTerm, faqs])

  const toggleItem = (id: number) => {
    setActiveItems(prevActiveItems =>
      prevActiveItems.includes(id)
        ? prevActiveItems.filter(itemId => itemId !== id)
        : [...prevActiveItems, id]
    )
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleClearSearch = () => {
    setSearchTerm('')
    setSearchResults([])
    setError('')
  }

  // Function to scroll to a specific FAQ item
  const scrollToFAQ = (id: number) => {
    const element = document.getElementById(`faq-${id}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      toggleItem(id) // Toggle the FAQ to open it when scrolling
    }
  }

  // Paginated FAQs for the current page
  const paginatedFaqs =
    searchResults.length > 0
      ? searchResults
      : faqs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <>
      <div className='max-w-screen-2xl content-center px-[8vw] pb-[8vh]'>
        <div className={`${styles.backgroundImage3} w-96 h-96 mx-auto`}></div>

        <div className='relative mb-3'>
          <input
            type='text'
            placeholder='Search FAQs...'
            value={searchTerm}
            onChange={handleSearch}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            ref={searchRef}
          />
          <FaSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
        </div>

        {/* Clear Button */}
        {searchTerm && (
          <button
            onClick={handleClearSearch}
            className='mb-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500'
          >
            Clear
          </button>
        )}

        {error && <p className='text-red-500 mb-4'>{error}</p>}
        {searchResults.length > 0 && (
          <div className='mb-6 p-4 bg-gray-100 rounded-md'>
            <h3 className='font-semibold mb-2'>Search Results:</h3>
            <ul>
              {searchResults.map(faq => (
                <li key={faq.id} className='mb-1'>
                  <button
                    onClick={() => scrollToFAQ(faq.id)}
                    className='text-grey-600 hover:underline focus:outline-none focus:ring-2 focus:ring-grey-500 rounded'
                  >
                    {faq.question}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={() => setExpandAll(!expandAll)}
          className='mb-6 px-4 py-2 bg-[#768a96] text-white rounded-md hover:bg-gray-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
        >
          {expandAll ? 'Hide All' : 'See All'}
        </button>

        <div className='space-y-4'>
          {paginatedFaqs.map(faq => (
            <div
              key={faq.id}
              id={`faq-${faq.id}`}
              className='border border-gray-200 rounded-md overflow-hidden'
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className='flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500'
                aria-expanded={activeItems.includes(faq.id)}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className='font-medium text-gray-900'>
                  {faq.question}
                </span>
                {activeItems.includes(faq.id) ? (
                  <FaMinus className='text-gray-500' />
                ) : (
                  <FaPlus className='text-gray-500' />
                )}
              </button>
              <AnimatePresence>
                {activeItems.includes(faq.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    id={`faq-answer-${faq.id}`}
                  >
                    <div className='p-4 bg-white'>
                      <p className='text-gray-700'>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className='mt-6 flex justify-center space-x-2'>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              disabled={currentPage === index + 1}
              className={`px-4 py-2 rounded ${
                currentPage === index + 1
                  ? 'bg-[#57626a]'
                  : 'bg-gray-300 text-white hover:bg-gray-500'
              }`}
            >
              Page {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default FAQSection
