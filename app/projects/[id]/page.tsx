// app/projects/[id]/page.tsx
import Image from 'next/image';
import { projects } from '../../../data/projects';
import { RealProjects } from '../../../data/realprojects';
import { use } from 'react';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Project-details', 
  description: 'Chandrajit - Frontend Developer Portfolio | Varanasi, India',
};
interface ProjectDetailsProps {
  params: Promise<{ id: string }>; // Promise for async params
}

const ProjectDetails=({ params }: ProjectDetailsProps)=> {
  const { id } = use(params); // Async params unwrap
  const allProjects = [...projects, ...RealProjects];
  const project = allProjects.find((obj) => obj.id === id); // Find instead of map, strict ===

  if (!project) {
    return <div className="text-center py-20">Project not found</div>;
  }

  return (
    <div className="py-12 bg-bg-color">
      <div className="container mx-auto px-4 md:px-25 xl:px-30 mb-4">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 px-3">
          {/* Left Side: Details */}
          <div className="lg:w-1/2 order-2 md:order-1 ml-5">
            <h1 className="text-4xl font-heading mb-4 text-text-color all-headings">{project.name}</h1>
            <p className="text-lg mb-6 text-text-color leading-relaxed all-para">{project.details}</p>
            <h2 className="text-2xl font-heading mb-4 text-text-color all-headings">Technologies</h2>
            <ul className="list-disc pl-6 mb-6 text-text-color space-y-2">
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={project.link1} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-brand-color text-white rounded-lg hover:bg-accent-color transition font-medium border-2 border-emerald-400 animate-bounce text-center sub-headings">
                View Live
              </a>
              <a href={project.link2} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-transparent border border-brand-color sub-headings text-brand-color rounded-lg hover:bg-brand-color hover:text-white transition font-medium text-center">
                View on GitHub
              </a>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="lg:w-1/2 md:order-2 m-auto">
            <Image
              src={project.image}
              alt={project.name}
              width={500}
              height={400}
              className="w-[100%] h-auto rounded-xl shadow-xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default  ProjectDetails;