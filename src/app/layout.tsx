import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da" suppressHydrationWarning>
      <body className={inter.className}>
        <main className="min-h-screen bg-neutral-white">
          {children}
        </main>
      </body>
    </html>
  );
}
