import React from 'react'

const SkillTile = ({ name, iconPath }) => {
    return (
      <div className="p-4 shadow-lg shadow-black flex flex-col items-center bg-black bg-opacity-15 min-w-[50px] max-w-[100px] hover:scale-110 ease-in duration-200">
        <img src={iconPath} alt={name} className="w-30 h-30 object-cover mb-2" />
        <p className="text-center">{name}</p>
      </div>
    );
  };

export default SkillTile