'use client';

import React, { Suspense } from "react";
import Image from "next/image";
import Link from 'next/link'


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
);

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
);

const PaymentSuccessContent = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#bda5a3]">Payment Successful!</h1>
      <p className="text-xl mb-4 text-center text-[#46474c]">
        Thank you for your payment. You&apos;ll receive an invoice via email shortly. If you don&apos;t see it in your inbox, please check your spam folder. If you still can&apos;t find it, please don&apos;t hesitate to contact us.
      </p>
      <p className="text-lg mb-6 text-center text-[#46474c]">
        We&apos;re excited to start this journey with you. If you have any questions, please don&apos;t hesitate to reach out.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-center text-[#bda5a3]">Next Steps</h2>
      <ol className="list-none space-y-6 mb-8 flex flex-col items-center">
        <li className="text-center flex flex-col items-center">
          <div className="bg-[#fff8f7] rounded-full w-12 h-12 flex items-center justify-center mb-3">
            <span className="text-2xl font-bold text-[#bda5a3]">1</span>
          </div>
          <p className="text-lg text-[#46474c] max-w-md">Check your email for a welcome message with important information.</p>
        </li>
        <li className="text-center flex flex-col items-center">
          <div className="bg-[#fff8f7] rounded-full w-12 h-12 flex items-center justify-center mb-3">
            <span className="text-2xl font-bold text-[#bda5a3]">2</span>
          </div>
          <p className="text-lg text-[#46474c] max-w-md">Join our private community platform (details in the welcome email).</p>
        </li>
        <li className="text-center flex flex-col items-center">
          <div className="bg-[#fff8f7] rounded-full w-12 h-12 flex items-center justify-center mb-3">
            <span className="text-2xl font-bold text-[#bda5a3]">3</span>
          </div>
          <p className="text-lg text-[#46474c] max-w-md">Mark your calendar for our first group coaching call (details in the welcome email).</p>
        </li>
      </ol>
      <p className="text-lg mb-6 text-center text-[#46474c]">
        Remember, you&apos;re not alone on this journey. We&apos;re here to support you every step of the way.
      </p>
      <div className="text-center">
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