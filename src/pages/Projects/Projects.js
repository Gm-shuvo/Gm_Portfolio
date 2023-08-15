import React, { useState } from 'react'
import SectionTitle from '../../components/utils/SectionTitle'
import SectionHeader from '../../components/utils/SectionHeader'
import { projects } from '../../Data'

import ProjectCard from '../../components/utils/ProjectCard'
import ProjectModal from '../../components/utils/ProjectModal'

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
        {projects?.map((project, index) => {
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
      
      <ProjectModal data={modal} setModal={setModal} />

    </section>
  );
}