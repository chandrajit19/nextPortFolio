import type { Metadata } from 'next';
import Image from 'next/image';
import pic from '../public/myPic.webp';
import LatestProjects from './_components/LatestProjects';
import Link from 'next/link';
import RealClientProjects from './_components/RealClientProjects';

const resume = '/chandrajit.pdf';

export const metadata: Metadata = {
  title: 'Chandrajit Patel - Frontend Developer | React Next.js Expert in Varanasi',
  description: 'Chandrajit Patel is an experienced Frontend Developer from Varanasi specializing in React, Next.js, JavaScript, and Tailwind CSS. Explore my portfolio with real client projects and latest work.',
  keywords: 'Chandrajit Patel, Frontend Developer, React Developer, Next.js Developer, Varanasi Developer, Web Portfolio, JavaScript, TypeScript',
  openGraph: {
    title: 'Chandrajit Patel - Frontend Developer Portfolio',
    description: 'Chandrajit Patel\'s portfolio featuring real client projects and frontend development expertise.',
    url: 'https://chandrajit.space',
    siteName: 'Chandrajit Patel Portfolio',
    type: 'website',
    locale: 'en_IN',
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
        alt: 'Chandrajit Patel',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chandrajit Patel - Frontend Developer',
    description: 'Explore Chandrajit Patel\'s frontend development portfolio from Varanasi, India.',
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
};

 const HeroSection=()=> {
  return (
    <section className="bg-bg-color pt-8 md:pt-24"> 
      <div className="container mx-auto px-4"> 
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left Side: Photo */}
          <div className="w-full md:w-1/2 flex justify-end md:justify-center">
            <div className="relative w-36 h-36 md:w-80 md:h-80 rounded-full overflow-hidden text-center  my-pic">
              <Image
                src={pic} 
                alt="Chandrajit Profile Photo"
                className="object-cover"
                width="400"
                priority
              />
            </div>
          </div>

          {/* Right Side: About Text */}
          <div className="w-full md:w-1/2  md:text-left order-0">
            <h1 className="text-4xl text-end md:text-start md:text-5xl font-heading mb-4  text-text-color all-headings">
              Hi, I'm Chandrajit
            </h1>
            <p className="text-xl md:text-2xl lead mb-6 mt-5 text-text-color all-para">
              Frontend Developer (React & Next.js) | Full-Stack Experience <br /> Varanasi, India
            </p>
            <p className="text-base md:text-lg mb-6 text-text-color all-para">
            Passionate frontend developer with strong expertise in building responsive, high-performance web applications using React, Next.js, Tailwind CSS, and SCSS. <br />
            Experienced in implementing full-stack features with Next.js, including Node.js APIs, PostgreSQL using Supabase, Clerk authentication, and email workflows with Resend. I have worked on real-world client websites and production-ready applications, focusing on clean architecture, performance optimization, and pixel-perfect UI.
            <br />
            Actively seeking opportunities as a Frontend Developer with full-stack exposure, where I can contribute to real products, learn at scale, and grow within a collaborative engineering team.
            
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href={resume}
                className="px-6 py-3 text-center text-white rounded-lg hover:bg-accent-color transition font-medium border-b-4 border-green-500 active:scale-[.9]"
                download
              >
                Resume
              </Link>
              <Link
                href={'/contact'}
                className="px-6 py-3 text-center bg-transparent border border-green-300 rounded-lg hover:bg-brand-color hover:text-white transition font-medium active:scale-[.9]"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
 

       {/* Real Client Projects */}
     <RealClientProjects/>

      {/*Latest projects here... */}
      <LatestProjects/>

  
    </section>
  );
}
export default HeroSection;