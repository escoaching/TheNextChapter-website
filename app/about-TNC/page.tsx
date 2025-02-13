'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, X } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MetaComponent from '../MetaComponent'

const meta = {
  title: "About The Next Chapter | Emotional Sobriety Coaching",
  description: "The next chapter is a program centered around emotional sobriety. Get happy, not sober. Reduce your alcohol consumption by 80%.",
  imageUrl: "https://www.emotionalsobrietycoaching.com/preview.png",
  pageUrl: "https://www.emotionalsobrietycoaching.com/about-TNC"
}

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#fff8f7]">
      <MetaComponent {...meta} />
      <Navbar />

      <main className="pt-20">
        <section className="bg-[#fff8f7] py-20 px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12">
            <Image 
              src="/TNCLOGOGRAY.png" 
              alt="The Next Chapter Logo" 
              width={700} 
              height={700} 
              className="mx-auto transform hover:scale-105 transition-all duration-300" 
            />
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xl md:text-2xl italic mb-4 text-[#46474c]">
                Do you drink more than you should?
              </p>
              <p className="text-xl md:text-2xl italic text-[#46474c]">
                Permanently reduce alcohol consumption by 80 percent so you don&apos;t have to quit.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#f1c4c4] rounded-lg transform rotate-2"></div>
                  <div className="relative w-full aspect-square max-w-[800px] mx-auto">
                    <Image
                      src="/groupCoaching.webp"
                      alt="The Next Chapter"
                      layout="fill"
                      objectFit="contain"
                      priority
                      className="transform hover:scale-105 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#46474c]">
                  Evidence-based, holistic <span className="underline decoration-[#f1c4c4] decoration-4">brain training</span> for professional women.
                </h2>
                <p className="text-2xl md:text-3xl text-[#bda5a3]">
                  Change how you <span className="font-bold">think</span> about alcohol so you can drink (and not drink) like a normal person.
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-[#46474c]">
                  Get Happy. Not Sober.
                </h3>
                <p className="text-xl text-[#46474c]">
                  Escape the all-or-nothing mindset that triggers the habit of over-drinking so you never have to &quot;start over&quot; again!
                </p>
                <p className="text-xl italic text-[#46474c]">
                  &quot;This is literally a boot camp for your brain.&quot;
                </p>
                <div>
                  <Link
                    href="https://emotionalsobrietycoaching.typeform.com/to/QbFjUKjL#source=website"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-md text-[#46474c] bg-[#f1c4c4] hover:bg-[#bda5a3] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Click Here To Apply!
                    <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#ffeae6]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-4xl font-bold mb-12 text-center text-[#46474c]">Would you like to....</h2>
            <div className="space-y-8">
              {[
                {
                  bold: "Feel patient and present with your family in the evenings (instead of resentful)",
                  regular: "...because your own needs are being met."
                },
                {
                  bold: 'Attend social events without obsessing if there will be "enough" to drink',
                  regular: "... because you enjoy drinking non-alcoholic beverages and have a \"less is more\" approach to alcohol."
                },
                {
                  bold: "Feel comfortable in your skin when you're not drinking",
                  regular: "...even when life is overwhelming or friends think you're more fun when you're drunk."
                },
                {
                  bold: "Have no desire to drink when you're stressed",
                  regular: "... because you have better coping skills and your brain no longer associates alcohol with stress relief."
                },
                {
                  bold: 'Enjoy "ME" time without the urge to stay up too late drinking',
                  regular: "...even when you can't sleep."
                },
                {
                  bold: "Feel proud of your integrity because you are who you say you are",
                  regular: "... even when you're alone and no one but you will know or care."
                },
                {
                  bold: "Feel confident in your identity as a powerful woman with a purpose in life",
                  regular: "–without labeling yourself as a drinker OR a non-drinker."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <Check className="flex-shrink-0 w-6 h-6 text-[#f1c4c4] mr-4 mt-1" />
                  <p className="text-lg text-[#46474c]">
                    <span className="font-bold">{item.bold}</span>
                    {item.regular}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#fff8f7]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#f1c4c4] rounded-lg transform -rotate-2"></div>
                  <Image
                    src="/altflowers.jpeg"
                    alt="Woman walking in a field"
                    width={600}
                    height={800}
                    className="relative rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 space-y-8">
                <h2 className="text-3xl font-bold text-[#46474c]">
                  How do you expect to feel truly <i>powerful</i> if you subscribe to the belief that you can&apos;t control yourself around alcohol?
                </h2>
                <div className="bg-[#f1c4c4] text-[#46474c] font-bold py-3 px-6 inline-block rounded-md shadow-md">
                  YOU CAN&apos;T.
                </div>
                <p className="text-xl font-semibold text-[#46474c]">
                  Which is why the <i>biggest mistake</i> you can make when you realize drinking has become a problem is to:
                </p>
                <div className="bg-[#ffeae6] p-6 rounded-lg shadow-md">
                  <ul className="space-y-4">
                    {[
                      "Identify as an alcoholic",
                      "Commit to a lifetime of abstinence",
                      'Believe you are "hard-wired" for addiction'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-4 bg-white p-4 rounded-md">
                        <X className="text-[#f1c4c4] w-6 h-6" />
                        <span className="text-lg text-[#46474c]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xl text-[#46474c]">
                  Alcoholism is not a disease. Over-drinking is a <i>habit</i>. You practiced the art and skill of drinking, because you <i>believed</i>:
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage
