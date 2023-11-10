import TitleAndIcons from "@/src/components/TitleAndIcons";
import Backend from "@/src/components/skills/Backend";
import Databases from "@/src/components/skills/Databases";
import Frontend from "@/src/components/skills/Frontend";
import Other from "@/src/components/skills/Other";
import ProgrammingLanguages from "@/src/components/skills/ProgrammingLanguages";
import React from "react";

function Skills() {
  return (
    <>
      <TitleAndIcons title="MY SKILLS" />

      <div className="flex flex-col justify-center items-center  space-y-10">
        <Frontend />
        {/* // TODO add SpringBoot */}
        <Backend />
        <ProgrammingLanguages />
        {/* // TODO add PostgreSQL and Supabase  */}
        <Databases />
        {/* // TODO add IntelliJ  */}
        <Other />
      </div>
    </>
  );
}

export default Skills;
