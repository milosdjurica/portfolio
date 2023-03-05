import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLinktree } from "react-icons/si/index";

type Props = {
  title: string;
};

function TitleAndIcons({ title }: Props) {
  return (
    <div className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0">
      <h2 className="text-4xl tracking-wider font-semibold green-underline">
        {title}
      </h2>
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
    </div>
  );
}

export default TitleAndIcons;
