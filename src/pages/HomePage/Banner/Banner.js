import React from 'react'
import {scrollToSection} from '../../../components/utils/ScrollToSection';

export default function Banner() {
  // const handleScroll = (id) => {
  //   const section = document.getElementById(id);
  //   console.log(section);
  //   if(section){
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // }
  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-between items-start md:items-end lg:items-end mt-10">
      <div className="flex gap-20">
        <div>
          <span
            className="lg:text-[65px]
              md:text-[50px]
              text-[40px] leading-[100px] text-primary"
          >
            2+
          </span>
          <p className="uppercase lg:text-2xl md:text-2xl text-lg text-accent -mt-2">
            Years of <br />
            <span>Expriences</span>
          </p>
        </div>

        <div>
          <span
            className="lg:text-[65px]
              md:text-[50px]
              text-[40px] leading-[100px] text-primary"
          >
            10+
          </span>
          <p className=" uppercase lg:text-2xl md:text-2xl text-lg text-accent -mt-2">
            Projects <br />
            <span>completed</span>
          </p>
        </div>
      </div>
      <div onClick={()=> scrollToSection('projects')} className="uppercase flex items-center  gap-2 md:text-2xl text-lg md:mt-0 mt-[40px] font-semibold cursor-pointer hover:text-primary">
        My Projects
        <lord-icon
          target="div"
          src="https://cdn.lordicon.com/rxufjlal.json"
          trigger="loop"
          class="current-color"
          style={{ width: "24px", height: "24px" }}
        ></lord-icon>
      </div>
    </div>
  );
}
