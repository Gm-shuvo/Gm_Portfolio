import React from "react";
import { Link } from "react-router-dom";

export default function MobileNav() {
  const mobNav = [
    {
      name: "Home",
      path: "/",
      icon: "https://cdn.lordicon.com/osuxyevn.json",
    },
    {
      name: "Projects",
      path: "/my_projects",
      icon: "https://cdn.lordicon.com/fpmskzsv.json",
    },
    {
      name: "Blogs",
      path: "/blogs",
      icon: "https://cdn.lordicon.com/vufjamqa.json",
    },
    {
      name: "Contact",
      path: "/contact",
      icon: "https://cdn.lordicon.com/diihvcfp.json",
    },
  ];
  return (
    <div className="flex items-center justify-around gap-8 border-[1px] px-9 py-2 rounded-full border-[#b6b0b0] bg-slate-700">
      {mobNav.map((item, index) => {
        return (
          <Link
            to={item.path}
            key={index}
            className="flex flex-col items-center gap-1 hover:text-[#00f396] cursor-pointer"
          >
            <lord-icon
              src={item.icon}
              trigger="hover"
              class="current-color"
              style={{ width: "24px", height: "24px" }}
              className=''
            ></lord-icon>
            <span className="text-md">{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
