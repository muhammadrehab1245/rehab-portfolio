import { Button } from "@headlessui/react";
import React from "react";
import { motion } from "framer-motion";
const Bio = () => {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 p-12  ">
      <div className="flex flex-col order-2  lg:order-1 justify-center text-[#5b22c5] ">
        <h1 className="text-xl font-semibold text-gray-400">Hi I am </h1>
        <motion.h1
          className="text-2xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: [0, 3, 0],
            x: [0, 0, 0],
            color: "text-[#5b22c5]",
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          Muhammad Rehab
        </motion.h1>

        <p className="text-4xl font-bold mt-2">MERN Stack Developer</p>
        <p className="mt-4 text-lg">
          Creating Flawless and Immersive Experiences
        </p>
        <div className="flex flex-col md:flex-row mt-6 gap-4">
          <Button className="px-6 cursor-pointer py-3 bg-[#5a31a6] text-white rounded-lg">
            <a
              href="https://www.linkedin.com/in/muhammad-rehab-167b90216/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white no-underline"
            >
              Let’s Connect
            </a>
          </Button>
          <Button className="px-6 py-3 cursor-pointer border border-[#5a31a6] text-[#5b22c5] rounded-lg">
            Download CV
          </Button>
        </div>
        <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border text-[#5b22c5] border-[#5a31a6] bg-gray-900 text-md rounded-md overflow-hidden">
          {/* Card 1 */}
          <div className="flex flex-col items-center justify-center border-b sm:border-b-0 sm:border-r border-[#5a31a6] py-4 px-2">
            <p className="font-bold text-base sm:text-lg">1+ Year</p>
            <p className="text-white text-sm sm:text-base">Experience</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center justify-center border-b lg:border-b-0 sm:border-r border-[#5a31a6] py-4 px-2">
            <p className="font-bold text-sm sm:text-base text-center">
              Multiple Successful
            </p>
            <p className="text-white text-sm sm:text-base text-center">
              Software Projects
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center justify-center py-4 px-2">
            <p className="font-bold text-sm sm:text-base text-center">
              Collaboration with
            </p>
            <p className="text-white text-sm sm:text-base text-center">
              Cross-Functional Teams
            </p>
          </div>
        </div>
      </div>

      <div className="z-10 order-1 lg:order-2 bg-gray-900 mx-auto  sm:w-64 sm:h-64 md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[430px] rounded-full overflow-hidden flex justify-center items-center border">
        <img
          src="mypic.png"
          alt="Muhammad Rehab"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Bio;
