'use client'

import React from 'react'



export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#fff8f7]">

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#46474c] mb-8">Terms & Conditions</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#46474c] mb-4">1. Description of Services</h2>
            <p className="text-[#46474c] mb-4">
              Emotional Sobriety Coaching offers coaching programs, retreats, and transformational courses designed to help individuals break free from unhealthy patterns with alcohol, improve emotional well-being, and manifest an empowered, aligned life.
            </p>
            
            <h3 className="text-xl font-bold text-[#46474c] mt-6 mb-3">Our Offerings Include:</h3>
            <div className="bg-white rounded-lg p-6 mb-6">
              <h4 className="text-lg font-bold text-[#46474c] mb-3">The Next Chapter Coaching Program</h4>
              <p className="text-[#46474c] mb-4">
                A structured group coaching program focusing on emotional sobriety, mindset shifts, and sustainable habit change. The Next Chapter is a comprehensive program designed to help individuals break free from unhealthy patterns with alcohol, shift their mindset, and achieve emotional sobriety in a sustainable way.
              </p>
              
              <h5 className="font-bold text-[#46474c] mb-2">Program Features:</h5>
              <ul className="list-disc pl-6 text-[#46474c] mb-4">
                <li>Weekly Coaching Calls</li>
                <li>Accountability Groups</li>
                <li>Book Club & Educational Resources</li>
                <li>Breathwork & Embodiment Practices</li>
                <li>Manifestation & Mindset Training</li>
              </ul>
            </div>
          </section>

          {/* Continue with other sections following similar pattern... */}
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#46474c] mb-4">2. Purchase Currency</h2>
            <p className="text-[#46474c]">All prices are clearly displayed in U.S. Dollars (USD) on our website, ensuring full transparency for international customers.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#46474c] mb-4">3. Customer Service Contact Information</h2>
            <div className="bg-white rounded-lg p-6">
              <p className="text-[#46474c] mb-2">We provide multiple ways for customers to easily contact us:</p>
              <ul className="text-[#46474c]">
                <li>📧 Email: support@emotionalsobrietycoaching.com</li>
                <li>📞 Phone: +1 (574) 274-4885</li>
                <li>💬 Discord: Available for program participants</li>
                <li>📍 Business Address: 2525 Wild Cat Cove, Fort Wayne Indiana 46814</li>
              </ul>
              <p className="text-[#46474c] mt-4">Our customer support team responds within 24-48 hours during business hours.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#46474c] mb-4">4. Fulfillment Policies</h2>
            <div className="bg-white rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-[#46474c] mb-4">Refund Policy</h3>
              <ul className="text-[#46474c] mb-6">
                <li className="mb-2">The Next Chapter Program: Due to the nature of digital coaching, refunds are not typically offered after program access has been granted. However, we are committed to ensuring participant satisfaction and will work with clients on a case-by-case basis.</li>
                <li className="mb-2">Retreats: Deposits are non-refundable. Refunds for remaining balances are considered only if the spot is filled by another participant, minus any applicable processing fees.</li>
                <li>One-on-One Coaching: Refunds are not available once sessions have been scheduled and completed.</li>
              </ul>

              <h3 className="text-xl font-bold text-[#46474c] mb-4">Shipping & Delivery Policy</h3>
              <p className="text-[#46474c] mb-4">Emotional Sobriety Coaching primarily provides coaching services and digital resources; however, we do ship a physical workbook to all new clients.</p>
              
              <h4 className="font-bold text-[#46474c] mb-2">Workbook Delivery Details</h4>
              <ul className="text-[#46474c] mb-6">
                <li>Upon joining, clients receive immediate access to a digital copy of the workbook so they can begin their journey right away.</li>
                <li>The physical workbook is ordered within 1-3 days of enrollment and shipped via priority shipping.</li>
                <li>For U.S.-based clients, the workbook typically arrives within 8 days of the order date.</li>
                <li>For international clients, shipping may take up to two weeks from the order date.</li>
              </ul>
              <p className="text-[#46474c] mb-4">If any shipping delays occur, we handle them on a case-by-case basis to ensure clients receive their materials as soon as possible.</p>
              <p className="text-[#46474c]">Retreat attendees will receive detailed logistics and itinerary information via email, but no additional physical products will be shipped.</p>

              <h3 className="text-xl font-bold text-[#46474c] mt-8 mb-4">Return & Cancellation Policy</h3>
              <ul className="text-[#46474c]">
                <li className="mb-2">The Next Chapter: Participants may request to pause their membership under specific conditions, but cancellations after enrollment are non-refundable.</li>
                <li className="mb-2">Retreats: If a participant can no longer attend, they may transfer their ticket to another participant with prior approval.</li>
                <li>Private Coaching: Sessions must be canceled at least 24 hours in advance to reschedule; missed sessions are non-refundable.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#46474c] mb-4">5. Legal or Export Restrictions</h2>
            <div className="bg-white rounded-lg p-6">
              <ul className="text-[#46474c]">
                <li className="mb-2">Coaching services are not intended to replace professional medical or therapeutic treatment.</li>
                <li className="mb-2">Emotional Sobriety Coaching does not provide medical, legal, or financial advice.</li>
                <li>Participants must be 18+ years old to enroll in coaching programs.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#46474c] mb-4">6. Privacy Policy</h2>
            <div className="bg-white rounded-lg p-6">
              <p className="text-[#46474c] mb-4">Our Privacy Policy is outlined on our website and explains:</p>
              <ul className="text-[#46474c] mb-4">
                <li>How we collect, store, and use customer data.</li>
                <li>The security measures in place to protect client information.</li>
                <li>How users can request access, changes, or deletion of their personal data.</li>
              </ul>
              <p className="text-[#46474c]">We do not sell or share personal information with third parties.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#46474c] mb-4">7. Business Address</h2>
            <div className="bg-white rounded-lg p-6">
              <p className="text-[#46474c] mb-4">📍 2525 Wild Cat Cove, Fort Wayne Indiana 46814</p>
              <p className="text-[#46474c]">While Emotional Sobriety Coaching primarily operates online, our physical retreat locations and event venues are disclosed upon booking.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#46474c] mb-4">8. Terms of Promotions & Discounts</h2>
            <div className="bg-white rounded-lg p-6">
              <ul className="text-[#46474c] mb-4">
                <li className="mb-2">Limited-Time Discounts – Occasionally, discounts may be offered on coaching programs or retreat tickets. The terms of the discount will always be stated at checkout and in promotional emails.</li>
                <li className="mb-2">Referral Bonuses – Clients who refer friends may receive credits toward future services.</li>
                <li className="mb-2">Early Bird Retreat Pricing – Special early bird pricing is available for retreats with a specified deadline. After this date, regular pricing applies.</li>
              </ul>
              <p className="text-[#46474c]">All promotions are subject to change and cannot be combined unless otherwise specified.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#46474c] mb-4">9. Website Security & Payment Information</h2>
            <div className="bg-white rounded-lg p-6">
              <ul className="text-[#46474c]">
                <li className="mb-2">Our website is secured with HTTPS to ensure safe transactions.</li>
                <li className="mb-2">All payments are processed securely through Stripe, or Authrorize.net ensuring PCI compliance.</li>
                <li className="mb-2">We do not store credit card information directly on our website.</li>
                <li>Customers receive confirmation emails after every purchase.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#46474c] mb-4">10. Accepted Payment Methods</h2>
            <div className="bg-white rounded-lg p-6">
              <p className="text-[#46474c] mb-4">We accept the following payment methods:</p>
              <ul className="text-[#46474c] space-y-2">
                <li>💳 Visa</li>
                <li>💳 MasterCard</li>
                <li>💳 American Express</li>
                <li>💳 Discover</li>
                <li>💳 Klarna</li>
                <li>💳 Affirm</li>
                <li>💳 Apple Pay / Google Pay (if available through Stripe)</li>
              </ul>
              <p className="text-[#46474c] mt-4">Logos of accepted credit cards are displayed at checkout for clarity.</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

