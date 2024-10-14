'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

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
      <header className="bg-[#46474c] shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src="/TNCLogo.webp"
                alt="The Next Chapter Logo"
                width={150}
                height={37}
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

      <main className="flex-grow flex flex-col items-center justify-start px-4 pt-4 pb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-[#46474c]">Book Your Discovery Call</h1>
        <p className="text-sm sm:text-base text-center mb-4 max-w-2xl mx-auto text-[#46474c]">
          Take the first step towards transforming your relationship with alcohol. Schedule a free discovery call with Colleen to learn more about The Next Chapter program.
        </p>
        <div 
          className="calendly-inline-widget w-full" 
          data-url="https://calendly.com/colleen-emotionalsobrietycoaching/discovery-call-follow-up?background_color=fff8f7&text_color=46474c&primary_color=90cad6" 
          style={{ minWidth: '320px', height: 'calc(100vh - 180px)', maxHeight: '1000px' }}
        ></div>
      </main>

      <footer className="bg-[#46474c] text-[#fff8f7] py-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} The Next Chapter. All rights reserved.</p>
        </div>
      </footer>

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