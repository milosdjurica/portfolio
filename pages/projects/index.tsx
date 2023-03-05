import TitleAndIcons from "@/components/TitleAndIcons";
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import linktreeImg from "@/public/assets/linktree/linktree.png";

function Projects() {
  return (
    <>
      <TitleAndIcons title="MY PROJECTS" />

      <div
        className="min-w-full
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <ProjectCard
          title="Linktree Clone"
          link="/projects/linktree"
          img={linktreeImg}
        />
        <ProjectCard
          title="Linktree Clone"
          link="/projects/linktree"
          img={linktreeImg}
        />
        <ProjectCard
          title="Linktree Clone"
          link="/projects/linktree"
          img={linktreeImg}
        />
        <ProjectCard
          title="Linktree Clone"
          link="/projects/linktree"
          img={linktreeImg}
        />
        <ProjectCard
          title="Linktree Clone"
          link="/projects/linktree"
          img={linktreeImg}
        />
      </div>
    </>
  );
}

export default Projects;
