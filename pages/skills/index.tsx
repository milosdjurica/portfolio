import Backend from "@/components/skills/Backend";
import Databases from "@/components/skills/Databases";
import Frontend from "@/components/skills/Frontend";
import Other from "@/components/skills/Other";
import ProgrammingLanguages from "@/components/skills/ProgrammingLanguages";
import TitleAndIcons from "@/components/TitleAndIcons";
import React from "react";

function Skills() {
  return (
    <>
      <TitleAndIcons title="MY SKILLS" />

      <div className="flex flex-col justify-center items-center  space-y-10">
        <Frontend />
        <Backend />
        <ProgrammingLanguages />
        <Databases />
        <Other />
      </div>
    </>
  );
}

export default Skills;
