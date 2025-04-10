import React from 'react'
import { CiFileOn, CiMail } from 'react-icons/ci'
import { FaLinkedin } from 'react-icons/fa'
import { FaSquareGithub } from 'react-icons/fa6'

const Footer = () => {
  return (
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

 
  )
}

export default Footer