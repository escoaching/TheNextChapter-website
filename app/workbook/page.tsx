'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#46474c] shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image src="/TNCLogo.webp" alt="TNC Logo" width={200} height={80} className="transform hover:scale-105 transition-all" />
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
            <Link href="/" className="text-[#fff8f7] inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#bda5a3] text-sm font-medium transition-all">
              Home
            </Link>
          </div>
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#fff8f7] hover:text-[#bda5a3] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
            <Link href="/" className="text-[#fff8f7] block px-3 py-2 rounded-md text-base font-medium hover:bg-[#bda5a3] hover:text-[#46474c]">
              Home
            </Link>
            <Link href="https://emotionalsobrietycoaching.typeform.com/to/QbFjUKjL" className="text-[#fff8f7] block px-3 py-2 rounded-md text-base font-medium hover:bg-[#bda5a3] hover:text-[#46474c]">
              Book Discovery Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default function FormPage() {
  useEffect(() => {
    if (!document.querySelector('script[src="https://emotionalsobrietycoaching.activehosted.com/f/embed.php?id=3"]')) {
      const script = document.createElement('script')
      script.src = 'https://emotionalsobrietycoaching.activehosted.com/f/embed.php?id=3'
      script.charset = 'utf-8'
      document.body.appendChild(script)
    }

    return () => {
      // Cleanup is handled by the script itself
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#fff8f7] flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 py-12 mt-20">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center text-[#46474c] mb-6">Free Workbook Request</h1>
          <p className="text-center text-[#46474c] mb-8">
            Fill out the form below to receive your free workbook and start your journey towards emotional sobriety.
          </p>
          <div id="form-container" className="_form_3"></div>
        </div>
      </main>

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
              <p className="text-sm md:text-base mt-4 text-center md:text-left">Copyright 2024 Recover With Colleen</p>
            </div>
            <div className="order-1 md:order-2 mb-6 md:mb-0">
              <ul className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
                <li className="mb-2 md:mb-0"><Link href="/" className="text-sm md:text-base hover:text-[#90CAD6] transition-all">Home</Link></li>
                <li className="mb-2 md:mb-0"><Link href="/about-TNC" className="text-sm md:text-base hover:text-[#90CAD6] transition-all">About TNC</Link></li>
                <li className="mb-2 md:mb-0"><Link href="/privacy-policy" className="text-sm md:text-base hover:text-[#90CAD6] transition-all">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        ._form_3 {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.5;
          margin: 0;
        }
        ._form_3 ._form-title {
          display: none;
        }
        ._form_3 ._form_element {
          margin-bottom: 1.5rem;
        }
        ._form_3 ._field-wrapper input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          font-size: 1rem;
        }
        ._form_3 ._submit {
          background-color: #90CAD6;
          color: #46474C;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 0.375rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          transition: background-color 0.3s ease;
        }
        ._form_3 ._submit:hover {
          background-color: #7ab8c4;
        }
        ._form_3 ._form-label {
          font-weight: 600;
          margin-bottom: 0.5rem;
          display: block;
          color: #46474c;
        }
      `}</style>
    </div>
  )
}