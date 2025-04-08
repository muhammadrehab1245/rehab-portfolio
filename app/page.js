"use client";
import Navbar from "@/components/Navbar";
import { motion } from 'framer-motion'
import {
  Button,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Field,
  Input,
  Textarea,
} from "@headlessui/react";
import { FaStackExchange, FaSquareGithub } from "react-icons/fa6";
import {
  FaPiedPiper,
  FaDatabase,
  FaDemocrat,
  FaLinkedin,
} from "react-icons/fa";
import { CiCircleChevDown, CiMail, CiFileOn } from "react-icons/ci";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { SiFrontendmentor } from "react-icons/si";

import Bio from "@/components/Bio";
import Services from "@/components/Services";
import About from "@/components/About";
import AboutDetails from "@/components/AboutDetails";
import Stack from "@/components/Stack";
import { projects } from "@/utils/impobj";
export default function Home() {
  

  
  return (
    <>
      <div className="bg-black min-h-screen text-white">
        <Navbar />
       <Bio/>
        {/* Services */}

        <motion.div
    className="grid grid-cols-1 p-12 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 100,x:90 }}
          whileInView={{ opacity: 1, y: 0,x:0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
  
  <Services/>
     
        </motion.div>

        {/* About Section */}
       
        <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 100,x:90 }}
        whileInView={{ opacity: 1, y: 0,x:0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
 <About/>
       
        </motion.div>

        <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 100,x:90 }}
        whileInView={{ opacity: 1, y: 0,x:0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
       <AboutDetails/>
        </motion.div>

        <motion.div
       className="mt-10"
       initial={{ opacity: 0, y: 100,x:90 }}
       whileInView={{ opacity: 1, y: 0,x:0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
   
        
          <Stack/>
          </motion.div>

          <motion.section
       className="mt-10"
       initial={{ opacity: 0, y: 100,x:90 }}
       whileInView={{ opacity: 1, y: 0,x:0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
    
            <h2 className="text-4xl font-bold mb-4 text-center">My Projects</h2>

            <div className="max-w-[80%] mx-auto mt-14 space-y-4">
              {projects.map((project, index) => (
                <Disclosure key={index} as="div">
                  {({ open }) => (
                    <div
                      className={`rounded-xl p-4 transition-colors duration-300 ${
                        open ? "bg-[#5a31a6]" : "bg-gray-900"
                      }`}
                    >
                      <DisclosureButton className="group flex w-full items-center justify-between">
                        <span className="text-lg font-medium text-white group-hover:text-white/80">
                          {project.title}
                        </span>
                        <CiCircleChevDown
                          className={`size-6 transition-transform duration-300 ${
                            open ? "rotate-180" : ""
                          } fill-white/60 group-hover:fill-white/50`}
                        />
                      </DisclosureButton>

                      <DisclosurePanel className="mt-4">
                        <div className="bg-gray-900 text-white p-4 rounded-xl">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="rounded-md mb-3 w-full h-[500px]"
                          />
                          <p className="text-white text-sm mb-3">
                            {project.description}
                          </p>
                          <div className="mt-2 flex gap-4 items-center">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button className="flex items-center gap-2 px-3 py-2 bg-[#5a31a6] text-white rounded-lg">
                                Github Repository <FaSquareGithub size={20} />
                              </Button>
                            </a>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button className="flex items-center gap-2 px-3 py-2 bg-[#5a31a6] text-white rounded-lg">
                                Demo Link <FaDemocrat size={20} />
                              </Button>
                            </a>
                          </div>
                        </div>
                      </DisclosurePanel>
                    </div>
                  )}
                </Disclosure>
              ))}
            </div>
          </motion.section>

          <motion.div
       className="max-w-[70%] mx-auto mt-14 space-y-4"
       initial={{ opacity: 0, y: 100,x:90 }}
       whileInView={{ opacity: 1, y: 0,x:0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
        
            <div className="text-center mt-4  space-y-3">
              <h2 className="text-4xl font-bold ">Contact Me</h2>
              <p className="text-gray-400">Reach Out and Connect with Me!</p>
            </div>
            <div className="grid grid-cols-2 mt-3 gap-y-2.5 gap-x-5">
              <Field>
                <Input
                  placeholder="First Name"
                  className="mt-3 block w-full rounded-lg border-none bg-gray-900  px-3 py-3 text-white
                  focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 "
                />
              </Field>
              <Field>
                <Input
                  placeholder="Last Name"
                  className="mt-3 block w-full rounded-lg border-none bg-gray-900  px-3 py-3 text-white
                  focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 "
                />
              </Field>
              <Field>
                <Input
                  placeholder="Enter Email"
                  className="mt-3 block w-full rounded-lg border-none bg-gray-900  px-3 py-3 text-white
                  focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 "
                />
              </Field>
              <Field className="row-span-2">
                <Textarea
                  className={
                    "mt-3 block w-full resize-none rounded-lg border-none bg-gray-900 py-3 px-3 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                  }
                  rows={5}
                  placeholder="Project Details"
                />
              </Field>
              <Field>
                <Input
                  placeholder="Phone Number"
                  className="mt-3 block w-full rounded-lg border-none bg-gray-900 py-3 px-3 text-sm/6 text-white
                  focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                />
              </Field>
              <Field>
                <Input
                  placeholder="Enter Address"
                  className="mt-3 block w-full rounded-lg border-none bg-gray-900 py-3 px-3 text-sm/6 text-white
                  focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                />
              </Field>
              <div className=" flex mt-3 justify-end">
                <Button className="px-1 cursor-pointer w-[17%] py-1 bg-[#5a31a6] text-white rounded-lg">
                  Send
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.footer  className="flex flex-col justify-center bg-gray-900 mt-16 pt-12 pb-4">      
            <div className="flex justify-center gap-x-5">
              <a
                href="https://www.linkedin.com/in/muhammad-rehab-167b90216/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href="https://github.com/muhammadrehab1245?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareGithub size={32} />
              </a>
              <a href="mailto:rehab123335@gmail.com">
                <CiMail size={32} />
              </a>
              <a href="Muhammad Rehab_Resume.pdf" download>
                <CiFileOn size={32} />
              </a>
            </div>

            <div className="border-t text-center pt-4 mt-8">
              <p className="text-gray-400 text-sm">
                Designed By Muhammad Rehab | React/Mern Stack Developer
              </p>
            </div>

          </motion.footer>  
        </div>
      {/* </div> */}
    </>
  );
}
