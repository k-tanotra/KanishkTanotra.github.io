import React from 'react'

const School = ({data,Expanded}) => {
  const {type,school,schoolLogo,location,country,degree,major,timeline,position,GPA,courses} = data;
  return (
    <div className="max-w-[500px] pb-10">
       <div className="border rounded-2xl p-4 bg-yellow-200 bg-opacity-10 shadow-2xl shadow-black hover:scale-110">
        <div className="flex items-center space-x-4">
          <img src={schoolLogo} alt={`${school} Logo`} className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] object-contain" />
          <div>
              <h2 className="text-2xl sm:text-4xl  font-bold">{school}</h2>
              <p className="text-sm sm:text-xl mb-1">{location}</p>
          </div>
          </div>
          <p className="text-sm sm:text-xl font-semibold mt-4">{degree} in {major}</p>
          <div className="block md:hidden flex-col items-start mb-2">
              <p className="text-sm text-white italic">{timeline}</p>
              </div>
          {Expanded=="True" && 
          <>
            <h1 className="pt-2">Relevant Coursework</h1>
            <p className="text-sm sm:text-2xl">
              {courses.join(", ")}
            </p>
          </>}
       </div>
    </div>
  )
}

export default School