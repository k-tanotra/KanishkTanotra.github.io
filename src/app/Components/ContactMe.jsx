"use client";
import React from 'react'
import SendEmail from "../Components/SendEmail"
import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 } }
      transition={{ duration: 0.5 }}
    >
    <div className="p-5 w-[350px] sm:w-[650px] pb-20 ">
      <div className="flex flex-col w-full justify-center items-center">
        <h1 className="text-3xl sm:text-6xl pt-10 pb-5  sm:pb-10 sm:pt-0 font-extrabold bg-clip-text bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-300 via-purple-100 to-stone-200 text-transparent mb-4">
          Lets Connect
        </h1>
        <h2 className='text-xl font-semibold'>Leave a short message below about the potential project</h2>
        <SendEmail/>
      </div>
    </div>
    </motion.div>
  )
}

export default ContactMe