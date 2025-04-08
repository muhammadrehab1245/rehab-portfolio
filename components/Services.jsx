import React from 'react'
import { AiOutlineDeploymentUnit } from 'react-icons/ai'
import { FaDatabase, FaPiedPiper } from 'react-icons/fa'
import { FaStackExchange } from 'react-icons/fa6'
import { SiFrontendmentor } from 'react-icons/si'

const Services = () => {
  return (
    <>
     {/* Full Stack Web Development */}
     <div className="bg-gray-900 rounded-lg p-6 text-center hover:shadow-lg transition">
            <div className="text-[#5b22c5] mb-4 text-4xl">
              <FaStackExchange className="mx-auto" />
            </div>
            <h3 className="text-white font-bold text-xl mb-3">
              Full Stack Development
            </h3>
            <p className="text-gray-400">
              Building scalable, end-to-end web applications using MERN stack
              with clean architecture.
            </p>
          </div>

          {/* API Development */}
          <div className="bg-gray-900 rounded-lg p-6 text-center hover:shadow-lg transition">
            <div className="text-[#5b22c5] mb-4 text-4xl">
              <FaPiedPiper className="mx-auto" />
            </div>
            <h3 className="text-white font-bold text-xl mb-3">
              API Development
            </h3>
            <p className="text-gray-400">
              Designing efficient REST APIs & integrating third-party services
              for seamless functionality.
            </p>
          </div>

          {/* Database Design */}
          <div className="bg-gray-900 rounded-lg p-6 text-center hover:shadow-lg transition">
            <div className="text-[#5b22c5] mb-4 text-4xl">
              <FaDatabase className="mx-auto" />
            </div>
            <h3 className="text-white font-bold text-xl mb-3">
              Database Management
            </h3>
            <p className="text-gray-400">
              Creating optimized MongoDB schemas and handling large datasets
              efficiently.
            </p>
          </div>

          {/* Frontend Development */}
          <div className="bg-gray-900 rounded-lg p-6 text-center hover:shadow-lg transition">
            <div className="text-[#5b22c5] mb-4 text-4xl">
              <SiFrontendmentor className="mx-auto" /> {/* React icon */}
            </div>
            <h3 className="text-white font-bold text-xl mb-3">
              Frontend Development
            </h3>
            <p className="text-gray-400">
              Building dynamic, responsive UIs using React.js with focus on UX &
              performance.
            </p>
          </div>

          {/* Deployment */}
          <div className="bg-gray-900 rounded-lg p-6 text-center hover:shadow-lg transition">
            <div className="text-[#5b22c5] mb-4 text-4xl">
              <AiOutlineDeploymentUnit className="mx-auto" />
              {/* Cloud icon */}
            </div>
            <h3 className="text-white font-bold text-xl mb-3">
              Deployment & Hosting
            </h3>
            <p className="text-gray-400">
              Deploying applications on Heroku, Vercel, Netlify & integrating
              CI/CD workflows.
            </p>
          </div>
    </>
  )
}

export default Services