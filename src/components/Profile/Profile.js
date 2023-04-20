import React from 'react'
import profile from '../../assets/images/gmshuvo.jpeg'

import SocialLinks from '../SocialLinks/SocialLinks'

export default function Profile() {
  return (
    <div className="lg:w-[365px] rounded-3xl border-[1px] border-[#cfcfcfec] px-6 py-10 sticky top-16">
      <div className="flex flex-col  gap-6 mb-6">
        <img
          src={profile}
          alt="profile-img"
          className="w-[260px] h-[260px] rounded-3xl object-cover mx-auto"
        />
        <div className="flex flex-col items-center text-center gap-4 mt-3">
          <div className=" text-4xl font-bold text-[#42f1b7]">Gm Shuvo</div>
          <div className="text-white text-2xl leading-[20px]">
            Full-Stack
            <br className="leading-[14px]" /> Developer
          </div>

          <div className="flex flex-col items-center">
            <SocialLinks />
            <button className="btn btn-wide btn-primary mt-6">Hier Me</button>
          </div>
        </div>
      </div>
    </div>
  );
}
