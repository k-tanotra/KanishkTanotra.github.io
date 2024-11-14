import React from 'react'
import  Typewriter  from "../Components/Typewriter"
const Name = () => {
  return (
    <section className="w-full w-max-1/2 overflow-hidden">
    <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-100 to-teal-400">
    <Typewriter
        words={["Hello", "I'm", "Kanishk Tanotra"]}/>
    </h2>
    <div className="p-5"></div>
    <h1 className="text-base sm:text-sm md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-slate-200">
      I'm a Software Engineer who thrives on solving complex problems and bringing ideas to life. Whether it's crafting efficient, user-friendly applications or optimizing systems, I love building solutions from the ground up and continuously learning along the way.
    </h1>
    <div className="p-5"></div>
  </section>
  )
}

export default Name;