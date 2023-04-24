import React from 'react'
import { useQuery } from '@tanstack/react-query'
import SectionTitle from '../../../components/utils/SectionTitle'
import SectionHeader from '../../../components/utils/SectionHeader'
import SkillCard from '../../../components/utils/SkillSets'

export default function Skills() {
  const { data: skills = [] } = useQuery(['skills'], () => fetch('https://portfolio-backend-sepia-seven.vercel.app/skills').then(res => res.json()))
  // console.log(skills)
  return (
    <section id= 'skills'>
      <SectionTitle
        props={{
          icon: "https://cdn.lordicon.com/svbmmyue.json",
          title: "Skills",
        }}
      />
      <SectionHeader>
        My <span className="text-primary">Advantages</span>
      </SectionHeader>
      <div className='grid grid-cols-1 gap-7 mt-16 mb-16'>
        {skills?.map((skill, index) => {
          return (
            <SkillCard key={index} index = {index} skill={skill} />
          )
        })}
      </div>
    </section>
  );
}
