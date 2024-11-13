import React from "react";
import {
  BlurBlue,
  BlurBlue2,
  BlurWhite,
  BlurWhite2,
  ProjectSection,
} from "./project.styles";
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
    <section
      id="project"
      className="font-abel relative w-[100%] lg:w-[90%] p-3 gap-11 pt-28 h-auto sm:h-[900px] justify-center flex flex-col "
    >
      <h1 className=" w-full text-center text-[3em]">Projects</h1>
      <div className="relative  justify-center items-center my-8 flex flex-col gap-4 w-full h-full flex-wrap ">
        {/*    <ProjectOne />
        <ProjectTwo />
        <ProjectThree />
        <ProjectFour />
       */}
        <div className="sm:absolute lg:z-30 z-20  sm:h-[180px]  sm:w-[45%] flex flex-col gap-4 sm:flex-row justify-center items-center ">
          <ProjectSeven />
          <ProjectEigth />
        </div>
        <div className="sm:absolute z-20 lg:z-30 sm:w-[60%] sm:h-[180px] flex flex-col gap-4 sm:flex-row justify-center items-center ">
          <ProjectFive />
          <ProjectSix />
        </div>
      </div>
    </section>
  );
}

export default Project;
