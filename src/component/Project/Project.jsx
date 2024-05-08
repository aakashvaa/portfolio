import React from 'react'
import { BlurBlue, BlurWhite } from './project.styles'
import ProjectOne from './ProjectCard/ProjectOne.jsx'
import ProjectTwo from './ProjectCard/ProjectTwo.jsx'
import ProjectThree from './ProjectCard/ProjectThree.jsx'
import ProjectFour from './ProjectCard/ProjectFour.jsx'
import ProjectFive from './ProjectCard/ProjectFive.jsx'
import ProjectSix from './ProjectCard/ProjectSix.jsx'
import ProjectSeven from './ProjectCard/ProjectSeven.jsx'
import ProjectEigth from './ProjectCard/ProjectEigth.jsx'

function Project() {
  return (
    <section
      id="project"
      className="font-abel relative w-[80%] p-3 gap-11 pt-28 sm:h-[900px] justify-center flex flex-col "
    >
      <h1 className=" w-full text-center text-[3em]">Projects</h1>
      <BlurBlue />
      <BlurWhite />
      <div className="relative  justify-center items-center flex flex-col gap-y-4 w-full h-full flex-wrap ">
        <ProjectOne />
        <ProjectTwo />
        <ProjectThree />
        <ProjectFour />
        <div className="sm:absolute lg:z-30 z-0  w-[250px] flex flex-col  sm:justify-between sm:h-[95%] lg:h-[70%] ">
          <ProjectSeven />
          <ProjectEigth />
        </div>
        <div className="sm:absolute z-20 sm:w-[60%] sm:h-[180px] flex flex-col sm:flex-row justify-between items-center ">
          <ProjectFive />
          <ProjectSix />
        </div>
      </div>
    </section>
  )
}

export default Project
