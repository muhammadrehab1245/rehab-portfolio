import { Button } from '@headlessui/react'
import React from 'react'
import { motion } from 'framer-motion'
const Bio = () => {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 p-12  ">
    <div className="flex flex-col order-2  lg:order-1 justify-center text-[#5b22c5] ">
      <h1 className="text-xl font-semibold text-gray-400">
        Hi I am             </h1>
      <motion.h1
      className="text-2xl"
initial={{ opacity: 0, x: 20 }}
animate={{ opacity: [0, 3, 0], x: [0, 0,0],color:'text-[#5b22c5]' }}
transition={{
  duration: 1.5,
  repeat: Infinity,
  repeatType:'loop',
  ease: 'easeInOut',
}}
>
Muhammad Rehab
</motion.h1>

      <p className="text-4xl font-bold mt-2">MERN Stack Developer</p>
      <p className="mt-4 text-lg">
        Creating Flawless and Immersive Experiences
      </p>
      <div className="flex mt-6 gap-4">
        <Button className="px-6 cursor-pointer py-3 bg-[#5a31a6] text-white rounded-lg">
          Let’s Connect
        </Button>
        <Button className="px-6 py-3 cursor-pointer border border-[#5a31a6] text-[#5b22c5] rounded-lg">
          Download CV
        </Button>
      </div>
      <div className="mt-8 w-full grid grid-cols-3 gap-6 border text-[#5b22c5] border-[#5a31a6] bg-gray-900 text-md">
        <div className="flex flex-col items-center justify-center border-r border-[#5a31a6] py-3">
          <p className="font-bold">1+ Year</p>
          <p className="text-white">Experience</p>
        </div>
        <div className="flex flex-col justify-center items-center border-r border-[#5a31a6] py-2">
          <p className="font-bold text-center text-sm">
            Multiple Successful
          </p>
          <p className="text-white text-center text-sm">
            Software Projects
          </p>
        </div>
        <div className="flex flex-col justify-center items-center py-2">
          <p className="font-bold text-center text-sm">
            Collaboration with
          </p>
          <p className="text-white text-center text-sm">
            Cross-Functional Teams
          </p>
        </div>
      </div>
    </div>

    <div className="border z-10 order-1 lg:order-2 bg-gray-900 mx-auto w-[450px] h-[430px] rounded-full overflow-hidden flex justify-center items-center">
      <img
        width={500} // Even if large
        height={500}
        className="object-cover"
        src="mypic.png"
        alt="Muhammad Rehab"
      />
    </div>
  </div>
  )
}

export default Bio