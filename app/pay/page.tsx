'use client'

import React, { useEffect, useState } from "react"
import Image from "next/image"

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
    event.preventDefault()
    setLoading(true)

    if (!stripe || !elements) {
      return
    }

    const { error: submitError } = await elements.submit()

    if (submitError) {
      setErrorMessage(submitError.message)
      setLoading(false)
      return
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `/payment-success?amount=${amount}`,
        payment_method_data: {
          billing_details: {
            name: name,
            email: email,
            phone: phoneNumber,
          },
        },
      },
    })

    if (error) {
      setErrorMessage(error.message)
    } else {
      // The payment UI automatically closes with a success animation.
      // Your customer is redirected to your `return_url`.
    }

    setLoading(false)
  }

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-[#46474d] bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Payment Details</h2>
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
        />
      </div>

      {clientSecret && <PaymentElement />}

      {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}

      <button
        disabled={!stripe || loading}
        className="w-full p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white mt-6 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
      >
        {!loading ? `Pay $${amount}` : "Processing..."}
      </button>
    </form>
  )
}

const FeatureItem = ({ title, description }: { title: string; description: string }) => (
  <div className="mb-6 transform hover:scale-105 transition-all">
    <div className="flex items-start">
      <CheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
      <div>
        <h3 className="font-bold text-[#46474d] text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
)

const Navbar = () => (
  <nav className="bg-gradient-to-r from-purple-800 to-pink-800 shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20">
        <div className="flex-shrink-0 flex items-center">
          <Image src="/TNCLogo.webp" alt="TNC Logo" width={200} height={80} className="transform hover:scale-105 transition-all" />
        </div>
        {/* Commented out navigation links
        <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
          <Link href="/" className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-pink-300 text-sm font-medium transition-all">
            Home
          </Link>
          <Link href="/book" className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-pink-300 text-sm font-medium transition-all">
            Book Discovery Call
          </Link>
        </div>
        */}
      </div>
    </div>
  </nav>
)

const Footer = () => (
  <footer className="bg-gradient-to-r from-purple-800 to-pink-800 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-between">
        <div className="w-full text-center">
          <p className="text-lg">Copyright 2024 Recover With Colleen</p>
        </div>
        {/* Commented out navigation links
        <div className="w-full md:w-1/2">
          <ul className="flex flex-wrap justify-end">
            <li className="mr-6 mb-2"><Link href="/" className="hover:text-pink-300 transition-all">Home</Link></li>
            <li className="mb-2"><Link href="/book" className="hover:text-pink-300 transition-all">Book Discovery Call</Link></li>
          </ul>
        </div>
        */}
      </div>
    </div>
  </footer>
)


const TransformationsGrid = () => (
  <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
    <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">TRANSFORMATIONS</h2>
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

export default function PayPage() {
  const amount = 1

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 flex flex-col justify-between">
              <div>
                <h1 className="text-5xl font-bold mb-6 text-[#46474d] bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">The Next Chapter 1-YEAR CONTAINER</h1>
                <p className="mb-6 text-gray-600 text-lg">
                  Evidence-based brain training for professional women who want to reduce their drinking by 80 percent so that alcohol feels like a pleasure instead of a problem.
                </p>
                <p className="text-2xl font-semibold mb-8 text-purple-600">Get Happy. Not Sober.</p>
                
                <h2 className="text-3xl font-bold mb-6 text-[#46474d]">THIS PACKAGE INCLUDES THE FOLLOWING</h2>
                
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
                  description="256-page workbook shipped directly to your house to guide you through the Accelerated Recovery Process©. Learn how to apply Colleen's seven core skills of emotional sobriety in all contexts of your life so you become unfuckwithable."
                />
                <FeatureItem 
                  title="Audio-only content delivery via secret podcast feed"
                  description="No more logging into the website and watching videos at your desk. Learn as you move through your normal life...while you get ready for work or for bed and when you're driving, cooking or tasking."
                />
                <FeatureItem 
                  title="Community Platform on Voxer"
                  description="(completely private and not connected to social media) provides you with support 7 days per week. Get coaching, participate in challenges and cultivate friendships as you engage in authentic conversation."
                />
                <FeatureItem 
                  title="Bonus Resources"
                  description="Receive personalized onboarding support, schedule private coaching calls, access mindful drinking lessons, lifetime access to core skills course, daily podcasts, breathwork sessions, detox course, and more."
                />
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-between">
              <Image src="/TNC1Year.webp" alt="TNC 1 Year Program" width={800} height={800} className="w-full mb-8 rounded-lg shadow-xl transform hover:scale-105 transition-all" />
              <div className="sticky top-4">
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
                <div className="mt-8 text-sm text-gray-600 bg-white p-6 rounded-lg shadow-lg">
                  <p className="mb-3">
                    By placing an order you are stating that you agree to our Terms & Conditions.
                  </p>
                  <p className="mb-3">
                    No Refunds: When you join The Next Chapter, you&apos;re hiring me to get the RESULTS you&apos;ve been unable to get on your own. It&apos;s a normal and expected part of the change process to want to quit. We&apos;ll guide you through the resistance and ambivalence with customized support, guidance and accountability.
                  </p>
                  <p>
                    Rest assured, I offer a Money Back Guarantee. If you complete 80 percent of the course and are not satisfied with your results, I&apos;ll give you your money back.
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