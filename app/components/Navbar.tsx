'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            Andrew Motey
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-gray-600 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-gray-600 hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-gray-600 hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#writing" className="text-gray-600 hover:text-primary transition-colors">
              Writing
            </Link>
            <Link href="#music" className="text-gray-600 hover:text-primary transition-colors">
              Music
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 