import React, { useRef } from 'react'
import SectionHeader from '../../../components/utils/SectionHeader'
import SectionTitle from '../../../components/utils/SectionTitle'

import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export default function ContractMe() {
  const formData = useRef(null)

  const handleForm = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
  
    const data = new FormData(formData.current)
    const formJSON = Object.fromEntries(data.entries())
    console.log(formJSON)
    const {User_name, User_email, User_message} = formJSON
    emailjs
      .send(
        "service_1vk5sas",
        "template_pcyospr",
        { from_name: User_email, to_name: 'Gm-Shuvo', message: User_message, reply_to: User_email},
        "GHsFsu_ZNZJgtPLES"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset()
          toast.success("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );


  }

  return (
    <section id="contact" className="mb-16">
      <SectionTitle
        props={{
          icon: "https://cdn.lordicon.com/bhfjfgqz.json",
          title: "Contact Me",
        }}
      />
      <SectionHeader>
        Let's work <span className="text-primary">Together</span>
      </SectionHeader>
      <div className="">
        <form ref={formData} onSubmit={handleForm} classNam="">
          <div className="flex flex-col md:flex-row lg:flex-row gap-10">
            <div className=" w-10/12 md:w-1/2 grid gap-2">
              <label htmlFor="" className="text-sm text-accent text-bold">
                Full Name
                <span className="text-error">*</span>
              </label>
              <input
                type="text"
                name="User_name"
                id="User_name"
                placeholder="Enter name"
                className="outline-none
                bg-transparent
                border-b-[1.5px]
                pb-2
                focus:border-primary
                placeholder:accent-accent
                transition: all ease-in-out 0.3s
                duration-300
                text-primary
                "
                required
              />
            </div>
            <div className="w-10/12 md:w-1/2 grid gap-2">
              <label htmlFor="" className="text-sm text-accent text-blod">
                Email
                <span className="text-error">*</span>
              </label>
              <input
                type="email"
                name="User_email"
                id="User_email"
                placeholder="Enter email"
                className="outline-none
                bg-transparent
                border-b-[1.5px]
                pb-2
                focus:border-primary
                placeholder:accent-accent
                transition: all ease-in-out 0.3s
                duration-300
                text-primary
                "
                required
              />
            </div>
          </div>
          <div className="mt-10 grid gap-3">
            <label htmlFor="" className="text-sm text-accent text-blod">
              Message
            </label>
            <textarea
              name="User_message"
              id="User_message"
              cols="10"
              rows="5"
              placeholder="Enter message"
              className="outline-none bg-transparent p-4 rounded-md 
              border-[1px]
              focus:border-b-primary-focus placeholder:accent-accent"
            />
          </div>
          <hr />
          <div className="mt-10 flex justify-start">
            <input
              type="submit"
              value="Send"
              className="btn btn-wide btn-primary rounded-md "
            />
          </div>
        </form>
      </div>
    </section>
  );
}
