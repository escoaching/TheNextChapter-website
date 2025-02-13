'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MetaComponent from './MetaComponent'
import Script from 'next/script'

const meta = {
  title: "Emotional Sobriety Coaching",
  description: "The next chapter is a program centered around emotional sobriety. Get happy, not sober. Reduce your alcohol consumption by 80%.",
  imageUrl: "https://www.emotionalsobrietycoaching.com/boardwalk.jpeg",
  pageUrl: "https://www.emotionalsobrietycoaching.com"
}

const Hero = () => (
  <div className="relative h-screen bg-cover bg-center" style={{backgroundImage: "url('/hero.webp')"}}>
    <div className="absolute inset-0 bg-[#46474c] opacity-60"></div>
    <div className="absolute inset-0 flex items-center justify-center md:justify-start md:pl-16 lg:pl-24">
      <div className="text-[#fff8f7] z-10 w-full px-4 md:px-8 text-center md:text-left">
        <h1 className="text-7xl md:text-8xl font-bold mb-4 tracking-tight">Get Happy.</h1>
        <h2 className="text-6xl md:text-7xl font-semibold mb-4 tracking-tight">Not &quot;Sober.&quot;</h2>
        <h3 className="text-5xl md:text-6xl tracking-tight">It&apos;s Not About the Alcohol.</h3>
      </div>
    </div>
  </div>
)

