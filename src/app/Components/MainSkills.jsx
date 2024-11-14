import React,{useState} from 'react'
import Skills from '../Components/Skills'
import { useInView } from 'react-intersection-observer';
const MainSkills = ({SECTION}) => {
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

  return (
    <div
    ref={ref}
      className={`transition-transform ease-in-out duration-500 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
      }`}
    >
      <Skills data={SECTION}/>
    </div>
  )
}

export default MainSkills