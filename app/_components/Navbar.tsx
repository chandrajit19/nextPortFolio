'use client';

import { useState } from 'react';
import Link from 'next/link'; 
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { FaHome, FaUser, FaBriefcase, FaTools, FaEnvelope } from 'react-icons/fa';

const Navbar=()=> {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: 'HOME', href: '/', icon: <FaHome className="mr-2" /> },
    { name: 'ABOUT', href: '/about', icon: <FaUser className="mr-2" /> },
    { name: 'PROJECTS', href: '/projects', icon: <FaBriefcase className="mr-2" /> },
    { name: 'TECHNOLOGIES', href: '/technologies', icon: <FaTools className="mr-2" /> },
    { name: 'CONTACT', href: '/contact', icon: <FaEnvelope className="mr-2" /> },
  ];

  return (
    <header className="sticky top-0 z-50">
      <nav className="container mx-auto px-4 bg-black md:bg-transparent"> 
        <div className="flex justify-between items-center">
          {/* Left: Name */}
          <Link href="/" className="lg:text-2xl font-bold text-brand-color my-name min-w-max">
           <span>{`{ }`}</span> Chandrajit
          </Link>

          {/* Right: Links (Desktop) */}
          <div className="hidden md:flex text-white lg:gap-4 bg-black py-5 md:ps-5">
               {
                  links.map((link) => (
                  <Link
                     key={link.name}
                     href={link.href}
                     className="text-lg hover:text-brand-color flex items-center justify-center font-medium nav-link md:px-1"
                  > 
                    {link.icon}
                    {link.name}
                  
                  </Link>
                  ))
               }
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden grid items-center justify-center py-3">
            <button type='button' onClick={toggleMenu} className="text-text-color focus:outline-none">
              {isOpen ? <XMarkIcon className="h-9 w-9" /> : <Bars3Icon className="h-9 w-9" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown with Smooth Transition and Wave */}
        <div 
          className={`md:hidden absolute left-0 top-[40px] w-full bg-black overflow-hidden transition-all duration-500 ease-in-out z-50 mt-1 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="p-2 pb-8">
            {links.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-text-color hover:text-brand-color  py-2 transition-all duration-300 font-medium flex items-center transform ${
                  isOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                }`}
                style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
                onClick={toggleMenu}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Wave SVG at Bottom */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg 
              viewBox="0 0 1440 100" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
              preserveAspectRatio="none"
            >
              <path 
                d="M0,50 C360,80 720,20 1080,50 C1260,65 1350,80 1440,90 L1440,100 L0,100 Z" 
                fill="url(#waveGradient)"
                className="transition-all duration-500"
              />
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.8 }} />
                  <stop offset="50%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.8 }} />
                  <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 0.8 }} />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;