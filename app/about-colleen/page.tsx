'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MetaComponent from '../MetaComponent'

const meta = {
  title: "About Colleen | Emotional Sobriety Coaching",
  description: "The next chapter is a program centered around emotional sobriety. Get happy, not sober. Reduce your alcohol consumption by 80%.",
  imageUrl: "https://www.emotionalsobrietycoaching.com/preview.png",
  pageUrl: "https://www.emotionalsobrietycoaching.com/about-colleen"
}

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#fff8f7]">
      <MetaComponent {...meta} />
      <Navbar />

      <main className="pt-20">
        <section className="py-20 bg-[#fff8f7]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#fff8f7] rounded-lg shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                  <Image 
                    src="/proheadshot.webp" 
                    alt="Colleen Kachmann" 
                    width={400} 
                    height={400} 
                    className="rounded-lg" 
                  />
                </div>
                <div className="md:w-1/2">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#46474c]">Hi, My Name Is Colleen.</h1>
                  <h2 className="text-3xl md:text-4xl mb-8 text-[#bda5a3]">And I&apos;m not an alcoholic.</h2>
                  <p className="text-xl md:text-2xl mb-8 text-[#46474c]">As a high-functioning perfectionist, my goal was to get better at drinking....</p>
                  <p className="text-2xl md:text-3xl font-bold text-[#46474c]">Everything changed the day I decided to get better at thinking.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#ffeae6]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-[#46474c]">Meet Colleen Kachmann</h2>
            <h3 className="text-xl md:text-2xl mb-12 text-center text-[#46474c]">Master life coach and addiction recovery specialist</h3>
            <div className="bg-[#fff8f7] rounded-lg shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                  <Image 
                    src="/2.png" 
                    alt="Colleen Kachmann" 
                    width={500} 
                    height={500} 
                    className="rounded-lg" 
                  />
                </div>
                <div className="md:w-1/2 space-y-6">
                  <p className="text-lg md:text-xl text-[#46474c] font-montserrat">I am here to assist in the evolution of human consciousness. My specific role is to serve as a light on the path to freedom for women struggling with alcohol use disorder.</p>
                  <p className="text-lg md:text-xl text-[#46474c] font-montserrat">Colleen Freeland Kachmann is an intuitive drinking coach and host of the globally top-ranked <i>It&apos;s Not About the Alcohol</i> podcast.</p>
                  <p className="text-lg md:text-xl text-[#46474c] font-montserrat">Colleen works with high achieving, professional women to reduce alcohol consumption by 80 percent. She combines holistic and evidence-based strategies in neurophysiology, nervous system regulation and growth mindset to reprogram your brain so you actually prefer drinking in moderation.</p>
                  <p className="text-lg md:text-xl text-[#46474c] font-montserrat">Colleen is an addiction and recovery-certified master life coach with an MSc in health coaching, a BS in biology and chemistry education and is certified as a women&apos;s functional and integrative professional. She founded Emotional Sobriety Coaching©, an intensive group coaching program for women to master the seven core skills of emotional sobriety.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#46474c]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#fff8f7]">Ready to learn more?</h2>
            <Link 
              href="https://emotionalsobrietycoaching.typeform.com/to/QbFjUKjL#source=website" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-md text-[#46474c] bg-[#f1c4c4] hover:bg-[#bda5a3] transition-all duration-300 shadow-md hover:shadow-lg font-montserrat"
            >
              Book a Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>

        <section className="py-20 bg-[#fff8f7]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#46474c]">It&apos;s Not About the Alcohol</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg md:text-xl text-[#46474c]">When life became limited by my growing dependence on alcohol, I started to fantasize about quitting. I even gave imaginary TED talks about my escape from what felt like a nightmare. The visualizations were hopeful and fleeting. I was exhausted by the 24-hour cycle of detox-to-retox. But as I poured a drink each night, and hoped maybe tomorrow would be different, I longed for change.</p>
              <p className="text-lg md:text-xl text-[#46474c]">One morning, my attempt to outrun a hangover was interrupted. Without consulting my brain, my hand had used my phone to search-and-dial the AA hotline. I guess my body decided it was sick of my shit. Minutes later, standing in the middle of a country road, I was in an online 12-step meeting. Camera off. Heart open. Tears streaming down my face. My resistance faded as I uttered the passwords: &quot;My name is Colleen, and I&apos;m an alcoholic.&quot;</p>
              <p className="text-lg md:text-xl text-[#46474c]">I spent the next year doing all the things expected of sober people–attending meetings, working the steps and following the rules. I internalized the conventional beliefs about alcoholism and recovery and trusted what I was told. Honestly, avoiding alcohol was pretty easy because I felt so much better without it. It was figuring out what &quot;not drinking&quot; meant about me as a person that seemed complicated.</p>
              <p className="text-2xl md:text-3xl font-bold text-[#46474c]">Because it felt ridiculous to refer to myself an an alcoholic after I quit drinking.</p>
            </div>
            <div className="mt-12">
              <Image 
                src="/4.jpg" 
                alt="Colleen in nature" 
                width={500} 
                height={500} 
                className="rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 mx-auto" 
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#fff8f7]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#fff8f7] rounded-lg shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                  <Image 
                    src="/3.png" 
                    alt="Colleen walking in nature" 
                    width={500} 
                    height={500} 
                    className="rounded-lg" 
                  />
                </div>
                <div className="md:w-1/2 space-y-6">
                  <p className="text-lg md:text-xl text-[#46474c]">As children, we&apos;re taught to control our behavior at the expense of our emotions. Keep your chin up. Don&apos;t cry. Smile. When someone asks how you are, say, &quot;I&apos;m fine.&quot; Even if you&apos;re not. Especially when you&apos;re not.</p>
                  <p className="text-lg md:text-xl text-[#46474c]">And that&apos;s how we come to feel like an empty shell of a broken person. Invisible. Disconnected. Because we&apos;re more concerned with how we appear in the world than how we feel in our bodies. So we use alcohol. Food. Career. Kids. Drugs. Drama. To avoid the feelings in our bodies. And to run ourselves ragged. Because the excuse of not having the energy or time to take care of ourselves is acceptable. Even rewarded.</p>
                  <p className="text-lg md:text-xl text-[#46474c]">The irony is that ignoring our needs makes them stronger. We become victims of circumstance, passive aggressive communication specialists and beholden to subconscious urges.</p>
                  <p className="text-2xl md:text-3xl font-bold text-[#46474c]">[Spoiler Alert] If you are not actively managing your emotional needs, they are managing you.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#46474c]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#fff8f7]">Ready to start your next chapter?</h2>
            <Link 
              href="https://emotionalsobrietycoaching.typeform.com/to/QbFjUKjL#source=website" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-md text-[#46474c] bg-[#f1c4c4] hover:bg-[#bda5a3] transition-all duration-300 shadow-md hover:shadow-lg font-montserrat"
            >
              Book a Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default AboutPage