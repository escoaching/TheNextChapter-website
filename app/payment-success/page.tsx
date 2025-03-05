'use client';

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from 'next/navigation';
import { loadStripe } from "@stripe/stripe-js";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MetaComponent from "../MetaComponent"

const meta = {
  title: "Payment Successful | The Next Chapter",
  description: "Thank you for your payment. Your journey with The Next Chapter begins now.",
  imageUrl: "https://emotionalsobrietycoaching.com/preview.png",
  pageUrl: "https://emotionalsobrietycoaching.com/payment-success"
}

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined")
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

const PaymentSuccessContent = () => {
  const [verifying, setVerifying] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const verifyPayment = async () => {
      const paymentIntentId = searchParams.get('payment_intent');
      
      if (!paymentIntentId) {
        router.push('/');
        return;
      }

      try {
        const stripe = await stripePromise;
        if (!stripe) throw new Error('Stripe failed to initialize');

        const { paymentIntent } = await stripe.retrievePaymentIntent(
          searchParams.get('payment_intent_client_secret') || ''
        );

        if (!paymentIntent || paymentIntent.status !== 'succeeded') {
          // If payment is not successful, redirect back to the payment page
          const amount = paymentIntent?.amount ? Math.floor(paymentIntent.amount / 100) : 4000;
          router.push(`/pay${amount}`);
          return;
        }

        setVerifying(false);
      } catch (err) {
        console.error('Payment verification error:', err);
        setError('Payment verification failed. Please contact support.');
        setVerifying(false);
      }
    };

    verifyPayment();
  }, [searchParams, router]);

  if (verifying) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full">
        <p className="text-xl text-center text-[#46474c] font-montserrat">
          Verifying your payment...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full">
        <p className="text-xl text-center text-red-500 font-montserrat">
          {error}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#46474c] font-playfair">Payment Successful!</h1>
      <p className="text-xl mb-4 text-center text-[#46474c] font-montserrat">
        Thank you for your payment. You&apos;ll receive an invoice via email shortly. If you don&apos;t see it in your inbox, please check your spam folder. If you still can&apos;t find it, please don&apos;t hesitate to contact us.
      </p>
      <p className="text-lg mb-6 text-center text-[#46474c] font-montserrat">
        We&apos;re excited to start this journey with you. If you have any questions, please don&apos;t hesitate to reach out.
      </p>
      <h2 className="text-3xl font-semibold mb-4 text-center text-[#46474c] font-playfair">Next Steps</h2>
      <ol className="list-none space-y-6 mb-8 flex flex-col items-center">
        <li className="text-center flex flex-col items-center">
          <div className="bg-[#fff8f7] rounded-full w-12 h-12 flex items-center justify-center mb-3">
            <span className="text-2xl font-bold text-[#f1c4c4] font-playfair">1</span>
          </div>
          <p className="text-lg text-[#46474c] max-w-md font-montserrat">Check your email for a welcome message with important information.</p>
        </li>
        <li className="text-center flex flex-col items-center">
          <div className="bg-[#fff8f7] rounded-full w-12 h-12 flex items-center justify-center mb-3">
            <span className="text-2xl font-bold text-[#f1c4c4] font-playfair">2</span>
          </div>
          <p className="text-lg text-[#46474c] max-w-md font-montserrat">Join our private community platform (details in the welcome email).</p>
        </li>
        <li className="text-center flex flex-col items-center">
          <div className="bg-[#fff8f7] rounded-full w-12 h-12 flex items-center justify-center mb-3">
            <span className="text-2xl font-bold text-[#f1c4c4] font-playfair">3</span>
          </div>
          <p className="text-lg text-[#46474c] max-w-md font-montserrat">Mark your calendar for our first group coaching call (details in the welcome email).</p>
        </li>
      </ol>
      <p className="text-lg mb-6 text-center text-[#46474c] font-montserrat">
        Remember, you&apos;re not alone on this journey. We&apos;re here to support you every step of the way.
      </p>
    </div>
  )
}

const PaymentSuccessPage = () => {
  return (
    <div className="min-h-screen bg-[#fff8f7] flex flex-col">
      <MetaComponent {...meta} />
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4 py-24">
        <Suspense fallback={<div className="text-lg font-montserrat">Loading...</div>}>
          <PaymentSuccessContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default PaymentSuccessPage;