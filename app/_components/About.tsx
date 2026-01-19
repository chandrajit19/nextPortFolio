
import {
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
const resume = '/chandrajit.pdf';
const  About=()=> {
  return (
    <section id="about" className="pt:5 pb-9 md:py-16 bg-bg-color min-h-full">
      <div className="container mx-auto px-4 md:px-25 xl:px-30">
        <h2 className="text-3xl md:text-4xl font-heading mb-12 pb-2 text-text-color border-b-2  border-b-emerald-600 inline-block all-headings">
          About Me
        </h2>

        <div className="flex flex-col  lg:flex-row gap-8 xl:gap-12  items-center">
          {/* Left: Bio */}
          <div className="xl:w-1/2 p-6  md:text-left relative bg-black/80 ">
            <p className="text-xs  lead mb-6 text-text-color leading-relaxed all-para">
           Hello, I’m Chandrajit, a frontend-focused developer based in Varanasi, India, with a strong interest in building clean, responsive, and high-performance web applications. I specialize in React, Next.js, Tailwind CSS, and SCSS, and I enjoy transforming ideas into pixel-perfect user interfaces that deliver real value and smooth user experiences.
            </p>
            <p className="text-base md:text-lg mb-6 text-text-color leading-relaxed all-para">
            In addition to frontend development, I have hands-on experience implementing full-stack features, including Node.js APIs, database integration with Supabase (PostgreSQL), authentication workflows, and email services. This end-to-end exposure helps me collaborate effectively with backend systems and deliver complete, production-ready solutions.
            </p>

            <p className="text-base md:text-lg mb-6 text-text-color leading-relaxed all-para">
              I hold a B.Tech in Electronics and Communication Engineering, and over the past few years I have focused on practical, project-driven learning, working on real client websites and production-level applications. I am currently seeking remote frontend opportunities where I can contribute to meaningful products, work in collaborative teams, and continue growing as an engineer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href={"/contact"}
                className="px-6 py-3 bg-black/35 text-white rounded-lg hover:bg-accent-color transition font-medium sub-headings text-center"
              >
                Get in Touch
              </Link>
              <a
                href={resume}
                download
                className="px-6 py-3 bg-transparent border  border-green-300 text-brand-color rounded-lg hover:bg-brand-color hover:text-white transition font-medium sub-headings text-center"
              >
                Download Resume
              </a>
            </div>
             {/* Dot Background Inside Box */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,rgba(0,255,0,1)_1px,transparent_0)] [background-size:5px_5px] pointer-events-none">
              </div>
          </div>

          {/* Right: Education & Skills */}
          <div className="xl:w-1/2 space-y-8 mb-6 md:mb-0 ">
            {/* Education */}
            <div className=" bg-black/80 p-6 rounded-lg shadow-md relative">
              <div className="flex items-center mb-4">
                <AcademicCapIcon className="h-6 w-6 text-brand-color mr-2" />
                <h3 className="text-2xl font-heading text-text-color all-headings">
                  Education
                </h3>
              </div>
              <ul className="space-y-4 text-text-color">
                <li>
                  <h4 className="text-lg font-medium sub-headings">
                    B.Tech in Electronics and Communication Engineering
                  </h4>
                  <p className="all-para">Gurukula Kangri (Deemed to be University), Haridwar | <strong> 2019-2023 </strong> | CGPA: 8.56/10</p>
                </li>
                <li>
                  <h4 className="text-lg font-medium sub-headings">Intermediate & High School</h4>
                  <p className="all-para">Vikas I C Paramanandpur, Varanasi, UP | <strong>2015-2017</strong> | 12 <sup>th</sup> : 81.4% | 10 <sup>th</sup> : 87.5%</p>
                </li>
              </ul>

            {/* Dot Background Inside Box */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,rgba(0,255,0,1)_1px,transparent_0)] [background-size:5px_5px] pointer-events-none">
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;