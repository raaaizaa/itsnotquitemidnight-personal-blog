import type { Metadata } from 'next';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: `It's not quite midnight`,
  description: 'A personal blog that consists of his thoughts over time',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
