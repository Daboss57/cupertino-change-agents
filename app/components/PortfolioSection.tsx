'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import AddPortfolioModal from './AddPortfolioModal'

interface PortfolioItem {
  id: number
  title: string
  category: string
  images: string[]
  link: string
}

export default function PortfolioSection() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filter, setFilter] = useState('all')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadItems = async () => {
      try {
        const response = await fetch('/api/portfolio')
        const data = await response.json()
        console.log('Loaded data:', data) // Debug log
        if (data.items) {
          setPortfolioItems(data.items)
        }
      } catch (error) {
        console.error('Error loading items:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadItems()
  }, [])

  const addPortfolioItem = async (newItem: Omit<PortfolioItem, 'id'>) => {
    const itemWithId = { ...newItem, id: Date.now() }
    
    try {
      const response = await fetch('/api/portfolio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemWithId),
      })

      if (!response.ok) throw new Error('Failed to save')
      
      // Update local state
      setPortfolioItems(prev => [...prev, itemWithId])
      setIsModalOpen(false) // Close modal after successful add
    } catch (error) {
      console.error('Error saving portfolio item:', error)
      alert('Failed to save the portfolio item. Please try again.')
    }
  }

  const filteredItems = filter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === filter)

  // Rest of your component remains the same...
  return (
     <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Programs</h2>
        <p className="text-center mb-12 text-gray-600">CCA runs multiple programs throughout the year. This is a portfolio of such events</p>
        
        <div className="flex justify-center mb-8">
          <button onClick={() => setFilter('all')} className={`mx-2 py-2 px-4 rounded ${filter === 'all' ? 'bg-orange-500 text-white' : 'bg-white text-gray-800'}`}>ALL</button>
          <button onClick={() => setFilter('drives')} className={`mx-2 py-2 px-4 rounded ${filter === 'drives' ? 'bg-orange-500 text-white' : 'bg-white text-gray-800'}`}>OUR DRIVES</button>
          <button onClick={() => setFilter('fundraisers')} className={`mx-2 py-2 px-4 rounded ${filter === 'fundraisers' ? 'bg-orange-500 text-white' : 'bg-white text-gray-800'}`}>FUNDRAISERS</button>
          <button onClick={() => setFilter('special')} className={`mx-2 py-2 px-4 rounded ${filter === 'special' ? 'bg-orange-500 text-white' : 'bg-white text-gray-800'}`}>SPECIAL ACTIVITIES</button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.category}</p>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-orange-500 hover:text-orange-600"
                >Learn More</a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button onClick={() => setIsModalOpen(true)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            Add New Portfolio Item
          </button>
        </div>
      </div>

      <AddPortfolioModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={addPortfolioItem}
      />
    </section>
  )
}