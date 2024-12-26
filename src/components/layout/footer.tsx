import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Kontakt</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Dr. Peyman Pedrampour</li>
              <li>SlankLet.dk</li>
              <li>København, Danmark</li>
              <li>
                <a href="tel:+4512345678" className="hover:text-blue-600">
                  +45 12 34 56 78
                </a>
              </li>
              <li>
                <a href="mailto:info@slanklet.dk" className="hover:text-blue-600">
                  info@slanklet.dk
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Hurtige links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600">
                  Om os
                </Link>
              </li>
              <li>
                <Link href="/treatment" className="text-gray-600 hover:text-blue-600">
                  Behandling
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-600 hover:text-blue-600">
                  Book tid
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-blue-600">
                  Privatlivspolitik
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-blue-600">
                  Handelsbetingelser
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-blue-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Åbningstider</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Mandag - Torsdag: 9:00 - 17:00</li>
              <li>Fredag: 9:00 - 16:00</li>
              <li>Lørdag - Søndag: Lukket</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} SlankLet.dk - Alle rettigheder forbeholdes</p>
        </div>
      </div>
    </footer>
  );
} 