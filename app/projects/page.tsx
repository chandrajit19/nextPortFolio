// app/projects/page.tsx

import { projects } from '../../data/projects';
import ProjectCard from '../_components/ProjectCard';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Porjects-Chandrajit', 
  description: 'Chandrajit - Frontend Developer Portfolio | Varanasi, India',
};
const  ProjectsPage=()=> {
  return (
    <div className="py-12 bg-bg-color">
      <div className="container mx-auto px-4 md:px-25 xl:px-30 pb-7">
        <h1 className="font-heading   text-text-color pb-2 border-b-2 border-b-emerald-600 inline-block">All Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} /> // Id as key
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProjectsPage