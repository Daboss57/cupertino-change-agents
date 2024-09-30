// components/AddPortfolioModal.tsx
'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

interface PortfolioItem {
  id: number
  title: string
  category: string
  images: string[]
  link: string
}

interface Props {
  isOpen: boolean
  onClose: () => void
  onAdd: (item: PortfolioItem) => void
}

export default function AddPortfolioModal({ isOpen, onClose, onAdd }: Props) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [link, setLink] = useState('')
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length > 5) {
      alert('You can only select up to 5 images.')
      return
    }
    setSelectedFiles(files)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would upload the images to a server here
    // and get back the URLs to store in the portfolio item
    const imageUrls = selectedFiles.map(file => URL.createObjectURL(file))
    onAdd({
      id: 0,
      title,
      category,
      images: imageUrls,
      link,
    })
    onClose()
    setTitle('')
    setCategory('')
    setLink('')
    setSelectedFiles([])
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const removeFile = (index: number) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add Portfolio Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 text-gray-800"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 text-gray-800"
              required
            >
              <option value="">Select a category</option>
              <option value="drives">Our Drives</option>
              <option value="fundraisers">Fundraisers</option>
              <option value="special">Special Activities</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="images" className="block text-sm font-medium text-gray-700">Images (up to 5)</label>
            <input
              type="file"
              id="images"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              multiple
              className="mt-1 block w-full text-sm text-gray-700
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-orange-50 file:text-orange-700
                hover:file:bg-orange-100"
            />
          </div>
          {selectedFiles.length > 0 && (
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Selected Images:</p>
              <div className="grid grid-cols-2 gap-2">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="relative">
                    <Image
                      src={URL.createObjectURL(file)}
                      alt={`Selected image ${index + 1}`}
                      width={100}
                      height={100}
                      className="object-cover rounded"
                    />
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                      aria-label={`Remove image ${index + 1}`}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="link" className="block text-sm font-medium text-gray-700">Link</label>
            <input
              type="text"
              id="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 text-gray-800"
              required
            />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
              Cancel
            </button>
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}