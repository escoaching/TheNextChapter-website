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
  <div className="relative min-h-screen flex flex-col md:flex-row">
    <div className="w-full md:w-1/2 flex items-center justify-start px-6 md:pl-16 lg:pl-24 py-24 md:py-0">
      <div className="text-[#46474c] z-10 w-full max-w-[600px]">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight pt-10 md:pt-0">Get Happy.</h1>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 tracking-tight">Not &quot;Sober.&quot;</h2>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10">It&apos;s Not About<br className="md:hidden" /> the Alcohol.</h3>
        <Link 
          href="https://emotionalsobrietycoaching.typeform.com/to/QbFjUKjL#source=website" 
          className="inline-flex items-center justify-center px-6 py-4 text-lg md:text-xl font-bold rounded-md text-[#46474c] bg-[#f1c4c4] hover:bg-[#bda5a3] transition-all duration-300 shadow-md hover:shadow-lg font-montserrat"
        >
          Book a Free Discovery Call
          <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    </div>
    <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative">
      <Image 
        src="/newimages/3.jpg" 
        alt="Hero image" 
        fill
        className="object-cover md:object-right"
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  </div>
)

const BecomeUnfuckwithable = () => (
  <div className="bg-[#f9f5f2] py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#f9f5f2] rounded-lg shadow-xl p-8 md:p-12">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <Image 
              src="/newimages/7.jpg" 
              alt="Book a Discovery Call" 
              width={600} 
              height={600} 
              className="rounded-lg w-full" 
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-[#46474c] mb-12 font-playfair">Become <span className="italic">Unfuckwithable.</span></h2>
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
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-md text-[#46474c] bg-[#f1c4c4] hover:bg-[#bda5a3] transition-all duration-300 shadow-md hover:shadow-lg font-montserrat"
            >
              Book a Discovery Call
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const EmotionalSobrietyCourse = () => (
  <div className="bg-[#ffeae6] py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#f9f5f2] rounded-lg shadow-xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#46474c] mb-4 font-playfair">Get Happy. Not Sober.</h2>
          <h3 className="text-xl md:text-2xl font-bold text-[#46474c] mb-8 font-playfair">FREE PRIVATE PODCAST TRAINING</h3>
          <div className="space-y-6 mb-8">
            <p className="text-lg md:text-xl text-[#46474c] font-montserrat">
              You&apos;re about to gain mind-blowing insight into why controlling your drinking feels so hard—and how easy real change can be with the right tools.
            </p>
            <p className="text-lg md:text-xl text-[#46474c] font-montserrat">
              My approach is for high-achieving, coachable women who are ready to take full ownership of their mental and emotional well-being.
            </p>
            <p className="text-lg md:text-xl text-[#46474c] font-montserrat">
              Drinking 80% less is a natural side effect of feeling more powerful, peaceful, and happy.
            </p>
          </div>
          <Link 
            href="https://app.helloaudio.fm/feed/f9f9f744-6a84-4a6f-bd1d-56ec13f99dc6/signup" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-md text-[#46474c] bg-[#f1c4c4] hover:bg-[#bda5a3] transition-all duration-300 shadow-md hover:shadow-lg font-playfair"
          >
            Get my free private podcast and reduce your drinking by 80% 
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  </div>
)

const NewsletterForm = () => (
  <div className="bg-[#f9f5f2] py-20">
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
  <div className="bg-[#f9f5f2] py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#f9f5f2] rounded-lg shadow-xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image 
              src="/newimages/9.jpg" 
              alt="Boardwalk" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300" 
            />
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
  </div>
)

const EmotionalSobrietySection = () => (
  <div className="bg-[#ffeae6] py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#f9f5f2] rounded-lg shadow-xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <Image 
              src="/newimages/10.png" 
              alt="Ocean" 
              width={600} 
              height={400} 
              className="rounded-lg" 
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#46474c] mb-4 font-playfair">Emotional Sobriety</h2>
            <div className="space-y-6">
              <p className="text-lg text-[#46474c] font-montserrat">
                The problem isn&apos;t alcohol—it&apos;s the weight of constantly questioning yourself. Emotional sobriety happens when you stop fighting reality and start listening to your own intuition. When your thoughts and actions align, drinking becomes a choice, not a struggle.
              </p>
              <p className="text-lg text-[#46474c] font-montserrat">
                This isn&apos;t about restriction. It&apos;s about freedom—the kind that comes from knowing you can trust yourself with or without a drink in your hand. When you step out of the cycle of guilt and second-guessing, you reclaim your power. You learn to manage your mind, take care of your body, and move through life with confidence.
              </p>
              <p className="text-lg text-[#46474c] font-montserrat">
                You don&apos;t need more willpower. You just need a new way forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
/* 
const ManifestationRetreat = () => (
  <div className="bg-[#fff8f7] py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#fff8f7] rounded-lg shadow-xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image 
              src="/retreat.png" 
              alt="Emotional Sobriety Retreat" 
              width={800} 
              height={800} 
              className="rounded-lg" 
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-xl text-[#46474c] mb-4 font-playfair italic">Take Your Transformation Offline ✨</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#46474c] mb-6 font-playfair-display">Join Me for a Life-Changing In-Person Experience</h2>
            <div className="space-y-6">
              <p className="text-lg text-[#46474c] font-montserrat">
                While the internet is a powerful tool for growth and connection, true transformation happens in person. There&apos;s nothing like stepping into an immersive space, surrounded by like-minded women, where deep healing and manifestation come to life.
              </p>
              <p className="text-lg text-[#46474c] font-montserrat">
                At the Manifestation Retreat, we&apos;re creating something beyond just a getaway—it&apos;s a reset. A space to shift your energy, rewrite your story, and embody the reality you know you&apos;re meant for.
              </p>
              <p className="text-lg text-[#46474c] font-montserrat">
                From powerful workshops to soul-nourishing experiences, this retreat is where breakthroughs happen face to face. Are you ready to step into the next version of you?
              </p>
            </div>
            <div className="mt-8">
              <Link 
                href="https://pages.emotionalsobrietycoaching.com/Manifestation-Retreat?test=true" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-md text-[#46474c] bg-[#f1c4c4] hover:bg-[#bda5a3] transition-all duration-300 shadow-md hover:shadow-lg font-montserrat"
              >
                LEARN MORE
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
) */

const AboutColleen = () => (
  <div className="bg-[#f9f5f2] py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#f9f5f2] rounded-lg shadow-xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image 
              src="/newimages/6.jpg" 
              alt="Colleen" 
              width={500} 
              height={500} 
              className="rounded-lg" 
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#46474c] mb-4 font-playfair">Hi, I&apos;m Colleen</h2>
            <div className="space-y-6">
              <p className="text-lg text-[#46474c] font-montserrat">
                I am here to assist in the evolution of human consciousness. My specific role is to serve as a light on the path to freedom for women struggling with alcohol use disorder.
              </p>
              <p className="text-lg text-[#46474c] font-montserrat">
                Colleen Freeland Kachmann is an intuitive drinking coach and host of the globally top-ranked <i>It&apos;s Not About the Alcohol</i> podcast.
              </p>
              <p className="text-lg text-[#46474c] font-montserrat">
                Colleen works with high achieving, professional women to reduce alcohol consumption by 80 percent. She combines holistic and evidence-based strategies in neurophysiology, nervous system regulation and growth mindset to reprogram your brain so you actually prefer drinking in moderation.
              </p>
              <p className="text-lg text-[#46474c] font-montserrat">
                Colleen is an addiction and recovery-certified master life coach with an MSc in health coaching, a BS in biology and chemistry education and is certified as a women&apos;s functional and integrative professional. She founded Emotional Sobriety Coaching©, an intensive group coaching program for women to master the seven core skills of emotional sobriety.
              </p>
            </div>
            <Link 
              href="/about-colleen" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-md text-[#46474c] bg-[#f1c4c4] hover:bg-[#bda5a3] transition-all duration-300 shadow-md hover:shadow-lg font-montserrat"
            >
              LEARN MORE ABOUT ME
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </Link>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[
          { name: "Dani Truly", image: "/dani.webp" },
          { name: "Diana Gibson", image: "/diana.webp" },
          { name: "Michelle Hobin", image: "/michelle.webp" },
          { name: "Makini Campbell", image: "/makini.webp" },
        ].map((testimonial, index) => (
          <div key={index} className="flex justify-center">
            <Image 
              src={testimonial.image} 
              alt={testimonial.name} 
              width={500}
              height={500}
              className="rounded-lg shadow-xl" 
            />
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f9f5f2]">
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