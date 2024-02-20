import React from "react";

import SocialIcon from "../utils/SocialIcon";
import { slinks } from "../../constents";

export default function SocialLinks() {
  return (
    <div className="flex gap-4 text-xl text-white">
      {slinks.map((link, index) => {
        return <SocialIcon key={index} icon={link.icon} link={link.link} />;
      })}
    </div>
  );
}