const BecomeUnfuckwithable = () => (
  <div className="bg-[#fff8f7] py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-bold text-[#46474c] mb-12 font-playfair">Become <span className="italic">Unfuckwithable.</span></h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-bold text-[#46474c] mb-6 font-playfair">Are you sick and tired of feeling powerless and stuck?</h3>
          <p className="text-lg md:text-xl text-[#46474c] mb-6 font-montserrat">My free consultation isn&apos;t just a chat—it&apos;s a sliding door moment.</p>
          <p className="text-base md:text-lg text-[#46474c] mb-6">
            We&apos;ll dive into your current situation, create a vision for the future and then discuss how you can bridge the gap between where you are and where you want to be.
          </p>
          <p className="text-base md:text-lg text-[#46474c] mb-6">
            This call is for women (and non-binary individuals) who are interested in coaching.
          </p>
          <p className="text-lg md:text-xl font-semibold text-[#46474c] mb-8">Are you ready to change the trajectory of your life?</p>
          <Link 
            href="https://emotionalsobrietycoaching.typeform.com/to/QbFjUKjL#source=website" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-md text-[#46474c] bg-[#f1c4c4] hover:bg-[#bda5a3] transition-all duration-300 shadow-md hover:shadow-lg font-playfair"
          >
            Book a Discovery Call
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#f1c4c4] rounded-lg transform -rotate-2"></div>
            <Image 
              src="/1.jpg" 
              alt="Book a Discovery Call" 
              width={600} 
              height={600} 
              className="relative rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300" 
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

const EmotionalSobrietyCourse = () => (
  <div className="bg-[#ffeae6] py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#46474c] mb-8 font-playfair">Reduce Your Drinking by 80%</h2>
      <p className="text-lg md:text-xl mb-8 text-[#46474c] font-montserrat">Register now to gain instant access on your phone. No log-in required!</p>
      <Link 
        href="https://app.helloaudio.fm/feed/f9f9f744-6a84-4a6f-bd1d-56ec13f99dc6/signup" 
        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-md text-[#46474c] bg-[#f1c4c4] hover:bg-[#bda5a3] transition-all duration-300 shadow-md hover:shadow-lg font-playfair"
      >
        Get Instant Access
        <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
      </Link>
    </div>
  </div>
)

const NewsletterForm = () => (
  <div className="bg-[#fff8f7] py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="_form_4"></div>
      <Script 
        src="https://emotionalsobrietycoaching.activehosted.com/f/embed.php?id=4" 
        strategy="afterInteractive"
      />
    </div>
  </div>
)

const AlcoholProblemSection = () => (
  <div className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fff8f7]">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#f1c4c4] rounded-lg transform rotate-2"></div>
            <Image 
              src="/boardwalk.jpeg" 
              alt="Boardwalk" 
              width={600} 
              height={400} 
              className="relative rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300" 
            />
          </div>
        </div>
        
        <div className="md:w-1/2">
          <div className="_form_4"></div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#46474c]">Alcohol stopped being the problem when you started wondering if it was.</h2>
          <div className="space-y-6 text-[#46474c]">
            <p className="text-base md:text-lg">The root cause of your brain fog, uncertainty and lack of focus is the emotional disconnect between how you think and what you do.</p>
            <p className="text-base md:text-lg">The problem is not how much you drink. The problem is that you&apos;re ignoring your feelings about how much you drink.</p>
            <p className="text-base md:text-lg">Your body has made a simple request. Please stop drinking.</p>
            <p className="text-base md:text-lg">But your brain thinks it&apos;s complicated. That the answer should be different. And the internal conflict is blowing your emotional circuit breakers.</p>
            <p className="text-base md:text-lg">I can teach you how to stop over-thinking sobriety--you don&apos;t need to call yourself an alcoholic or promise to never drink again.</p>
          </div>
          <div className="mt-8 p-6 bg-[#ffeae6] rounded-lg shadow-md">
            <p className="text-lg md:text-xl font-semibold mb-4 text-[#46474c]">That&apos;s it.</p>
            <ul className="list-none space-y-2 text-base md:text-lg text-[#46474c]">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#f1c4c4] rounded-full mr-2"></span>
                Take a breath.
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#f1c4c4] rounded-full mr-2"></span>
                Allow yourself to feel.
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#f1c4c4] rounded-full mr-2"></span>
                Have self-compassion.
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#f1c4c4] rounded-full mr-2"></span>
                Set boundaries and realistic expectations.
              </li>
            </ul>
            <p className="text-lg md:text-xl font-semibold mt-4 text-[#46474c]">This is an invitation to recover YOU.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)



const EmotionalSobrietySection = () => (
  <div className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ffeae6]">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row-reverse items-center gap-12">
        <div className="md:w-1/2">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#f1c4c4] rounded-lg transform -rotate-2"></div>
            <Image 
              src="/5.jpg" 
              alt="Ocean" 
              width={600} 
              height={400} 
              className="relative rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300" 
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#46474c] font-playfair">Emotional Sobriety</h2>
          <div className="space-y-6 text-[#46474c] font-montserrat">
            <p className="text-base md:text-lg">The problem isn&apos;t alcohol—it&apos;s the weight of constantly questioning yourself. Emotional sobriety happens when you stop fighting reality and start listening to your own intuition. When your thoughts and actions align, drinking becomes a choice, not a struggle.</p>
            <p className="text-base md:text-lg">This isn&apos;t about restriction. It&apos;s about freedom—the kind that comes from knowing you can trust yourself with or without a drink in your hand. When you step out of the cycle of guilt and second-guessing, you reclaim your power. You learn to manage your mind, take care of your body, and move through life with confidence.</p>
            <p className="text-base md:text-lg">You don&apos;t need more willpower. You just need a new way forward.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const AboutColleen = () => (
  <div className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fff8f7]">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#46474c]">Hi, I&apos;m Colleen</h2>
      <div className="flex flex-col md:flex-row items-start gap-12">
        <div className="md:w-1/2 flex flex-col items-center">
          <div className="relative mb-8">
            <div className="absolute -inset-4 bg-[#f1c4c4] rounded-lg transform rotate-2"></div>
            <Image 
              src="/2.png" 
              alt="Colleen" 
              width={500} 
              height={500} 
              className="relative rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300" 
            />
          </div>
          <Link 
            href="/about-colleen" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-md text-[#46474c] bg-[#f1c4c4] hover:bg-[#bda5a3] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            LEARN MORE ABOUT ME
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
        <div className="md:w-1/2">
          <div className="space-y-6 text-[#46474c]">
            <p className="text-base md:text-lg">I am here to assist in the evolution of human consciousness. My specific role is to serve as a light on the path to freedom for women struggling with alcohol use disorder.</p>
            <p className="text-base md:text-lg">Colleen Freeland Kachmann is an intuitive drinking coach and host of the globally top-ranked It&apos;s Not About the Alcohol podcast.</p>
            <p className="text-base md:text-lg">Colleen works with high achieving, professional women to reduce alcohol consumption by 80 percent. She combines holistic and evidence-based strategies in neurophysiology, nervous system regulation and growth mindset to reprogram your brain so you actually prefer drinking in moderation.</p>
            <p className="text-base md:text-lg">Colleen is an addiction and recovery-certified master life coach with an MSc in health coaching, a BS in biology and chemistry education and is certified as a women&apos;s functional and integrative professional. She founded Emotional Sobriety Coaching©, an intensive group coaching program for women to master the seven core skills of emotional sobriety.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const TransformationsGrid = () => (
  <div className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ffeae6]">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#46474c]">TRANSFORMATIONS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {[
          { name: "Dani Truly", image: "/dani.webp" },
          { name: "Diana Gibson", image: "/diana.webp" },
          { name: "Michelle Hobin", image: "/michelle.webp" },
          { name: "Makini Campbell", image: "/makini.webp" },
        ].map((testimonial, index) => (
          <div key={index} className="relative group">
            <div className="absolute -inset-4 bg-[#f1c4c4] rounded-lg transform rotate-1 transition-transform group-hover:rotate-2"></div>
            <Image 
              src={testimonial.image || "/placeholder.svg"} 
              alt={testimonial.name} 
              width={500}
              height={500}
              className="relative rounded-lg shadow-xl transform transition-all duration-300 group-hover:scale-105" 
            />
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link 
          href="/about-TNC" 
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-md text-[#46474c] bg-[#f1c4c4] hover:bg-[#bda5a3] transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Learn More About The Next Chapter
          <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  </div>
)

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fff8f7]">
      <MetaComponent {...meta} />
      <Navbar />
      <main>
        <Hero />
        <BecomeUnfuckwithable />
        <EmotionalSobrietyCourse />
        <NewsletterForm />
        <AlcoholProblemSection />
        <EmotionalSobrietySection />
      
        <AboutColleen />
        <TransformationsGrid />
      </main>
      <Footer />
    </div>
  )
}