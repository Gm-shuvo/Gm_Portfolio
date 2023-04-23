import React from 'react'

export default function Banner() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center md:items-end lg:items-end mt-10">
      <div className="flex gap-20">
        <div>
          <span
            className="lg:text-[65px]
              md:text-[50px]
              text-[28px] leading-[100px] text-primary"
          >
            2+
          </span>
          <p className="uppercase lg:text-2xl md:text-2xl text-md text-accent">
            Years of <br />
            <span>Expriences</span>
          </p>
        </div>

        <div>
          <span
            className="lg:text-[65px]
              md:text-[50px]
              text-[28px] leading-[100px] text-primary"
          >
            10+
          </span>
          <p className=" uppercase lg:text-2xl md:text-2xl text-md text-accent">
            Projects <br />
            <span>completed</span>
          </p>
        </div>
      </div>
      <a href="#projects" className="flex items-center gap-2 text-2xl">
        My Projects
        <lord-icon
          target="div"
          src="https://cdn.lordicon.com/rxufjlal.json"
          trigger="loop"
          class="current-color"
          style={{ width: "40px", height: "40px" }}
        ></lord-icon>
      </a>
    </div>
  );
}
