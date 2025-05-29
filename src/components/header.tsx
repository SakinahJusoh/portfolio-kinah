"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Instagram, Linkedin } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  console.log(pathName);

  const Menu = [
    { label: "ABOUT ME", href: "/" },
    { label: "PROJECTS", href: "/project" },
  ];

  return (
    <header className="w-full h-[98px] bg-[#f683a0] flex items-center justify-between px-10">
      <h1 className="font-bold text-[40px] text-[#f7f6eb] leading-10">
        SAKINAH
      </h1>

      <nav className="flex items-center gap-8">
        {Menu.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="font-semibold text-xl leading-5 text-black"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <a href="#" aria-label="Instagram">
          <Instagram className="w-[30px] h-[30px]" />
        </a>
        <a href="#" aria-label="LinkedIn">
          <Linkedin className="w-[30px] h-[30px]" />
        </a>
      </div>
    </header>
  );
};

export default Header;
