import React from 'react'

const ProjectTile = ({project,Expanded}) => {
    const {title, description, techStack, gitLink, projectIcon } = project;
    return (
      <div className="p-4 border rounded-2xl shadow-2xl shadow-black flex flex-col items-start bg-black bg-opacity-30 hover:scale-110 ease-in duration-200 w-full">
      <div className="flex flex-col justify-center items-center w-full">
        <div>
          <img src={projectIcon} alt={`${title} icon`} className="max-h-[200px] max-w-[200px] min-h-[50px] min-w-[50px] mb-5" />
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <div className="text-3xl font-semibold ml-2 mr-2 break-words w-full text-center">
            {title}
          </div>
          <div className="flex flex-wrap gap-4 mt-6 mb-4 w-full justify-center">
            {techStack.map((skill, index) => (
              <div key={index} className="flex flex-col justify-center items-center hover:scale-125 ease-in duration-200">
                <img src={skill.iconPath} alt={`${skill} Logo`} className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <a href={gitLink} target="_blank" rel="noopener noreferrer" className="ml-2">
        <img src="/LinkTo.png" alt="GitHub Link" className="max-h-[20px] max-w-[20px] hover:underline invert" />
      </a>
    </div>
      );
    };

export default ProjectTile