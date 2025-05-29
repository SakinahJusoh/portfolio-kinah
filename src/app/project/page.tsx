import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Projects() {
  const project = [
    {
      title: "LIBRARY MANAGEMENT SYSTEM",
      description:
        "A modern solution design to streamlined and enhance traditional library operations. It enables users to easily search, borrow and return materials through their mobile devices.",
      image: "/Images/library.png",
    },
    {
      title: "EASY CALCULATOR",
      description:
        "A simple mobile tools designed to perform everyday mathematical operations easily. It supports basic functions addition, subtraction, multiplication and division along with advance features such as percentage calculations and complex expressions.",
      image: "/Images/calc.jpeg",
    },
    {
      title: "JOB APPLICATION TRACKING APP",
      description:
        "A platform designed to assist job seekers in managing their applications efficiently. It features advanced job search filters, dashboard for tracking application progress and reminders for important dates such as deadlines and interviews.",
      image: "/Images/job.jpeg",
    },
    {
      title: "INTERNAL APPLICATION",
      description:
        "A web-based platform designed to streamline the tracking and management of academic program development.",
      image: "/Images/internal.jpg",
    },
  ];

  return (
    <div className="relative bg-[#f7f6eb] overflow-x-hidden">
      <Header />
      <div className="mt-12 mb-8">
        <span className="font-medium text-2xl text-[#f683a0] [font-family:'Poppins-Medium'] leading-[18px] ml-12">
          PROJECTS
        </span>
      </div>

      <div className="flex flex-row justify-center items-center py-16">
        <div className="w-full max-w-7xl px-6 space-y-16">
          {project.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between items-center gap-8 py-16"
            >
              <div className="flex-1 min-w-[300px] p-18 ml-30">
                <h2 className="font-['Playfair_Display'] text-black text-[40px] font-semibold leading-tight">
                  {item.title}
                </h2>
                <p className="font-['Poppins'] text-black text-sm leading-[21px] mt-4 max-w-md">
                  {item.description}
                </p>
              </div>

              <div className="flex-shrink-0">
                <img
                  src={item.image}
                  className={`object-cover mb-10 rounded-2xl ${
                    item.image === "/Images/internal.jpg"
                      ? "w-[990px] h-[450px] scale-[0.6]"
                      : "w-[222px] h-[466px]"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[50px] bg-[#f683a0] flex items-center">
        {Array(11)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="w-5 h-5 mx-2" />
          ))}
      </div>
      <Footer />
    </div>
  );
}
