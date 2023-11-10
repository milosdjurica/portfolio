import React from "react";
import IconHolder from "./IconHolder";
import ExpressIcon from "./skillsIcons/ExpressIcon";
import NestjsIcon from "./skillsIcons/NestjsIcon";
import NodejsIcon from "./skillsIcons/NodejsIcon";
import SpringBootIcon from "./skillsIcons/SpringBootIcon";

function Backend() {
  return (
    <div className="text-center space-y-5">
      <h2 className="green-underline p-2 font-bold text-2xl">BACK END</h2>
      <div className="flex flex-wrap justify-center items-center">
        <IconHolder title="NestJS" icon={<NestjsIcon />} />
        <IconHolder title="Express" icon={<ExpressIcon />} />
        <IconHolder title="Node.js" icon={<NodejsIcon />} />
        <IconHolder title="SpringBoot" icon={<SpringBootIcon />} />
      </div>
    </div>
  );
}

export default Backend;
