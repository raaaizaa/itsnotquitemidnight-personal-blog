import type { Metadata } from 'next';

import ImagePlaceholder from '../../public/meta-image-formatted.png';

import './globals.css';

export const metadata: Metadata = {
  title: `It's not quite midnight`,
  description: 'A personal blog that consists of his thoughts over time',
  openGraph: {
    type: 'website',
    title: `It's not quite midnight`,
    description: 'A personal blog that consists of his thoughts over time',
    images: ImagePlaceholder.src,
    url: 'itsnotquitemidnight.com',
  },
  twitter: {
    card: 'summary',
    title: `It's not quite midnight`,
    description: 'A personal blog that consists of his thoughts over time',
    images: ImagePlaceholder.src,
  },
  other: {
    author: 'Raiza',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#201E1D] film-grain">{children}</body>
    </html>
  );
}
