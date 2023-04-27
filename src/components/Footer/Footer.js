import React from 'react'

export default function Footer() {
  return (
    <section id="footer">
      <div className="mt-10 ">
        <div className="absolute w-full right-0 left-0 flex h-4 items-center justify-center text-sm">
          <p>
            Allrights reserved to &copy;Gm-shuvo
            <span className="text-primary"> {new Date().getFullYear()}</span>
            {" | "}
            <a href="/login" className="underline mr-4">
              Login
            </a>
            <a href="/resource" className="underline">
              Resource
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
