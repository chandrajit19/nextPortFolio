
import {
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
const  About=()=> {
  return (
    <section id="about" className="pt:5 pb-9 md:py-16 bg-bg-color min-h-full">
      <div className="container mx-auto px-4 md:px-25 xl:px-30">
        <h2 className="text-3xl md:text-4xl font-heading mb-12 pb-2 text-text-color border-b-2  border-b-emerald-600 inline-block">
          About Me
        </h2>

        <div className="flex flex-col  lg:flex-row gap-8 xl:gap-12  items-center">
          {/* Left: Bio */}
          <div className="xl:w-1/2 p-6 text-center md:text-left relative bg-black/80">
            <p className="text-lg md:text-xl lead mb-6 text-text-color leading-relaxed">
              Hello, I'm Chandrajit, a passionate Frontend Developer from
              Varanasi, India. With a strong foundation in web technologies, I
              specialize in creating responsive, user-friendly interfaces using
              modern tools like React, Next.js, Tailwind CSS, and SCSS. I thrive
              on turning ideas into pixel-perfect applications that enhance user
              experience.
            </p>
            <p className="text-base md:text-lg mb-6 text-text-color leading-relaxed">
              After completing my B.Tech in Electronics and Communication
              Engineering in 2023, I utilized a 2-year skill-building phase for
              intensive self-learning in advanced frontend technologies and
              building real-world projects. This hands-on approach has
              strengthened my practical knowledge and prepared me to contribute
              effectively to dynamic teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-black/35 text-white rounded-lg hover:bg-accent-color transition font-medium"
              >
                Get in Touch
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 bg-transparent border  border-green-300 text-brand-color rounded-lg hover:bg-brand-color hover:text-white transition font-medium"
              >
                Download Resume
              </a>
            </div>
             {/* Dot Background Inside Box */}
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,rgba(0,255,0,1)_1px,transparent_0)] [background-size:20px_20px] pointer-events-none">
              </div>
          </div>

          {/* Right: Education & Skills */}
          <div className="xl:w-1/2 space-y-8 mb-6 md:mb-0 ">
            {/* Education */}
            <div className=" bg-black/80 p-6 rounded-lg shadow-md relative">
              <div className="flex items-center mb-4">
                <AcademicCapIcon className="h-6 w-6 text-brand-color mr-2" />
                <h3 className="text-2xl font-heading text-text-color">
                  Education
                </h3>
              </div>
              <ul className="space-y-4 text-text-color">
                <li>
                  <h4 className="text-lg font-medium">
                    B.Tech in Electronics and Communication Engineering
                  </h4>
                  <p>Gurukula Kangri (Deemed to be University), Haridwar | <strong> 2019-2023 </strong> | CGPA: 8.56/10</p>
                </li>
                <li>
                  <h4 className="text-lg font-medium">Intermediate & High School</h4>
                  <p>Vikas I C Paramanandpur, Varanasi, UP |<strong>2015-2017</strong> | 12th: 81.4% | 10th: 87.5%</p>
                </li>
              </ul>

            {/* Dot Background Inside Box */}
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,rgba(0,255,0,1)_1px,transparent_0)] [background-size:20px_20px] pointer-events-none">
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;