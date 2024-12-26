import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "SlankLet.dk - Medicinsk Vægttab med Dr. Peyman Pedrampour",
  description: "Effektivt medicinsk vægttab med Wegovy fra Novo Nordisk. Specialist behandling af Dr. Peyman Pedrampour i trygge rammer.",
  keywords: "vægttab, medicinsk vægttab, Wegovy, Dr. Peyman Pedrampour, SlankLet, København",
  metadataBase: new URL('https://slanklet.dk'),
  openGraph: {
    title: "SlankLet.dk - Medicinsk Vægttab",
    description: "Effektivt medicinsk vægttab med Wegovy fra Novo Nordisk",
    locale: "da_DK",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen bg-neutral-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
