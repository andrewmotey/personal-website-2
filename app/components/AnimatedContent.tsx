'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaMusic } from 'react-icons/fa'

export default function AnimatedContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Andrew Motey
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        MBA Candidate at Columbia Business School | Investor | Strategist | Former Sony Music | Drummer
      </p>
      <div className="flex justify-center gap-4 mb-8">
        <a href="https://www.linkedin.com/in/andrewmotey/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
          <FaLinkedin size={58} />
        </a>
      </div>
      <div className="flex justify-center gap-4">
        <a href="/Motey_Andrew_Resume.pdf" download className="btn-primary">
          <FaDownload className="mr-2" /> Download Resume
        </a>
        <a href="#contact" className="btn-secondary">
          Let's Connect
        </a>
      </div>
    </motion.div>
  )
} 