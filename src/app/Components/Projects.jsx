"use client"
import React from 'react'
import ProjectTile from '../Components/ProjectTile'
import { motion } from "framer-motion";

const Projects = ({SECTION}) => {
  const ProjectList = SECTION.CONTENT;
  const Expanded = SECTION.Expanded;
  return (
    <motion.div
      className="ml-[15%] mr-[15%]"
    >
    <div className="flex flex-col items-center p-6 w-full">
       <h1 className="text-3xl sm:text-6xl pt-10 pb-5  sm:pb-10 sm:pt-0 font-extrabold bg-clip-text bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-300 via-purple-100 to-stone-200 text-transparent mb-4">
            Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-12 mb-10">
          {ProjectList.map((project,index)=>
            (<ProjectTile key={index} project={project} Expanded={Expanded}/>)
          )}
      </div>
    </div>
    </motion.div>
  )
}

export default Projects