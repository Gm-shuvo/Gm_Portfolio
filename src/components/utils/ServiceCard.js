import React from 'react'
import { HiOutlineCode } from 'react-icons/hi'
import { FiCodesandbox } from 'react-icons/fi'
import { SiReact } from 'react-icons/si'
export default function ServiceCard({service, details, index}) {
  return (
    <div
      className="hover:text-primary hover:border-primary border-[1px] border-accent p-6 rounded-2xl 
    "
      data-aos="fade-up"
      data-aos-delay={`${(index % 6) * 100 + 100}`}
    >
      {index === 0 && <HiOutlineCode className='text-[40px]' />}
      {index === 1 && <SiReact className='text-[40px]' />}
      {index === 2 && <FiCodesandbox className='text-[40px]' />}
      <h1 className="lg:text-2xl md:text-2xl text-xl mt-3 lg:font-normal md:font-normal font-bold ">
        {service}
      </h1>
      <p className="text-accent mt-3 text-sm">{details}</p>
    </div>
  );
}
