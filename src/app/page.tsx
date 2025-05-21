import React from "react";
import type { JSX } from "react";
import Header from "@/components/header";

export default function About(): JSX.Element {
  // Personal information
  const about = [
    { label: "SAKINAH BINTI JUSOH" },
    { label: "FROM TERENGGANU" },
    { label: "2 MARCH 2003" },
    { label: "INTERNSHIP STUDENT" },
  ];

  // Education
  const education = [
    {
      institution: "UNIVERSITI MALAYSIA TERENGGANU",
      period: "2022 - Present",
      degree: "Bachelor of Computer Science ( Mobile Computing ) with Honor",
      image: "/Images/umt.jpeg",
    },
    {
      institution: "KOLEJ MATRIKULASI PAHANG",
      period: "2021-2022",
      degree: "Science ( Physical Science )",
      image: "/Images/matrik.jpeg",
    },
  ];

  // Skills
  const skills = [
    {
      title: "PROGRAMMING & DEVELOPMENT",
      description:
        "Java, HTML, CSS, Javascript, React.js, Flutter, TailwindCSS",
    },
    {
      title: "DESIGN & CREATIVE TOOLS",
      description: "Adobe Photoshop, Canva, Figma, Capcut",
    },
    {
      title: "COMMUNICATION",
      description: "",
    },
    {
      title: "TEAMWORK AND COLLABORATION",
      description: "",
    },
    {
      title: "ADAPTABLE AND FLEXIBLE",
      description: "",
    },
  ];

  // Others information
  const personal = [
    {
      title: "CHAGEE LOVER",
      src: "",
    },
    {
      title: "TRAVELER",
      src: "",
    },
    {
      title: "HAPPY GO LUCKY",
      src: "",
    },
  ];

  return (
    <div className="relative w-full max-w-[1550px] mx-auto bg-[#f7f6eb] overflow-hidden">
      <Header />
      {/* About Me */}
      <div className="w-full h-[654px] flex">
        <div className="w-[950px] p-[70px] flex flex-col">
          <h2 className="font-bold text-3xl text-[#f683a0] leading-[30px] mb-8">
            ABOUT ME
          </h2>

          <div className="flex flex-col gap-8">
            {about.map((info, index) => (
              <h3
                key={index}
                className="font-semibold text-[40px] text-black leading-10 whitespace-nowrap overflow-hidden text-ellipsis"
              >
                {info.label}
              </h3>
            ))}
          </div>

          <button className="w-[337px] h-[79px] mt-8 bg-[#e0d976] rounded-2xl hover:bg-[#d5ce6a]">
            <span className="font-semibold text-xl text-black">
              SAKINAH'S JUSOH RESUME
            </span>
          </button>
        </div>

        <div className="relative w-[490px]">
          <img
            className="w-full h-[654px] object-cover"
            src="/Images/about me.jpeg"
          />
        </div>
      </div>

      {/* Decorative bar */}
      <div className="w-full h-[50px] bg-[#f683a0] flex items-center">
        {Array(11)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="w-5 h-5 mx-2" />
          ))}
      </div>

      {/* Education */}
      {education.map((edu, index) => (
        <div
          key={index}
          className={`flex w-full ${index % 2 === 0 ? "" : "flex-row-reverse"}`}
        >
          <div className="w-1/2">
            <img className="w-full h-[433px] object-cover" src={edu.image} />
          </div>

          <div className="w-1/2 p-12 flex flex-col justify-center">
            {index === 0 && (
              <h2 className="font-bold text-3xl text-[#f683a0] leading-[30px] mb-4 text-right">
                EDUCATION
              </h2>
            )}

            <h3 className="font-bold text-[32px] text-black mb-4">
              {edu.institution}
            </h3>

            <p className="font-semibold text-xl text-black">{edu.period}</p>

            <p className="font-semibold text-xl text-black mt-4">
              {edu.degree}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
