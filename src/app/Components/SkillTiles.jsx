import React from 'react'
import SkillTile from './SkillTile';
const SkillTiles = ({ data }) => {
    return (
      <div className={`grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4`}>
        {data.map((item, index) => (
          <SkillTile key={index} name={item.name} iconPath={item.iconPath} />
        ))}
      </div>
    );
  };

export default SkillTiles