const Tile = ({ data , padding}) => {
    const { logo, companyName, location, timeline, skills, position, bullets } = data;
  
    return (
        <div className="flex space-x-4">
            <div className="w-1/3"></div>
            <div className="relative w-full border-l border-slate-100">
                        <img src="K.png" alt="Centered Image" className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2  w-10 h-10 object-cover" />
                        <div className="absolute left-0 top-1/2 transform -translate-x-[calc(100%+60px)] -translate-y-1/2  hidden md:block">{timeline}</div> 
            <div className={`flex w-full justify-center ${padding}`}>
            
            <div className="border rounded-lg p-4 shadow-lg max-w-lg w-full">
                
                <div className="flex items-center space-x-4">
                <img src={logo} alt={`${companyName} Logo`} className="w-16 h-16 object-contain" />
                <div>
                    <h2 className="text-xl font-bold">{companyName}</h2>
                    <p className="text-sm text-gray-600">{location}</p>
                </div>
                </div>
                
                
                <div className="mt-2">
                <p className="text-sm font-semibold">{position}</p>
                <p className="text-sm text-gray-500 block md:hidden">{timeline}</p>
                </div>
                
             
                <div className="mt-3">
                <h3 className="font-semibold">Skills:</h3>
                <ul className="flex flex-wrap space-x-2">
                    {skills.map((skill, index) => (
                    <li key={index} className="text-sm bg-gray-200 rounded-full px-2 py-1">
                        {skill}
                    </li>
                    ))}
                </ul>
                </div>
                
         
                <div className="mt-3">
                <ul className="list-disc ml-5">
                    {bullets.map((bullet, index) => (
                    <li key={index} className="text-sm">{bullet}</li>
                    ))}
                </ul>
                </div>
            </div>
            </div>
            </div>
      </div>
    );
  };
  
  export default Tile;