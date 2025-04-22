'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MetaComponent from '../MetaComponent'

const meta = {
  title: "Reduce Your Drinking by 80% | Private Podcast",
  description: "Listen to the private audio training for leads who completed the quiz.",
  imageUrl: "https://www.emotionalsobrietycoaching.com/podcast-preview.jpeg",
  pageUrl: "https://www.emotionalsobrietycoaching.com/private-podcast"
}

const PodcastHero = () => (
  <div className="relative pt-28 md:pt-28 bg-[#fff8f7] pb-2">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-[#46474c] mb-4 font-playfair">Reduce Your Drinking by 80%</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#46474c] mb-8 font-playfair">Private Podcast</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link 
            href="https://open.spotify.com/show/0TqDqfrMHwVVvjtVJEY10C"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 text-lg font-medium rounded-md text-[#46474c] bg-[#f1c4c4] hover:bg-[#bda5a3] transition-all duration-300 shadow-sm hover:shadow-md font-montserrat"
          >
            LISTEN ON SPOTIFY
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </Link>
          <Link 
            href="https://podcasts.apple.com/us/podcast/reduce-your-drinking-by-80/id1806335569"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 text-lg font-medium rounded-md text-[#46474c] bg-[#f1c4c4] hover:bg-[#bda5a3] transition-all duration-300 shadow-sm hover:shadow-md font-montserrat"
          >
            LISTEN ON APPLE PODCASTS
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  </div>
)

const LatestEpisode = () => (
  <div className="bg-white pt-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#46474c] mb-4 font-playfair">Listen Now</h2>
        <div className="mb-4">
          <iframe 
            style={{borderRadius: '12px'}} 
            src="https://open.spotify.com/embed/show/0TqDqfrMHwVVvjtVJEY10C?utm_source=generator" 
            width="100%" 
            height="500"
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="Spotify Embed Player Reduce Your Drinking by 80%"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
)

const PodcastBenefits = () => (
  <div className="bg-[#fff8f7] pt-2 pb-16">
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
            src="/3.png" 
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

export default function PrivatePodcastPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <MetaComponent {...meta} />
      <Navbar />
      <main className="flex-grow">
        <PodcastHero />
        <LatestEpisode />
        <PodcastBenefits />
        <AboutColleen />
      </main>
      <Footer />
    </div>
  )
} 