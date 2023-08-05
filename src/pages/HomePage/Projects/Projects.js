import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../../../components/utils/ProjectCard";
import ProjectModal from "../../../components/utils/ProjectModal";
import SectionHeader from "../../../components/utils/SectionHeader";
import SectionTitle from "../../../components/utils/SectionTitle";
import { projects } from "../../../Data";
export default function Projects() {
  const [modal, setModal] = useState([]);
  const [showModal, setShowModal] = useState(false);
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
      <div className="projects grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects?.slice(0, 4).map((project, index) => {
          // console.log(project);
          return (
            
              <ProjectCard
                key={index}
                project={project}
                setModal={setModal}
                setShowModal={setShowModal}
                showModal={showModal}
                modal={modal}
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
