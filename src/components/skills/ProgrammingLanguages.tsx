import React from "react";
import IconHolder from "./IconHolder";
import JavascriptIcon from "./skillsIcons/JavascriptIcon";
import TypescriptIcon from "./skillsIcons/TypescriptIcon";
import JavaIcon from "./skillsIcons/JavaIcon";

function ProgrammingLanguages() {
  return (
    <div className="text-center space-y-5">
      <h2 className="green-underline p-2 font-bold text-2xl">
        PROGRAMMING LANGUAGES
      </h2>
      <div className="flex flex-wrap justify-center items-center">
        <IconHolder title="JavaScript" icon={<JavascriptIcon />} />
        <IconHolder title="TypeScript" icon={<TypescriptIcon />} />
        <IconHolder title="Java" icon={<JavaIcon />} />
      </div>
    </div>
  );
}

export default ProgrammingLanguages;
