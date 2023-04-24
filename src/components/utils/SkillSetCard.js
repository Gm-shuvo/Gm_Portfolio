import React from 'react'

export default function SkillSetCard({icon, name}) {
  return (
    <div className='w-24 h-36 flex flex-col items-center justify-center space-y-4'>
      <img src={icon} alt="" className='w-14 h-14 object-contain'/>
      <p>{name}</p>
    </div>
  )
}
