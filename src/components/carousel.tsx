"use client";

import { useState } from "react";

interface Iproject {
  title: string;
  description: string;
  image: string;
}

interface CarouselProps {
  projects: Iproject[];
}
const Carousel = ({ projects }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const getSlideClass = (index: number) => {
    if (index === activeIndex) return "scale-100 z-10";
    if (
      index === activeIndex - 1 ||
      (activeIndex === 0 && index === projects.length - 1)
    )
      return "scale-90 opacity-80";
    if (
      index === activeIndex + 1 ||
      (activeIndex === projects.length - 1 && index === 0)
    )
      return "scale-90 opacity-80";
    return "hidden";
  };

  return (
    <section id="projects" className="px-[120px] py-16">
      <div className="relative flex items-center justify-center ">
        <button onClick={goToPrev} className="absolute left-4 z-20 text-black">
          <img src="/Images/arrow left.svg" className="w-6 h-6" />
        </button>

        <div className="flex gap-4 justify-center transition-all duration-500">
          {projects?.map((project: Iproject, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 rounded-lg p-4 bg-[#dcafb8] ${getSlideClass(
                index
              )} w-[290px] h-[438px] flex justify-center items-center overflow-hidden`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-contain h-[311px] rounded-2xl"
              />

              <div className="absolute inset-0 bg-[#1c1b1f]/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center px-6 text-center">
                <h3 className="font-semibold text-2xl  mb-3">
                  {project.title}
                </h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button onClick={goToNext} className="absolute right-4 z-20 text-black">
          <img src="/Images/arrow right.svg" className="w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        {projects?.map((_, index) => (
          <div
            key={index}
            className="w-[21px] h-[21px] bg-[#f7f6eb] rounded-full border border-black flex items-center justify-center cursor-pointer"
            onClick={() => setActiveIndex(index)}
          >
            {index === activeIndex && (
              <div className="w-[17px] h-[17px] bg-[#f683a0] rounded-full" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
