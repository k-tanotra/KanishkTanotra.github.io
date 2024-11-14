import React from 'react'
import WorkExperience from '../Components/WorkExperience'
import School from './School'
const ExperienceCard = ({data,Expanded}) => {
  return (
    <div>
         {data.type === "Work" ? <WorkExperience data={data} Expanded={Expanded}/> : <School data={data} Expanded={Expanded}/>}
    </div>
  )
}

export default ExperienceCard