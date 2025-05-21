
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React/React Native", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "UI/UX Design", level: 95 },
    { name: "HTML/CSS", level: 90 },
    { name: "MongoDB/SQL", level: 75 },
    { name: "Python", level: 70 },
    { name: "Git/GitHub", level: 85 },
    { name: "Java", level: 85 },
    { name: "Cyber Security", level: 80 },
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration", 
    "Communication",
    "Project Management",
    "Adaptability",
    "Time Management",
    "Creativity",
    "Attention to Detail"
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-playfair font-bold text-white">Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          <p className="mt-4 text-gray-400 font-poppins max-w-2xl mx-auto">
            My expertise spans across technical development skills and essential soft skills
            needed to deliver successful projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-playfair font-semibold mb-6 text-white">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  className="space-y-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between font-poppins">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 [&>div]:bg-primary" 
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-playfair font-semibold mb-6 text-white">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div 
                  key={skill} 
                  className="bg-secondary p-4 rounded-lg border border-gray-800 flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  <span className="text-gray-300 font-poppins">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
