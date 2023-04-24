import React from 'react'
import { FaServer } from "react-icons/fa";
import { HiOutlineCode } from "react-icons/hi";
import { BsServer } from "react-icons/bs";
import { MdSettingsSuggest } from "react-icons/md";
import SkillSetCard from './SkillSetCard';
export default function SkillCard({ skill, index }) {
  const { setsName, skillSet } = skill;
  console.log(skillSet)
  return (
    <div className='w-full'>
      <h2 className='flex items-center text-2xl gap-2'>
        {index === 0 && <HiOutlineCode className="text-[18px]" />}
        {index === 1 && <FaServer className="text-[18px]" />}
        {index === 2 && <MdSettingsSuggest className="text-[18px]" />}
        {index === 3 && <BsServer className="text-[18px]" />}
        {setsName}
      </h2>
      <div className="mt-10 mb-16 flex flex-wrap gap-8 ">
        {
          skillSet?.map(({icon, name}, index) => {
            return (
              <div className="flex flex-col hover:text-primary items-center border-[1px] hover:border-primary rounded-3xl text-center 
              "
                data-aos='fade-up'
                data-aos-delay={`${(index % 6) * 100 + 100}`}
              >
                <SkillSetCard key={index} icon={icon} name={name} />
              </div>
            );
           })
        }
      </div>
    </div>
  )
}
