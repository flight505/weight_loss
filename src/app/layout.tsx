import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SlankLet.dk - Medicinsk Vægttab med Dr. Peyman Pedrampour",
  description: "Effektivt medicinsk vægttab med Wegovy fra Novo Nordisk. Specialist behandling af Dr. Peyman Pedrampour i trygge rammer.",
  keywords: ["vægttab", "Wegovy", "medicinsk vægttab", "overvægt", "fedme", "København", "Danmark"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className={`${inter.variable} font-sans antialiased bg-white`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-white border-t border-accent-rose-light py-8">
            <div className="container mx-auto px-4 text-center text-neutral-gray-600">
              <p>© 2024 SlankLet.dk - Alle rettigheder forbeholdes</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
