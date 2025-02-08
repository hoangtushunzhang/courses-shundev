import React from 'react'
import { GrTechnology } from 'react-icons/gr'

const Logo = () => {
  return (
    <div>
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center flex-col ">
            <GrTechnology className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-blue-800 font-bold">
            TechDev
          </h1>
        </div>
    </div>
  )
}

export default Logo