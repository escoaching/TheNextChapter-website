'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

const ContactPage = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  return (
    <div className="min-h-screen bg-[#fff8f7] flex flex-col">
      <header className="bg-[#46474c] shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src="/TNCLogo.webp"
                alt="The Next Chapter Logo"
                width={200}
                height={50}
                className="transform hover:scale-105 transition-all"
              />
            </Link>
            <nav>
              <Link href="/" className="text-[#fff8f7] hover:text-[#bda5a3] transition-colors">
                Home
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-12 text-[#46474c] text-center">Contact Us</h1>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white shadow-2xl rounded-lg overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 bg-gradient-to-br from-[#90cad6] to-[#7ab8c4]">
                <h2 className="text-3xl font-semibold mb-6 text-white">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm">
                    <h3 className="text-xl font-medium mb-2 text-white">Speaking Event Booking</h3>
                    <p className="text-white mb-4">Interested in having Colleen speak at your event?</p>
                    <Link href="/speaking-request" className="inline-block bg-white text-[#46474c] py-2 px-4 rounded hover:bg-opacity-90 transition-colors">
                      Request Speaking Event
                    </Link>
                  </div>
                  <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm">
                    <h3 className="text-xl font-medium mb-2 text-white">Podcast Guest Request</h3>
                    <p className="text-white mb-4">Want to feature Colleen on your podcast?</p>
                    <a href="https://your-typeform-link-here" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-[#46474c] py-2 px-4 rounded hover:bg-opacity-90 transition-colors">
                      Apply to be a Podcast Guest
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="space-y-6">
                  <div className="bg-[#f0f8fa] p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-2 text-[#46474c]">Email Colleen</h3>
                    <p className="text-[#46474c] mb-4">Have a question or want to get in touch?</p>
                    <a href="mailto:colleen@emotionalsobrietycoaching.com" className="inline-block bg-[#90cad6] text-white py-2 px-4 rounded hover:bg-[#7ab8c4] transition-colors">
                      Send an Email
                    </a>
                  </div>
                  <div className="bg-[#f0f8fa] p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-2 text-[#46474c]">Join Our Email List</h3>
                    <p className="text-[#46474c] mb-4">Stay updated with our latest news and offers.</p>
                    <button onClick={openModal} className="inline-block bg-[#90cad6] text-white py-2 px-4 rounded hover:bg-[#7ab8c4] transition-colors">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <Image
                  src="/sober.webp"
                  alt="Colleen Kachmann"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-3xl font-semibold mb-6 text-[#46474c]">About Colleen</h2>
                <p className="text-[#46474c] mb-4 leading-relaxed">
                  Colleen uses the term &ldquo;non-drinker&rdquo; to describe her relationship with alcohol. But she doesn&apos;t focus on or identify in any way with alcohol. Instead, she prides herself on practicing emotional sobriety, a skill that she sums up with, &ldquo;when you accept responsibility for the problem, you become the solution.&rdquo;
                </p>
                <p className="text-[#46474c] leading-relaxed">
                  Colleen Kachmann is a recovery-certified Master Coach and author of Life Off the Label: A Handbook for Creating Your Own Brand of Health and Happiness. She holds a MS in health coaching, a BS in education and a women&apos;s functional and integrative medicine professional certificate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#46474c] text-[#fff8f7] py-8 mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} The Next Chapter. All rights reserved.</p>
        </div>
      </footer>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full relative">
            <button 
              onClick={closeModal} 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div id="email-signup-form"></div>
          </div>
        </div>
      )}

      <Script
        id="activecampaign-embed"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('load', function() {
              var script = document.createElement('script');
              script.src = "https://emotionalsobrietycoaching.activehosted.com/f/embed.php?id=1";
              script.charset = "utf-8";
              document.getElementById('email-signup-form').appendChild(script);
            });
          `,
        }}
      />
    </div>
  )
}

export default ContactPage