import React from 'react'

const WorkExperience = ({data, Expanded}) => {
const {type, logo , companyName, location, timeline, skills, position, bullets} = data;
  return (
    <div className="max-w-[500px] pb-10" >
    <div className="border rounded-2xl p-4  bg-black bg-opacity-60 shadow-2xl shadow-black hover:scale-110 ease-in duration-200">
        <div className="flex items-center space-x-4">
        <img src={logo} alt={`${companyName} Logo`} className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] object-contain" />
        <div>
            <h2 className="text-2xl sm:text-4xl font-bold">{companyName}</h2>
            <p className="text-sm sm:text-xl">{location}</p>
        </div>
        </div>
  
        <div className="block md:hidden flex-col items-start mt-2">
        <p className="text-sm sm:text-2xl font-semibold">{position}</p>
        <p className="text-sm sm:text-2xl text-white italic">{timeline}</p>
        </div>
        
        <div className="flex flex-row mt-5 space-x-2 justify-between">
        {skills.map((skill,index)=>(
            <div key={index} className="flex flex-col flex-grow justify-center items-center hover:scale-125 ease-in duration-200">
              <img src={skill.Icon} alt={`${skill} Logo`} className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] object-contain"/>
              <p className='text-[10px]'>{skill.Name}</p>
            </div>
        ))}
        </div>
        {Expanded=="True" &&  <div className="mt-3">
        <ul className="flex flex-col items-start list-disc ml-5">
            {bullets.map((bullet, index) => (
            <li key={index} className="text-sm sm:text-2xl">{bullet}</li>
            ))}
        </ul>
        </div>}
    </div>
    </div>
  )
}

export default WorkExperience