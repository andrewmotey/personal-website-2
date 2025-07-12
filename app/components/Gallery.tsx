'use client'

import { motion } from 'framer-motion'

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Gallery</h2>
        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, -2880],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* First set of images */}
          <div className="flex-none w-96 h-64">
            <img 
              src="/images/studio.jpg" 
              alt="Recording Studio" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-none w-96 h-64">
            <img 
              src="/images/sony.jpg" 
              alt="Sony Music" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-none w-96 h-64">
            <img 
              src="/images/sweetpolice3.jpg" 
              alt="Sweet Police Performance" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-none w-96 h-64">
            <img 
              src="/images/UM.jpg" 
              alt="University of Michigan Campus" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-none w-96 h-64">
            <img 
              src="/images/CBS.jpg" 
              alt="Columbia Business School" 
              className="w-full h-full object-cover rounded-lg"
              style={{ objectPosition: "center 25%" }}
            />
          </div>
          <div className="flex-none w-96 h-64">
            <img 
              src="/images/drumming.jpg" 
              alt="Playing drums" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-none w-96 h-64">
            <img 
              src="/images/headshot.jpg" 
              alt="Andrew Motey Headshot" 
              className="w-full h-full object-cover rounded-lg"
              style={{ objectPosition: "center 25%" }}
            />
          </div>
          {/* Duplicate set of images for seamless loop */}
          <div className="flex-none w-96 h-64">
            <img 
              src="/images/studio.jpg" 
              alt="Recording Studio" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-none w-96 h-64">
            <img 
              src="/images/sony.jpg" 
              alt="Sony Music" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-none w-96 h-64">
            <img 
              src="/images/sweetpolice3.jpg" 
              alt="Sweet Police Performance" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-none w-96 h-64">
            <img 
              src="/images/UM.jpg" 
              alt="University of Michigan Campus" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-none w-96 h-64">
            <img 
              src="/images/CBS.jpg" 
              alt="Columbia Business School" 
              className="w-full h-full object-cover rounded-lg"
              style={{ objectPosition: "center 25%" }}
            />
          </div>
          <div className="flex-none w-96 h-64">
            <img 
              src="/images/drumming.jpg" 
              alt="Playing drums" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-none w-96 h-64">
            <img 
              src="/images/headshot.jpg" 
              alt="Andrew Motey Headshot" 
              className="w-full h-full object-cover rounded-lg"
              style={{ objectPosition: "center 25%" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
} 