import React from 'react'
import { GrFacebook, GrGithub, GrLinkedin } from 'react-icons/gr'
import { FaWhatsapp } from 'react-icons/fa'
import SocialIcon from '../utils/SocialIcon'
const slinks = [
  {
    icon: <GrFacebook/>,
    link: 'https://www.facebook.com/gmshuvo',
  },
  {
    icon: <GrGithub />,
    link: 'https://github.com/gmshuvo',
  },
  {
    icon: <GrLinkedin />,
    link: 'https://www.linkedin.com/in/gmshuvo',
  },
  {
    icon: <FaWhatsapp />,
    link: 'https://wa.me/8801711-00000',
  }

]

export default function SocialLinks() {
  return (
    <div className="flex gap-4 text-xl text-white">
      {
        slinks.map((link, index) => {
          return (
            <SocialIcon key={index} icon={link.icon} link={link.link} />
          )
        })
      }
    </div>
  )
}
