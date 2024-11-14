import React from 'react'

const Navigation = ({data}) => {
    const Navigation = data;
    
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <div className="fixed bottom-0 w-full sm:w-1/3 left-1/2 transform -translate-x-1/2 z-50 shadow-2xl bg-black bg-opacity-60 shadow-black rounded-3xl">
        <div className="flex flex-rows justify-center p-2  space-x-0 sm:space-x-3">
            {Navigation.map((Nav,index)=>
                (<button key={index} onClick={() => scrollToSection(Nav.Name)} className="flex flex-col p-1 font-bold items-center text-white text-opacity-0 hover:text-opacity-85 ">
                <img src={Nav.Icon} alt="Experience" className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] object-contain hover:scale-125 ease-in duration-300" />
            </button>)
            )}
        </div>
    </div>
  )
}

export default Navigation