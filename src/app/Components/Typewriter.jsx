"use client"
import React from 'react'
import { TypeAnimation } from "react-type-animation";

const splitTextToWords = (words) => {
    
    const sequence = [];
    for (let i = 0; i < words.length; i++) {
      sequence.push(words[i]);  
      sequence.push(1000);      
    }
  
    return sequence; 
}
const Typewriter = ({ words = [], ...rest }) => {
  const seq = splitTextToWords(words);

  return (
        <div>
            <TypeAnimation
              sequence={seq}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
        </div>
    )
}

export default Typewriter;
