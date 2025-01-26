import React from 'react'
import {
    BlurBlue,
    BlurBlue2,
    BlurWhite,
    BlurWhite2,
    ProjectSection,
} from './project.styles'
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
            className="font-abel relative w-[100%] md:w-[90%] p-3 h-auto flex flex-col gap-16 justify-center items-center "
        >
            <h1 className=" w-full text-center text-[3em]">Projects</h1>
            <div className="relative  justify-center  items-center my-8 flex flex-col  w-[70%] md:w-full h-full gap-x-24 gap-y-20 md:gap-y-10 ">
                {/*    <ProjectOne />
        <ProjectTwo />
        <ProjectThree />
        <ProjectFour />
       */}
                <div className="z-10  isolate  h-[800px] md:h-[450px] gap-x-24  gap-y-10 flex flex-col-reverse  md:flex-row justify-center items-center ">
                    <ProjectSeven />
                    <ProjectEigth />
                </div>
                <div className=" isolate z-8   h-[800px] md:h-[450px] gap-x-24 flex flex-col gap-y-10 md:flex-row justify-center items-center ">
                    <ProjectFive />
                    <ProjectSix />
                </div>
            </div>
        </section>
    )
}

export default Project
