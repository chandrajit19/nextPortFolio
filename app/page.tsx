import type { Metadata } from 'next';
// Resume PDF is served from the public directory
const resume = '/chandrajit.pdf';
export const metadata: Metadata = {
  title: 'Chandrajit - Frontend Developer', 
  description: 'Chandrajit - Frontend Developer Portfolio | Varanasi, India',
};
import Image from 'next/image';
import pic from './../public/myPic.webp'
import LatestProjects from './_components/LatestProjects';
import Link from 'next/link';
 const HeroSection=()=> {
  return (
    <section className="bg-bg-color pt-16 md:pt-24"> 
      <div className="container mx-auto px-4"> 
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left Side: Photo */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden text-center my-pic">
              <Image
                src={pic} 
                alt="Chandrajit Profile Photo"
                fill
                className="object-cover"
                loading='lazy'
              />
            </div>
          </div>

          {/* Right Side: About Text */}
          <div className="w-full md:w-1/2 text-center md:text-left order-0">
            <h1 className="text-4xl md:text-5xl font-heading mb-4 text-text-color">
              Hi, I'm Chandrajit
            </h1>
            <p className="text-xl md:text-2xl lead mb-6 text-text-color">
              Frontend Developer | React & Next.js | Varanasi, India
            </p>
            <p className="text-base md:text-lg mb-6 text-text-color">
          Passionate frontend developer skilled in building responsive web applications using React, Next.js, Tailwind CSS, and SCSS. Experienced in full-stack features with Next.js, including e-commerce sites with custom APIs, PostgreSQL via Supabase, and Clerk authentication. Specializing in creating pixel-perfect UIs with a focus on performance and user experience. Eager to contribute to innovative projects in a dynamic team environment as a fresher.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href={resume}
                className="px-6 py-3  text-white rounded-lg hover:bg-accent-color transition font-medium border-b-4 border-green-500"
                download
              >
                Resume
              </Link>
              <Link
                href={'/contact'}
                className="px-6 py-3 bg-transparent border border-green-300 rounded-lg hover:bg-brand-color hover:text-white transition font-medium"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/*Latest projects here... */}
      <LatestProjects/>

  
    </section>
  );
}
export default HeroSection;