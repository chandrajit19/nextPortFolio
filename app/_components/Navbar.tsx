'use client';

import { useState } from 'react';
import Link from 'next/link'; 
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'; // Hamburger icon
import { FaHome, FaUser, FaBriefcase, FaTools, FaEnvelope } from 'react-icons/fa'; // Icons import kar

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
    <header className="sticky top-0 z-5">
      <nav className="container mx-auto px-4  bg-black md:bg-transparent"> 
        <div className="flex justify-between items-center">
          {/* Left: Name */}
          <Link href="/" className="lg:text-2xl font-bold text-brand-color my-name min-w-max">
           <span>{`{ }`}</span> Chandrajit
          </Link>

          {/* Right: Links (Desktop) */}
          <div className="hidden md:flex  text-white lg:gap-4 bg-black py-5 md:ps-5">
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

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute left-0 top-[40px] w-full bg-black/100 overflow-hidden transition-all duration-300 ease-in-out z-10000  humburger mt-1 p-2" >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-text-color hover:text-brand-color mt-2 transition duration-1000 font-medium flex items-center"
                onClick={toggleMenu} // Close menu on click
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
export default Navbar;