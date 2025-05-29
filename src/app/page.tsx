import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { createClient } from "../../utils/supabase/server";

export default async function About() {
  // Personal information
  const about = [
    { label: "SAKINAH BINTI JUSOH" },
    { label: "FROM TERENGGANU" },
    { label: "2 MARCH 2003" },
    { label: "INTERNSHIP STUDENT" },
  ];

  // Education

  interface Iedu {
    title: string;
    period: string;
    course: string;
    image: string;
  }

  // Skills

  interface Iskill {
    title: string;
    description: string;
  }

  // Personal Snapshot
  interface Ipersonal {
    title: string;
    image: string;
  }

  const supabase = await createClient();

  const { data: edu } = await supabase.from("education").select();
  const { data: skill } = await supabase.from("skills").select();
  const { data: personal } = await supabase.from("personal").select();

  console.log(edu, skill, personal);

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
      {edu?.map((education: Iedu, index) => (
        <div
          key={index}
          className={`flex w-full ${index % 2 === 0 ? "" : "flex-row-reverse"}`}
        >
          <div className="w-1/2">
            <img
              className="w-full h-[433px] object-cover"
              src={education.image}
            />
          </div>

          <div className="w-1/2 p-12 flex flex-col justify-center">
            {index === 0 && (
              <h2 className="font-bold text-3xl text-[#f683a0] leading-[30px] mb-4 text-right">
                EDUCATION
              </h2>
            )}

            <h3 className="font-bold text-[32px] text-black mb-4">
              {education.title}
            </h3>

            <p className="font-semibold text-xl text-black">
              {education.period}
            </p>

            <p className="font-semibold text-xl text-black mt-4">
              {education.course}
            </p>
          </div>
        </div>
      ))}

      {/* Skills */}
      <div className="w-full py-16 px-[70px]">
        <h2 className="font-bold text-3xl text-[#f683a0] leading-[30px] mb-8">
          SKILLS
        </h2>

        <div className="flex">
          <div className="w-1/2">
            {skill?.map((skills: Iskill, index) => (
              <div key={index} className="mb-8">
                <h3 className="font-semibold text-3xl text-[#e0d976] leading-[45px]">
                  {skills.title}
                </h3>
                <p className="font-medium text-base text-[#00000080] leading-4 mt-2">
                  {skills.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full py-16">
          <h2 className="font-bold text-3xl text-[#f683a0] leading-[30px] text-center mb-16 ">
            PERSONAL SNAPSHOT
          </h2>

          <div className="flex justify-between">
            {personal?.map((personals: Ipersonal, index) => (
              <div
                key={index}
                className="w-[345px] h-[345px] rounded-lg overflow-hidden border-0"
              >
                <div className="p-0 h-full">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${personals.image})` }}
                  />
                </div>
                <div className="absolute w-full flex items-center ">
                  <h3 className="font-bold text-xl text-black leading-[30px] mt-4">
                    {personals.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
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
      <Footer />
    </div>
  );
}
