'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const Navbar = () => (
  <nav className="bg-[#46474c] shadow-lg fixed w-full z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20">
        <div className="flex-shrink-0 flex items-center">
          <Image src="/TNCLogo.webp" alt="TNC Logo" width={200} height={80} className="transform hover:scale-105 transition-all" />
        </div>
        <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
          <Link href="/" className="text-[#fff8f7] inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#bda5a3] text-sm font-medium transition-all">
            Home
          </Link>
          <Link href="/about" className="text-[#fff8f7] inline-flex items-center px-1 pt-1 border-b-2 border-[#bda5a3] text-sm font-medium">
            About
          </Link>
          <Link href="/book" className="text-[#fff8f7] inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#bda5a3] text-sm font-medium transition-all">
            Book Discovery Call
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

const Footer = () => (
  <footer className="bg-[#46474c] text-[#fff8f7] py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <p className="text-lg">Copyright 2024 The Next Chapter</p>
        </div>
        <div className="w-full md:w-1/2">
          <ul className="flex flex-wrap justify-end">
            <li className="mr-6 mb-2"><Link href="/" className="hover:text-[#bda5a3] transition-all">Home</Link></li>
            <li className="mr-6 mb-2"><Link href="/about" className="hover:text-[#bda5a3] transition-all">About</Link></li>
            <li className="mb-2"><Link href="/book" className="hover:text-[#bda5a3] transition-all">Book Discovery Call</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff8f7] to-[#bda5a3]">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h1 className="text-5xl font-bold mb-4 text-[#46474c]">Hi, My Name Is Colleen.</h1>
                <h2 className="text-3xl mb-6 text-[#bda5a3]">And I&apos;m not an alcoholic.</h2>
                <p className="text-xl mb-8 text-[#46474c]">As a high-functioning perfectionist, my goal was to get better at drinking....</p>
                <p className="text-2xl font-bold text-[#46474c]">Everything changed the day I decided to get better at thinking.</p>
              </div>
              <div className="md:w-1/2">
                <Image src="/proheadshot.webp" alt="Colleen Kachmann" width={400} height={400} className="rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* About Colleen Section */}
        <section className="py-20 bg-gradient-to-br from-[#fff8f7] to-[#bda5a3]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-8 text-center text-[#46474c]">Colleen Kachmann</h2>
            <h3 className="text-2xl mb-8 text-center text-[#bda5a3]">Master life coach and addiction recovery specialist</h3>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <Image src="/closeup.webp" alt="Colleen Kachmann" width={500} height={500} className="rounded-lg shadow-xl" />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg mb-4 text-[#46474c]">Colleen Kachmann is a recovery-certified Master Coach, host of the globally ranked It&apos;s Not About the Alcohol podcast, and author of Life Off the Label: A Handbook for Creating Your Own Brand of Health and Happiness.</p>
                <p className="text-lg mb-4 text-[#46474c]">Colleen uses holistic, evidence-based strategies in neurophysiology and growth mindset to help women stop over-drinking without going to AA or giving up alcohol completely by reconnecting with their intuition and personal power.</p>
                <p className="text-lg mb-4 text-[#46474c]">Education: Colleen holds a MSc in health coaching, a BS in biology and chemistry education and is certified as a women&apos;s functional and integrative medicine professional.</p>
              </div>
            </div>
          </div>
        </section>

        {/* It's Not About the Alcohol Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-8 text-[#46474c]">It&apos;s Not About the Alcohol</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-4 text-[#46474c]">When life became limited by my growing dependence on alcohol, I started to fantasize about quitting. I even gave imaginary TED talks about my escape from what felt like a nightmare. The visualizations were hopeful and fleeting. I was exhausted by the 24-hour cycle of detox-to-retox. But as I poured a drink each night, and hoped maybe tomorrow would be different, I longed for change.</p>
              <p className="text-lg mb-4 text-[#46474c]">One morning, my attempt to outrun a hangover was interrupted. Without consulting my brain, my hand had used my phone to search-and-dial the AA hotline. I guess my body decided it was sick of my shit. Minutes later, standing in the middle of a country road, I was in an online 12-step meeting. Camera off. Heart open. Tears streaming down my face. My resistance faded as I uttered the passwords: &quot;My name is Colleen, and I&apos;m an alcoholic.&quot;</p>
              <p className="text-lg mb-4 text-[#46474c]">I spent the next year doing all the things expected of sober people–attending meetings, working the steps and following the rules. I internalized the conventional beliefs about alcoholism and recovery and trusted what I was told. Honestly, avoiding alcohol was pretty easy because I felt so much better without it. It was figuring out what &quot;not drinking&quot; meant about me as a person that seemed complicated.</p>
              <p className="text-lg font-bold text-[#46474c]">Because it felt ridiculous to refer to myself an an alcoholic after I quit drinking.</p>
            </div>
            <div className="mt-8">
              <Image src="/closeup2.jpeg" alt="Colleen in nature" width={500} height={500} className="rounded-lg shadow-xl mx-auto" />
            </div>
          </div>
        </section>

        {/* Radical Responsibility Section */}
        <section className="py-20 bg-gradient-to-br from-[#fff8f7] to-[#bda5a3]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-8 text-center text-[#46474c]">Radical Responsibility</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <Image src="/walking.jpeg" alt="Colleen walking in nature" width={500} height={500} className="rounded-lg shadow-xl" />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg mb-4 text-[#46474c]">As children, we&apos;re taught to control our behavior at the expense of our emotions. Keep your chin up. Don&apos;t cry. Smile. When someone asks how you are, say, &quot;I&apos;m fine.&quot; Even if you&apos;re not. Especially when you&apos;re not.</p>
                <p className="text-lg mb-4 text-[#46474c]">And that&apos;s how we come to feel like an empty shell of a broken person. Invisible. Disconnected. Because we&apos;re more concerned with how we appear in the world than how we feel in our bodies. So we use alcohol. Food. Career. Kids. Drugs. Drama. To avoid the feelings in our bodies. And to run ourselves ragged. Because the excuse of not having the energy or time to take care of ourselves is acceptable. Even rewarded.</p>
                <p className="text-lg mb-4 text-[#46474c]">The irony is that ignoring our needs makes them stronger. We become victims of circumstance, passive aggressive communication specialists and beholden to subconscious urges.</p>
                <p className="text-lg font-bold text-[#46474c]">[Spoiler Alert] If you are not actively managing your emotional needs, they are managing you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#bda5a3] text-[#fff8f7]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to start your next chapter?</h2>
            <Link href="/book" className="bg-[#fff8f7] text-[#46474c] hover:bg-[#46474c] hover:text-[#fff8f7] font-bold py-3 px-6 rounded-full inline-flex items-center transition-all">
              Book a Discovery Call
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default AboutPage