'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { href: '/about-TNC', label: 'Program' },
    { href: '/about-colleen', label: 'About' },
    { href: '/podcast', label: 'Podcast' },
    { href: 'https://emotionalsobrietycoaching.typeform.com/to/QbFjUKjL#source=website', label: 'Book Discovery Call', external: true },
  ]

  const filteredNavItems = navItems.filter(item => item.href !== pathname)

  if (!mounted) {
    return null
  }

  return (
    <nav className="bg-[#46474c] shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center h-20 overflow-hidden">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image 
                src="/logo.png" 
                alt="TNC Logo" 
                width={600} 
                height={180} 
                className="h-32 w-auto transform hover:scale-105 transition-all duration-300" 
              />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            {filteredNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-[#f1c4c4] text-lg font-bold transition-all duration-300 font-montserrat"
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#f1c4c4] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#f1c4c4] transition-colors duration-300"
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
        <div className="md:hidden bg-[#46474c] relative z-20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {filteredNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white block px-3 py-2 rounded-md text-lg font-bold hover:bg-[#f1c4c4] hover:text-[#46474c] transition-all duration-300 font-montserrat"
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
} 