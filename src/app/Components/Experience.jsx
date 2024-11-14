"use client"
import React from 'react'
import Tile from '../Components/Tile'
import { motion } from "framer-motion";


const resumeData = {
  logo: 'path/to/logo.png',
  companyName: 'Tech Solutions Inc.',
  location: 'New York, USA',
  timeline: 'June 2021 - Present',
  skills: ['JavaScript', 'React', 'Node.js', 'CSS', 'Tailwind CSS'],
  position: 'Frontend Developer',
  bullets: [
    'Developed responsive web applications',
    'Collaborated with design and backend teams',
    'Optimized performance for high traffic pages',
  ],
};
const tilesData = [resumeData, resumeData, resumeData, resumeData]; 

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 } }
      transition={{ duration: 0.5 }}
    >
    <div className=" flex flex-col items-center p-6 w-full">
    <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-100 to-teal-400 bg-clip-text text-transparent mb-4">
      Education and Experience
    </h1>
    <div className="flex w-full flex-col justify-center pt-10">
    {tilesData.map((data, index) => {
        const paddingClass = index === 0
          ? 'p-5 pt-0'
          : index === tilesData.length - 1
          ? 'p-5 pb-0'
          : 'p-5';
        return (
          <Tile
            key={index}
            data={data}
            padding={paddingClass}
          />
        );
      })}
    </div>
  </div>
  </motion.div>
  )
}

export default Experience