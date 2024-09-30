'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header>
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="mr-4">cupertinochangeagents@gmail.com</span>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+1 669 251 4702</span>
            </div>
            <Link href="/donate" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
              Donate
            </Link>
          </div>
        </div>
      </div>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/">
                <Image src="/assets/img/logo 2.png" alt="CCA Logo" width={100} height={50} />
              </Link>
            </div>
            <div className="hidden md:flex space-x-4">
              <Link href="/" className="text-gray-800 hover:text-orange-500">Home</Link>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-gray-800 hover:text-orange-500 focus:outline-none"
                >
                  Who We Are
                  <svg className="w-4 h-4 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <Link href="/#about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Our Story</Link>
                      <Link href="/#team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Our Team</Link>
                    </div>
                  </div>
                )}
              </div>
              <Link href="/offerings" className="text-gray-800 hover:text-orange-500">What We Do</Link>
              <Link href="/#contact" className="text-gray-800 hover:text-orange-500">Get Involved</Link>
              <Link href="/#contact" className="text-gray-800 hover:text-orange-500">Contact Us</Link>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-orange-500">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                  ) : (
                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">Home</Link>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full text-left py-2 px-4 text-sm hover:bg-gray-200 focus:outline-none"
            >
              Who We Are
            </button>
            {isDropdownOpen && (
              <>
                <Link href="/#about" className="block py-2 px-8 text-sm hover:bg-gray-200">Our Story</Link>
                <Link href="/#team" className="block py-2 px-8 text-sm hover:bg-gray-200">Our Team</Link>
              </>
            )}
            <Link href="/offerings" className="block py-2 px-4 text-sm hover:bg-gray-200">What We Do</Link>
            <Link href="/#contact" className="block py-2 px-4 text-sm hover:bg-gray-200">Get Involved</Link>
            <Link href="/#contact" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact Us</Link>
          </div>
        )}
      </nav>
    </header>
  )
}