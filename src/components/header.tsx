"use client";
import { usePathname } from "next/navigation";
import { Instagram, Linkedin } from "lucide-react";

const Header = () => {
  const pathName = usePathname();

  console.log(pathName);

  const Menu = [
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECT", href: "#project" },
    { label: "EDUCATION", href: "#education" },
    { label: "PERSONAL SNAPSHOT", href: "#personal" },
  ];

  const socialMedia = [
    {
      icon: <Instagram className="w-[30px] h-[30px]" />,
      link: "https://www.instagram.com",
    },
    {
      icon: <Linkedin className="w-[30px] h-[30px]" />,
      link: "https://www.linkedin.com",
    },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-[98px] bg-[#f683a0] flex items-center justify-between px-10 border border-black">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="font-bold text-4xl text-[#f7f6eb] leading-10"
      >
        SAKINAH
      </button>

      <nav className="flex items-center gap-10">
        {Menu.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              const section = document.querySelector(item.href);
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="font-semibold text-xl leading-5 text-[#f7f6eb]"
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="flex flex-row items-center gap-4 text-[#f7f6eb]">
        {socialMedia.map((social, index) => (
          <a key={index} href={social.link} target="_blank">
            {social.icon}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
