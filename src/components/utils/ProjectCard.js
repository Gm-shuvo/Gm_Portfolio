import React, { useState } from "react";
import "../../assets/styles/project-card.css";

export default function ProjectCard({  project, index, setModal, setShowModal, showModal, modal }) {
  const { name, img, liveLink, description } = project;
  

  const handleModal = () => {
    modal.length === 0  && setModal(project);
    !showModal && setShowModal(true);
  };

  return (
    <div className="h-[250px] project-card hover:shadow-lg hover:border-2  hover:border-primary rounded-3xl ">
      <img
        src={img}
        alt={name}
        className="w-full h-full rounded-3xl object-cover "
      />
      <div className="project-card-content">
        <div className="m-7">
          <h1 className="text-2xl font-bold mb-4">{name}</h1>
          <p>{description}</p>
          <div className="flex gap-4 mt-12">
            <a href={liveLink} target="_blank" rel="noreferrer">
              <button className="btn btn-sm rounded-full px-5 btn-primary text-sm hover:text-white">
                Demo
              </button>
            </a>
            <label htmlFor="project-modal" className='btn btn-sm px-7 hover:btn-primary' onClick={handleModal}>Details</label>
          </div>
        </div>
        <div className="overlay" />
      </div>
    </div>
  );
}
