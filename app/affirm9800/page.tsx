"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle } from 'lucide-react';
import MetaComponent from "../MetaComponent";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';

const ShopifyBuyButton = dynamic(() => import('@/components/ShopifyBuyButton'), {
  ssr: false,
});

const meta = {
  title: "The Next Chapter 1-YEAR CONTAINER (Affirm)",
  description: "Evidence-based brain training for professional women who want to reduce their drinking by 80 percent.",
  imageUrl: "https://emotionalsobrietycoaching.com/test.png",
  pageUrl: "https://emotionalsobrietycoaching.com/affirm9800"
};

const FeatureItem = ({ title, description }: { title: string; description: string }) => (
  <div className="flex items-start space-x-3 mb-4">
    <CheckCircle className="h-6 w-6 text-[#f1c4c4] flex-shrink-0 mt-1" />
    <div>
      <h3 className="font-bold text-lg text-[#46474c] mb-1 font-playfair">{title}</h3>
      <p className="text-base text-[#46474c] font-montserrat">{description}</p>
    </div>
  </div>
);

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
);

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
);

export default function Affirm9800Page() {
  const amount = 9800;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const shopifyButtonOptions = {
    "product": {
      "styles": {
        "product": {
          "width": "100%",
          "@media (min-width: 601px)": {
            "max-width": "100%",
            "margin-left": "0",
            "margin-bottom": "0px"
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
            "background-color": "#46474c"
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
  };

  return (
    <div className="min-h-screen bg-[#fff8f7] flex flex-col">
      <MetaComponent {...meta} />
      <Navbar key="navbar" />
      
      <main className="flex-grow mt-20">
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 flex flex-col justify-between">
              <div>
                <h1 className="text-5xl font-bold mb-6 text-[#46474c] font-playfair">The Next Chapter 1-YEAR CONTAINER</h1>
                <p className="mb-6 text-[#46474c] text-lg font-montserrat">
                  Evidence-based brain training for professional women who want to reduce their drinking by 80 percent so that alcohol feels like a pleasure instead of a problem.
                </p>
                <p className="text-2xl font-semibold mb-8 text-[#46474c] font-playfair">Get Happy. Not Sober.</p>

                <h2 className="text-3xl font-bold mb-6 text-[#46474c] font-playfair">THIS PACKAGE INCLUDES THE FOLLOWING</h2>

                <FeatureItem 
                  title="LIVE Group Coaching Calls"
                  description="Join up to 3 group coaching calls/week with Colleen where you get individual support, accountability AND community. You'll never miss a call as replays are available."
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
                  title="Community Platform on Discord"
                  description="(completely private and not connected to social media) provides you with support 7 days per week."
                />
                <FeatureItem 
                  title="Bonus Resources"
                  description="Receive personalized onboarding support, schedule private coaching calls, access mindful drinking lessons, lifetime access to core skills course, and more."
                />

                <div className="mt-12">
                  <p className="text-lg text-[#46474c] mb-4 font-montserrat">If you&apos;d like to purchase with HSA/FSA click this button:</p>
                  <form name="PrePage" method = "post" action = "https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx"> <input type = "hidden" name = "LinkId" value ="115c472a-52db-46f3-b7cf-e8b36820888d" /> <input type = "image" src ="//content.authorize.net/images/buy-now-gold.gif" /> </form>
                </div>
                <div className="mt-8">
                  <p className="text-lg text-[#46474c] mb-4 font-montserrat">To checkout with Affirm, use the button below:</p>
                  {isMounted && <ShopifyBuyButton domId="product-component-1749969985606" productId="15339624169545" options={shopifyButtonOptions} />}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-between">
              <Image src="/TNC1Year.webp" alt="TNC 1 Year Program" width={800} height={800} className="w-full mb-8 rounded-lg shadow-xl transform hover:scale-105 transition-all" />
              <div className="sticky top-4">
                <OrderSummary amount={amount} />
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
  );
}
