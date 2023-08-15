import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../../../components/utils/ProjectCard";
import ProjectModal from "../../../components/utils/ProjectModal";
import SectionHeader from "../../../components/utils/SectionHeader";
import SectionTitle from "../../../components/utils/SectionTitle";
import { projects } from "../../../Data";
export default function Projects() {
  const [modal, setModal] = useState([])
  console.log("🚀 ~ file: Projects.js:10 ~ Projects ~ modal:", modal)
  
  const handleModal = (project) => {
    window.my_modal.showModal();
    setModal(project);
  }

  
  const props={
    icon: "https://cdn.lordicon.com/fpmskzsv.json",
    title: "Projects",
  }
  return (
    <section id="projects">
      <SectionTitle
        props={props}
      />
      <SectionHeader>
        My <span className="text-primary">Projects</span>
      </SectionHeader>
      <div className="projects flex flex-wrap gap-8">
        {projects?.slice(0, 2).map((project, index) => {
          // console.log(project);
          return (
            
              <ProjectCard
                key={index}
                project={project}
                handleModal={handleModal}
                
              />
            
          );
        })}
      </div>
      <div className="mt-10 flex justify-end">
        <Link
          to="/my_projects"
          className="flex item-center gap-1 text-xl leading-7 hover:text-primary duration-300 transition-colors ease-in-out"
        >
          All Projects
          <lord-icon
            target="div"
            src="https://cdn.lordicon.com/zmkotitn.json"
            trigger="loop"
            class="current-color"
            style={{
              height: "24px",
              width: "24px",
              paddingTop: "2px",
            }}
          ></lord-icon>
        </Link>
      </div>
      <ProjectModal data={modal} setModal={setModal} />

    </section>
  );
}
