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

  return (
    <section id="projects">
      <SectionTitle
        props={{
          icon: "https://cdn.lordicon.com/svbmmyue.json",
          title: "Projects",
        }}
      />
      <SectionHeader>
        My <span className="text-primary">Projects</span>
      </SectionHeader>
      <div className="projects">
        {projects?.slice(0, 4).map((project, index) => {
          // console.log(project);
          return (
            <>
              <ProjectCard
                key={index}
                project={project}
                setModal={setModal}
                setShowModal={setShowModal}
                showModal={showModal}
                modal={modal}
              />
            </>
          );
        })}
      </div>
      <div className="mt-10 flex justify-end">
        <Link
          to="/projects"
          className="flex item-center gap-1 text-xl leading-7 "
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
