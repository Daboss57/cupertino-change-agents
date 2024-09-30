import Image from 'next/image'
import Link from 'next/link'

export default function DonatePage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-100">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Ways to Donate</h1>
          <p className="text-center mb-4 text-xl font-semibold text-gray-700">We Cannot Do What We Do Without Your Support</p>
          <p className="text-center mb-8 text-gray-600 max-w-2xl mx-auto">
            100% of your donation goes towards the services that we provide. Please consider donating 
            to the cause and make a difference in our community.
          </p>
          <p className="text-center mb-12 text-gray-600 font-semibold">We welcome Employer Matching donations!</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Through PayPal</h3>
              <Image src="/assets/img/paypal.png" alt="PayPal" width={200} height={100} className="mb-4 mx-auto" />
              <p className="mb-4 text-center text-gray-600">Pay to: <span className="font-semibold text-orange-500">cupertinochangeagents@gmail.com</span></p>
              <div className="text-center">
                <a href="https://www.paypal.com/donate/?hosted_button_id=U6S5F6A5NLD36" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded inline-block transition duration-300 ease-in-out">
                  Donate
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Through Bank Checks</h3>
              <Image src="/assets/img/checks.jpg" alt="Bank Checks" width={200} height={100} className="mb-4 mx-auto" />
              <p className="mb-4 text-center text-gray-600">
                Payable to: <span className="font-semibold text-orange-500">Cupertino Change Agents</span><br />
                Mail to: <span className="font-semibold text-orange-500">10960 Northsky Sq, Cupertino, CA 95014</span>
              </p>
              <div className="text-center">
                <Link href="/#contact" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded inline-block transition duration-300 ease-in-out">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Through Zelle</h3>
              <Image src="/assets/img/Zelle-Logo.jpg" alt="Zelle" width={200} height={100} className="mb-4 mx-auto" />
              <p className="mb-4 text-center text-gray-600">Pay to: <span className="font-semibold text-orange-500">+1 669 251 4702</span></p>
              <div className="text-center">
                <Link href="/#contact" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded inline-block transition duration-300 ease-in-out">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Important Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Cupertino Change Agents is a qualified 501(c)(3) tax-exempt organization and donations are tax-exempt to the full extent of the law. If you would like a receipt for your donation please send a request to <a href="mailto:cupertinochangeagents@gmail.com" className="text-orange-500 hover:underline">cupertinochangeagents@gmail.com</a>.</li>
              <li>Our Tax ID/EIN is: <Link href="/eid" className="text-orange-500 hover:underline">87-3551549</Link>.</li>
              <li>Please consult your tax advisor regarding specific questions about your deductions.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}