import React from "react";
import linktreeImg from "@/public/assets/linktree/linktree.png";
import homeImg from "@/public/assets/portfolio/home.png";
import weatherImg from "@/public/assets/weather-app/weather.png";
import moviesImg from "@/public/assets/movies-app/big-picture.png";
import TitleAndIcons from "@/src/components/TitleAndIcons";
import ProjectCard from "@/src/components/project/ProjectCard";

function Projects() {
  return (
    <>
      <TitleAndIcons title="MY PROJECTS" />

      <div
        className="min-w-full
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <ProjectCard
          title="Movies App"
          link="/projects/movies"
          img={moviesImg}
        />
        <ProjectCard
          title="Weather App"
          link="/projects/weather-app"
          img={weatherImg}
        />
        <ProjectCard
          title="My Personal Site"
          link="/projects/portfolio"
          img={homeImg}
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
