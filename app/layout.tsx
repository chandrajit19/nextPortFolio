// app/layout.tsx
'use client';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import exact icons
import { ReactNode } from 'react';
import { AnimatedBackground } from 'animated-backgrounds';
import './globals.css';
import Navbar from './_components/Navbar';
import Link from 'next/link';
import Footer from './_components/Footer';
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        <AnimatedBackground
           animationName="auroraBorealis"
            theme="portfolio"
          interactive={true} // rect on touch or mouse
          interactionConfig={{
            effect: 'attract', // Dots attract on hover
            strength: 0.8,
            radius: 150,
            continuous: true,
          }}
          performanceConfig={{
            adaptivePerformance: true, //  auto optimize on mobile
            maxFps: 60,
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0, 
          }}
        />
        <main className="relative z-10 min-h-screen">
            <Navbar />
               {children}
             <Footer />
             {/* aside social link */}
                <aside className='fixed top-[50%] left-0 translate-y-[-50%] translate-x-[-70%]'>
                  <ul className='flex flex-col gap-2 social-link z-100'>
                    <li>
                      <Link href="https://www.linkedin.com/in/chandra98/" target="_blank"  className='flex gap-1'>
                       <span className='min-w-[100px] text-center'> LinkedIn</span>
                        <FaLinkedin className="h-8 w-8 text-brand-color hover:text-accent-color transition" />
                      </Link>
                    </li>
                    <li>
                       <Link href="https://github.com/chandrajit19" target="_blank"  className='flex gap-1'>
                         <span className='min-w-[100px] text-center'>GitHub</span>
                         <FaGithub className="h-8 w-8 text-brand-color hover:text-accent-color transition" />
                       </Link>
                    </li>
                    <li>
                      <a href="mailto:chandrajit127@gmail.com" className='flex gap-1'>
                           <span className='min-w-[100px] text-center'>Email</span>
                           <EnvelopeIcon className="h-8 w-8 text-brand-color hover:text-accent-color transition" />
                      </a>
                    </li>
                    <li>
                       <Link href="tel:+91-7525890345" className='flex gap-1'>
                           <span className='min-w-[100px] text-center'>Call</span>
                           <PhoneIcon className="h-8 w-8 text-brand-color hover:text-accent-color transition" />
                       </Link>
                    </li>
                  </ul>
                </aside>
          
        </main>
      </body>
    </html>
  );
}