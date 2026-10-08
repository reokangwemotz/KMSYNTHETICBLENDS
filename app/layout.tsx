import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KM Synthetics & Human Blends',
  description:
    'Luxury synthetic and human blend hair styles with nationwide delivery.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
