import React,{ useState } from 'react'
import  Typewriter  from "../Components/Typewriter"
import { useInView } from 'react-intersection-observer';
const MainIntroduction = ({SECTION}) => {
  // State to manage the visibility of the component
  const [isVisible, setIsVisible] = useState(false);

  // Use Intersection Observer hook to detect visibility
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger only once when the component first comes into view
    threshold: 0.2, // Adjust this value as needed
  });

  // Update visibility state based on inView
  React.useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  const {Title,Name,AboutMePara,PhotoPath,TypewriterText,DownloadIcon,DownloadButtonText,ContactMeIcon,ContactMeText} = SECTION.CONTENT;
  return (
    <div
    ref={ref}
      className={` transition-transform ease-in-out duration-500 ${
        isVisible ? 'scale-100' : 'scale-50'
      }`}
    >
        <div className="flex flex-col justify-center items-center pl-[10%] pr-[10%] min-h-screen">
      <div className="flex flex-col justify-center items-center rounded-2xl pt-[10%] pb-[10%] shadow-2xl-700 p-5">
      {/*<h1 className="text-3xl text-white">{Title}</h1>*/}
      <div className="flex flex-col-reverse justify-center items-center sm:flex-row p-4">
        <div className="flex flex-col justify-center items-center text-white pr-0 sm:pr-10 max-w-[1000px]">
          <div className="text-3xl sm:text-6xl pt-10 pb-5  sm:pb-10 sm:pt-0 font-extrabold bg-clip-text bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-300 via-purple-100 to-stone-200 text-transparent"> 
            {/*<Typewriter words={TypewriterText} />*/}
            {Name}
          </div>
          <p className="text-lg sm:text-3xl bg-clip-text bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-300 via-purple-100 to-stone-200 text-transparent">
          {AboutMePara}
          </p>
          <div className="flex flex-row space-x-8 p-6">
            <button className="flex flex-col sm:flex-row justify-center hover:scale-125 ease-in duration-300 items-center rounded-2xl border border-white shadow-lg p-2 sm:p-4 bg-black bg-opacity-30  shadow-black">
              <img src={DownloadIcon} className="h-10 w-10 invert"/>
              <span className='text-md sm:text-2xl bg-clip-text bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-300 via-purple-100 to-stone-200 text-transparent'>
                {DownloadButtonText}</span>
            </button>
            <button className="flex flex-col sm:flex-row justify-center hover:scale-125 ease-in duration-300 items-center rounded-2xl border border-white shadow-lg p-2 sm:p-4 bg-black bg-opacity-30  shadow-black">
              <img src={ContactMeIcon} className="h-8 w-8 invert"/>
              <span className='text-md sm:text-2xl bg-clip-text bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-300 via-purple-100 to-stone-200 text-transparent'>
                {ContactMeText}</span>
            </button>
          </div>
        </div>
        <img src={PhotoPath} className="w-[200px] h-[200px] sm:w-[500px] sm:h-[500px] object-cover rounded-full "/>
      </div>
      </div>
    </div>
    </div>

  )
}

export default MainIntroduction