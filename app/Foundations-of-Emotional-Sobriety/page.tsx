'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import MetaComponent from '../MetaComponent'



const meta = {
  title: "Foundations of Emotional Sobriety | Emotional Sobriety Coaching",
  description:"The next chapter is a program centered around emotional sobriety. Get happy, not sober. Reduce your alcohol consumption by 80%.",
  imageUrl:"https://www.emotionalsobrietycoaching.com/foundationsofemotional.webp",
  pageUrl:"https://www.emotionalsobrietycoaching.com/Foundations-of-Emotional-Sobriety"
}

const Navbar = () => (
  <nav className="bg-[#46474c] shadow-lg fixed w-full z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20">
        <div className="flex-shrink-0 flex items-center">
        <Link href="/" className="flex-shrink-0 flex items-center">
            <Image src="/logonew.png" alt="TNC Logo" width={200} height={80} className="transform hover:scale-105 transition-all" />
          </Link>
        </div>
        <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
          <Link href="/" className="text-[#fff8f7] inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#bda5a3] text-sm font-medium transition-all">
            Home
          </Link>
          <Link href="/about-TNC" className="text-[#fff8f7] inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#bda5a3] text-sm font-medium transition-all">
            Programs
          </Link>
          <Link href="https://emotionalsobrietycoaching.typeform.com/to/QbFjUKjL#source=website" className="text-[#fff8f7] inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#bda5a3] text-sm font-medium transition-all">
            Book Discovery Call
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

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
          <li className="mb-2 md:mb-0"><Link href="/about-TNC" className="text-sm md:text-base hover:text-[#90CAD6] transition-all">About TNC</Link></li>
          <li className="mb-2 md:mb-0"><Link href="https://emotionalsobrietycoaching.typeform.com/to/QbFjUKjL#source=website" className="text-sm md:text-base hover:text-[#90CAD6] transition-all">Book Discovery Call</Link></li>
          <li className="mb-2 md:mb-0"><Link href="/privacy-policy" className="text-sm md:text-base hover:text-[#90CAD6] transition-all">Privacy Policy</Link></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
)

const FoundationsOfEmotionalSobrietyPage = () => {
  return (
    <>
      <MetaComponent  {...meta}/>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <Navbar />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#bda5a3] leading-tight">Reclaim control of your head, heart and home.</h1>
              <p className="text-xl md:text-2xl mb-8 text-[#46474c]">Get started with my free audio course!</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#bda5a3]">Welcome to<br />Foundations of Emotional Sobriety</h2>
              <Link 
                href="https://app.helloaudio.fm/feed/f37e8677-56fd-451b-8d28-f96efbb71bde/signup" 
                className="bg-[#bda5a3] text-[#fff8f7] hover:bg-[#46474c] font-bold py-3 px-6 rounded-full inline-flex items-center transition-all text-lg md:text-xl shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Click here for immediate access to the private podcast feed
                <ArrowRight className="ml-2" />
              </Link>
            </div>
          </section>

          {/* What is Emotional Sobriety Section */}
          <section className="py-20 bg-gradient-to-br from-purple-100 to-pink-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#bda5a3]">What is Emotional Sobriety?</h2>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
                <div className="lg:w-1/2 max-w-lg">
                  <Image 
                    src="/foundationsofemotional.webp" 
                    alt="Foundations of Emotional Sobriety" 
                    width={600} 
                    height={600} 
                    className="rounded-lg shadow-2xl transform hover:scale-105 transition-all"
                  />
                </div>
                <div className="lg:w-1/2 max-w-lg">
                  <p className="text-xl mb-4 leading-relaxed text-[#46474c]">When you&apos;re no longer intoxicated by bullshit--your own or anyone else&apos;s.</p>
                  <p className="text-xl mb-4 leading-relaxed text-[#46474c]">&quot;Stuck&quot; is a feeling, not a fact. Stop waiting for permission, approval or for life circumstances to improve so that you can feel powerful.</p>
                  <p className="text-xl mb-4 leading-relaxed text-[#46474c]">Learn how to clear the emotional obstacles so you can be powerful NOW--as you are, where you are.</p>
                  <p className="text-2xl font-bold text-[#bda5a3]">Because powerful people live powerful lives.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Owner's Manual Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#bda5a3]">Foundations of Emotional Sobriety is the owner&apos;s manual for your mind and body.</h2>
              <p className="text-xl mb-8 text-[#46474c]">Get the tools, tips and strategies to:</p>
              <ul className="text-left max-w-2xl mx-auto space-y-6 mb-12">
                <li className="flex items-start bg-[#fff8f7] p-4 rounded-lg shadow-md">
                  <span className="text-3xl mr-4 flex-shrink-0">👉🏼</span>
                  <span className="text-lg text-[#46474c]">Separate fact from fiction so you can figure out…what else could be true?</span>
                </li>
                <li className="flex items-start bg-[#fff8f7] p-4 rounded-lg shadow-md">
                  <span className="text-3xl mr-4 flex-shrink-0">👉🏼</span>
                  <span className="text-lg text-[#46474c]">Change habitual thought patterns with self-coaching strategies that expand your perspective and shift your focus from past to future.</span>
                </li>
                <li className="flex items-start bg-[#fff8f7] p-4 rounded-lg shadow-md">
                  <span className="text-3xl mr-4 flex-shrink-0">👉🏼</span>
                  <span className="text-lg text-[#46474c]">Regulate your nervous system and process your emotions in real time so you&apos;re no longer held hostage by anxiety.</span>
                </li>
              </ul>
              <Link 
                href="https://app.helloaudio.fm/feed/f37e8677-56fd-451b-8d28-f96efbb71bde/signup" 
                className="bg-[#bda5a3] text-[#fff8f7] hover:bg-[#46474c] font-bold py-3 px-6 rounded-full inline-flex items-center transition-all text-lg md:text-xl shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Click here for immediate access to free audio course!
                <ArrowRight className="ml-2" />
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default FoundationsOfEmotionalSobrietyPage