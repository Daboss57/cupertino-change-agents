'use client'

import { useState } from 'react'
import Image from 'next/image'
import AddPortfolioModal from './AddPortfolioModal'

interface PortfolioItem {
  id: number
  title: string
  category: string
  images: string[]
  link: string
}

const initialItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Meals for Moms",
    category: "drives",
    images: ["/assets/img/portfolio/MFM.jpg"],
    link: "https://example.com/meals-for-moms"
  },
  {
    id: 2,
    title: "Used Book Sale",
    category: "fundraisers",
    images: ["/assets/img/portfolio/UB-1.jpg"],
    link: "https://example.com/used-book-sale"
  },
  {
    id: 3,
    title: "Letters of Love for Elders",
    category: "special",
    images: ["/assets/img/portfolio/LL-1.jpg"],
    link: "https://example.com/letters-of-love"
  },
]

export default function PortfolioSection() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(initialItems)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filter, setFilter] = useState('all')

  const addPortfolioItem = (newItem: PortfolioItem) => {
    setPortfolioItems([...portfolioItems, { ...newItem, id: Date.now() }])
  }

  const filteredItems = filter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === filter)

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