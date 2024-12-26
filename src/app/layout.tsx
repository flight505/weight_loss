import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

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
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
