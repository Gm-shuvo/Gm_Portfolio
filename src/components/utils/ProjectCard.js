import React from "react";
// import "../../assets/styles/project-card.css";

export default function ProjectCard({ project, setModal, handleModal }) {
  const { name, img, liveLink, description, technologies } = project;

  return (
    <div className=" md:w-[300px] lg:w-[400px]  project-card hover:shadow-lg hover:border-2  hover:border-primary hover:cursor-pointer rounded-sm ">
      <img
        src={img}
        alt={name}
        className="w-[100%] h-full rounded-sm object-cover "
      />
      <div className=" group w-full h-full project-card-content">
        <div className="px-3 p-2 flex flex-col items-start">
          <h1 className="text-base md:text-lg font-bold mb-4">{name}</h1>
          <p className="text-sm md:text-md text-accent ">{description}</p>
          <div className="">
            <div className="flex flex-wrap gap-2 text-xm text-base-100 mt-3 mb-3">
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
                    className={` text-xs py-[2px] px-[6px] text-center text-white rounded-full`}
                    style={{ backgroundColor: color, color: textColor }}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="flex gap-4  bottom-1 mt-3 mb-2 md:mb-4">
            <button
              className="btn btn-sm rounded-full px-5 btn-primary text-sm hover:text-white"
              onClick={() => handleModal(project)}
            >
              Details
            </button>
            <a href={liveLink} target="_blank" rel="noreferrer">
              <button className="btn btn-sm rounded-full px-5 text-sm hover:text-white hover:btn-primary">
                Demo
              </button>
            </a>
          </div>
        </div>
        <div className="overlay" />
      </div>
    </div>
  );
}
