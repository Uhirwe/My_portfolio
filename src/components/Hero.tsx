import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const orbitDots = [
  { top: '10%', left: '50%', color: 'bg-pink-400' },
  { top: '20%', left: '80%', color: 'bg-blue-400' },
  { top: '50%', left: '90%', color: 'bg-yellow-400' },
  { top: '80%', left: '80%', color: 'bg-green-400' },
  { top: '90%', left: '50%', color: 'bg-purple-400' },
  { top: '80%', left: '20%', color: 'bg-cyan-400' },
  { top: '50%', left: '10%', color: 'bg-orange-400' },
  { top: '20%', left: '20%', color: 'bg-red-400' },
];

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-black pt-16 relative overflow-hidden"
    >
      {/* Large glowing radial gradient background */}
      <div className="absolute inset-0 flex items-center justify-center -z-20">
        <div className="w-[900px] h-[900px] rounded-full bg-gradient-radial from-primary/40 via-blue-900/30 to-black blur-2xl"></div>
      </div>
      {/* Blurred colored circles for depth */}
      <div className="absolute top-10 left-1/4 w-[200px] h-[200px] rounded-full bg-pink-500/30 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-1/4 w-[250px] h-[250px] rounded-full bg-cyan-500/30 blur-3xl -z-10"></div>
      <div className="absolute top-1/2 right-10 w-[150px] h-[150px] rounded-full bg-purple-500/30 blur-2xl -z-10"></div>
      {/* Orbiting dots with different colors */}
      {orbitDots.map((dot, idx) => (
        <div
          key={idx}
          className={`absolute w-4 h-4 ${dot.color} rounded-full shadow-lg animate-pulse`}
          style={{ top: dot.top, left: dot.left, transform: 'translate(-50%, -50%)' }}
        />
      ))}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 space-y-6 text-center md:text-left"
          >
            <h3 className="text-primary font-poppins tracking-wider">HELLO!</h3>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight">
              <span className="text-white">I'm </span>
              <span className="text-primary">UHIRWE Esther Hope</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-poppins text-gray-300">
              Committed Software Engineer and UI/UX Designer
            </h2>
            <p className="text-gray-400 font-poppins max-w-lg mx-auto md:mx-0">
              Building innovative solutions with a focus on user experience and clean code.
              Passionate about creating technology that makes a positive impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild className="bg-primary hover:bg-primary/90 text-black font-medium">
                <a href="/cv.pdf" download>
                  Download CV
                </a>
              </Button>
              <a href="#contact">
                <Button variant="outline" className="border-primary text-black hover:text-primary hover:bg-primary/10">
                  Contact Me
                </Button>
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mb-10 md:mb-0 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute w-full h-full bg-yellow-400/60 rounded-full blur-2xl"></div>
              <img
                src="/lovable-uploads/029fe39d-3e34-4eba-ad22-583763746eef.png"
                alt="UHIRWE Esther Hope"
                className="w-full h-full object-cover relative z-10 rounded-full border-4 border-black"
              />
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="flex flex-col items-center text-primary hover:text-primary/80">
            <span className="text-sm font-poppins mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
