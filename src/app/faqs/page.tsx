'use client'

import React, { useState, useEffect, useRef } from 'react'
import { FaSearch, FaPlus, FaMinus } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const FAQSection = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: 'What are foxnuts?',
      answer:
        'Foxnuts, also known as makhana, are popped seeds from the Euryale Fox plant. They are a highly nutritious snack, rich in protein, antioxidants, and low in calories.'
    },
    {
      id: 2,
      question: "Are Eraya Foods' foxnuts organic?",
      answer:
        'Yes, Eraya Foods offers 100% organic foxnuts sourced directly from local farmers in Bihar, India, ensuring natural, chemical-free cultivation and processing.'
    },
    {
      id: 3,
      question: "Where are Eraya Foods' foxnuts sourced from?",
      answer:
        'Our premium foxnuts are sourced from the fertile regions of Bihar, India, where local farmers hand-pick and process them with the utmost care.'
    },
    {
      id: 4,
      question: "What makes Eraya Foods' foxnuts different from others?",
      answer:
        'At Eraya Foods, we ensure that each foxnut is carefully popped, delivering a light, crunchy texture with unmatched purity and quality.'
    },
    {
      id: 5,
      question: 'What packaging options do you offer?',
      answer:
        'We offer eco-friendly, resealable packaging to preserve freshness. Custom packaging options are also available for bulk orders.'
    },
    {
      id: 6,
      question: 'Do you export foxnuts internationally?',
      answer:
        'Yes, Eraya Foods exports high-quality foxnuts to multiple international markets, including North America, Europe, and Asia.'
    },
    {
      id: 7,
      question: 'Can I place bulk orders for foxnuts?',
      answer:
        'Absolutely! We cater to bulk orders for businesses and importers globally. Contact us for custom pricing and logistics support.'
    },
    {
      id: 8,
      question: 'What certifications does Eraya Foods have?',
      answer:
        'Eraya Foods is certified by APEDA, FIEO, and FDA, ensuring that our products meet international standards for food safety and quality.'
    },
    {
      id: 9,
      question: 'How do you ensure the quality of your foxnuts?',
      answer:
        'Our foxnuts undergo strict quality checks at every stage, from sourcing to packaging, ensuring that only the best reach our customers.'
    },
    {
      id: 10,
      question: 'Are foxnuts gluten-free?',
      answer:
        'Yes, foxnuts are naturally gluten-free, making them a perfect snack for those with gluten sensitivities or those looking for healthy alternatives.'
    },
    {
      id: 11,
      question: 'What is the shelf life of your foxnuts?',
      answer:
        'Our foxnuts have a shelf life of 6-8 months when stored in a cool, dry place, thanks to our moisture-resistant, resealable packaging.'
    },
    {
      id: 12,
      question: 'What are the health benefits of foxnuts?',
      answer:
        'Foxnuts are a great source of protein, fiber, and essential minerals. They promote heart health, weight management, and are ideal for people with diabetes.'
    },
    {
      id: 13,
      question: 'Do you offer samples for businesses or importers?',
      answer:
        'Yes, we provide samples to importers and businesses interested in purchasing in bulk. Get in touch with our sales team to arrange a sample shipment.'
    },
    {
      id: 14,
      question: 'How can I place an order with Eraya Foods?',
      answer:
        'You can place an order through our website or contact our sales team directly for bulk purchases and inquiries.'
    },
    {
      id: 15,
      question: 'Do you offer private labeling services?',
      answer:
        'Yes, Eraya Foods offers private labeling services for businesses looking to sell premium foxnuts under their own brand.'
    }
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [expandAll, setExpandAll] = useState(false)
  const [activeItems, setActiveItems] = useState<number[]>([])
  const [searchResults, setSearchResults] = useState([])
  const [error, setError] = useState('')

  const searchRef = useRef(null)

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

  const toggleItem = id => {
    setActiveItems(prevActiveItems =>
      prevActiveItems.includes(id)
        ? prevActiveItems.filter(itemId => itemId !== id)
        : [...prevActiveItems, id]
    )
  }

  const handleSearch = e => {
    setSearchTerm(e.target.value)
  }

  const scrollToFAQ = id => {
    const element = document.getElementById(`faq-${id}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveItems(prevActiveItems => [...prevActiveItems, id])
    }
  }

  return (
    <div className='max-w-full  p-20 bg-white'>
      <h2 className='text-3xl font-bold mb-6 text-center text-gray-800'>
        Frequently Asked Questions
      </h2>
      <div className='relative mb-6'>
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
      {error && <p className='text-red-500 mb-4'>{error}</p>}
      {searchResults.length > 0 && (
        <div className='mb-6 p-4 bg-gray-100 rounded-md'>
          <h3 className='font-semibold mb-2'>Search Results:</h3>
          <ul>
            {searchResults.map(faq => (
              <li key={faq.id} className='mb-1'>
                <button
                  onClick={() => scrollToFAQ(faq.id)}
                  className='text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded'
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
        className='mb-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
      >
        {expandAll ? 'Collapse All' : 'Expand All'}
      </button>
      <div className='space-y-4'>
        {faqs.map(faq => (
          <div
            key={faq.id}
            id={`faq-${faq.id}`}
            className='border border-gray-200 rounded-md overflow-hidden'
          >
            <button
              onClick={() => toggleItem(faq.id)}
              className='flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition duration-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'
              aria-expanded={activeItems.includes(faq.id)}
              aria-controls={`faq-answer-${faq.id}`}
            >
              <span className='font-medium text-gray-900'>{faq.question}</span>
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
    </div>
  )
}

export default FAQSection
