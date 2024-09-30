import WhatWeDo from '@/components/WhatWeDo'
import PortfolioSection from '@/components/PortfolioSection'

export default function OfferingsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-100">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">What We Do</h1>
          <p className="text-center mb-12 text-gray-600 max-w-2xl mx-auto">
            At Cupertino Change Agents, we are dedicated to making a positive impact in our community. 
            Our offerings are designed to help children, families, and communities through various 
            initiatives and events.
          </p>
          <WhatWeDo />
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Programs</h2>
          <p className="text-center mb-12 text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of programs and initiatives designed to make a lasting impact 
            in our community. From donation drives to special activities, we're committed to creating 
            positive change.
          </p>
          <PortfolioSection />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Get Involved</h2>
          <p className="text-center mb-12 text-gray-600 max-w-2xl mx-auto">
            Your support can make a significant difference. Join us in our mission to create a better 
            community for all. Whether you want to volunteer, donate, or participate in our events, 
            there's a place for you in our organization.
          </p>
          <div className="flex justify-center">
            <a href="/donate" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              Donate Now
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}