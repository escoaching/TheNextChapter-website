'use client'

import React from "react"
import Link from "next/link"
import MetaComponent from "../MetaComponent"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const meta = {
  title: "Checkout Options - The Next Chapter",
  description: "Choose your payment option for The Next Chapter programs and services.",
  imageUrl: "https://emotionalsobrietycoaching.com/test.png",
  pageUrl: "https://emotionalsobrietycoaching.com/checkoutoptions"
}

const PaymentButton = ({ 
  title, 
  description, 
  price, 
  href 
}: { 
  title: string
  description?: string
  price?: string
  href: string 
}) => (
  <Link href={href}>
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all cursor-pointer border border-gray-200">
      <h3 className="text-xl font-bold text-[#46474c] mb-2 font-playfair">{title}</h3>
      {description && (
        <p className="text-[#46474c] mb-3 font-montserrat text-sm">{description}</p>
      )}
      {price && (
        <p className="text-2xl font-bold text-[#f1c4c4] mb-4 font-playfair">{price}</p>
      )}
      <div className="bg-[#f1c4c4] text-white px-4 py-2 rounded-md text-center font-montserrat font-medium hover:bg-[#46474c] transition-colors">
        Select This Option
      </div>
    </div>
  </Link>
)

const PaymentSection = ({ 
  title, 
  children 
}: { 
  title: string
  children: React.ReactNode 
}) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-8 text-[#46474c] font-playfair text-center">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  </div>
)

export default function CheckoutOptionsPage() {
  return (
    <div className="min-h-screen bg-[#fff8f7] flex flex-col">
      <MetaComponent {...meta} />
      <Navbar key="navbar" />
      
      <main className="flex-grow mt-20">
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
  
            <p className="text-xl text-[#46474c] font-montserrat max-w-3xl mx-auto">
              Select the products that best fits your needs.
            </p>
          </div>

          {/* Main TNC Program Options */}
          <PaymentSection title="The Next Chapter 1-Year Container">
            <PaymentButton
              title="TNC Unlimited"
              description="Complete program package with unlimited 1:1 coaching"
              price="$9,800"
              href="/pay9800"
            />
            <PaymentButton
              title="TNC Group +6"
              description="Advanced program tier with 6 private coaching calls"
              price="$7,800"
              href="/pay7800"
            />
            <PaymentButton
              title="TNC Group +3"
              description="Premium program option with 3 private coaching calls"
              price="$6,500"
              href="/pay6500"
            />
            <PaymentButton
              title="TNC Group"
              description="Enhanced program option"
              price="$5,000"
              href="/pay5000"
            />
          </PaymentSection>

          {/* Renewal Options */}
          <PaymentSection title="Renewal Programs">
            <PaymentButton
              title="TNC Renewal—Podcast Only"
              description="Stay connected to the work—on your terms"
              price="$1,500"
              href="/podcastrenewal"
            />
            <PaymentButton
              title="TNC Renewal"
              description="Year 2 integration with enhanced support"
              price="$3,500"
              href="/tncrenewal3500"
            />
            <PaymentButton
              title="TNC Renewal (with service discount)"
              description="Podcast access plus additional service hours"
              price="$1,000"
              href="/podcastrenewal1000"
            />
          </PaymentSection>

          {/* Specialty Programs */}
          <PaymentSection title="Specialty Programs">
            <PaymentButton
              title="ESC Embodiment Training"
              description="Advanced embodiment training"
              price="$6,000"
              href="/embodiment6000"
            />
            <PaymentButton
              title="ESC Embodiment Training (with service discount)"
              description="Deepen your emotional resilience and become grounded presence"
              price="$3,500"
              href="/embodiment3500"
            />
            <PaymentButton
              title="ES Coach Certification"
              description="Complete professional certification with 60 hours education"
              price="$9,200"
              href="/coachingcertification9200"
            />
            <PaymentButton
              title="ES Coach Certification (with service discount)"
              description="Professional coaching certification program"
              price="$6,700"
              href="/coachingcertification6700"
            />
            <PaymentButton
              title="TNC + ES Coach Certification"
              description="Complete transformation package combining TNC 1-Year Container and ESC Professional Certification"
              price="$18,980"
              href="/tncescbundle"
            />
          </PaymentSection>

          {/* Retreat Options */}
          <PaymentSection title="Retreat Programs">
            <PaymentButton
              title="ESC Retreat"
              description="Complete retreat experience"
              price="$3,500"
              href="/retreat3500"
            />
            <PaymentButton
              title="ESC Retreat (early bird discount)"
              description="Early bird retreat discount"
              price="$3,230"
              href="/retreat3230"
            />
          </PaymentSection>

          <div className="mt-16 text-center bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-[#46474c] font-playfair">Need Help Choosing?</h3>
            <p className="text-[#46474c] mb-6 font-montserrat">
              Not sure which option is right for you? Book a discovery call to discuss your needs and find the perfect program.
            </p>
            <Link href="/book-a-discovery-call">
              <div className="inline-block bg-[#f1c4c4] text-white px-8 py-3 rounded-md font-montserrat font-medium hover:bg-[#46474c] transition-colors">
                Book Discovery Call
              </div>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
} 