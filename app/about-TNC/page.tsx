'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check, X, ArrowRight, ChevronRight } from 'lucide-react'

const Navbar = () => (
  <nav className="bg-gradient-to-r from-purple-800 to-pink-800 shadow-lg fixed w-full z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20">
        <div className="flex-shrink-0 flex items-center">
          <Image src="/TNCLogo.webp" alt="TNC Logo" width={200} height={80} className="transform hover:scale-105 transition-all" />
        </div>
        <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
          <Link href="/" className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-pink-300 text-sm font-medium transition-all">
            Home
          </Link>
          <Link href="/about" className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-pink-300 text-sm font-medium">
            About
          </Link>
          <Link href="/book" className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-pink-300 text-sm font-medium transition-all">
            Book Discovery Call
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

const Footer = () => (
  <footer className="bg-gradient-to-r from-purple-800 to-pink-800 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <p className="text-lg">Copyright 2024 The Next Chapter</p>
        </div>
        <div className="w-full md:w-1/2">
          <ul className="flex flex-wrap justify-end">
            <li className="mr-6 mb-2"><Link href="/" className="hover:text-pink-300 transition-all">Home</Link></li>
            <li className="mr-6 mb-2"><Link href="/about" className="hover:text-pink-300 transition-all">About</Link></li>
            <li className="mb-2"><Link href="/book" className="hover:text-pink-300 transition-all">Book Discovery Call</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center">
          <Image src="/altflowers.jpeg" alt="Empowered woman" layout="fill" objectFit="cover" className="z-0" />
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-white">
            <h1 className="text-5xl font-bold mb-4 max-w-3xl">Do you drink more than you should? Permanently reduce alcohol consumption by 80 percent so you don&apos;t have to quit.</h1>
            <h2 className="text-2xl mb-8">Evidence-based, holistic brain training for professional women.</h2>
            <Link href="/apply" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-all">
              Click Here to Apply!
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </section>

        {/* Body Section 1 */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-8 text-center text-purple-800">Get Happy. Not Sober.</h2>
            <p className="text-xl mb-8 text-center max-w-3xl mx-auto">Escape the all-or-nothing mindset that triggers the habit of over-drinking so you never have to &apos;start over&apos; again!</p>
            <blockquote className="text-2xl italic text-center mb-8">&quot;This is literally a boot camp for your brain.&quot;</blockquote>
            <div className="text-center">
              <Link href="/apply" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-all">
                Click Here To Apply!
                <ArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Would You Like To... Section */}
        <section className="py-20 bg-gradient-to-br from-purple-100 to-pink-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center text-purple-800">Would You Like To...</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Feel patient and present with your family in the evenings (instead of resentful)...because your own needs are being met.",
                "Attend social events without obsessing if there will be 'enough' to drink...",
                "Feel comfortable in your skin when you're not drinking...",
                "Have no desire to drink when you're stressed...",
                "Enjoy 'ME' time without the urge to stay up too late drinking...",
                "Feel proud of your integrity because you are who you say you are...",
                "Feel confident in your identity as a powerful woman with a purpose in life…"
              ].map((item, index) => (
                <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-md">
                  <Check className="flex-shrink-0 w-6 h-6 text-green-500 mr-4 mt-1" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Myth Busting Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center text-purple-800">Biggest Mistakes When Realizing Drinking is a Problem</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                "Identifying as an alcoholic.",
                "Committing to a lifetime of abstinence.",
                "Believing you are 'hard-wired' for addiction."
              ].map((item, index) => (
                <div key={index} className="flex items-start bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg shadow-md">
                  <X className="flex-shrink-0 w-6 h-6 text-red-500 mr-4 mt-1" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-xl mb-8 text-center">Alcoholism is not a disease. Over-drinking is a habit. You practiced the art and skill of drinking, because you believed...</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Alcohol is a reward/treat/social lubricant.",
                "Alcohol helps you relax and get to sleep.",
                "Staying sober is hard, boring and/or pointless."
              ].map((item, index) => (
                <div key={index} className="flex items-start bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg shadow-md">
                  <X className="flex-shrink-0 w-6 h-6 text-red-500 mr-4 mt-1" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem Statement Section */}
        <section className="py-20 bg-gradient-to-br from-purple-100 to-pink-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">Alcohol is not the problem.</h2>
            <p className="text-xl mb-8 text-center max-w-3xl mx-auto">Your beliefs about alcohol (and what it can do for you) are the problem. And the only way to permanently change how you drink is to change your beliefs.</p>
            <p className="text-2xl font-bold text-center text-purple-600">Changing your behavior is not the same thing as changing your mind.</p>
          </div>
        </section>

        {/* Mid-Page CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link href="/apply" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-all">
              Click HERE to apply
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </section>

        {/* How This Program is Different Section */}
        <section className="py-20 bg-gradient-to-br from-purple-100 to-pink-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">How This Program is Different…</h2>
            <p className="text-xl mb-8 text-center max-w-3xl mx-auto">Science shows that people who believe that changing their drinking habits will lead to greater happiness are easily and permanently able to self-correct.</p>
            <h3 className="text-2xl font-bold mb-8 text-center">Do You Want to Be Sober or Happy?</h3>
            <p className="text-xl mb-8 text-center">Master the 8 core principles of the Accelerated Recovery Process© when you join The Next Chapter.</p>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                "Awareness",
                "Body",
                "Coaching & Community",
                "Dopamine Regulation",
                "Emotional Sobriety",
                "Fixed to Growth Mindset",
                "Radical Honesty",
                "Identity"
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <ChevronRight className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                  <p className="text-lg font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center text-purple-800">Check Out What Our Past Graduates Are Saying About TNC</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Colleen has blown my mind...",
                "I can't believe that I'm really no longer worried about alcohol...",
                "I now understand that my drinking problem had nothing to do with alcohol...",
                "I've found my people and my tribe..."
              ].map((quote, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg shadow-md">
                  <p className="text-lg italic mb-4">{quote}</p>
                  <p className="text-right text-purple-600 font-semibold">- TNC Graduate</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* End CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-8">Escape the insanity and live with purpose.</h2>
            <Link href="/apply" className="bg-white text-purple-700 hover:bg-purple-100 font-bold py-3 px-6 rounded-full inline-flex items-center transition-all">
              Click HERE to apply
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