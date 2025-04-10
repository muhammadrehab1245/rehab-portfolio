import { projects } from '@/utils/impobj'
import { Button, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import React from 'react'
import { CiCircleChevDown } from 'react-icons/ci'
import { FaDemocrat } from 'react-icons/fa'
import { FaSquareGithub } from 'react-icons/fa6'

const Projects = () => {
  return (
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
  )
}

export default Projects