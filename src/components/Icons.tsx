import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

function Icons() {
  return (
    <>
      <div className="flex space-x-5 sm:space-x-10 text-2xl md:text-3xl xl:text-4xl">
        <a href="https://www.linkedin.com/in/milosdjurica/">
          <FaLinkedin className="hover:green-text ease-in duration-200" />
        </a>
        <a href="https://github.com/milosdjurica">
          <FaGithub className="hover:green-text ease-in duration-200" />
        </a>
        {/* <a href="https://milosdjurica-linktree.vercel.app/">
          <SiLinktree className="hover:green-text ease-in duration-200" />
        </a> */}
      </div>
    </>
  );
}

export default Icons;
