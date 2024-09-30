'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import WhatWeDo from '@/components/WhatWeDo'
import PortfolioSection from '@/components/PortfolioSection'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ABC from './/hero-bg.jpg'
import { useState } from 'react'

export default function Home() {
  const[showVideo, setShowVideo] = useState(false)
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <main className="flex flex-col min-h-screen">
      <section id="hero" className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center relative" style={{backgroundImage: `url(${ABC.src})`}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-aos="fade-up">"Be the change you want to see in the world"</h1>
          <Link href="#about" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" data-aos="fade-up" data-aos-delay="200">
            Learn More
          </Link>
        </div>
      </section>

      <section id="why-us" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-8 lg:mb-0" data-aos="fade-right">
              <div className="content p-6 bg-gray-100 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Do you know ..</h3>
                <p className="text-lg text-gray-700">
                  Community Service is one of the best ways to teach our children the value of empathy. Not only does volunteering show kids kindness, compassion, and selflessness, but it can also teach them various life skills.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="100">
                  <div className="text-4xl text-orange-500 mb-4">
                    <i className="bx bx-heart"></i>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-800">Kindness</h4>
                  <p className="text-gray-700">Acts of kindness increase energy and give a wonderful feeling of optimism. Kindness helps children's mental health, their resilience, as well as their peak performance.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
                  <div className="text-4xl text-orange-500 mb-4">
                    <i className="bx bx-donate-heart"></i>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-800">Empathy</h4>
                  <p className="text-gray-700">Empathy is an important tool for children to have in their emotional toolbox. Empathy can help them build connections, regulate emotions, and promote helping behaviors.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="300">
                  <div className="text-4xl text-orange-500 mb-4">
                    <i className="bx bx-home-heart"></i>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-800">Compassion</h4>
                  <p className="text-gray-700">Compassionate behavior such as volunteer work has been associated with positive outcomes such as increased academic aspirations and self-esteem among adolescents.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section id="video-about" className="relative flex flex-wrap min-h-screen bg-gray-100">
        <div className="w-full lg:w-1/2 flex justify-center items-center relative" style={{ backgroundImage: `url('/cca.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-gray-100 bg-opacity-50"></div>
          <div className="container relative z-10 flex justify-center">
            <div className="text-center">
              <button
                onClick={() => setShowVideo(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                data-aos="fade-up"
              >
                Watch Our Video
              </button>
            </div>
          </div>
          {showVideo && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
              onClick={() => setShowVideo(false)}
            >
              <div
                className="relative w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute top-0 right-0 m-4 text-white text-2xl"
                >
                  &times;
                </button>
                <div className="relative" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/Uu2w4s7Wm6k?si=J5uzuSh2n5Yg6w6m&amp"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full lg:w-1/2 flex items-center">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
              <div className="w-full" data-aos="fade-left">
                <h3 className="text-3xl font-bold mb-4 text-gray-800">Our Mission</h3>
                <p className="mb-4 text-gray-700">Our mission is to cultivate compassion as an essential practice in young lives. We work with local students and empower them to create lasting changes in the lives of the underprivileged individuals of the community.</p>
                <WhatWeDo />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Programs</h2>
          <p className="text-center mb-12 text-gray-600">CCA runs multiple programs throughout the year. This is a portfolio of such events</p>
          <PortfolioSection />
        </div>
      </section>

      <section id="contact" className="py-16 bg-gray-100" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Contact Us</h2>
          <p className="text-center mb-12 text-gray-600">Get in touch with us for any inquiries or to join our cause</p>
          <div className="max-w-lg mx-auto">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50" required></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}