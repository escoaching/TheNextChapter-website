'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#46474c] shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image src="/TNCLogo.webp" alt="TNC Logo" width={150} height={60} className="transform hover:scale-105 transition-all" />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-[#fff8f7] inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#bda5a3] text-sm font-medium transition-all">
              Home
            </Link>
            <Link href="/about-TNC" className="text-[#fff8f7] inline-flex items-center px-1 pt-1 border-b-2 border-[#bda5a3] text-sm font-medium">
            Program
            </Link>
            <Link href="https://emotionalsobrietycoaching.typeform.com/to/QbFjUKjL" className="text-[#fff8f7] inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#bda5a3] text-sm font-medium transition-all">
              Book Discovery Call
            </Link>
          </div>
          <div className="md:hidden flex items-center">
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="text-[#fff8f7] block px-3 py-2 rounded-md text-base font-medium hover:bg-[#bda5a3] hover:text-[#46474c]">
              Home
            </Link>
            <Link href="/about-TNC" className="bg-[#bda5a3] text-[#46474c] block px-3 py-2 rounded-md text-base font-medium">
            Program
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
        <p className="text-sm md:text-base mt-4 text-center md:text-left">Copyright 2024 Recover With Colleen</p>
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

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#fff8f7]">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#46474c]">Hi, My Name Is Colleen.</h1>
                <h2 className="text-3xl md:text-4xl mb-6 text-[#bda5a3]">And I&apos;m not an alcoholic.</h2>
                <p className="text-xl md:text-2xl mb-8 text-[#46474c]">As a high-functioning perfectionist, my goal was to get better at drinking....</p>
                <p className="text-2xl md:text-3xl font-bold text-[#46474c]">Everything changed the day I decided to get better at thinking.</p>
              </div>
              <div className="md:w-1/2">
                <Image src="/proheadshot.webp" alt="Colleen Kachmann" width={400} height={400} className="rounded-lg shadow-xl mx-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* About Colleen Section */}
        <section className="py-20 bg-gradient-to-br from-[#fff8f7] to-[#bda5a3]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-[#46474c]">Colleen Kachmann</h2>
            <h3 className="text-xl md:text-2xl mb-8 text-center text-[#46474c]">Master life coach and addiction recovery specialist</h3>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <Image src="/closeup.webp" alt="Colleen Kachmann" width={500} height={500} className="rounded-lg shadow-xl mx-auto" />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg md:text-xl mb-4 text-[#46474c]">Colleen Kachmann is a recovery-certified Master Coach, host of the globally ranked It&apos;s Not About the Alcohol podcast, and author of Life Off the Label: A Handbook for Creating Your Own Brand of Health and Happiness.</p>
                <p className="text-lg md:text-xl mb-4 text-[#46474c]">Colleen uses holistic, evidence-based strategies in neurophysiology and growth mindset to help women stop over-drinking without going to AA or giving up alcohol completely by reconnecting with their intuition and personal power.</p>
                <p className="text-lg md:text-xl mb-4 text-[#46474c]">Education: Colleen holds a MSc in health coaching, a BS in biology and chemistry education and is certified as a women&apos;s functional and integrative medicine professional.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional CTA Section */}
        <section className="py-16 bg-[#46474c] text-[#fff8f7]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to learn more?</h2>
            <Link href="https://emotionalsobrietycoaching.typeform.com/to/QbFjUKjL" className="bg-[#fff8f7] text-[#46474c] hover:bg-[#bda5a3] hover:text-[#fff8f7] font-bold py-4 px-8 rounded-full inline-flex items-center transition-all text-xl md:text-2xl">
              Book a Discovery Call
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </section>

        {/* It's Not About the Alcohol Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#46474c]">It&apos;s Not About the Alcohol</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl mb-4 text-[#46474c]">When life became limited by my growing dependence on alcohol, I started to fantasize about quitting. I even gave imaginary TED talks about my escape from what felt like a nightmare. The visualizations were hopeful and fleeting. I was exhausted by the 24-hour cycle of detox-to-retox. But as I poured a drink each night, and hoped maybe tomorrow would be different, I longed for change.</p>
              <p className="text-lg md:text-xl mb-4 text-[#46474c]">One morning, my attempt to outrun a hangover was interrupted. Without consulting my brain, my hand had used my phone to search-and-dial the AA hotline. I guess my body decided it was sick of my shit. Minutes later, standing in the middle of a country road, I was in an online 12-step meeting. Camera off. Heart open. Tears streaming down my face. My resistance faded as I uttered the passwords: &quot;My name is Colleen, and I&apos;m an alcoholic.&quot;</p>
              <p className="text-lg md:text-xl mb-4 text-[#46474c]">I spent the next year doing all the things expected of sober people–attending meetings, working the steps and following the rules. I internalized the conventional beliefs about alcoholism and recovery and trusted what I was told. Honestly, avoiding alcohol was pretty easy because I felt so much better without it. It was figuring out what &quot;not drinking&quot; meant about me as a person that seemed complicated.</p>
              <p className="text-2xl md:text-3xl font-bold text-[#46474c]">Because it felt ridiculous to refer to myself an an alcoholic after I quit drinking.</p>
            </div>
            <div className="mt-8">
              <Image src="/closeup2.jpeg" alt="Colleen in nature" width={500} height={500} className="rounded-lg shadow-xl mx-auto" />
            </div>
          </div>
        </section>

        {/* Radical Responsibility Section */}
        <section className="py-20 bg-gradient-to-br from-[#fff8f7] to-[#bda5a3]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#46474c]">Radical Responsibility</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <Image src="/walking.jpeg" alt="Colleen walking in nature" width={500} height={500} className="rounded-lg shadow-xl mx-auto" />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg md:text-xl mb-4 text-[#46474c]">As children, we&apos;re taught to control our behavior at the expense of our emotions. Keep your chin up. Don&apos;t cry. Smile. When someone asks how you are, say, &quot;I&apos;m fine.&quot; Even if you&apos;re not. Especially when you&apos;re not.</p>
                <p className="text-lg md:text-xl mb-4 text-[#46474c]">And that&apos;s how we come to feel like an empty shell of a broken person. Invisible. Disconnected. Because we&apos;re more concerned with how we appear in the world than how we feel in our bodies. So we use alcohol. Food. Career. Kids. Drugs. Drama. To avoid the feelings in our bodies. And to run ourselves ragged. Because the excuse of not having the energy or time to take care of ourselves is acceptable. Even rewarded.</p>
                <p className="text-lg md:text-xl mb-4 text-[#46474c]">The irony is that ignoring our needs makes them stronger. We become victims of circumstance, passive aggressive communication specialists and beholden to subconscious urges.</p>
                <p className="text-2xl md:text-3xl font-bold text-[#46474c]">[Spoiler Alert] If you are not actively managing your emotional needs, they are managing you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#bda5a3] text-[#fff8f7]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to start your next chapter?</h2>
            <Link href="https://emotionalsobrietycoaching.typeform.com/to/QbFjUKjL" className="bg-[#fff8f7] text-[#46474c] hover:bg-[#46474c] hover:text-[#fff8f7] font-bold py-4 px-8 rounded-full inline-flex items-center transition-all text-xl md:text-2xl">
              Book a Discovery Call
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default AboutPage