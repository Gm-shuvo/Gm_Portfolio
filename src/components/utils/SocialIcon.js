import React from 'react'

export default function SocialIcon({icon, link}) {
  return (
    <div className="flex items-center justify-center">
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="border-[1px] border-[#cfcfcfec] rounded-full p-[12px] hover:border-green-500 transition-all duration-300 ease-in-out"
      >
        {icon}
      </a>
    </div>
  );
}
