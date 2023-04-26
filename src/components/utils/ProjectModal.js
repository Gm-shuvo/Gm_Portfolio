import React from 'react'
import { RxExternalLink } from 'react-icons/rx'
export default function ProjectModal({
  data, setModal
}) {
  const { name, liveLink, description, features, duration, technologies, iveLink, client, server, images } = data;
  console.log(data)
  return (
    <div>
      <input type="checkbox" id="project-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box 
        w-11/12 max-w-5xl relative">
          <label
            htmlFor="project-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {/* Projects Contents */}
          <div className="flex justify-between lg:pr-8 pr-3">
            <h3 text-3xl text-bold text-primary>hiii</h3>
            <a href={liveLink}>
              <button className="btn btn-sm rounded-full px-5 btn-primary text-sm flex items-center gap-1">
                <RxExternalLink />
                Demo
              </button>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
