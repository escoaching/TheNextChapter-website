'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { Menu, X } from 'lucide-react'
import MetaComponent from '../MetaComponent'

const meta = {
  title: "Book A Discovery Call | Emotional Sobriety Coaching",
  description:"The next chapter is a program centered around emotional sobriety. Get happy, not sober. Reduce your alcohol consumption by 80%.",
  imageUrl:"https://www.emotionalsobrietycoaching.com/preview.png",
  pageUrl:"https://www.emotionalsobrietycoaching.com/book-a-discovery-call"
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <MetaComponent  {...meta}/>
      <nav className="bg-[#46474c] shadow-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <Image src="/logonew.png" alt="TNC Logo" width={200} height={80} className="transform hover:scale-105 transition-all" />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
              <Link href="/" className="text-[#fff8f7] inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#90CAD6] text-sm font-medium transition-all">
                Home
              </Link>
              <Link href="/about-TNC" className="text-[#fff8f7] inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#90CAD6] text-sm font-medium transition-all">
              Program
              </Link>
            </div>
            <div className="sm:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-[#fff8f7] hover:text-[#90CAD6] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="text-[#fff8f7] block px-3 py-2 rounded-md text-base font-medium hover:bg-[#90CAD6] hover:text-[#46474c]">
                Home
              </Link>
              <Link href="/about-TNC" className="text-[#fff8f7] block px-3 py-2 rounded-md text-base font-medium hover:bg-[#90CAD6] hover:text-[#46474c]">
              Program
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

const Footer = () => (
  <footer className="bg-[#46474c] text-[#fff8f7] py-8 md:py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mb-6 md:mb-0 order-2 md:order-1">
        <div className="flex justify-center md:justify-start space-x-6">
          <Link href="https://www.youtube.com/channel/UCv24pItAK0xWQ_m6mD8T50w" target="_blank" rel="noopener noreferrer">
            <Image src="/youtube.webp" alt="YouTube" width={32} height={32} className="hover:opacity-80 transition-opacity" />
          </Link>
          <Link href="https://vimeo.com/user138845606" target="_blank" rel="noopener noreferrer">
            <Image src="/vimeo.webp" alt="Vimeo" width={32} height={32} className="hover:opacity-80 transition-opacity" />
          </Link>
          <Link href="https://www.instagram.com/thehangoverwhisperer?igsh=MWowa2dhZnRmc3hlZw==" target="_blank" rel="noopener noreferrer">
            <Image src="/instagram.png" alt="Instagram" width={32} height={32} className="hover:opacity-80 transition-opacity" />
          </Link>
          <Link href="https://www.tiktok.com/@hangoverwhisperer" target="_blank" rel="noopener noreferrer">
            <Image src="/tiktok.png" alt="TikTok" width={32} height={32} className="hover:opacity-80 transition-opacity" />
          </Link>
        </div>
        <p className="text-sm md:text-base mt-4 text-center md:text-left">©2025 Emotional Sobriety Coaching</p>
      </div>
      <div className="order-1 md:order-2 mb-6 md:mb-0">
        <ul className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">

          <li className="mb-2 md:mb-0"><Link href="/" className="text-sm md:text-base hover:text-[#90CAD6] transition-all">Home</Link></li>
          <li className="mb-2 md:mb-0"><Link href="/about-TNC" className="text-sm md:text-base hover:text-[#90CAD6] transition-all">Program</Link></li>
          <li className="mb-2 md:mb-0"><Link href="https://emotionalsobrietycoaching.typeform.com/to/QbFjUKjL#source=website" className="text-sm md:text-base hover:text-[#90CAD6] transition-all">Book Discovery Call</Link></li>
          <li className="mb-2 md:mb-0"><Link href="/privacy-policy" className="text-sm md:text-base hover:text-[#90CAD6] transition-all">Privacy Policy</Link></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
)

const CalendlyPage = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#fff8f7] flex flex-col">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-start px-4 pt-24 pb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-[#46474c]">Book Your Discovery Call</h1>
        <p className="text-sm sm:text-base text-center mb-4 max-w-2xl mx-auto text-[#46474c]">
          Take the first step towards transforming your relationship with alcohol. Schedule a free discovery call with Colleen to learn more about The Next Chapter program.
        </p>
        <div 
          className="calendly-inline-widget w-full" 
          data-url="https://calendly.com/next-chapter-team/the-next-chapter-discovery-call" 
          style={{ minWidth: '320px', height: 'calc(100vh - 180px)', maxHeight: '1000px' }}
        ></div>
      </main>

      <Footer />

      <Script
        id="calendly-widget"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.onload = function() {
              var script = document.createElement('script');
              script.src = 'https://assets.calendly.com/assets/external/widget.js';
              document.body.appendChild(script);
            }
          `,
        }}
      />
    </div>
  )
}

export default CalendlyPage