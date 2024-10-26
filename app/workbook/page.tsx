'use client'

import React from 'react'
import { Hammer } from 'lucide-react'


export default function UnderConstructionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <Hammer className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Under Construction</h1>
        <p className="text-gray-600 mb-4">We&apos;re working hard to bring you something amazing. Please check back soon!</p>
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <div className="bg-yellow-500 h-full w-1/2 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}