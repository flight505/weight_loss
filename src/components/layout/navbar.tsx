'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-blue-600">
            SlankLet.dk
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-blue-600">
              Om os
            </Link>
            <Link href="/treatment" className="text-gray-600 hover:text-blue-600">
              Behandling
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">
              Kontakt
            </Link>
            <Link 
              href="/booking"
              className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
            >
              Book tid
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Om os
              </Link>
              <Link
                href="/treatment"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Behandling
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
              <Link
                href="/booking"
                className="block px-3 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Book tid
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 