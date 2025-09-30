"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';

const  LatestProjects=()=> {
  return (
    <section className="pt-12">
      <div className="container mx-auto px-4 md:px-25 xl:px-30 pb-15">
        <h2 className="text-3xl font-heading  pb-2 text-text-color border-b-2 border-b-emerald-600 inline-block">Latest Projects</h2>
        <div className="relative mt-2">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{ 
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            loop
            className="pb-10"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard {...project} />
              </SwiperSlide>
            ))}
          </Swiper>
        
          <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10"></div>
          <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10"></div>
        </div>
      </div>
    </section>
  );
}
export default LatestProjects;