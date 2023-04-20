import React, { useContext } from 'react'
import { LoaderIcon } from 'react-hot-toast';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

export default function Navbar() {
  const location = useLocation();
  console.log(location);
  const path = location?.pathname?.split('/')[1];
  console.log(path);
  const { user, login, logout, isLoading } = useContext(AuthContext);
  
  const navItem = [
    {
      icon: "https://cdn.lordicon.com/osuxyevn.json",
      link: "#home",
    },
    {
      icon: "https://cdn.lordicon.com/bhfjfgqz.json",
      link: "#about",
    },
    {
      icon: "https://cdn.lordicon.com/ofwpzftr.json",
      link: "#services",
    },
    {
      icon: "https://cdn.lordicon.com/svbmmyue.json",
      link: "#skills",
    },
    {
      icon: "https://cdn.lordicon.com/fpmskzsv.json",
      link: "#projects",
    },
    {
      icon: "https://cdn.lordicon.com/diihvcfp.json",
      link: "#contact",
    },
  ];

  return (
    <div className="flex flex-col gap-4 sticky top-16">
      {/* Nav for blogs/resource/deshboard/projects  */}
      {(path === "blogs" ||
        path === "resource" ||
        path === "deshboard" ||
        path === "projects") && (
        <div className="px-3 py-2 border-[1px] border-accent rounded-full">
          <Link to="/" className="icon" data-title="Homepage">
            <lord-icon
              src="https://cdn.lordicon.com/osuxyevn.json"
              trigger="hover"
              class="current-color"
              style={{ width: "24px", height: "24px", paddingTop: "2px" }}
            ></lord-icon>
          </Link>
        </div>
      )}
      {/*Nav for all */}
      {path === "" && (
        <div className=" flex flex-col gap-3 px-3 py-2 border-accent border-[1px] rounded-full">
          {navItem?.map((item, index) => {
            return (
              <Link
                to={item.link}
                key={index}
                data-title={item.link.split("#")[1]}
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
      )}
      {/* nav for resume and blogs */}
      {path === "" && (
        <div className="flex flex-col gap-3 px-3 py-2 border-accent border-[1px] rounded-full mt-2">
          {
            <>
              <Link
                to="/"
                className="icon hover:text-[#00f396]"
                data-title="Resume"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/iiixgoqp.json"
                  trigger="hover"
                  class="current-color"
                  style={{ width: "24px", height: "24px", paddingTop: "2px" }}
                ></lord-icon>
              </Link>
              <Link
                to="/"
                className="icon hover:text-[#00f396] "
                data-title="Blogs"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/vufjamqa.json"
                  trigger="hover"
                  class="current-color"
                  style={{ width: "24px", height: "24px", paddingTop: "2px" }}
                ></lord-icon>
              </Link>
            </>
          }
        </div>
      )}
      {/* User Deshboard ... */}
      
    </div>
  );
}
