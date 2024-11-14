import React from 'react'
import SvgSelector from '../Components/SvgSelector'
import MainIntroduction from '../Components/MainIntroduction'
import MainExperience from '../Components/MainExperience'
import MainSkills from '../Components/MainSkills'
import MainProjects from '../Components/MainProjects'
import MainContactMe from '../Components/MainContactMe'

const MainContent = ({DATA}) => {
  const {SECTIONS} = DATA;

  const getSection = (sectionName, SECTION) => {
    switch (sectionName){
        case "Introduction":
            return (<section id={SECTION.Name}> <MainIntroduction SECTION={SECTION}/> </section>);
        case "Experience":
            return (<section id={SECTION.Name}> <MainExperience SECTION={SECTION}/> </section>);
        case "Skills":
            return (<section id={SECTION.Name}> <MainSkills  SECTION={SECTION}/></section>);
        case "Projects":
            return (<section id={SECTION.Name}><MainProjects SECTION={SECTION}/> </section>);
        case "ContactMe":
            return (<section id={SECTION.Name}> <MainContactMe  SECTION={SECTION}/> </section>);
        default:
            return <div>Unkown DIV</div>;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
         {SECTIONS.map((SECTION, index) => (
        <div key={index} className="w-full">
          <div
            className="min-h-screen w-full flex flex-col justify-center items-center overflow-hidden"
          >
            <div>
              {getSection(SECTION.Name,SECTION)}
            </div>
          </div>
          {/*
          {index < SECTIONS.length - 1 && (
            <SvgSelector
              data={{ type: SECTION.SvgSeperator, colors: [SECTION.backgroundColor, SECTIONS[index + 1].backgroundColor] }}
            />
          )}*/}
        </div>
      ))}
    </div>
  )
}

export default MainContent

{/*style={{ backgroundColor: SECTION.backgroundColor }}*/}