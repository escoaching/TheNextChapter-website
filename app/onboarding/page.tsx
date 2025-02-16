'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, Menu, CheckCircle2, Circle, Copy } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#46474c] shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image src="/logonew.png" alt="TNC Logo" width={200} height={60} className="transform hover:scale-105 transition-all" />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/about-TNC" className="text-[#fff8f7] inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#90CAD6] text-sm font-medium transition-all">
              Program
            </Link>
            <Link href="https://itsnotaboutthealcohol.com/" className="text-[#fff8f7] inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#90CAD6] text-sm font-medium transition-all">
              Podcast
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#fff8f7] hover:text-[#90CAD6] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/about-TNC" className="text-[#fff8f7] block px-3 py-2 rounded-md text-base font-medium hover:bg-[#90CAD6] hover:text-[#46474c]">
              Program
            </Link>
            <Link href="https://itsnotaboutthealcohol.com" className="text-[#fff8f7] block px-3 py-2 rounded-md text-base font-medium hover:bg-[#90CAD6] hover:text-[#46474c]">
              Podcast
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

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
          <p className="text-sm md:text-base mt-4 text-center md:text-left">©2025 Emotional Sobriety Coaching</p>
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

const ChecklistItem = ({ 
  title, 
  description, 
  isCompleted, 
  onToggle,
  link,
  buttonText,
  copyableText
}: { 
  title: string
  description: string
  isCompleted: boolean
  onToggle: () => void
  link?: string
  buttonText?: string
  copyableText?: { label: string, link: string }[]
}) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard");
    })
  }

  return (
    <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
      <button
        onClick={onToggle}
        className="mt-1 flex-shrink-0 focus:outline-none"
      >
        {isCompleted ? (
          <CheckCircle2 className="h-6 w-6 text-[#bda5a3]" />
        ) : (
          <Circle className="h-6 w-6 text-gray-300" />
        )}
      </button>
      <div className="flex-grow">
        <h3 className={`font-medium ${isCompleted ? 'text-[#bda5a3] line-through' : 'text-[#46474c]'}`}>
          {title}
        </h3>
        <p className={`text-sm ${isCompleted ? 'text-gray-400' : 'text-gray-600'}`}>
          {description}
        </p>
        {buttonText && link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block bg-[#bda5a3] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#46474c] transition-colors"
          >
            {buttonText}
          </a>
        )}
        {copyableText && (
          <div className="mt-2 flex flex-col space-y-2">
            {copyableText.map(({ label, link }) => (
              <div key={link} className="flex items-center space-x-2">
                <p className="text-sm text-gray-600">{label}</p>
                <button
                  onClick={() => copyToClipboard(link)}
                  className="p-1 rounded-md hover:bg-gray-200"
                >
                  <Copy className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const OnboardingChecklist = () => {
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())

  const toggleStep = (stepIndex: number) => {
    const newCompletedSteps = new Set(completedSteps)
    if (completedSteps.has(stepIndex)) {
      newCompletedSteps.delete(stepIndex)
    } else {
      newCompletedSteps.add(stepIndex)
    }
    setCompletedSteps(newCompletedSteps)
  }

  const progress = (completedSteps.size / 6) * 100

  const steps = [
    {
      title: "Access First 7 Days Feed",
      description: "Access First 7 Days HelloAudio Feed",
    },
    {
      title: "DocuSign",
      description: "Complete and sign all necessary program documents",
    },
    {
      title: "Workbook / Program Resources",
      description: "Order your physical copy of the workbook, or click the button below to access a digital copy of the workbook",
      link: "/resources",
      buttonText: "Get digital copy"
    },
    {
      title: "Discord",
      description: "Download Discord app and join the community platform",
    },
    {
      title: "Select your Accountability Group",
      description: "Choose your accountability group by filling out the typeform below",
      link: "https://emotionalsobrietycoaching.typeform.com/accountability",
      buttonText: "Select Accountability Group"
    },
  
    {
      title: "Save your group coaching call links",
      description: "Click the icon to copy the link",
      copyableText: [
        { label: "Monday 6 PM EST", link: "https://us02web.zoom.us/j/88697958861" },
        { label: "Wednesday 1 PM EST", link: "https://us02web.zoom.us/j/82329161341" },
        { label: "Friday 1 PM EST", link: "https://us02web.zoom.us/j/83799403427" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex flex-col">
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <title>Onboarding Checklist | The Next Chapter</title>
      </head>
      
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-[#bda5a3]">Welcome to The Next Chapter!</CardTitle>
              <CardDescription className="text-lg">Let&apos;s get you set up for success by completing this checklist!</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-[#46474c]">Progress</span>
                  <span className="text-sm font-medium text-[#46474c]">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
              
              <div className="space-y-2">
                {steps.map((step, index) => (
                  <ChecklistItem
                    key={index}
                    title={step.title}
                    description={step.description}
                    isCompleted={completedSteps.has(index)}
                    onToggle={() => toggleStep(index)}
                    link={step.link}
                    buttonText={step.buttonText}
                    copyableText={step.copyableText}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#bda5a3]">
                Questions & Next Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="questions">
                  <AccordionTrigger className="text-[#46474c]">
                    Do you have any other questions about the program?
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-gray-600">
                      <p>Common questions to discuss:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Schedule and timing of coaching calls</li>
                        <li>How to use Discord effectively</li>
                        <li>Accountability group expectations</li>
                        <li>Access to resources and materials</li>
                        <li>Communication preferences</li>
                      </ul>
                      <p className="mt-4">
                        Feel free to ask your onboarding manager any other questions you may have!
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default OnboardingChecklist