import React from "react";
import { BlurBlue, BlurWhite, ProjectSection } from "./project.styles";
import ProjectOne from "./ProjectCard/ProjectOne.jsx";
import ProjectTwo from "./ProjectCard/ProjectTwo.jsx";
import ProjectThree from "./ProjectCard/ProjectThree.jsx";
import ProjectFour from "./ProjectCard/ProjectFour.jsx";
import ProjectFive from "./ProjectCard/ProjectFive.jsx";
import ProjectSix from "./ProjectCard/ProjectSix.jsx";
import ProjectSeven from "./ProjectCard/ProjectSeven.jsx";
import ProjectEigth from "./ProjectCard/ProjectEigth.jsx";

function Project() {
  return (
    <ProjectSection id="project">
      <h1 className=" w-full text-center text-[3em]">Projects</h1>
      <BlurBlue />
      <BlurWhite />
      <main className="grid grid-rows-3 h-[300px] place-content-between  gap-x-10 gap-y-3 place-items-between grid-cols-5 ">
        <div className="row-span-3 col-span-1 h-full  w-[100px]  rounded-md bg-[rgba(255,255,255,0.03)] backdrop-blur-xl   ]"></div>
        <div className=" row-span-1 w-full col-span-3 rounded-md bg-[rgba(255,255,255,0.03)] backdrop-blur-xl"></div>
        <div className=" row-span-3 col-span-1 h-full w-[100px] rounded-md  bg-[rgba(255,255,255,0.03)] backdrop-blur-xl"></div>
        <div className="row-span-1 w-full col-span-3 bg-[rgba(255,255,255,0.03)] backdrop-blur-xl rounded-md"></div>
        <div className="row-span-1 w-full col-span-3  bg-[rgba(255,255,255,0.03)] backdrop-blur-xl rounded-md"></div>
      </main>
    </ProjectSection>
  );
}

export default Project;
