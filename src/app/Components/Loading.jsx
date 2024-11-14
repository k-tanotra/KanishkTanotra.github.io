import React, { useState, useEffect } from 'react';
import  Typewriter  from "../Components/Typewriter"
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


const Loading = ({duration}) => {
    const [progressValue, setProgressValue] = useState(0);

    useEffect(() => {
      // Use requestAnimationFrame for smooth animation
      let start = null;
      
      const animateProgress = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
  
        // Update the progress value based on elapsed time
        const value = Math.min((progress / duration) * 100, 100);
        setProgressValue(value);
  
        if (progress < duration) {
          requestAnimationFrame(animateProgress);
        }
      };
  
      // Start the animation
      requestAnimationFrame(animateProgress);
  
      // Cleanup when the component unmounts
      return () => cancelAnimationFrame(animateProgress);
    }, []);

  return (
    <div className='flex flex-col justify-center items-center h-screen text-6xl bg-gradient-to-br'>
        <Typewriter words={["Hello","नमस्ते","Ciao","నమస్కారం","привіт","こんにちは","Bonjour","السلام عليكم","안녕하세요","你好","مرحبًا","Hallo"]} />
        {/*<div
            className="fixed bottom-[200px] radial-progress bg-primary text-primary-content text-[20px] mt-10"
            style={{ "--value": progressValue }}
            role="progressbar">
            {Math.round(progressValue)} %
        </div>*/}
        <Box className="fixed bottom-[100px]" 
             sx={{
                width: '80%',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#0b423b', // Customize the progress bar color
                },
                '& .MuiLinearProgress-barColorPrimary': {
                  backgroundColor: '#0b423b', // Customize the bar color when in progress
                },
                '& .MuiLinearProgress-root': {
                  backgroundColor: '#046155', // Customize the background color of the progress bar
                },
              }}
        >
            <LinearProgress variant="determinate" value={Math.round(progressValue)} />
        </Box>
    </div>
  )
}

export default Loading