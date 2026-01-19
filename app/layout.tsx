
import type { Metadata } from 'next';
import './globals.css';
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';

import Aside from './_components/Aside';
import AnimatedBgClient from './_components/AnimatedBgClient';
import Link from 'next/link';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://chandrajit.space'),
  title: 'Chandrajit Patel - Frontend Developer | React & Next.js Expert | Varanasi',
  description: 'Chandrajit Patel is a skilled Frontend Developer from Varanasi specializing in React, Next.js, and modern web technologies. View my portfolio, projects, and services.',
  keywords: [
    'Chandrajit Patel',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'Web Developer Varanasi',
    'Tailwind CSS',
    'JavaScript Developer',
    'Full Stack Developer',
    'Chandrajit',
    'Patel',
  ].join(', '),
  authors: [
    { name: 'Chandrajit Patel', url: 'https://chandrajit.space' }
  ],
  creator: 'Chandrajit Patel',
  publisher: 'Chandrajit Patel',
  openGraph: {
    title: 'Chandrajit Patel - Frontend Developer Portfolio',
    description: 'Experienced Frontend Developer specializing in React, Next.js, and modern web technologies. Based in Varanasi, India.',
    url: 'https://chandrajit.space',
    siteName: 'Chandrajit Patel - Portfolio',
    images: [
      {
        url: '/myPic.webp',
        width: 1200,
        height: 630,
        alt: 'Chandrajit Patel - Frontend Developer',
        type: 'image/webp',
      },
      {
        url: '/myPic.webp',
        width: 400,
        height: 400,
        alt: 'Chandrajit Patel Profile Photo',
        type: 'image/webp',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chandrajit Patel - Frontend Developer',
    description: 'Portfolio of Chandrajit Patel - Frontend Developer from Varanasi, India',
    images: ['/myPic.webp'],
    creator: '@chandrajit19',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://chandrajit.space',
  },
  verification: {
    google: 'google-site-verification=LdMljzl23ki1H6s1xnjuQyMevtgddEd5Nysd8oU4RoM', // Add your Google Search Console verification code
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
     
        <link rel="canonical" href="https://chandrajit.space" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Chandrajit Patel',
              url: 'https://chandrajit.space',
              email: 'chandrajit127@gmail.com',
              telephone: '+91-7525890345',
              image: 'https://chandrajit.space/myPic.webp',
              sameAs: [
                'https://www.linkedin.com/in/chandra98/',
                'https://github.com/chandrajit19',
              ],
              jobTitle: 'Frontend Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelancer',
              },
              knowsAbout: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Web Development'],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Varanasi',
                addressRegion: 'Uttar Pradesh',
                addressCountry: 'IN',
              },
            }),
          }}
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="relative min-h-screen">
        <AnimatedBgClient />
        <main className="relative z-50 min-h-screen">
          <Navbar />
          {children}
          <Footer />
          {/* aside social link */}
          <Aside/>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;