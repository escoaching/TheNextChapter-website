import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/about-TNC', label: 'Program' },
    { href: '/about-colleen', label: 'About' },
    { href: 'https://emotionalsobrietycoaching.typeform.com/to/QbFjUKjL#source=website', label: 'Book Discovery Call' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms & Conditions' },
  ]

  const socialLinks = [
    { href: 'https://www.youtube.com/channel/UCv24pItAK0xWQ_m6mD8T50w', icon: '/youtube.webp', alt: 'YouTube' },
    { href: 'https://vimeo.com/user138845606', icon: '/vimeo.webp', alt: 'Vimeo' },
    { href: 'https://www.instagram.com/thehangoverwhisperer?igsh=MWowa2dhZnRmc3hlZw==', icon: '/instagram.png', alt: 'Instagram' },
    { href: 'https://www.tiktok.com/@hangoverwhisperer', icon: '/tiktok.png', alt: 'TikTok' },
  ]

  return (
    <footer className="bg-[#f1c4c4] text-[#46474c] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 order-2 md:order-1">
            <div className="flex justify-center md:justify-start space-x-6">
              {socialLinks.map((social) => (
                <Link 
                  key={social.alt}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-all duration-300"
                >
                  <Image 
                    src={social.icon} 
                    alt={social.alt} 
                    width={64} 
                    height={64} 
                    className="hover:opacity-80 transition-opacity duration-300" 
                  />
                </Link>
              ))}
            </div>
            <p className="text-sm md:text-base mt-4 text-center md:text-left text-[#46474c] font-montserrat">
              ©2025 Emotional Sobriety Coaching
            </p>
          </div>
          <div className="order-1 md:order-2 mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
              {footerLinks.map((link) => (
                <li key={link.href} className="mb-2 md:mb-0">
                  <Link 
                    href={link.href} 
                    className="text-sm md:text-base hover:text-[#bda5a3] transition-all duration-300 font-playfair font-bold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
} 