import React from 'react'
import ServiceCard from '../../../components/utils/ServiceCard';
import SectionHeader from '../../../components/utils/SectionHeader';
import SectionTitle from '../../../components/utils/SectionTitle';;

export default function Services() {
  const services = [
    {
      "id": 1,
      "service": "Frontend Web Development",
      "details": "I can convert any psd or Figma file into mobile or tab responsive web application. Capable of doing project in clean code."
    },
    {
      "id": 2,
      "service": "React JS Development",
      "details": "I have worked on 8 different React JS projcts. Also have a little working experience with Next JS."
    },
    {
      "id": 3,
      "service": "Full Stack Development",
      "details": "With the Frontend I am skilled in Node JS, Express, JWT and Firebase. Proficient in implementing Mongo DB."
    },
  ]
  const props = {
    icon: "https://cdn.lordicon.com/ofwpzftr.json",
    title: "Services",
  };
  return (
    <section id="services">
      <SectionTitle props={props} />
      <SectionHeader>
        My <span className="text-primary">Specializations</span>
      </SectionHeader>
      <div
        className=" grid grid-cols-1 md:grid-cols-2 gap-7 mt-16 mb-16"
      >
        {services.map(({ service, details }, index) => {
          return (
            <ServiceCard
              key={index}
              service={service}
              details={details}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
}
