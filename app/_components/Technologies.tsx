// components/Technologies.tsx
'use client';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,  
  SiBootstrap,
  SiJquery,
  SiSass,
  SiGithub,
  SiNodedotjs  // <-- Changed from SiNode
} from 'react-icons/si';

const Technologies = () => {
  const techStacks = [
    { name: 'HTML', icon: <SiHtml5 className="text-orange-500" />, shadowClass: 'shadow-orange-500/80' },
    { name: 'CSS', icon: <SiCss3 className="text-blue-500" />, shadowClass: 'shadow-blue-500/80' },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" />, shadowClass: 'shadow-yellow-500/80' },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, shadowClass: 'shadow-blue-600/80' },
    { name: 'React', icon: <SiReact className="text-cyan-500" />, shadowClass: 'shadow-cyan-500/80' },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black" />, shadowClass: 'shadow-white/80' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" />, shadowClass: 'shadow-teal-500/80' },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" />, shadowClass: 'shadow-purple-600/80' },
    { name: 'jQuery', icon: <SiJquery className="text-blue-700" />, shadowClass: 'shadow-blue-700/80' },
    { name: 'Sass', icon: <SiSass className="text-pink-500" />, shadowClass: 'shadow-pink-500/80' },
    { name: 'GitHub', icon: <SiGithub className="text-black" />, shadowClass: 'shadow-black/80' },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" />, shadowClass: 'shadow-green-600/80' },  // <-- Changed from SiNode
  ];

  return (
    <section id="technologies" className="py-5 md:py-16  text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-25 xl:px-30 pb-7 mb-5">
        <h2 className="text-3xl md:text-4xl font-heading mb-12 border-b-2 pb-2 border-b-emerald-600 inline-block text-white all-headings">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-4 ">
          {techStacks.map((tech) => (
            <div
              key={tech.name}
              className={`group flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out relative overflow-hidden ${tech.shadowClass}`}
            >
              {/* Dot Background Inside Box */}
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,rgba(0,255,0,0.5)_1px,transparent_0)] [background-size:20px_20px]">
              </div>
              <div className="relative text-5xl mb-2 group-hover:animate-pulse">{tech.icon}</div>
              <span className="relative text-sm md:text-base font-medium text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Technologies;