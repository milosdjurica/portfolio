import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

function Icons() {
  return (
    <>
      <div className="flex space-x-10">
        <a href="https://www.linkedin.com/in/milosdjurica/">
          <FaLinkedin
            className="text-3xl xl:text-4xl 
          hover:green-text ease-in duration-200"
          />
        </a>
        <a href="https://github.com/milosdjurica">
          <FaGithub
            className="text-3xl xl:text-4xl 
          hover:green-text ease-in duration-200"
          />
        </a>
        <a href="https://milosdjurica-linktree.vercel.app/">
          <SiLinktree
            className="text-3xl xl:text-4xl 
          hover:green-text ease-in duration-200"
          />
        </a>
      </div>
    </>
  );
}

export default Icons;
