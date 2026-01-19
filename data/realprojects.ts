
export interface RealProjects {
  id: string;
  name: string;
  image: string;
  brief: string;
  details: string;
  technologies: string[];
  link1: string;
  link2: string;
}

export const RealProjects: RealProjects[] = [
  {
    id: 'project-19',
    name: 'Yoga Wellness Website – Full Stack',
    image: '/yoga.webp',
    brief: 'A full-stack yoga wellness website built with Node.js and Bootstrap.',
    details:
      'A complete full-stack yoga wellness platform developed using Node.js for backend services and Bootstrap for responsive UI. The project focuses on clean layout, performance, and real-world usability for wellness-related content and services.',
    technologies: [
      'Node.js',
      'Bootstrap',
      'HTML',
      'Custom CSS',
      'JavaScript'
    ],
    link1: 'https://tradiyog.onrender.com',
    link2: ''
  },

  {
    id: 'project-20',
    name: 'Service Provider Platform – Full Stack',
    image: '/runfix.webp',
    brief: 'A full-stack service provider web application with modern authentication and database.',
    details:
      'A real-world service provider platform built using Next.js and Tailwind CSS with Supabase as the backend database and Clerk for secure authentication. Designed for scalability, clean UI, and smooth user experience, suitable for service-based businesses.',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'Supabase (PostgreSQL)',
      'Clerk Authentication',
      'Custom CSS'
    ],
    link1: 'https://www.runfix.in/',
    link2: ''
  },

  {
    id: 'project-21',
    name: 'Aristonut – Makhana Brand Website',
    image: '/aristonut.webp',
    brief: 'A production-ready brand website for a makhana business.',
    details:
      'A real client website developed for the Aristonut makhana brand using Next.js and Tailwind CSS. Integrated Resend for transactional email communication. The project emphasizes performance, SEO-friendly structure, and a professional brand presence.',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'Resend (Email Service)',
      'Custom CSS'
    ],
    link1: 'https://www.aristonut.com/',
    link2: ''
  }
];