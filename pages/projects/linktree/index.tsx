import TitleAndIcons from "@/components/TitleAndIcons";
import React from "react";
import linktreeImg from "@/public/assets/linktree/linktree.png";
import TechnologiesUsed from "@/components/project/TechnologiesUsed";
import DemoCodeProject from "@/components/project/DemoCodeProject";

function Linktree() {
  return (
    <>
      <TitleAndIcons title="LINKTREE CLONE" />

      <div className="space-y-20">
        <DemoCodeProject
          image={linktreeImg}
          demo="https://milosdjurica-linktree.vercel.app/"
          code="https://github.com/milosdjurica/nextjs-linktree"
        />

        <div
          className="space-y-10 md:space-y-0
        flex flex-col md:flex-row justify-around"
        >
          <div className="space-y-5 w-full">
            <h4 className="text-2xl green-underline font-bold inline-block">
              ABOUT PROJECT
            </h4>
            <p className="w-[90%]">
              This was a simple project but an interesting one. In this project
              i learned how to deploy project on vercel.
            </p>
          </div>

          <TechnologiesUsed
            technologies={["Next.js", "React", "Tailwind", "Vercel"]}
          />
        </div>
      </div>
    </>
  );
}

export default Linktree;
