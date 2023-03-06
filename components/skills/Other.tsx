import React from "react";
import IconHolder from "./IconHolder";
import GithubIcon from "./skillsIcons/GithubIcon";
import GitIcon from "./skillsIcons/GitIcon";
import LinuxIcon from "./skillsIcons/LinuxIcon";
import PostmanIcon from "./skillsIcons/PostmanIcon";
import VsCodeIcon from "./skillsIcons/VsCodeIcon";

function Other() {
  return (
    <div className="text-center space-y-5">
      <h2 className="green-underline p-2 font-bold text-2xl">OTHER</h2>
      <div className="flex flex-wrap justify-center items-center">
        <IconHolder title="VSCode" icon={<VsCodeIcon />} />
        <IconHolder title="Git" icon={<GitIcon />} />
        <IconHolder title="Github" icon={<GithubIcon />} />
        <IconHolder title="Postman" icon={<PostmanIcon />} />
        <IconHolder title="Linux" icon={<LinuxIcon />} />
      </div>
    </div>
  );
}

export default Other;
