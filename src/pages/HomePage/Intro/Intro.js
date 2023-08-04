import React from 'react'
import SelectionTitle from '../../../components/utils/SectionTitle'
import Banner from "../Banner/Banner";

export default function Intro() {
  const props = {
    icon: "https://cdn.lordicon.com/osuxyevn.json",
    title: "Introduction",
  };
  return (
    <section className="w-full mb-16" id="home">
      <SelectionTitle props={props} />
      <div className="">
        <h1 className="lg:text-[65px] lg:leading-[75px] md:text-[50px] md:leading-[60px] text-[28px] leading-[40px]">
          Hey, I'm <span className="text-primary">Gm Shuvo</span>
          <br /> Full Stack Developer
        </h1>
        <p className="mt-6 lg:text-2xl md:text-2xl text-md text-accent">
          I am a MERN Stack developer who loves to create dynamic and responsive
          web applications.
        </p>
        <Banner />
      </div>
    </section>
  );
}
