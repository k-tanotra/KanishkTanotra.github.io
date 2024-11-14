import React from 'react'

const CV = () => {
  return (
    <div className="flex space-x-10">
        <div>
            <button className="font-bold text-custom-aqua hover:text-opacity-60  hover:custom-aqua hover:border-opacity-50 text-sm sm:text-base md:text-lg lg:text-xl border-2 border-custom-aqua p-2 py-2 px-4 rounded inline-flex items-center">
            <span>CV</span>
            </button>
        </div>
        <div>
            <button className="font-bold text-custom-aqua hover:text-opacity-60  hover:custom-aqua hover:border-opacity-50 text-sm sm:text-base md:text-lg lg:text-xl border-2 border-custom-aqua p-2 py-2 px-4 rounded inline-flex items-center">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span>Download</span>
            </button>
        </div>
    </div>
  )
}

export default CV