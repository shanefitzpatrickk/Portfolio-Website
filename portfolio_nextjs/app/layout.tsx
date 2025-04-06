import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: 'Shane Fitzpatrick - Portfolio',
  description: 'Data Science Portfolio of Shane Fitzpatrick',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
} 