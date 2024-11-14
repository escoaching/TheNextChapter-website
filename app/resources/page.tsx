'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FileDown, ExternalLink, X, Menu } from 'lucide-react'
import MetaComponent from '../MetaComponent'

const meta = {
  title: "Resources | Emotional Sobriety Coaching",
  description: "The next chapter is a program centered around emotional sobriety. Get happy, not sober. Reduce your alcohol consumption by 80%.",
  imageUrl: "https://www.emotionalsobrietycoaching.com/preview.png",
  pageUrl: "https://www.emotionalsobrietycoaching.com"
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <MetaComponent {...meta} />
      <nav className="bg-[#46474c] shadow-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <Image src="/logonew.png" alt="TNC Logo" width={200} height={60} className="transform hover:scale-105 transition-all" />
              </Link>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link href="/about-TNC" className="text-[#fff8f7] inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#90CAD6] text-sm font-medium transition-all">
                Program
              </Link>
              <Link href="https://itsnotaboutthealcohol.com/" className="text-[#fff8f7] inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#90CAD6] text-sm font-medium transition-all">
                Podcast
              </Link>
            </div>
            <div className="md:hidden flex items-center">
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/about-TNC" className="text-[#fff8f7] block px-3 py-2 rounded-md text-base font-medium hover:bg-[#90CAD6] hover:text-[#46474c]">
                Program
              </Link>
              <Link href="https://itsnotaboutthealcohol.com" className="text-[#fff8f7] block px-3 py-2 rounded-md text-base font-medium hover:bg-[#90CAD6] hover:text-[#46474c]">
                Podcast
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
          <p className="text-sm md:text-base mt-4 text-center md:text-left">Copyright 2024 Emotional Sobriety Coaching</p>
        </div>
        <div className="order-1 md:order-2 mb-6 md:mb-0">
          <ul className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
            <li className="mb-2 md:mb-0"><Link href="/" className="text-sm md:text-base hover:text-[#90CAD6] transition-all">Home</Link></li>
            <li className="mb-2 md:mb-0"><Link href="/about-TNC" className="text-sm md:text-base hover:text-[#90CAD6] transition-all">Program</Link></li>
            <li className="mb-2 md:mb-0"><Link href="https://emotionalsobrietycoaching.typeform.com/to/QbFjUKjL" className="text-sm md:text-base hover:text-[#90CAD6] transition-all">Book Discovery Call</Link></li>
            <li className="mb-2 md:mb-0"><Link href="/privacy-policy" className="text-sm md:text-base hover:text-[#90CAD6] transition-all">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

const PasswordProtectedContent = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === process.env.NEXT_PUBLIC_RESOURCES_PASSWORD) {
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Incorrect password. Please try again or reach out to the team for assistance')
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-[#bda5a3]">Enter Password</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#bda5a3] focus:border-[#bda5a3] mb-4"
            placeholder="Password"
            required
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#bda5a3] text-white py-2 px-4 rounded-md hover:bg-[#46474c] transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    )
  }

  return <>{children}</>
}

export default function ProgramResourcesPage() {
 
  const pdfGoogleDriveLink = "https://drive.google.com/file/d/1UATB-_E53c-J8ibG8cBYpOtv1EllgUSl/view?usp=sharing"

  return (
    <PasswordProtectedContent>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 to-pink-50">
        <Navbar />
        
        <main className="flex-grow py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-[#bda5a3]">Program Resources</h1>

            <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#bda5a3]">TNC Workbook</h2>
              <div className="mb-4 flex flex-col sm:flex-row items-center justify-between">
                <div className="flex space-x-4">
                  <a
                    href={pdfGoogleDriveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-[#bda5a3] text-[#fff8f7] px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-[#46474c] transition-colors transform hover:scale-105"
                  >
                    <FileDown className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                    Download
                  </a>
                  <a
                    href={pdfGoogleDriveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-[#bda5a3] text-[#fff8f7] px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-[#46474c] transition-colors transform hover:scale-105"
                  >
                    <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                    Open PDF
                  </a>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg p-2 sm:p-4">
                <Image
                  src="/Workbook.png"
                  alt="TNC Workbook Preview"
                  width={800}
                  height={600}
                  layout="responsive"
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#bda5a3]">Accountability Group</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.canva.com/design/DAGGuBxa-A4/ZqwK7pk9gePZZaR-1HI_9A/view?embed"
                  allowFullScreen
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg shadow-lg"
                  title="Accountability Group Presentation"
                ></iframe>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#bda5a3]">The Next Chapter Happenings</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.canva.com/design/DAGV5Lk1bEo/XM9j0qNgc5ADyWBpJB7ttw/view?embed"
                  allowFullScreen
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg shadow-lg"
                  title="The Next Chapter Happenings Presentation"
                ></iframe>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </PasswordProtectedContent>
  )
}