'use client';

import React, { Suspense } from "react";
import Image from "next/image";
//import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Navbar = () => (
  <nav className="bg-gradient-to-r from-purple-800 to-pink-800 shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20">
        <div className="flex-shrink-0 flex items-center">
          <Image src="/TNCLogo.webp" alt="TNC Logo" width={200} height={80} className="transform hover:scale-105 transition-all" />
        </div>
        {/* <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
          <Link href="/" className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-pink-300 text-sm font-medium transition-all">
            Home
          </Link>
          <Link href="/book" className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-pink-300 text-sm font-medium transition-all">
            Book Discovery Call
          </Link>
        </div> */}
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-gradient-to-r from-purple-800 to-pink-800 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <p className="text-lg">Copyright 2024 Recover With Colleen</p>
        </div>
        {/* <div className="w-full md:w-1/2">
          <ul className="flex flex-wrap justify-end">
            <li className="mr-6 mb-2"><Link href="/" className="hover:text-pink-300 transition-all">Home</Link></li>
            <li className="mb-2"><Link href="/book" className="hover:text-pink-300 transition-all">Book Discovery Call</Link></li>
          </ul>
        </div> */}
      </div>
    </div>
  </footer>
);

const PaymentSuccessContent = () => {
  const searchParams = useSearchParams()
  const amount = searchParams.get('amount')

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-800">Payment Successful!</h1>
      <p className="text-xl mb-4 text-center">
        Thank you for your payment of ${amount}. You&apos;ll receive an email confirmation shortly. If you don&apos;t see it in your inbox, please check your spam folder. If you still can&apos;t find it, please don&apos;t hesitate to contact us.
      </p>
      <p className="text-lg mb-6 text-center">
        We&apos;re excited to start this journey with you. If you have any questions, please don&apos;t hesitate to reach out.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-center text-purple-700">Next Steps</h2>
      <ol className="list-none space-y-6 mb-8 flex flex-col items-center">
        <li className="text-center flex flex-col items-center">
          <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
            <span className="text-2xl font-bold text-purple-600">1</span>
          </div>
          <p className="text-lg text-gray-700 max-w-md">Check your email for a welcome message with important information.</p>
        </li>
        <li className="text-center flex flex-col items-center">
          <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
            <span className="text-2xl font-bold text-purple-600">2</span>
          </div>
          <p className="text-lg text-gray-700 max-w-md">Join our private community platform (details in the welcome email).</p>
        </li>
        <li className="text-center flex flex-col items-center">
          <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
            <span className="text-2xl font-bold text-purple-600">3</span>
          </div>
          <p className="text-lg text-gray-700 max-w-md">Mark your calendar for our first group coaching call (details in the welcome email).</p>
        </li>
      </ol>
      <p className="text-lg mb-6 text-center">
        Remember, you&apos;re not alone on this journey. We&apos;re here to support you every step of the way.
      </p>
      <div className="text-center">
        {/* <Link href="/" className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">
          Return to Homepage
        </Link> */}
      </div>
    </div>
  )
}

const PaymentSuccessPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <Suspense fallback={<div>Loading...</div>}>
          <PaymentSuccessContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default PaymentSuccessPage;