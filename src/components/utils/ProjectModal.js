import React from 'react'
import { RxExternalLink } from 'react-icons/rx'
import { MdOutlineCalendarToday, MdOutlineFeaturedPlayList } from "react-icons/md";
import { HiCode } from "react-icons/hi";
import { getRandomColor } from './RandomColor'
import { AiFillGithub } from "react-icons/ai";
import { CiServer } from "react-icons/ci";
import {BsCamera} from 'react-icons/bs'
import { PhotoProvider, PhotoView } from 'react-photo-view';
// import { color, textColor } from './RandomColor'
// import { color, textColor } from './RandomColor'

export default function ProjectModal({
  data, setModal
}) {
  const { name, liveLink, description, features, duration, technologies, iveLink, client, server, images } = data;
  // console.log(getRandomColor())
  return (
    <div>
      <input type="checkbox" id="project-modal" className="modal-toggle" />
      <div className="modal">
        <div
          className="modal-box 
        w-11/12 max-w-5xl relative"
        >
          <label
            htmlFor="project-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {/* Projects Contents */}
          <div className="mt-5 lg:mt-0">
            <div className="flex justify-between lg:pr-8 pr-6.
            ">
              <h3 className="text-3xl text-bold text-primary">{name}</h3>
              <a href={" "}>
                <button className="btn btn-sm rounded-full px-5 btn-primary text-sm flex items-center gap-1">
                  <RxExternalLink />
                  LiveLink
                </button>
              </a>
            </div>
            {/* Description */}
            <p className="pt-3 mb-8 text-accent text-xl">{description}</p>
            {/* // */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
              {/* Features */}
              <div className="">
                <h2 className="text-xl flex items-center gap-2">
                  <MdOutlineFeaturedPlayList />
                  Features
                </h2>
                <div className="mt-5">
                  <ul className="text-accent">
                    {features?.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start justify-start gap-2"
                      >
                        <span className="h-4 w-4 ">
                          <lord-icon
                            target="li"
                            src="https://cdn.lordicon.com/yqzmiobz.json"
                            trigger="hover"
                            colors="primary:#16c79e"
                            style={{ width: "16px", height: "16px" }}
                          ></lord-icon>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Duration */}
                <div className="mt-5 grid gap-1">
                  <h2 className="flex items-center gap-2 text-xl text-bold">
                    <MdOutlineCalendarToday />
                    Duration of Project
                  </h2>
                  <p className="text-accent text:xm mt-3">{duration}</p>
                </div>
              </div>
              {/* Technologies */}
              <div className="">
                <div className="">
                  <h2 className="flex items-center gap-2 text-xl text-bold">
                    <HiCode />
                    Technologies
                  </h2>
                  <div className="flex flex-wrap gap-2 text-base-100 mt-5">
                    {technologies?.map((tech, index) => { 
                      // generate a random color
                      const color =
                        "#" + Math.floor(Math.random() * 16777215).toString(16);

                      // determine the brightness of the color using the HSP color model
                      const hsp = Math.sqrt(
                        0.299 * parseInt(color.substring(1, 3), 16) ** 2 +
                          0.587 * parseInt(color.substring(3, 5), 16) ** 2 +
                          0.114 * parseInt(color.substring(5, 7), 16) ** 2
                      );

                      // generate a contrasting color for the text
                      const textColor = hsp > 127.5 ? "#000000" : "#ffffff";
                      return (
                        <span
                          key={index}
                          className={`py-2 px-4 text-sm text-white rounded-full`}
                          style={{ backgroundColor: color, color: textColor}}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                  <div className="mt-5">
                    <h2 className="flex items-center gap-2 text-xl text-bold
                    
                    ">
                      <AiFillGithub />
                      Source Code
                    </h2>
                    <div className="mt-3">
                      <div className="flex justify-between gap-4">
                        <a
                          href={" "}
                          className="flex items-center gap-2 text-primary"
                        >
                          <AiFillGithub />
                          Client Side
                        </a>
                        <a
                          href={" "}
                          className="flex items-center gap-2 text-red-300"
                        >
                          <CiServer />
                          Server Side
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Images */}
              <div className="">
                <h2 className='flex items-center gap-2 text-xl'>
                  <BsCamera />
                  Images
                </h2>
                <PhotoProvider>
                  <div className="flex flex-wrap gap-3 mt-3">
                    {images?.map((image, index) => {
                      return (
                        <PhotoView key={index} src={image} >
                          <img src={image} alt="" className="w-full h-42 object-contain
                          hover:scale-105
                          transition-all duration-300
                          cursor-pointer
                          rounded-md" />
                        </PhotoView>
                      )
                     })}
                  </div>
               </PhotoProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
