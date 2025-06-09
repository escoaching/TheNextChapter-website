'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MetaComponent from '../MetaComponent'

const meta = {
  title: "Thank You - The Next Chapter",
  description: "Thank you for your purchase.",
  imageUrl: "https://emotionalsobrietycoaching.com/test.png",
  pageUrl: "https://emotionalsobrietycoaching.com/thankyou"
}

export default function ThankYouClient() {
  const videoId = "1PB_7EmJkN35iaffAFJGloQUQlFoEhVFI";
  const embedUrl = `https://drive.google.com/file/d/${videoId}/preview`;

  return (
    <div className="min-h-screen bg-[#fff8f7] flex flex-col">
      <MetaComponent {...meta} />
      <Navbar key="navbar" />
      
      <main className="flex-grow mt-20 flex flex-col items-center justify-center text-center">
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
          <h1 className="text-4xl font-bold mb-4 text-[#46474c] font-playfair">Thank You!</h1>
          <p className="mb-8 text-[#46474c] text-lg font-montserrat">
            Here is a special video for you.
          </p>
          <div style={{ position: 'relative', paddingTop: '56.25%', width: '100%' }}>
            <iframe 
              src={embedUrl}
              allow="autoplay"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              className="rounded-lg shadow-xl"
            ></iframe>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
} 