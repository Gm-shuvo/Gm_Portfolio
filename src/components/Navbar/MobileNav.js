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
      path: "/projects",
      icon: "https://cdn.lordicon.com/fpmskzsv.json",
    },
    {
      name: "Blogs",
      path: "/blogs",
      icon: "https://cdn.lordicon.com/vufjamqa.json",
    },
    {
      name: "Resume",
      path: "/resume",
      icon: "https://cdn.lordicon.com/iiixgoqp.json",
    },
  ];
  return (
    <div className="flex items-center justify-around gap-8 border-[1px] border-accent px-9 py-3 rounded-full border-[#b6b0b0] ">
      {mobNav.map((item, index) => {
        return (
          <Link
            to={item.path}
            key={index}
            data-title={item.name}
            className="icon flex flex-col items-center gap-1"
          >
            <lord-icon
              src={item.icon}
              trigger="hover"
              class="current-color"
              style={{ width: "24px", height: "24px", paddingTop: "2px" }}
              className=''
            ></lord-icon>
            <span className="text-xs">{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
