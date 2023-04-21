import React from 'react'
import { Link } from 'react-router-dom';

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
    {
      name: 'About',
      path: '/about',
      icon: 'https://cdn.lordicon.com/dxjqoygy.json'
    }
  ];
  return (
    <div className='absolute top-[84vh] left-0 right-0 flex flex-row justify-center px-9 py-2 border-[1px] border-accent rounded-full gap-4 bg-base-100 z-10 mx-[10%]'
      
    >
      <div className="flex gap-8 mx-auto">
        {mobNav.map((item, index) => {
          return (
            <Link
              to={item.path}
              key={index}
              data-title={item.name}
              className="icon hover:text-[#00f396]"
            >
              <lord-icon
                src={item.icon}
                trigger="hover"
                class="current-color"
                style={{ width: "24px", height: "24px", paddingTop: "2px" }}
              ></lord-icon>
            </Link>
          );
         })}
      </div>
    </div>
  )
}
