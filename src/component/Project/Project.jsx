import { ProjectData } from '../../utils/constant.js'

import ProjectSeven from './ProjectCard/ProjectSeven.jsx'
import ProjectEigth from './ProjectCard/ProjectEigth.jsx'

function Project() {
    return (
        <section
            id="project"
            className="font-abel relative w-[100%] md:w-[90%] mt-20 p-3  h-auto flex flex-col gap-16 justify-center items-center "
        >
            <h1 className=" w-full text-center text-[3em]">Projects</h1>
            <div className="relative z-10 justify-center  items-center my-8 flex  w-[70%] md:w-full h-full gap-x-24 gap-y-20 flex-wrap md:gap-y-10 ">
                {ProjectData.map((el, i) => (
                    <ProjectEigth key={`project-${i}`} el={el} index={i + 1} />
                ))}
            </div>
            <ProjectSeven />
        </section>
    )
}

export default Project
