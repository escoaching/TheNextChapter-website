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
import { CheckCircle } from 'lucide-react'
import MetaComponent from "../MetaComponent"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const meta = {
  title: "Sacred Space Retreat - $3,050",
  description: "Step into sacred space, surrounded by nature, where time slows down and your story begins to rewrite itself.",
  imageUrl: "https://emotionalsobrietycoaching.com/test.png",
  pageUrl: "https://emotionalsobrietycoaching.com/retreat3050"
}

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined")
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

/* eslint-disable @typescript-eslint/no-explicit-any */

const CheckoutPage = ({ amount }: { amount: number }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [errorMessage, setErrorMessage] = useState<string>()
  const [clientSecret, setClientSecret] = useState("")
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [name, setName] = useState("")
  const [address, setAddress] = useState({
    line1: "",
    line2: "",
    city: "",
    state: "",
    postal_code: "",
    country: "",
  })

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
            address: {
              line1: address.line1,
              line2: address.line2,
              city: address.city,
              state: address.state,
              postal_code: address.postal_code,
              country: address.country,
            },
          },
        },
      },
      redirect: 'if_required',
    });
  
    if (error) {
      if (error.type === 'validation_error') {
        setErrorMessage(error.message);
      } else if (error.type === 'card_error') {
        setErrorMessage('Your card was declined. Please try another payment method.');
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
      setLoading(false);
      return;
    }
  
    if (paymentIntent) {
      switch (paymentIntent.status) {
        case 'succeeded':
          window.location.href = '/payment-success';
          break;
        case 'processing':
          setErrorMessage("Your payment is processing. Please wait...");
          break;
        case 'requires_payment_method':
          setErrorMessage("Your payment was not successful, please try again.");
          setLoading(false);
          break;
        case 'requires_action':
          try {
            const { error: confirmError, paymentIntent: confirmedIntent } = await stripe.confirmPayment({
              clientSecret,
              redirect: 'if_required',
              confirmParams: {
                return_url: `${window.location.origin}/payment-success`,
              }
            });
            
            if (confirmError) {
              if (confirmError.type === 'validation_error') {
                setErrorMessage(confirmError.message);
              } else {
                setErrorMessage("The payment process was interrupted. Please try again.");
              }
              setLoading(false);
            } else if (confirmedIntent && confirmedIntent.status === 'succeeded') {
              window.location.href = '/payment-success';
            } else {
              setLoading(false);
            }
          } catch (error: unknown) {
            console.error('Payment confirmation error:', error);
            setErrorMessage("The payment process was interrupted. Please try again.");
            setLoading(false);
          }
          break;
        default:
          setErrorMessage("Something went wrong with your payment. Please try again.");
          setLoading(false);
          break;
      }
    } else {
      setErrorMessage("We couldn't process your payment. Please try again.");
      setLoading(false);
    }
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
        <h2 className="text-3xl font-bold mb-6 text-[#46474c] font-playfair">Payment Details</h2>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium text-[#46474c] mb-1 font-montserrat">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f1c4c4] focus:border-[#f1c4c4] text-lg font-montserrat"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium text-[#46474c] mb-1 font-montserrat">Email Address</label>
          <p className="text-base text-[#46474c] mb-1 font-montserrat">Please use the same email you have used for all other The Next Chapter communications.</p>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f1c4c4] focus:border-[#f1c4c4] text-lg font-montserrat"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-lg font-medium text-[#46474c] mb-1 font-montserrat">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f1c4c4] focus:border-[#f1c4c4] text-lg font-montserrat"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address1" className="block text-lg font-medium text-[#46474c] mb-1 font-montserrat">Address Line 1</label>
          <input
            type="text"
            id="address1"
            value={address.line1}
            onChange={(e) => setAddress({...address, line1: e.target.value})}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f1c4c4] focus:border-[#f1c4c4] text-lg font-montserrat"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address2" className="block text-lg font-medium text-[#46474c] mb-1 font-montserrat">Address Line 2 (Optional)</label>
          <input
            type="text"
            id="address2"
            value={address.line2}
            onChange={(e) => setAddress({...address, line2: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f1c4c4] focus:border-[#f1c4c4] text-lg font-montserrat"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-lg font-medium text-[#46474c] mb-1 font-montserrat">City</label>
          <input
            type="text"
            id="city"
            value={address.city}
            onChange={(e) => setAddress({...address, city: e.target.value})}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f1c4c4] focus:border-[#f1c4c4] text-lg font-montserrat"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="state" className="block text-lg font-medium text-[#46474c] mb-1 font-montserrat">State</label>
          <input
            type="text"
            id="state"
            value={address.state}
            onChange={(e) => setAddress({...address, state: e.target.value})}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f1c4c4] focus:border-[#f1c4c4] text-lg font-montserrat"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="postalCode" className="block text-lg font-medium text-[#46474c] mb-1 font-montserrat">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            value={address.postal_code}
            onChange={(e) => setAddress({...address, postal_code: e.target.value})}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f1c4c4] focus:border-[#f1c4c4] text-lg font-montserrat"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="country" className="block text-lg font-medium text-[#46474c] mb-1 font-montserrat">Country</label>
          <input
            type="text"
            id="country"
            value={address.country}
            onChange={(e) => setAddress({...address, country: e.target.value})}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f1c4c4] focus:border-[#f1c4c4] text-lg font-montserrat"
          />
          <p className="text-sm text-[#46474c] mt-1 font-montserrat">If you are using Affirm, this box must contain US</p>
        </div>
  
        {clientSecret && <PaymentElement />}
  
        {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}
  
        <button
          disabled={!stripe || loading}
          className="w-full p-4 bg-[#f1c4c4] text-[#fff8f7] mt-6 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse hover:bg-[#46474c] transition-all transform hover:scale-105 shadow-lg"
        >
          {!loading ? `Pay $${amount.toLocaleString()}` : "Processing..."}
        </button>
      </form>
    </>
  );
}

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
  <div className="bg-[#fff8f7] p-6 rounded-lg shadow-md">
    <h3 className="text-2xl font-bold mb-4 text-[#46474c] font-playfair">Order Summary</h3>
    <div className="border-t border-[#f1c4c4] pt-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-medium text-[#46474c] font-montserrat">Total</span>
        <span className="text-2xl font-bold text-[#46474c] font-playfair">${amount.toLocaleString()}</span>
      </div>
    </div>
  </div>
)

export default function PayPage() {
  const amount = 3050
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const loadShopifyBuyButton = () => {
      const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      
      if ((window as any).ShopifyBuy) {
        if ((window as any).ShopifyBuy.UI) {
          initializeShopifyButton();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        const script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        script.onload = initializeShopifyButton;
        document.head.appendChild(script);
      }

      function initializeShopifyButton() {
        if (!(window as any).ShopifyBuy || !(window as any).ShopifyBuy.UI) return;
        
        const client = (window as any).ShopifyBuy.buildClient({
          domain: 'hvsbmz-yf.myshopify.com',
          storefrontAccessToken: '01491e5fb9e462078cc7d3f06f09036f',
        });

        (window as any).ShopifyBuy.UI.onReady(client).then(function (ui: any) {
          ui.createComponent('product', {
            id: '15348977107017',
            node: document.getElementById('product-component-1750475373732'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
    "product": {
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "calc(25% - 20px)",
            "margin-left": "20px",
            "margin-bottom": "50px"
          }
        },
        "button": {
          "width": "100%",
          "padding": "1rem",
          "margin-top": "1.5rem",
          "border-radius": "0.375rem",
          "font-weight": "bold",
          "color": "#fff8f7",
          "background-color": "#f1c4c4",
          ":hover": {
            "background-color": "#d9b0b0"
          },
          ":focus": {
            "background-color": "#d9b0b0"
          }
        }
      },
      "buttonDestination": "checkout",
      "contents": {
        "img": false,
        "title": false,
        "price": false
      },
      "text": {
        "button": "Checkout with Affirm"
      }
    },
    "productSet": {
      "styles": {
        "products": {
          "@media (min-width: 601px)": {
            "margin-left": "-20px"
          }
        }
      }
    },
    "modalProduct": {
      "contents": {
        "img": false,
        "imgWithCarousel": true,
        "button": false,
        "buttonWithQuantity": true
      },
      "styles": {
        "product": {
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0px",
            "margin-bottom": "0px"
          }
        },
        "button": {
          ":hover": {
            "background-color": "#d9b0b0"
          },
          "background-color": "#f1c4c4",
          ":focus": {
            "background-color": "#d9b0b0"
          }
        }
      },
      "text": {
        "button": "Add to cart"
      }
    },
    "option": {},
    "cart": {
      "styles": {
        "button": {
          ":hover": {
            "background-color": "#d9b0b0"
          },
          "background-color": "#f1c4c4",
          ":focus": {
            "background-color": "#d9b0b0"
          }
        }
      },
      "text": {
        "total": "Subtotal",
        "notice": "",
        "button": "Checkout"
      }
    },
    "toggle": {
      "styles": {
        "toggle": {
          "background-color": "#f1c4c4",
          ":hover": {
            "background-color": "#d9b0b0"
          },
          ":focus": {
            "background-color": "#d9b0b0"
          }
        }
      }
              }
            },
          });
        });
    }
  };

    loadShopifyBuyButton();
  }, [isMounted]);
  /* eslint-enable @typescript-eslint/no-explicit-any */

  return (
    <div className="min-h-screen bg-[#fff8f7] flex flex-col">
      <MetaComponent {...meta} />
      <Navbar key="navbar" />
      
      <main className="flex-grow mt-20">
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="flex flex-col gap-12">
            <div className="w-full">
              <div>
                <h1 className="text-5xl font-bold mb-6 text-[#46474c] font-playfair">Sacred Space Retreat</h1>
                <p className="mb-6 text-[#46474c] text-lg font-montserrat">
                  Step into sacred space, surrounded by nature, where time slows down and your story begins to rewrite itself.
                </p>
                <p className="mb-8 text-[#46474c] text-lg font-montserrat">
                  This isn&apos;t your typical retreat. It&apos;s a soul-level reset. A quiet rebellion against the stories that have kept you small — and a full-bodied reclamation of the woman you&apos;re becoming.
                </p>
                <p className="mb-8 text-[#46474c] text-lg font-montserrat">
                  Through powerful storytelling frameworks, guided embodiment, trauma release, and intention rituals, you&apos;ll transmute pain into purpose — and start living from your truth.
                </p>

                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-6 text-[#46474c] font-playfair">✨ What You&apos;ll Experience ✨</h2>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#f1c4c4] flex-shrink-0 mt-0.5" />
                      <p className="text-[#46474c] font-montserrat">3 nights, 2.5 days of immersive transformation</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#f1c4c4] flex-shrink-0 mt-0.5" />
                      <p className="text-[#46474c] font-montserrat">Architecturally stunning retreat center surrounded by natural beauty</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#f1c4c4] flex-shrink-0 mt-0.5" />
                      <p className="text-[#46474c] font-montserrat">Daily chef-prepared, gourmet meals that nourish your body and soul</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#f1c4c4] flex-shrink-0 mt-0.5" />
                      <p className="text-[#46474c] font-montserrat">A custom retreat workbook to guide your inner work</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#f1c4c4] flex-shrink-0 mt-0.5" />
                      <p className="text-[#46474c] font-montserrat">Practices that go deeper than words — breathwork, movement, meditation, fire rituals, TRE, and sound healing</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#f1c4c4] flex-shrink-0 mt-0.5" />
                      <p className="text-[#46474c] font-montserrat">Personal coaching + group storytelling sessions led by Colleen</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#f1c4c4] flex-shrink-0 mt-0.5" />
                      <p className="text-[#46474c] font-montserrat">Aroma Freedom + journaling practices to rewrite your inner dialogue</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#f1c4c4] flex-shrink-0 mt-0.5" />
                      <p className="text-[#46474c] font-montserrat">Quiet, sacred moments just for you — no clocks, no pressure</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#f1c4c4] flex-shrink-0 mt-0.5" />
                      <p className="text-[#46474c] font-montserrat">Connection, sisterhood, laughter, and late-night glow-ups (karaoke + dance party included 😉)</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-2xl font-bold mb-6 text-[#46474c] font-playfair">💫 You&apos;ll Walk Away With:</h3>
                    <div className="space-y-2">
                      <p className="text-[#46474c] font-montserrat">A new story that reflects your growth — not your past.</p>
                      <p className="text-[#46474c] font-montserrat">A deeper relationship with your future self, and your current power.</p>
                      <p className="text-[#46474c] font-montserrat">A felt sense of peace, clarity, and confidence.</p>
                      <p className="text-[#46474c] font-montserrat">Ritual tools + body-based practices to take home and return to.</p>
                      <p className="text-[#46474c] font-montserrat">A community of women who see the real you — and cheer her on.</p>
                    </div>
                  </div>

                  <div className="mt-8 bg-[#f9f9f9] p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-[#46474c] font-playfair">Beyond the breakthroughs…</h3>
                    <div className="space-y-2">
                      <p className="text-[#46474c] font-montserrat">You&apos;ll sip Recess under the stars.</p>
                      <p className="text-[#46474c] font-montserrat">Choose your special pen.</p>
                      <p className="text-[#46474c] font-montserrat">Laugh until your belly hurts.</p>
                      <p className="text-[#46474c] font-montserrat">Move, cry, release, be held.</p>
                      <p className="text-[#46474c] font-montserrat">And when it&apos;s time to leave…</p>
                      <p className="text-[#46474c] font-montserrat">You won&apos;t be the same woman who arrived.</p>
                    </div>
                  </div>

                  <div className="mt-8 bg-[#fff8f7] p-6 rounded-lg border border-[#f1c4c4]">
                    <p className="text-xl font-bold text-[#46474c] mb-3 font-playfair">&quot;Your old story got you here. Your new one takes you further.&quot;</p>
                    <p className="text-lg text-[#46474c] font-montserrat">Let&apos;s write the next chapter together.</p>
                  </div>
                </div>

                <div className="mt-12">
                  <p className="text-lg text-[#46474c] mb-4 font-montserrat">If you&apos;d like to purchase with HSA/FSA click this button:</p>
                  <form name="PrePage" method = "post" action = "https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx"> <input type = "hidden" name = "LinkId" value ="117fb6e3-75e4-452b-8cac-759dd90c51eb" /> <input type = "image" src ="//content.authorize.net/images/buy-now-gold.gif" /> </form>
                </div>
                <div className="mt-8">
                  <p className="text-lg text-[#46474c] mb-4 font-montserrat">To checkout with Affirm, use the button below:</p>
                  <div id='product-component-1750475373732'></div>
                </div>
              </div>
            </div>
            <div className="w-full mt-8">
              <div className="max-w-2xl mx-auto">
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
