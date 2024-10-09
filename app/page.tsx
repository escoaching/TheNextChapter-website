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
          <Link href="/about-TNC" className="text-[#fff8f7] inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#bda5a3] text-sm font-medium transition-all">
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

const Hero = () => (
  <div className="relative h-screen bg-cover bg-center" style={{backgroundImage: "url('/hero.webp')"}}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="absolute top-1/3 left-10 text-[#fff8f7] z-10 max-w-lg">
      <h1 className="text-6xl font-bold mb-4">Get Happy.</h1>
      <h2 className="text-5xl font-semibold mb-4">Not &quot;Sober.&quot;</h2>
      <h3 className="text-4xl">It&apos;s Not About the Alcohol.</h3>
    </div>
  </div>
)

const BecomeUnfuckwithable = () => (
  <div className="bg-gradient-to-r from-[#fff8f7] to-[#bda5a3] py-16">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-bold text-[#46474c] mb-12">Become <span className="italic">Unfuckwithable.</span></h2>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-3xl font-bold text-[#46474c] mb-4">Are you sick and tired of feeling powerless and stuck?</h3>
          <p className="text-xl text-[#46474c] mb-6">My free consultation isn&apos;t just a chat—it&apos;s a sliding door moment.</p>
          <p className="text-[#46474c] mb-6">
            We&apos;ll dive into your current situation, create a vision for the future and then discuss how you can bridge the gap between where you are and where you want to be.
          </p>
          <p className="text-[#46474c] mb-6">
            This call is for women (and non-binary individuals) who are interested in coaching.
          </p>
          <p className="text-xl font-semibold text-[#46474c] mb-6">Are you ready to change the trajectory of your life?</p>
          <Link href="/book" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#fff8f7] bg-[#bda5a3] hover:bg-[#46474c] transition-all">
            BOOK A DISCOVERY CALL WITH COLLEEN NOW!
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <Image src="/book.webp" alt="Book a Discovery Call" width={500} height={500} className="rounded-lg shadow-xl" />
        </div>
      </div>
    </div>
  </div>
)

const EmotionalSobrietyCourse = () => (
  <div className="bg-gradient-to-r from-[#fff8f7] to-[#bda5a3] py-16">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-bold text-[#46474c] mb-8">Get my Foundations of Emotional Sobriety Audio Course Absolutely FREE!</h2>
      <p className="text-xl mb-8 text-[#46474c]">Register now to gain instant access on your phone. No log-in required!</p>
      <h3 className="text-2xl font-semibold mb-4 text-[#46474c]">What is emotional sobriety?</h3>
      <p className="text-lg mb-8 text-[#46474c]">When you&apos;re no longer intoxicated by your own bullshit--your own or anyone else&apos;s.</p>
      <p className="text-lg mb-8 text-[#46474c]">&quot;Stuck&quot; is a feeling, not a fact. Stop waiting for permission, approval or life circumstances to improve so that you can feel powerful.</p>
      <p className="text-lg mb-8 text-[#46474c]">Learn how to clear the emotional obstacles so you can be powerful NOW.</p>
      <Link href="/Foundations-of-Emotional-Sobriety" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#fff8f7] bg-[#bda5a3] hover:bg-[#46474c] transition-all">
        Click here for instant access to my Foundations of Emotional Sobriety course
        <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
      </Link>
    </div>
  </div>
)

const AlcoholProblemSection = () => (
  <div className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fff8f7]">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <Image src="/boardwalk.jpeg" alt="Boardwalk" width={600} height={400} className="rounded-lg shadow-xl" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-8 text-[#46474c]">Alcohol stopped being the problem when you started wondering if it was.</h2>
          <p className="text-lg mb-6 text-[#46474c]">The root cause of your brain fog, uncertainty and lack of focus is the emotional disconnect between how you think and what you do.</p>
          <p className="text-lg mb-6 text-[#46474c]">The problem is not how much you drink. The problem is that you&apos;re ignoring your feelings about how much you drink.</p>
          <p className="text-lg mb-6 text-[#46474c]">Your body has made a simple request. Please stop drinking.</p>
          <p className="text-lg mb-6 text-[#46474c]">But your brain thinks it&apos;s complicated. That the answer should be different. And the internal conflict is blowing your emotional circuit breakers.</p>
          <p className="text-lg mb-6 text-[#46474c]">I can teach you how to stop over-thinking sobriety--you don&apos;t need to call yourself an alcoholic or promise to never drink again.</p>
          <p className="text-lg mb-6 text-[#46474c]">This isn&apos;t about alcohol. This is about your ability to manage your mind and take care of your body.</p>
          <p className="text-lg mb-6 text-[#46474c]">Emotional sobriety is when you deal with life as is instead of how you think it should be.</p>
          <p className="text-lg mb-6 text-[#46474c]">You just need to learn how to respect your own intuition. So you feel safe with yourself--with or without a drink in your hand.</p>
          <div className="mt-8">
            <p className="text-xl font-semibold mb-2 text-[#46474c]">That&apos;s it.</p>
            <ul className="list-none text-lg mb-4 text-[#46474c]">
              <li>Take a breath.</li>
              <li>Allow yourself to feel.</li>
              <li>Have self-compassion.</li>
              <li>Set boundaries and realistic expectations.</li>
            </ul>
            <p className="text-xl font-semibold text-[#46474c]">This is an invitation to recover YOU.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const EmotionalSobrietySection = () => (
  <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row-reverse items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
          <Image src="/ocean.webp" alt="Ocean" width={600} height={400} className="rounded-lg shadow-xl" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-8 text-[#46474c]">Emotional Sobriety</h2>
          <p className="text-lg mb-6 text-[#46474c]">This isn&apos;t about alcohol. This is about your ability to manage your mind and take care of your body.</p>
          <p className="text-lg mb-6 text-[#46474c]">Emotional sobriety is when you deal with life as is instead of how you think it should be.</p>
          <p className="text-lg mb-6 text-[#46474c]">You just need to learn how to respect your own intuition. So you feel safe with yourself--with or without a drink in your hand.</p>
          <div className="text-center mt-8">
            <p className="text-xl font-semibold mb-2 text-[#46474c]">That&apos;s it.</p>
            <ul className="list-none text-lg text-[#46474c]">
              <li>Take a breath.</li>
              <li>Allow yourself to feel.</li>
              <li>Have self-compassion.</li>
              <li>Set boundaries and realistic expectations.</li>
            </ul>
            <p className="text-xl font-semibold mt-4 text-[#46474c]">This is an invitation to recover YOU.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const FreeMasterclass = () => (
  <div className="bg-gradient-to-r from-[#fff8f7] to-[#bda5a3] py-16">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-bold mb-8 text-[#46474c]">IT&apos;S TIME TO BREAK THROUGH THE FEAR, CONFUSION & DOUBT THAT&apos;S BEEN HOLDING YOU BACK SO THAT YOU CAN FINALLY...</h2>
      <h3 className="text-5xl font-bold mb-8 text-[#46474c]">Get Happy. Not Sober.</h3>
      <h4 className="text-3xl font-semibold mb-8 text-[#bda5a3]">FREE MASTERCLASS TRAINING</h4>
      <p className="text-xl mb-8 text-[#46474c]">Learn the 8 core principles of the Accelerated Recovery Process© so you can break your emotional attachment to alcohol. Because happy people don&apos;t drink themselves into a stupor. When you feel like a normal person, you can drink (and not drink) like a normal person.</p>
      <Link href="/masterclass" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#fff8f7] bg-[#bda5a3] hover:bg-[#46474c] transition-all">
        GET INSTANT ACCESS NOW
        <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
      </Link>
    </div>
  </div>
)

const AboutColleen = () => (
  <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fff8f7] to-[#bda5a3]">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center text-[#46474c]">Hi, I&apos;m Colleen</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <Image src="/closeup.webp" alt="Colleen" width={400} height={400} className="rounded-lg shadow-xl" />
        </div>
        <div className="md:w-1/2">
          <p className="text-lg mb-4 text-[#46474c]">I am a recovery-certified Master Coach, host of the globally ranked It&apos;s Not About the Alcohol podcast, and author of Life Off the Label: A Handbook for Creating Your Own Brand  of Health and Happiness.</p>
          <p className="text-lg mb-4 text-[#46474c]">I utilize holistic, evidence-based strategies rooted in neurophysiology and growth mindset to assist women in overcoming over-drinking without relying on AA or complete abstinence from alcohol. My approach focuses on reconnecting individuals with their intuition and personal power.</p>
          <p className="text-lg mb-4 text-[#46474c]">I hold a MSc in health coaching, a BS in biology and chemistry education, and certification as a women&apos;s functional and integrative medicine professional.</p>
          <Link href="/about-colleen" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#fff8f7] bg-[#bda5a3] hover:bg-[#46474c] transition-all">
            LEARN MORE ABOUT ME
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  </div>
)

const TransformationsGrid = () => (
  <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fff8f7] to-[#bda5a3]">
    <h2 className="text-4xl font-bold text-center mb-12 text-[#46474c]">TRANSFORMATIONS</h2>
    <div className="grid grid-cols-2 gap-8">
      {[
        { name: "Dani Truly", image: "/dani.webp" },
        { name: "Diana Gibson", image: "/diana.webp" },
        { name: "Michelle Hobin", image: "/michelle.webp" },
        { name: "Makini Campbell", image: "/makini.webp" },
      ].map((testimonial, index) => (
        <div key={index} className={`relative ${index === 4 ? 'col-span-2' : ''}`}>
          <div className={`${index === 4 ? 'max-w-[500px] mx-auto' : ''}`}>
            <Image 
              src={testimonial.image} 
              alt={testimonial.name} 
              width={500}
              height={500}
              layout="responsive"
              objectFit="cover" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
)

const Footer = () => (
  <footer className="bg-[#46474c] text-[#fff8f7] py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <p className="text-lg">Copyright 2024 Recover With Colleen</p>
        </div>
        <div className="w-full md:w-1/2">
          <ul className="flex flex-wrap justify-end">
            <li className="mr-6 mb-2"><Link href="/" className="hover:text-[#bda5a3] transition-all">Home</Link></li>
            <li className="mr-6 mb-2"><Link href="/about-TNC" className="hover:text-[#bda5a3] transition-all">About</Link></li>
            <li className="mb-2"><Link href="/book" className="hover:text-[#bda5a3] transition-all">Book Discovery Call</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BecomeUnfuckwithable />
      <EmotionalSobrietyCourse />
      <AlcoholProblemSection />
      <EmotionalSobrietySection />
      <FreeMasterclass />
      <AboutColleen />
      <TransformationsGrid />
      <Footer />
    </div>
  )
}