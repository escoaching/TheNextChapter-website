'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, X, ChevronRight} from 'lucide-react'

const Navbar = () => (
  <nav className="bg-[#46474c] shadow-lg fixed w-full z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20">
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image src="/TNCLogo.webp" alt="TNC Logo" width={200} height={80} className="transform hover:scale-105 transition-all" />
          </Link>
        </div>
        <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
          <Link href="/" className="text-[#fff8f7] inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#bda5a3] text-sm font-medium transition-all">
            Home
          </Link>
          <Link href="https://emotionalsobrietycoaching.typeform.com/to/QbFjUKjL" className="text-[#fff8f7] inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#bda5a3] text-sm font-medium transition-all">
            Book Discovery Call
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

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

      <main className="pt-5"> {/* Add padding-top here */}
        {/* Hero Section */}
        <section className="bg-[#fdf3ef] py-16 px-4 md:px-8 lg:px-16"> 
          <div className="max-w-7xl mx-auto">
            <p className="text-xl md:text-2xl text-center italic mb-2">
              Do you drink more than you should?
            </p>
            <p className="text-xl md:text-2xl text-center italic ">
              Permanently reduce alcohol consumption by 80 percent so you don&apos;t have to quit.
            </p>
          
            <div className="flex flex-col md:flex-row items-center justify-between "> {/* Added mt-4 */}
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="relative w-full aspect-square max-w-[800px] mx-auto">
                  <Image
                    src="/groupCoaching.webp"
                    alt="The Next Chapter"
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-8 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
                  Evidence-based, holistic <span className="underline">brain training</span> for professional women.
                </h2>
                <p className="text-2xl md:text-3xl text-[#ff6b6b] text-center md:text-left">
                  Change how you <span className="font-bold">think</span> about alcohol so you can drink (and not drink) like a normal person.
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-center md:text-left">
                  Get Happy. Not Sober.
                </h3>
                <p className="text-xl text-center md:text-left">
                  Escape the all-or-nothing mindset that triggers the habit of over-drinking so you never have to &quot;start over&quot; again!
                </p>
                <p className="text-xl italic text-center md:text-left">
                  &quot;This is literally a boot camp for your brain.&quot;
                </p>
                <div className="text-center md:text-left">
                  <Link
                    href="https://emotionalsobrietycoaching.typeform.com/to/QbFjUKjL"
                    className="bg-black text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-gray-800 transition-colors inline-block"
                  >
                    Click Here To Apply!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

 {/* Would You Like To... Section */}
 <section className="py-20 bg-[#fde8e4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-4xl font-bold mb-12 text-center text-black">Would you like to....</h2>
            <div className="space-y-6">
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
                <div key={index} className="flex items-start">
                  <Check className="flex-shrink-0 w-6 h-6 text-black mr-4 mt-1" />
                  <p className="text-lg text-black">
                    <span className="font-bold">{item.bold}</span>
                    {item.regular}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

     
        {/* Myth Busting Section */}
        <section className="py-20 bg-[#fff8f7]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12">
              <div className="lg:w-1/2">
                <Image
                  src="/altflowers.jpeg"
                  alt="Woman walking in a field"
                  width={600}
                  height={800}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-[#46474c]">
                  How do you expect to feel truly <i>powerful</i> if you subscribe to the belief that you can&apos;t control yourself around alcohol?
                </h2>
                <div className="bg-[#e88a8a] text-white font-bold py-2 px-4 inline-block">
                  YOU CAN&apos;T.
                </div>
                <p className="text-xl font-semibold text-[#46474c]">
                  Which is why the <i>biggest mistake</i> you can make when you realize drinking has become a problem is to:
                </p>
                <ul className="space-y-2">
                  {[
                    "Identify as an alcoholic",
                    "Commit to a lifetime of abstinence",
                    'Believe you are "hard-wired" for addiction'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <X className="text-[#e88a8a] w-6 h-6" />
                      <span className="text-lg text-[#46474c]">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xl text-[#46474c]">
                  Alcoholism is not a disease. Over-drinking is a <i>habit</i>. You practiced the art and skill of drinking, because you <i>believed</i>:
                </p>
                <ul className="space-y-2">
                  {[
                    "Alcohol is a reward/treat/social lubricant.",
                    "Alcohol helps you relax and get to sleep.",
                    "Staying sober is hard, boring and/or pointless."
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <X className="text-[#e88a8a] w-6 h-6" />
                      <span className="text-lg text-[#46474c]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link href="https://emotionalsobrietycoaching.typeform.com/to/QbFjUKjL" className="bg-black text-white font-bold py-4 px-8 rounded-full inline-block text-lg hover:bg-gray-800 transition-colors">
                Click HERE to apply
              </Link>
            </div>
          </div>
        </section>


        {/* Problem Statement Section */}
        <section className="py-20 bg-[#fde8e4] text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-black">
              Alcohol is not the problem. <span className="bg-[#f8c4c4] px-1">Your beliefs about alcohol (and what it can do for you) are the problem.</span> And the only way to <i>permanently</i> change how you drink is to <u>change your beliefs</u>.
            </h2>
            <div className="space-y-6 text-lg text-black">
              <p>
                Which is why getting &lsquo;sober&rsquo; is only a <i>temporary</i> solution. Because changing your behavior is not the same thing as changing your mind.
              </p>
              <p>
                Eventually your motivation to be &lsquo;perfect&rsquo; will fade. Your self-confidence will return. And you&apos;ll want a reward for being so &lsquo;good.&rsquo;
              </p>
              <p>
                If you want to escape the bipolar swings between over-indulgence and self-denial, you must break the all-or-nothing <i>thinking</i> habits that prevent you from being able to enjoy drinking in moderation.
              </p>
              <p>
                If you want to drink (and not drink) like a normal person, you have to learn how to <i>think</i> like a normal person.
              </p>
              <p className="font-semibold">
                Wouldn&apos;t it be nice to trust yourself?
              </p>
            </div>
          </div>
        </section>

        <div className="bg-black text-white py-8 text-center text-2xl font-bold">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            Over-drinking isn&apos;t about your relationship with alcohol. It&apos;s about your relationship with yourself.
          </div>
        </div>

    {/* What They Don't Tell You Section */}
    <section className="py-20 bg-[#fff8f7]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-center lg:text-left text-[#46474c]">
                  Here&apos;s what they don&apos;t tell you in other recovery programs:
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ChevronRight className="flex-shrink-0 w-6 h-6 text-[#46474c] mr-2 mt-1" />
                    <span className="text-lg text-[#46474c]">
                      <strong>The BELIEF that you can&apos;t control yourself</strong>, coupled with a lack of coping skills to manage stress, is what drives over-drinking...NOT the intoxicating effects of alcohol or an &lsquo;addictive personality.&rsquo;
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="flex-shrink-0 w-6 h-6 text-[#46474c] mr-2 mt-1" />
                    <span className="text-lg text-[#46474c]">
                      Identifying as a <strong>&lsquo;sober alcoholic&rsquo;</strong> increases your risk of binge-drinking in the future by nine-fold.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="flex-shrink-0 w-6 h-6 text-[#46474c] mr-2 mt-1" />
                    <span className="text-lg text-[#46474c]">
                      <strong>Your ability to self-regulate will be stronger</strong> than &lsquo;normal drinkers&rsquo; if you break your emotional attachment to alcohol, even after decades of heavy drinking (based on measured synaptic density in the prefrontal cortex, 6-12 months into recovery).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="flex-shrink-0 w-6 h-6 text-[#46474c] mr-2 mt-1" />
                    <span className="text-lg text-[#46474c]">
                      Which means you absolutely can learn how to moderate and/or prefer sobriety by <strong>retraining your unconscious mind</strong>.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="flex-shrink-0 w-6 h-6 text-[#46474c] mr-2 mt-1" />
                    <span className="text-lg text-[#46474c]">
                      When you invest the time and energy to <strong>change the way you think</strong> instead of relying on willpower to control how much you drink, you&apos;ll be FREE. For life.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <Image
                  src="/ocean.webp"
                  alt="Woman standing in a field with ocean in the background"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="bg-black text-white py-8 px-4 text-center">
          <div className="max-w-7xl mx-auto">
            <p className="text-xl md:text-2xl font-bold mb-4">
              Why spend thousands of dollars on rehab or outpatient therapy, or hundreds of hours in AA meetings <span className="underline">reinforcing the EXACT BELIEFS that are keeping you stuck?</span>
            </p>
            <p className="text-xl md:text-2xl">
              Instead, you can <i>choose</i> how much to drink based on <i>what makes you happy</i>.
            </p>
          </div>
        </div>


        {/* How This Program is Different Section */}
        <section className="py-20 bg-[#fff8f7]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8  text-center text-[#46474c]">How This Program is Different…</h2>
            <p className="text-xl mb-8 text-center max-w-3xl mx-auto text-[#46474c]">Science shows that people who believe that changing their drinking habits will lead to greater happiness are easily and permanently able to self-correct.</p>
            <h3 className="text-2xl font-bold mb-8 text-center text-[#46474c]">Do You Want to Be Sober or Happy?</h3>
            <p className="text-xl mb-8 text-center text-[#46474c]">Master the 8 core principles of the Accelerated Recovery Process© when you join The Next Chapter.</p>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: 1, title: "Awareness", description: "Learn how to manage your mind so that you're no longer held hostage by intrusive thoughts. If you're not managing your subconscious, it's managing you." },
                { number: 2, title: "Body", description: "Over-thinking causes inflammation and keeps you in a chronic state of stress. Learn how to regulate your nervous system in real time so you no longer feel the need to numb or escape your own body." },
                { number: 3, title: "Coaching & Community", description: "Science shows the fastest way to change your mind (and learn something new) is to join a tribe of like-minded people. If you want long-lasting change, you'll need guidance, feedback, support, accountability, immersion and repetition." },
                { number: 4, title: "Dopamine Regulation", description: "If you're a heavy drinker, your base-line levels of dopamine are deficient. Which is why instant gratification is hard to resist. Learn how to use self-directed neuroplasticity to recalibrate your brain chemistry so you can experience pleasure when you do something hard." },
                { number: 5, title: "Emotional  Sobriety", description: "You can use your brain to solve problems instead of creating them once you're no longer intoxicated by your own bullshit. Get the cognitive tools to separate fact from fiction so you can identify your subconscious biases and reclaim your personal power." },
                { number: 6, title: "Fixed to Growth Mindset", description: "As long as you believe 'it is what it is' and 'you are who you are,' your fixed mindset will prevent you from changing. Learn how to apply the same growth mindset you've already mastered in your professional life to the mental and emotional challenges in your personal life." },
                { number: 7, title: "Honesty (radical)", description: 'Truth is your experience of the present moment....not the ideas you think are "right." Acknowledging the whole truth in any given moment allows you to resolve conflicting beliefs in a way that serves your best interest (so you no longer waste precious energy fighting against subconscious urges).' },
                { number: 8, title: "Identity", description: "You only do, think or feel things that align with your beliefs about who you think you are. Trying to earn or prove your worthiness will eventually cause you to act like someone who doesn't deserve it. Learn to BE the person you want to be FIRST... so you can DO what you need to do." }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#ff6b6b] text-white w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold">
                    {item.number}
                  </div>
                  <h3 className="text-xl font-bold mb-2 mt-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-xl md:text-2xl font-bold mb-6">
                The Next Chapter will teach you how to take actions that cause happiness.<br />
                And the only rule you&apos;ll ever need to follow is your own intuition.
              </p>
              <p className="text-xl md:text-2xl font-bold">
                Are you ready to step into a level of personal power unlike anything you can even imagine right now?
              </p>
            </div>
          </div>
        </section>

 {/* Generational Healing Section */}
 <section className="py-20 bg-[#fff8f7]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="lg:w-1/2 space-y-6">
                <p className="text-sm text-[#46474c] uppercase">FOR ONE SECOND...</p>
                <h2 className="text-3xl font-bold text-[#46474c]">
                  Think about <i>generational healing</i>...<br />
                  the ripple effect...the value to yourself, your family and the world when you finally <strong>STOP</strong>...
                </h2>
                <ul className="space-y-4">
                  {[
                    "<strong>Wasting your time</strong> worrying about past and future drinking.",
                    "<strong>Thinking you can't control yourself</strong> because you lack willpower and integrity.",
                    "<strong>Trying to outsmart your subconscious truth</strong> with clever new schemes to manipulate your own behavior.",
                    '<strong>Continually "starting over"</strong> because your all-or-nothing, perfectionistic mindset leaves no room for error.',
                    "<strong>Beating yourself up</strong> because you think the motivation to DO good will improve if/when you FEEL bad."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <X className="flex-shrink-0 w-6 h-6 text-[#46474c] mr-2 mt-1" />
                      <span className="text-lg text-[#46474c]" dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
                <h3 className="text-2xl font-bold text-[#46474c] mt-8">
                  Imagine how your life will change when you&apos;re able to:
                </h3>
                <ul className="space-y-4">
                  {[
                    "<strong>Say \"no\" or \"yes\" when you're offered a drink because you see it as a <i>choice</i></strong>... instead of having a pity party because you feel deprived and left out..OR waking up full of shame and regret.",
                    "<strong>Connect with the calm, clear and conscious version of yourself that <i>already exists</i></strong>... instead of waiting to be \"fixed\" because you have to account for your past mistakes and earn everyone's trust.",
                    "<strong>Be at peace with past failures and regret</strong> while feeling immense gratitude that you're not stuck anymore.",
                    "<strong>Wake up every morning feeling refreshed</strong> and ready for the day...instead of bleary-eyed and anxious."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <X className="flex-shrink-0 w-6 h-6 text-[#46474c] mr-2 mt-1" />
                      <span className="text-lg text-[#46474c]" dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="https://emotionalsobrietycoaching.typeform.com/to/QbFjUKjL" className="bg-[#f8c4c4] text-[#46474c] font-bold py-3 px-6 rounded-full inline-block text-lg hover:bg-[#f5a6a6] transition-colors">
                    Ready to join? Click HERE to apply!
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2">
                <Image
                  src="/reading.jpeg"
                  alt="Woman in a white dress and sun hat standing in a field"
                  width={600}
                  height={800}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Self-Help Books Section */}
        <section className="py-20 bg-[#fde8e4]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-[#46474c]">
                  Have you read the self-help books? Listened to mindset podcasts? Asked google about your secret questions?
                </h2>
                <ul className="space-y-2 text-lg text-[#46474c]">
                  <li>&lsquo;How do I stop drinking?&rsquo;</li>
                  <li>&lsquo;Am I an alcoholic?&rsquo;</li>
                  <li>Why do I over-think everything?</li>
                </ul>
                <p className="text-xl text-[#46474c]">
                  Unfortunately, knowing <i>why</i> something is wrong doesn&apos;t make it right.
                </p>
                <h3 className="text-2xl font-bold text-[#46474c]">
                  Stop looking for answers to shitty questions...
                </h3>
                <p className="text-xl font-bold bg-[#ffcccb] inline-block px-2">
                  Instead, wouldn&apos;t it be nice to know...&lsquo;How do I live with purpose and meaning and magic?&rsquo;
                </p>
                <p className="text-lg text-[#46474c]">
                  Reading, listening and googling do not solve problems. <strong>But working with a coach can alter the trajectory of your life.</strong>
                </p>
                <p className="text-lg text-[#46474c]">
                  While therapists are trained to help you make sense of the past, coaches are trained to guide you forward. Push you out of that comfort zone...because it&apos;s officially holding you back.
                </p>
                <h3 className="text-2xl font-bold text-[#46474c]">
                  Are you ready to escape the insanity? Or do you want to keep going over the reasons why you&apos;re stuck?
                </h3>
                <p className="text-lg text-[#46474c]">
                  <u>Doing this alone is like trying to do hair and make up without a mirror.</u> If you could do this alone, you would be doing it already.
                </p>
                <p className="text-lg text-[#46474c]">
                  You&apos;re not stuck due to lack of willpower... or integrity...or innate character defects.
                </p>
                <p className="text-xl font-bold text-[#46474c]">
                  You&apos;re stuck for one reason.
                </p>
                <p className="text-xl font-bold bg-[#ffcccb] inline-block px-2">
                  Alcohol use disorder is a <strong>thinking problem</strong>, not a drinking problem. And you can&apos;t <i>think</i> your way out of a <i>thinking problem</i>.
                </p>
              </div>
              <div className="lg:w-1/2">
                <Image
                  src="/closeup2.jpeg"
                  alt="Woman in a white dress and sun hat smiling"
                  width={600}
                  height={800}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

    
         {/* About Colleen Section */}
         <section className="py-20 bg-[#fff8f7]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-4xl font-bold text-center mb-6">I&apos;M COLLEEN.</h2>
            <p className="text-xl text-center mb-12">
              And <strong>my superpower is helping women reverse engineer their thoughts and feelings to align with a greater sense of purpose</strong>. So they can be free--not just from alcohol, but from perfectionism, people-pleasing, chronic overthinking and shame.
            </p>

            <div className="flex flex-col lg:flex-row items-start gap-12 mb-12">
              <div className="lg:w-1/2">
                <Image
                  src="/closeup.webp"
                  alt="Colleen"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <div className="lg:w-1/2 space-y-4">
                <p><strong>I was a high functioning daily drinker for at least 15 years.</strong> I tried willpower, busy-ness, yoga and meditation, and read ALL the self-help books on habit change.</p>
                <p>Then I went to AA, only to be <strong>indoctrinated by the idea that I had to live in fear of my lifelong disease</strong> because something was wrong with my brain.</p>
                <p>Now, my relationship with alcohol is healthy. <strong>I enjoy an occasional glass of wine without shame or fear that I&apos;ll lose control.</strong> I don&apos;t have to pace myself, or count or worry that I&apos;ll over do it.</p>
                <p>Every action I take (including drinking AND not drinking) have meaning because I live with intention. I tackle challenges with a sense of self-compassion, realistic expectations, and objectivity.</p>
                <p className="text-xl font-bold">I am capable of achieving anything I set my mind to. And so are you.</p>
                <p><i>The Next Chapter is your gateway to a higher level of consciousness. Coupling mindset work with nervous system regulation is HOW I help you achieve that.</i></p>
                <p>This program is exactly what I needed and didn&apos;t get when I woke up to the reality that, as beautiful as my life was, it also sucked. <strong>I was a prisoner--of a dysregulated nervous system as well as my belief system.</strong></p>
                <p>My program is a bootcamp for mental health: <strong>Get the direction, support, and cutting edge, evidence-based, scientific strategies</strong> to immediately start managing your brain <i>so that your brain is no longer managing you</i>.</p>
              </div>
            </div>

            <div className="text-center mb-12">
              <Link href="https://emotionalsobrietycoaching.typeform.com/to/QbFjUKjL" className="bg-black text-white font-bold py-3 px-8 rounded-full inline-block text-lg hover:bg-gray-800 transition-colors">
                Click HERE to apply
              </Link>
            </div>

            <div className="space-y-6 text-center">
              <p className="text-xl font-bold bg-[#ffcccb] inline-block px-2">
                Changing how you think will change who you are. <i>Literally.</i> You will <u>evolve at the biochemical and energetic levels.</u>
              </p>
              <p>
                The difference between who I am now and who I was as a drinker is consciousness. I am aware of myself and of my options. I&apos;ve always believed in autonomy and liberation. I just didn&apos;t know that <i>my own brain</i> was the primary source of my oppression.
              </p>
              <p className="text-xl">
                It feels super badass <i>to think</i> that you live by your own rules.<br />
                But you don&apos;t.
              </p>
              <p>
                Struggling for control is <i>proof</i> you&apos;re not really in control. Trying to use the 5 percent of your brain that is conscious to override the 95 percent that is subconscious is exhausting.
              </p>
              <p>
                My function as your coach will be to teach you how to identify the hidden rules that are holding you hostage.
              </p>
              <p>
                Because <i>that&apos;s</i> the only way to break them.
              </p>
              <p className="text-xl font-bold bg-[#ffcccb] inline-block px-2">
                I&apos;m a revolutionary... cleverly disguised as a recovery coach.
              </p>
            </div>

            <div className="text-center mt-12">
              <Link href="/https://emotionalsobrietycoaching.typeform.com/to/QbFjUKjL" className="bg-black text-white font-bold py-3 px-8 rounded-full inline-block text-lg hover:bg-gray-800 transition-colors">
                Ready To Change? Click Here.
              </Link>
            </div>
          </div>
        </section>


        {/* Program Details Section */}
        <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-2">Your Path To Transformation</h2>
        <h3 className="text-xl text-center mb-6">...</h3>
        <p className="text-center mb-8 max-w-3xl mx-auto">
          I believe you can do anything you <i>believe</i> is possible. My job is to show you what&apos;s possible and to help you start acting like it&apos;s true. And I&apos;m <i>really</i> good at my job.
        </p>
        <p className="text-center font-semibold mb-12">Here&apos;s what&apos;s included.</p>

        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2 space-y-8">
           
            <p className="text-center text-xl font-semibold">Immersive, high-touch coaching with Colleen</p>
            <ul className="space-y-4">
              {[
                "Two group coaching calls each week with Colleen for guidance, support and accountability. Never miss a call... Replays available.",
                "Weekly office hours for additional, one-on-one support.",
                "The Next Chapter Resource Guide: 256-page workbook shipped directly to your house that guides you through the Accelerated Recovery Process©.",
                "Audio-only delivery via Secret Podcast feed for replays and course work so you can learn on the go... no more logging into the website and watching videos (unless you want to).",
                "Community Platform on Voxer (completely private and not connected to social media) where you further develop friendships and engage in authentic conversation.",
                "Email and text support with Colleen.",
                "Small group setting to facilitate connection and friendships",
                "Free access to bonus workshops, and classes"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-2xl font-bold mr-2">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          
          </div>
          <div className="lg:w-1/2">
            <Image
              src="/screen.webp"
              alt="The Next Chapter Program Interface"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-gradient-to-r from-[#fff8f7] to-[#bda5a3]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#46474c]">What Our Graduates Are Saying</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { quote: "First off, let me be very clear….Colleen is amazing! Prior to working with her, I never thought I could work through some of the tough challenges in my life. All I wanted to do was slow down on my drinking. Turns out that not only have a done that, I am in a much healthier place with all of her content and coaching calls. This is an incredibly life changing course.", author: "K.R.W." },
                { quote: "I've been struggling for so long, asking myself the same stupid questions and repeating the same mistakes. The Next Chapter has changed my life. I have completely quit drinking and am shocked at how easy it's been. And I'm excited to know I can drink again when my brain heals. But there's no hurry. This is about ME, not alcohol.", author: "Laura" },
                { quote: "If you want a 'nice lady' coach who will tiptoe around your trauma and never call you out on your BS, Colleen is NOT for you. But if you're ready to face the harsh and uncomfortable truth, sign up for her program today! Sometimes I call her the 'demon lady' but then I keep showing up because she's hard core and it works. Thanks to Colleen, I finally know HOW to be the person I actually want to be.", author: "Marcie Oates" }
              ].map((item, index) => (
                <div key={index} className="bg-[#fff8f7] p-6 rounded-lg shadow-md transform hover:scale-105 transition-all">
                  <p className="text-lg italic mb-4 text-[#46474c]">{item.quote}</p>
                  <p className="text-right text-[#46474c] font-semibold">- {item.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Section */}
        <section className="py-20 bg-[#fff8f7]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#46474c]">Let&apos;s Talk About Investment</h2>
            <p className="text-xl mb-8 text-center max-w-3xl mx-auto text-[#46474c]">Hiring me as your coach and going all in on The Next Chapter is literally how you buy happiness*.</p>
            <p className="text-lg mb-8 text-center max-w-3xl mx-auto text-[#46474c]">*Assembly required. 🛠️👷🏼‍♀️</p>
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-[#fff8f7] to-[#bda5a3] p-8 rounded-lg shadow-xl max-w-2xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4 text-[#46474c]">What&apos;s the alternative?</h3>
                <p className="text-lg mb-4 text-[#46474c]">How much will it cost if you:</p>
                <ul className="list-none p-0 mb-6 text-[#46474c]">
                  <li>Lose your job and/or respect of family because you can&apos;t control your drinking?</li>
                  <li>Spend another decade of your life repeating the same mistakes?</li>
                  <li>Have to pay legal fees or health expenses to cover drinking-related problems?</li>
                  <li>Waste your one precious life because you&apos;re trapped in stupid habits that don&apos;t even make you happy?</li>
                </ul>
                <p className="text-lg font-bold text-[#46474c]">Where do you want to be one year from now?</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#bda5a3] text-[#fff8f7]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to start your next chapter?</h2>
            <Link href="https://emotionalsobrietycoaching.typeform.com/to/QbFjUKjL" className="bg-[#fff8f7] text-[#46474c] hover:bg-[#46474c] hover:text-[#fff8f7] font-bold py-3 px-6 rounded-full inline-flex items-center transition-all transform hover:scale-105">
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
