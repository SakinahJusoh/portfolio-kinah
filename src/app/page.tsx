import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Bar from "@/components/bar";
import Carousel from "@/components/carousel";
import { createClient } from "../../utils/supabase/server";

export default async function About() {
  // Education

  interface Iedu {
    title: string;
    period: string;
    course: string;
    image: string;
    position: string;
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
  const { data: project } = await supabase.from("projects").select();

  console.log(edu, skill, personal, project);

  return (
    <div className="relative w-full max-w-[1550px] mx-auto bg-[#f7f6eb] overflow-hidden">
      <Header />
      {/* About Me */}
      <section id="home" className="scroll-mt-[100px]">
        <div className="w-full h-[654px] flex">
          <div className="w-[950px] p-[120px] flex flex-col justify-center">
            <h2 className=" [font-family: 'Playfair_Display-Bold', Helvetica] font-bold text-4xl text-[#f683a0] leading-[30px] mb-10">
              HELLO THERE!
            </h2>

            <h1 className="[font-family: 'Playfair_Display-SemiBold', Helvetica] font-semibold text-black text-4xl leading -[50px] mb-8">
              SAKINAH BINTI JUSOH
            </h1>

            <div className="flex mb-8">
              <span className="font-family: 'Poppins-Medium', Helvetica] font-medium text-lg  text-black leading-[18px] mr-16">
                FROM TERENGGANU
              </span>
              <span className="[font-family: 'Poppins-Medium', Helvetica] font-medium text-lg text-black leading-[18px]">
                INTERNSHIP STUDENT AT TIME DOTCOM
              </span>
            </div>

            <a href="/Resume Sakinah.pdf" target="_blank">
              <button className="w-[290px] h-[51px] bg-[#e0d976] text-black rounded-3xl border border-solid border-black hover:bg-[#d5ce6c] flex items-center justify-center gap-2 mt-8">
                <span className="[font-family: 'Playfair_Display-SemiBold', Helvetica] font-semibold text-xs text-black">
                  DOWNLOAD SAKINAH'S RESUME
                </span>
                <img src="/Images/download.svg" className="w-5 h-5" />
              </button>
            </a>
          </div>

          <div className="relative w-[650px]">
            <img
              className="w-full h-[654px] object-cover border border-black"
              src="/Images/about me.jpeg"
            />
          </div>
        </div>
      </section>
      <div className="w-[1500px] h-px top-18 left-[-40px] absolute bg-black" />
      <Bar />

      {/* Skills */}
      <section id="skills" className="px-[120px] py-16">
        <div className="[font-family: 'Poppins-Medium', Helvetica] font-medium text-[#f683a0] text-lg leading-[18px]">
          SKILLS
        </div>

        <h2 className="[font-family: 'Playfair_Display-Bold', Helvetica] font-bold text-[#f683a0] text-3xl leading-[50px] mt-4">
          BACKGROUND PROFICIENCY
        </h2>

        <div className="flex mt-8">
          <div className="w-1/2 pr-8">
            {skill
              ?.filter((_, index) => index === 0 || index === 1)
              .map((skills: Iskill, index) => (
                <div key={index} className="mb-8">
                  <h3 className="[font-family: 'Playfair_Display-SemiBold', Helvetica] font-semibold text-black text-3xl leading-10">
                    {skills.title}
                  </h3>
                  <p className="[font-family: 'Poppins-Medium', Helvetica] font-medium text-black text-sm leading-6 mt-4">
                    {skills.description}
                  </p>
                </div>
              ))}
          </div>

          <div className="w-1/2">
            {skill
              ?.filter((_, index) => index >= 2 && index <= 4)
              .map((skills: Iskill, index) => (
                <h3
                  key={index}
                  className="[font-family: 'Playfair_Display-SemiBold', Helvetica] font-semibold text-black text-3xl leading-[45px] mb-4"
                >
                  {skills.title}
                </h3>
              ))}
          </div>
        </div>
      </section>

      <Bar />

      {/* Projects */}
      <section id="project" className="px-[120px] py-16">
        <div className="[font-family: 'Poppins-Medium', Helvetica] font-medium text-[#f683a0] text-lg leading-[18px] text-center w-[82px]">
          PROJECT
        </div>

        <h2 className="[font-family: 'Playfair_Display-Bold', Helvetica] font-bold text-[#f683a0] text-3xl leading-[50px] mt-4">
          PAST PROJECTS I WORKED ON
        </h2>

        <Carousel projects={project!} />
      </section>
      <Bar />

      {/* Education */}
      <section id="education" className="px-[120px] py-16">
        <div className="[font-family: 'Poppins-Medium', Helvetica] font-medium text-[#f683a0] text-lg leading-[18px] text-center w-[82px]">
          EDUCATION
        </div>

        <h2 className="[font-family: 'Playfair_Display-Bold', Helvetica] font-bold text-[#f683a0] text-3xl leading-[50px] mt-4">
          ACADEMIC ADVENTURE
        </h2>

        {edu?.map((edu: Iedu, index) => (
          <div key={index} className="mt-10">
            <div className="w-full">
              <div className="p-2">
                <div className="flex border border-[#f683a0] h-[400px] overflow-hidden items-center">
                  {edu.position === "right" ? (
                    <>
                      <div className="w-1/2 h-full">
                        <img
                          className="w-full h-full object-cover"
                          src={edu.image}
                          alt="Education"
                        />
                      </div>
                      <div className="w-1/2 h-full p-6 flex flex-col items-end justify-center">
                        <div className="flex flex-col items-end">
                          <h3 className="[font-family:'Playfair_Display-SemiBold',Helvetica] font-semibold text-black text-[40px] leading-10 text-right">
                            {edu.title.split(" ").slice(0, -1).join(" ")}
                            <br />
                            {edu.title.split(" ").slice(-1)}
                          </h3>
                          <div className="mt-6 border border-black rounded-2xl px-4 py-2">
                            <p className="[font-family:'Poppins-Medium',Helvetica] font-medium text-black text-lg leading-[18px]">
                              {edu.period}
                            </p>
                          </div>
                          <p className="[font-family:'Poppins-Medium',Helvetica] font-medium text-black text-lg leading-[30px] text-right mt-6">
                            {edu.course}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 h-full p-6 flex flex-col justify-center">
                        <h3 className="[font-family:'Playfair_Display-SemiBold',Helvetica] font-semibold text-black text-4xl leading-10">
                          {edu.title.split(" ").slice(0, -1).join(" ")}
                          <br />
                          {edu.title.split(" ").slice(-1)}
                        </h3>
                        <div className="mt-6 border border-black rounded-2xl px-4 py-2 w-[232px]">
                          <p className="[font-family:'Poppins-Medium',Helvetica] font-medium text-black text-lg leading-[27px] text-center">
                            {edu.period}
                          </p>
                        </div>
                        <p className="[font-family:'Poppins-Medium',Helvetica] font-medium text-black text-lg leading-[27px] mt-6">
                          {edu.course}
                        </p>
                      </div>
                      <div className="w-1/2 h-full border-l border-[#f683a0]">
                        <img
                          className="w-full h-full object-cover"
                          src={edu.image}
                          alt="Education"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Bar />

      {/* Personal Snapshot */}
      <section id="personal" className="px-[120px] py-16">
        <div className="[font-family: 'Poppins-Medium', Helvetica] font-medium text-[#f683a0] text-lg leading-[18px] text-center w-[82px] ">
          PERSONAL SNAPSHOT
        </div>

        <h2 className="[font-family: 'Playfair_Display-Bold', Helvetica] font-bold text-[#f683a0] text-3xl leading-[50px] mt-4">
          THINGS MAKE ME HAPPY
        </h2>

        <div className="flex justify-between mt-10">
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
              <div className="absolute w-full flex text-center">
                <h3 className="font-bold text-xl text-black leading-[30px] mt-4 text-center">
                  {personals.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Bar />
      <Footer />
    </div>
  );
}
