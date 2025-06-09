'use client'

import React, { useEffect } from 'react'
import Script from 'next/script'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MetaComponent from '../MetaComponent'

const meta = {
  title: "Book A Discovery Call | Emotional Sobriety Coaching",
  description:"The next chapter is a program centered around emotional sobriety. Get happy, not sober. Reduce your alcohol consumption by 80%.",
  imageUrl:"https://www.emotionalsobrietycoaching.com/preview.png",
  pageUrl:"https://www.emotionalsobrietycoaching.com/book-a-discovery-call"
}

const CalendlyPage = () => {
  useEffect(() => {
    // Remove script loading since it's handled by the Script component
    return () => {
      // Cleanup only if we find the script
      const scriptEl = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (scriptEl && scriptEl.parentNode) {
        scriptEl.parentNode.removeChild(scriptEl);
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#fff8f7] flex flex-col">
      <MetaComponent {...meta} />
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-start px-4 pt-24 pb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-[#46474c] font-montserrat">Book Your Discovery Call</h1>
        <p className="text-sm sm:text-base text-center mb-4 max-w-2xl mx-auto text-[#46474c] font-montserrat">
          Take the first step towards transforming your relationship with alcohol. Schedule your free discovery call to learn more about The Next Chapter program.
        </p>
        <div 
          className="calendly-inline-widget w-full" 
          data-url="https://calendly.com/next-chapter-team/the-next-chapter-discovery-call?utm_source=website&utm_medium=discovery_page&utm_campaign=book_discovery" 
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
              
              // Add UTM tracking to Calendly if it comes from the URL
              window.addEventListener('DOMContentLoaded', function() {
                const urlParams = new URLSearchParams(window.location.search);
                const utmSource = urlParams.get('utm_source');
                const utmMedium = urlParams.get('utm_medium');
                const utmCampaign = urlParams.get('utm_campaign');
                
                const calendlyWidget = document.querySelector('.calendly-inline-widget');
                if (calendlyWidget) {
                  let calendlyUrl = new URL(calendlyWidget.getAttribute('data-url'));
                  
                  // Set default UTM parameters if not passed in URL
                  if (!calendlyUrl.searchParams.has('utm_source')) {
                    calendlyUrl.searchParams.set('utm_source', utmSource || 'website');
                  }
                  if (!calendlyUrl.searchParams.has('utm_medium')) {
                    calendlyUrl.searchParams.set('utm_medium', utmMedium || 'discovery_page');
                  }
                  if (!calendlyUrl.searchParams.has('utm_campaign')) {
                    calendlyUrl.searchParams.set('utm_campaign', utmCampaign || 'book_discovery');
                  }
                  
                  calendlyWidget.setAttribute('data-url', calendlyUrl.toString());
                }
              });
            }
          `,
        }}
      />
    </div>
  )
}

export default CalendlyPage