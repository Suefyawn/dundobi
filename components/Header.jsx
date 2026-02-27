'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold text-red-600">
          Dundobi
        </Link>
        
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-red-600 transition">Home</Link>
          <Link href="/breeding-dogs" className="hover:text-red-600 transition">Breeding Dogs</Link>
          <Link href="/litters" className="hover:text-red-600 transition">Past Litters</Link>
          <Link href="/reserve" className="hover:text-red-600 transition font-semibold">Reserve Puppy</Link>
        </nav>

        <button 
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-gray-800 px-4 py-3 space-y-2">
          <Link href="/" className="block hover:text-red-600">Home</Link>
          <Link href="/breeding-dogs" className="block hover:text-red-600">Breeding Dogs</Link>
          <Link href="/litters" className="block hover:text-red-600">Past Litters</Link>
          <Link href="/reserve" className="block hover:text-red-600 font-semibold">Reserve Puppy</Link>
        </nav>
      )}
    </header>
  )
}
