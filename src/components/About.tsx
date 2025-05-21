import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary min-h-[600px] flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-12 md:gap-16">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-shrink-0 flex justify-center items-center md:items-start w-full md:w-[370px]"
          >
            <div className="relative w-[340px] h-[480px] md:w-[370px] md:h-[520px]">
              {/* Outer theme-colored border */}
              <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border-2 border-primary shadow-[0_0_40px_10px_rgba(255,215,0,0.15)]"></div>
              {/* Main image container with border and background */}
              <div className="relative w-full h-full rounded-2xl border-2 border-gray-800 bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden">
                <img 
                  src="/lovable-uploads/9872fd57-1ddc-4b59-a5d1-791e4dc74dbc.png" 
                  alt="UHIRWE Esther Hope" 
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-2xl pointer-events-none"></div>
              </div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-lg md:text-xl font-bold text-white mb-4">
              Hi, I'm <span className="text-primary">UHIRWE Esther Hope</span>, <span className="text-primary">a passionate Software Engineer &amp; UI/UX Designer</span> with a commitment to creating intuitive, user-friendly applications that solve real-world problems.
            </p>
            <p className="text-gray-300 mb-4">
              As a graduate from Rwanda Coding Academy, I've built a strong foundation in software development principles and design thinking. My journey began with a curiosity about how technology can improve lives, and it has evolved into a dedicated career path where I blend technical expertise with creative problem-solving.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Personal Info</h3>
                <ul className="text-gray-300 space-y-1">
                  <li><span className="text-gray-400">Name:</span> UHIRWE Esther Hope</li>
                  <li><span className="text-gray-400">Email:</span> uhirweestherhope@gmail.com</li>
                  <li><span className="text-gray-400">Phone:</span> +250 730 288 300</li>
                  <li><span className="text-gray-400">Location:</span> Kigali, Rwanda</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Experience</h3>
                <ul className="text-gray-300 space-y-1 list-disc list-inside">
                  <li>3+ years in software development</li>
                  <li>UI/UX design expertise</li>
                  <li>Multiple successful projects</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#contact">
                <button className="px-6 py-2 rounded-md bg-primary text-black font-medium shadow hover:bg-primary/80 transition">Contact me</button>
              </a>
              <a href="#projects">
                 <Button variant="outline" className="border-primary text-black hover:text-primary hover:bg-primary/10">
                  View Works
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
