'use client'

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from 'next/link'
import Head from 'next/head'

import {
  useStripe,
  useElements,
  PaymentElement,
  Elements,
} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import convertToSubcurrency from "@/lib/convertToSubcurrency"
import { CheckCircle } from "lucide-react"

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined")
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

const CheckoutPage = ({ amount }: { amount: number }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [errorMessage, setErrorMessage] = useState<string>()
  const [clientSecret, setClientSecret] = useState("")
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [name, setName] = useState("")

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [amount])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
  
    if (!stripe || !elements) {
      setLoading(false);
      return;
    }
  
    const { error: submitError } = await elements.submit();
  
    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }
  
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success`,
        payment_method_data: {
          billing_details: {
            name: name,
            email: email,
            phone: phoneNumber,
          },
        },
      },
      redirect: 'if_required',
    });
  
    if (error) {
      setErrorMessage("Payment failed. Please try again.");
      setLoading(false);
      return;
    }
  
    if (paymentIntent && paymentIntent.status === 'succeeded') {
      const response = await fetch('/api/payment-confirm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ paymentIntentId: paymentIntent.id }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        window.location.href = '/payment-success';
      } else {
        setErrorMessage("Payment verification failed. Please try again.");
      }
    } else {
      setErrorMessage("Payment could not be completed. Please try again.");
    }
  
    setLoading(false);
  };
  
  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold mb-4">Processing your payment...</p>
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      )}
  
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-[#bda5a3]">Payment Details</h2>
  
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-[#46474c] mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#bda5a3] focus:border-[#bda5a3]"
          />
        </div>
  
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-[#46474c] mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#bda5a3] focus:border-[#bda5a3]"
          />
        </div>
  
        <div className="mb-6">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-[#46474c] mb-1">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#bda5a3] focus:border-[#bda5a3]"
          />
        </div>
  
        {clientSecret && <PaymentElement />}
  
        {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}
  
        <button
          disabled={!stripe || loading}
          className="w-full p-4 bg-[#bda5a3] text-[#fff8f7] mt-6 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse hover:bg-[#46474c] transition-all transform hover:scale-105 shadow-lg"
        >
          {!loading ? `Pay $${amount}` : "Processing..."}
        </button>
      </form>
    </>
  );
}  

const FeatureItem = ({ title, description }: { title: string; description: string }) => (
  <div className="mb-6 transform hover:scale-105 transition-all">
    <div className="flex items-start">
      <CheckCircle className="text-[#bda5a3] mr-3 mt-1 flex-shrink-0" />
      <div>
        <h3 className="font-bold text-[#46474c] text-lg mb-2">{title}</h3>
        <p className="text-[#46474c]">{description}</p>
      </div>
    </div>
  </div>
)

const Navbar = () => (
  <nav className="bg-[#46474c] shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20">
        <div className="flex-shrink-0 flex items-center">
          <Image src="/TNCLogo.webp" alt="TNC Logo" width={200} height={80} className="transform hover:scale-105 transition-all" />
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
          <li className="mb-2 md:mb-0"><Link href="/about-TNC" className="text-sm md:text-base hover:text-[#90CAD6] transition-all">Program</Link></li>
          <li className="mb-2 md:mb-0"><Link href="https://emotionalsobrietycoaching.typeform.com/to/QbFjUKjL" className="text-sm md:text-base hover:text-[#90CAD6] transition-all">Book Discovery Call</Link></li>
          <li className="mb-2 md:mb-0"><Link href="/privacy-policy" className="text-sm md:text-base hover:text-[#90CAD6] transition-all">Privacy Policy</Link></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
)

const TransformationsGrid = () => (
  <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
    <h2 className="text-4xl font-bold text-center mb-12 text-[#bda5a3]">TRANSFORMATIONS</h2>
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

const OrderSummary = ({ amount }: { amount: number }) => (
  <div className="bg-white p-6 rounded-lg shadow-xl mb-8">
    <h2 className="text-2xl font-bold mb-4 text-[#bda5a3]">Order Summary</h2>
    <div className="border-b border-gray-200 pb-4 mb-4">
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-[#46474c]">Item</span>
        <span className="font-semibold text-[#46474c]">Price</span>
      </div>
      <div className="flex justify-between">
        <span className="text-[#46474c]">TNC 1-YEAR CONTAINER</span>
        <span className="text-[#46474c]">${amount.toFixed(2)}</span>
      </div>
    </div>
    <div className="flex justify-between font-bold text-lg">
      <span className="text-[#46474c]">Today&apos;s total</span>
      <span className="text-[#46474c]">${amount.toFixed(2)}</span>
    </div>
  </div>
)

export default function PayPage() {
  const amount = 6500

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex flex-col">
      <Head>
        <title>The Next Chapter 1-YEAR CONTAINER</title>
        <meta name="description" content="Evidence-based brain training for professional women who want to reduce their drinking by 80 percent." />
        <link rel="canonical" href="https://emotionalsobrietycoaching.com/pay6500" />
        
        <meta property="og:title" content="The Next Chapter 1-YEAR CONTAINER" />
        <meta property="og:description" content="Evidence-based brain training for professional women who want to reduce their drinking by 80 percent." />
        <meta property="og:image" content="https://emotionalsobrietycoaching.com/TNC1Year.webp" />
        <meta property="og:url" content="https://emotionalsobrietycoaching.com/pay6500" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Next Chapter 1-YEAR CONTAINER" />
        
        <meta name="twitter:description" content="Evidence-based brain training for professional women who want to reduce their drinking by 80 percent." />
        <meta name="twitter:image" content="https://emotionalsobrietycoaching.com/TNC1Year.webp" />
        
        <meta name="apple-mobile-web-app-title" content="The Next Chapter 1-YEAR CONTAINER" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 flex flex-col justify-between">
              <div>
                <h1 className="text-5xl font-bold mb-6 text-[#bda5a3]">The Next Chapter 1-YEAR CONTAINER</h1>
                <p className="mb-6 text-[#46474c] text-lg">
                  Evidence-based brain training for professional women who want to reduce their drinking by 80 percent so that alcohol feels like a pleasure instead of a problem.
                </p>
                <p className="text-2xl font-semibold mb-8 text-[#bda5a3]">Get Happy. Not Sober.</p>

                <h2 className="text-3xl font-bold mb-6 text-[#bda5a3]">THIS PACKAGE INCLUDES THE FOLLOWING</h2>

                <FeatureItem 
                  title="LIVE Group Coaching Calls"
                  description="Join up to 3 group coaching calls/week with Colleen where you get individual support, accountability AND community. You'll never miss a call as replays available."
                />
                <FeatureItem 
                  title="Small Group Accountability calls"
                  description="Meet with your small accountability group each week to share wins, work on skills and set goals for the following week."
                />
                <FeatureItem 
                  title="The Next Chapter Resource Guide"
                  description="300-page workbook shipped directly to your house to guide you through the Accelerated Recovery Process©."
                />
                <FeatureItem 
                  title="Audio-only content delivery via secret podcast feed"
                  description="Learn as you move through your normal life...while you get ready for work or for bed and when you're driving, cooking, or tasking."
                />
                <FeatureItem 
                  title="Community Platform on Voxer"
                  description="(completely private and not connected to social media) provides you with support 7 days per week."
                />
                <FeatureItem 
                  title="Bonus Resources"
                  description="Receive personalized onboarding support, schedule private coaching calls, access mindful drinking lessons, lifetime access to core skills course, and more."
                />
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-between">
              <Image src="/TNC1Year.webp" alt="TNC 1 Year Program" width={800} height={800} className="w-full mb-8 rounded-lg shadow-xl transform hover:scale-105 transition-all" />
              <div className="sticky top-4">
                <OrderSummary amount={amount} />
                <Elements
                  stripe={stripePromise}
                  options={{
                    mode: "payment",
                    amount: convertToSubcurrency(amount),
                    currency: "usd",
                  }}
                >
                  <CheckoutPage amount={amount} />
                </Elements>
                <div className="mt-8 text-sm text-[#46474c] bg-white p-6 rounded-lg shadow-lg">
                  <p className="mb-3">
                    By placing an order you are stating that you agree to our Terms & Conditions.
                  </p>
                  <p className="mb-3">
                    No Refunds: We will guide you through the resistance and ambivalence with customized support.
                  </p>
                  <p>
                    If you complete 80% of the course and are not satisfied with your results, I&apos;ll give you your money back.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <TransformationsGrid />
      </main>
      <Footer />
    </div>
  )
}