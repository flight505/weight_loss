import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ChatBot } from '@/components/chat/chat-bot';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'optional',
});

export const metadata: Metadata = {
  title: 'SlankLet - Online vægttabsklinik',
  description: 'Medicinsk vægttab med Wegovy® fra Novo Nordisk i trygge rammer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="theme"
        >
          <Navbar />
          {children}
          <Footer />
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  );
}
