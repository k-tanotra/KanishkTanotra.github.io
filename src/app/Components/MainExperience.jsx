import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ExpWheel from './ExpWheel';

const MainExperience = ({ SECTION }) => {
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
      isVisible ? ' scale-100' : 'scale-50'
    }`}
    >
      <ExpWheel SECTION={SECTION} />
    </div>
  );
};

export default MainExperience;