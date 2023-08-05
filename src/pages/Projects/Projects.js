import React, { useState } from 'react'
import SectionTitle from '../../components/utils/SectionTitle'
import SectionHeader from '../../components/utils/SectionHeader'
import { projects } from '../../Data'

import ProjectCard from '../../components/utils/ProjectCard'
import ProjectModal from '../../components/utils/ProjectModal'

export default function Projects() {
  const [modal, setModal] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const props={
    icon: "https://cdn.lordicon.com/fpmskzsv.json",
    title: "Projects",
  }
  return (
    <section >
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
      <ProjectModal data={modal} setModal={setModal} />
    </section>
  )
}
