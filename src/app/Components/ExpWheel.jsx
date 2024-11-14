"use client"
import React from 'react';
import ExperienceCard from '../Components/ExperienceCard';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from '@mui/icons-material/Work';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";
import timelineOppositeContentClasses from '@mui/lab/TimelineOppositeContent';
import SchoolIcon from '@mui/icons-material/School';

const ExpWheel = ({SECTION}) => {
  
    const cards = SECTION.CONTENT.ExperienceList;
    const Expanded = SECTION.Expanded;
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{  duration: 0.5 }}>
    <div className=" rounded-3xl mb-10">
    <div className="flex flex-col justify-center items-center">
    <h1 className="text-3xl sm:text-6xl pt-10 pb-10  sm:pb-20 sm:pt-0 font-extrabold bg-clip-text bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-300 via-purple-100 to-stone-200 text-transparent">
        Experience & Education
        </h1>
        </div>
    <Timeline position="right"
    sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}>
    {cards.map((cardData, index) => {
      return (
        <TimelineItem key={index}>
          <TimelineOppositeContent className="hidden md:flex flex-col " style={{ flex: 0.8 }}>
          <motion.div
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: (index+1) * 0.9, duration: 0.5 }} 
            className='pt-3'>
            <div className="flex flex-col">
              <h2 className='text-xl sm:text-3xl font-semibold'>{cardData.position}</h2>  
              <h1 className='italic text-xl sm:text-xl '>{cardData.timeline}</h1>
            </div>
            </motion.div>
          </TimelineOppositeContent>
  
          <TimelineSeparator className='pl-5 pr-5 sm:pl-1 sm:pr-5'>
          <motion.div
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: (index+1) * 0.9, duration: 0.5 }} 
           >
            <TimelineDot sx={{ backgroundColor: cardData.type === "Work" ? '#4169e1' : '#ff6347' }}>
              {cardData.type === "Work" ? <WorkIcon className='sm:w-[40px] sm:h-[40px]' /> : <SchoolIcon className='sm:w-[40px] sm:h-[40px]'/>}
            </TimelineDot>
            </motion.div>
            {index < cards.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent style={{ flex: 1.4 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: (index+1) * 0.8, duration: 0.5 }}
            >
                <ExperienceCard data={cardData} Expanded={Expanded}/>
            </motion.div>
          </TimelineContent>
        </TimelineItem>
      );
    })}
  </Timeline>
  </div>
  </motion.div>
  );
};

export default ExpWheel;
