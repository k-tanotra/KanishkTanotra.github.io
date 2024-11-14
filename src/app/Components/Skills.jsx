"use client"
import React from 'react'
import SkillTiles from "../Components/SkillTiles"
import { motion } from "framer-motion";

const Skills = ({data}) => {
  const {ProgrammingLanguages,FrameworksAndLibraries,Tools} = data.CONTENT;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
    <div className="flex flex-col items-center p-6 w-full">
      <h1 className="text-3xl sm:text-6xl pt-10 pb-5  sm:pb-10 sm:pt-0 font-extrabold bg-clip-text bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-300 via-purple-100 to-stone-200 text-transparent">
        Skills
        </h1>
        <div className="flex flex-col sm:flex-row ml-[2%] mr-[2%]">
          <div className="flex flex-col items-center p-5">
            <h1 className="text-2xl font-bold pb-4 bg-clip-text bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-300 via-purple-100 to-stone-200 text-transparent">
              Programming Languages
            </h1>
              <SkillTiles data={ProgrammingLanguages}  />
          </div>
          <div className="flex flex-col items-center p-5">
              <h1 className="text-2xl font-bold pb-4 bg-clip-text bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-300 via-purple-100 to-stone-200 text-transparent">
                Frameworks and Libraries
              </h1>
              <SkillTiles data={FrameworksAndLibraries}  />
          </div>
          <div className="flex flex-col items-center p-5">
              <h1 className="text-2xl font-bold pb-4 bg-clip-text bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-300 via-purple-100 to-stone-200 text-transparent">
                Tools and Others things
              </h1>
              <SkillTiles data={Tools}  />
          </div>
        </div>
    </div>
    </motion.div>
  )
}

export default Skills