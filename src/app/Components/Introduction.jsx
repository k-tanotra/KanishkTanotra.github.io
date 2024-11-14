"use client"
import React from 'react'
import Programmer from "../Components/Programmer"
import NameAndCV from "../Components/NameAndCV"
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const Introduction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);


  return (
    <motion.div
    ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
    <div className=" rounded-2xl flex flex-col sm:flex-row w-full p-6 space-y-6 sm:space-y-0 sm:space-x-6 justify-center items-center  ">
        <NameAndCV />
        <Programmer />
    </div>
    </motion.div>
  )
}

export default Introduction