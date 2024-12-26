'use client';

import Link from 'next/link';
import { styles } from '@/lib/theme';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-accent-rose-light">
      <div className={`${styles.containers.default} py-4`}>
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-2xl font-semibold text-neutral-gray-800 hover:text-accent-rose-dark transition-colors"
          >
            SlankLet.dk
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/about" 
              className="text-neutral-gray-600 hover:text-accent-rose-dark transition-colors"
            >
              Om os
            </Link>
            <Link 
              href="/treatment" 
              className="text-neutral-gray-600 hover:text-accent-rose-dark transition-colors"
            >
              Behandling
            </Link>
            <Link 
              href="/contact" 
              className="text-neutral-gray-600 hover:text-accent-rose-dark transition-colors"
            >
              Kontakt
            </Link>
            <Link
              href="/booking"
              className="px-6 py-2 bg-accent-rose-main text-neutral-gray-800 rounded-full
                hover:bg-accent-rose-dark hover:text-white transition-all duration-300
                shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              Book tid
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 