import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ChatBot } from '@/components/chat/chat-bot';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Weight Loss Clinic',
  description: 'Professional weight loss treatment with Dr. Peyman Pedrampour',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <body className={inter.className}>
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
