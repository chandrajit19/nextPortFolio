
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  id: string; 
  name: string;
  image: string;
  brief: string;
  link1: string;
  link2:string;
}

const  ProjectCard=({ id, name, image, brief, link1, link2 }: ProjectCardProps) =>{
  return (
    <div className=" rounded-lg  overflow-hidden group">
      <div className='p-1 bg-white rounded-b-3xl rounded-t-xl  md:blur-[.5px]  duration-300blur-sm  brightness-75 group-hover:blur-none group-hover:bg-transparent group-hover:brightness-100 group-hover:scale-102 transition-all duration-500'>
       <Link href={`${link1}`} target='_blank'>
        <Image
        src={image}
        alt={name}
        width={400}
        height={300}
        className="w-full h-auto object-cover rounded-b-4xl"
        loading="lazy"
      />
      </Link>
      </div>

      <div className="p-4 bg-black/90 relative rounded-t-4xl  border-4 border-t-black border-b-black rounded-b-3xl">
        <h3 className="text-xl font-heading mb-2 text-text-color">{name}</h3>
        <p className="text-base text-text-color mb-4">{brief}</p>
        <p className='flex gap-2 justify-around'>
        <Link href={`${link1}`} target='_blank' className='hover:text-white font-bold  px-2 rounded text-cyan-400 '>Live</Link>
        <Link href={`${link2}`} target='_blank 'className='hover:text-white font-bold  px-2 rounded text-cyan-400 '>Code</Link>
        <Link href={`/projects/${id}`} className='hover:text-white font-bold px-2 rounded text-cyan-400'>
          Details
        </Link>
        </p>
         {/* Dot Background Inside Box */}
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,rgba(0,255,0,1)_1px,transparent_0)] [background-size:20px_20px] pointer-events-none">
              </div>
      </div>
    </div>
  );
}

export default ProjectCard;