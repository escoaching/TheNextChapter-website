import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/about-TNC', label: 'Program' },
    { href: '/about-colleen', label: 'About' },
    { href: 'https://emotionalsobrietycoaching.typeform.com/to/QbFjUKjL#source=website', label: 'Book Discovery Call' },
  ]

  const socialLinks = [
    { href: 'https://www.youtube.com/channel/UCv24pItAK0xWQ_m6mD8T50w', icon: '/youtube.webp', alt: 'YouTube' },
    { href: 'https://vimeo.com/user138845606', icon: '/vimeo.webp', alt: 'Vimeo' },
    { href: 'https://www.instagram.com/thehangoverwhisperer?igsh=MWowa2dhZnRmc3hlZw==', icon: '/instagram.png', alt: 'Instagram' },
    { href: 'https://www.tiktok.com/@hangoverwhisperer', icon: '/tiktok.png', alt: 'TikTok' },
  ]

  return (
    <footer className="bg-[#f1c4c4] text-[#46474c]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Logo centered at top */}
        <div className="flex justify-center mb-10">
          <Image 
            src="/pinklogo.png" 
            alt="Emotional Sobriety Coaching" 
            width={180} 
            height={180} 
            className="mx-auto"
          />
        </div>
        
        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Navigation links */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-6 text-[#46474c]">Quick Links</h3>
            <ul className="flex flex-col space-y-4 items-center">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-[#46474c] hover:text-[#bda5a3] transition-all duration-300 text-base font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social links */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-6 text-[#46474c]">Connect With Us</h3>
            <ul className="flex flex-col space-y-4 items-center">
              {socialLinks.map((social) => (
                <li key={social.alt}>
                  <Link 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#46474c] hover:text-[#bda5a3] transition-all duration-300 flex items-center"
                  >
                    <Image 
                      src={social.icon} 
                      alt={social.alt} 
                      width={18} 
                      height={18}
                      className="mr-2"
                    />
                    <span className="text-base font-medium">{social.alt}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Copyright bar */}
        <div className="border-t border-[#e6b3b3] mt-10 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center gap-2">
            <p className="text-sm font-medium">
              ©2025 Emotional Sobriety Coaching. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-sm hover:text-[#bda5a3] font-medium">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm hover:text-[#bda5a3] font-medium">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 