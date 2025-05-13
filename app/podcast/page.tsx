'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MetaComponent from '../MetaComponent'

const meta = {
  title: "It's Not About the Alcohol Podcast | Emotional Sobriety Coaching",
  description: "Get happy. Not sober. Emotional Sobriety podcast with Colleen Kachmann. Learn mindset strategies that move you from worry and regret to resilience and confidence.",
  imageUrl: "https://www.emotionalsobrietycoaching.com/podcast-preview.jpeg",
  pageUrl: "https://www.emotionalsobrietycoaching.com/podcast"
}

const PodcastHero = () => (
  <div className="relative pt-28 md:pt-28 bg-[#fff8f7] pb-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-[#46474c] mb-4 font-playfair">It&apos;s Not About the Alcohol Podcast</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#46474c] mb-8 font-playfair">Get happy. Not sober</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link 
            href="https://open.spotify.com/show/5GitagiLVjEfhWuOcdexeS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 text-lg font-medium rounded-md text-[#46474c] bg-[#f1c4c4] hover:bg-[#bda5a3] transition-all duration-300 shadow-sm hover:shadow-md font-montserrat"
          >
            LISTEN ON SPOTIFY
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </Link>
          <Link 
            href="https://overcast.fm/itunes1715949992/its-not-about-the-alcohol" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 text-lg font-medium rounded-md text-[#46474c] bg-[#f1c4c4] hover:bg-[#bda5a3] transition-all duration-300 shadow-sm hover:shadow-md font-montserrat"
          >
            LISTEN ON OVERCAST
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </Link>
          <Link 
            href="https://podcasts.apple.com/podcast/id1654335817" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 text-lg font-medium rounded-md text-[#46474c] bg-[#f1c4c4] hover:bg-[#bda5a3] transition-all duration-300 shadow-sm hover:shadow-md font-montserrat"
          >
            LISTEN ON APPLE PODCASTS
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </Link>
          <Link 
            href="https://www.audible.com/pd/Recover-with-Colleen-Podcast/B0BL5GVF1N" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 text-lg font-medium rounded-md text-[#46474c] bg-[#f1c4c4] hover:bg-[#bda5a3] transition-all duration-300 shadow-sm hover:shadow-md font-montserrat"
          >
            LISTEN ON AUDIBLE
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </Link>
          <Link 
            href="https://castbox.fm/channel/id5214511" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 text-lg font-medium rounded-md text-[#46474c] bg-[#f1c4c4] hover:bg-[#bda5a3] transition-all duration-300 shadow-sm hover:shadow-md font-montserrat"
          >
            LISTEN ON CASTBOX
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  </div>
)

const LatestEpisode = () => (
  <div className="bg-[#fff8f7] py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#46474c] mb-4 font-playfair">Latest Podcast</h2>
        <div className="mb-8">
          <iframe 
            title="Embed Player" 
            src="https://play.libsyn.com/embed/destination/id/3731100/height/612/theme/modern/size/extra-large/thumbnail/yes/custom-color/f1c4c4/video-height/200/playlist-height/200/direction/backward/download/yes/font-color/46474d" 
            height="612" 
            width="100%" 
            scrolling="no" 
            allowFullScreen 
            style={{border: 'none'}}
          ></iframe>
        </div>
      </div>
    </div>
  </div>
)

const Testimonial = () => (
  <div className="bg-[#fff8f7] py-16">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-[#f1c4c4]"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-[#fff8f7] px-4 text-4xl text-[#46474c]">❝</span>
        </div>
      </div>
      <blockquote className="mt-8 text-center">
        <p className="text-xl md:text-2xl font-medium text-[#46474c] italic font-playfair mb-6">
          &quot;I love this. Colleen&apos;s approach to sobriety is like nothing else I&apos;ve ever heard. This podcast is a game-changer. I highly recommend it.&quot;
        </p>
        <footer className="text-lg text-[#46474c] font-montserrat">
          - Katherine
        </footer>
      </blockquote>
    </div>
  </div>
)

const ListenLinks = () => (
  <div className="bg-white py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center gap-6">
        <Link 
          href="https://open.spotify.com/show/5GitagiLVjEfhWuOcdexeS" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-3 text-lg font-medium rounded-md text-[#46474c] bg-[#f1c4c4] hover:bg-[#bda5a3] transition-all duration-300 shadow-sm hover:shadow-md font-montserrat"
        >
          LISTEN ON SPOTIFY
          <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
        </Link>
        <Link 
          href="https://www.audible.com/pd/Recover-with-Colleen-Podcast/B0BL5GVF1N" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-3 text-lg font-medium rounded-md text-[#46474c] bg-[#f1c4c4] hover:bg-[#bda5a3] transition-all duration-300 shadow-sm hover:shadow-md font-montserrat"
        >
          LISTEN ON AUDIBLE
          <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
        </Link>
        <Link 
          href="https://podcasts.apple.com/podcast/id1654335817" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-3 text-lg font-medium rounded-md text-[#46474c] bg-[#f1c4c4] hover:bg-[#bda5a3] transition-all duration-300 shadow-sm hover:shadow-md font-montserrat"
        >
          LISTEN ON APPLE PODCASTS
          <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
        </Link>
        <Link 
          href="https://overcast.fm/itunes1715949992/its-not-about-the-alcohol" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-3 text-lg font-medium rounded-md text-[#46474c] bg-[#f1c4c4] hover:bg-[#bda5a3] transition-all duration-300 shadow-sm hover:shadow-md font-montserrat"
        >
          LISTEN ON OVERCAST
          <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
        </Link>
        <Link 
          href="https://castbox.fm/channel/id5214511" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-3 text-lg font-medium rounded-md text-[#46474c] bg-[#f1c4c4] hover:bg-[#bda5a3] transition-all duration-300 shadow-sm hover:shadow-md font-montserrat"
        >
          LISTEN ON CASTBOX
          <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  </div>
)

const PodcastBenefits = () => (
  <div className="bg-[#fff8f7] py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-[#46474c] mb-12 font-playfair">IF YOU WANT TO...</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <div className="flex items-center mb-4">
            <span className="text-3xl font-bold text-[#f1c4c4] mr-3 font-playfair">01</span>
            <h3 className="text-xl font-semibold text-[#46474c] font-playfair">Build emotional resilience</h3>
          </div>
          <p className="text-[#46474c] font-montserrat">
            Stress isn&apos;t what happens in your life. It&apos;s how you respond. Learn to regulate your nervous system so you&apos;re not reacting from burnout and overwhelm.
          </p>
        </div>
        <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <div className="flex items-center mb-4">
            <span className="text-3xl font-bold text-[#f1c4c4] mr-3 font-playfair">02</span>
            <h3 className="text-xl font-semibold text-[#46474c] font-playfair">Learn mindset hacks</h3>
          </div>
          <p className="text-[#46474c] font-montserrat">
            Awareness is the ability to distinguish between what happens in your mind and what happens in the real world. Identity the limiting beliefs holding you back.
          </p>
        </div>
        <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <div className="flex items-center mb-4">
            <span className="text-3xl font-bold text-[#f1c4c4] mr-3 font-playfair">03</span>
            <h3 className="text-xl font-semibold text-[#46474c] font-playfair">Feel confident in any stage of your journey</h3>
          </div>
          <p className="text-[#46474c] font-montserrat">
            Instead of asking &quot;why&quot; you&apos;re stuck, ask &quot;how&quot; to move forward. &quot;I&apos;ll be happy when...&quot; is a feeling, not a fact.
          </p>
        </div>
      </div>
      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold text-[#46474c] mb-4 font-playfair">You&apos;re in the right place!</h3>
        <p className="text-lg text-[#46474c] max-w-3xl mx-auto font-montserrat">
          Join me for mindset strategies that move you from worry and regret to resilience and confidence.
        </p>
      </div>
    </div>
  </div>
)

const AboutColleen = () => (
  <div className="bg-white py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <Image 
            src="/newimages/8.jpg" 
            alt="Colleen Kachmann" 
            width={600} 
            height={600} 
            className="rounded-lg shadow-md" 
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-[#46474c] mb-6 font-playfair">Meet Your Instructor</h2>
          <h3 className="text-2xl font-semibold text-[#46474c] mb-4 font-playfair">Colleen Kachmann</h3>
          <p className="text-[#46474c] mb-6 font-montserrat">
            Colleen helps women bypass the stigma and drama that society associates with sobriety by focusing on what&apos;s really important—our relationship with ourselves. She combines emotional intelligence, positive psychology and coaching to support women who want to step into their own power and redesign the next chapter of their lives.
          </p>
          <p className="text-[#46474c] font-montserrat">
            Colleen Kachmann is a recovery-certified Master Coach and author of Life Off the Label: A Handbook for Creating Your Own Brand of Health and Happiness. She holds a MSc in health coaching, a BS in education and a women&apos;s functional and integrative medicine professional certificate.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default function PodcastPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MetaComponent {...meta} />
      <Navbar />
      <main className="flex-grow">
        <PodcastHero />
        <LatestEpisode />
        <Testimonial />
        <ListenLinks />
        <PodcastBenefits />
        <AboutColleen />
      </main>
      <Footer />
    </div>
  )
}
