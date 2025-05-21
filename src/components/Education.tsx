
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Book } from 'lucide-react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  const educationHistory = [
    {
      id: 1,
      school: "Rwanda Coding Academy",
      degree: "Software Engineering Program",
      period: "2024 - 2026",
      description: "Specialized high school focused on software development, algorithms, and programming fundamentals. Participated in numerous coding competitions and collaborative projects.",
      icon: Award,
    },
    {
      id: 2,
      school: "FAWE Girls' School",
      degree: "Ordinary Level Education",
      period: "2020 - 2023",
      description: "Completed ordinary level education with focus on mathematics and sciences. Developed a strong foundation for future technical studies.",
      icon: Book,
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-playfair font-bold text-white">Education</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {educationHistory.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-l-4 border-l-primary bg-black/30 border-t border-r border-b border-gray-800">
                  <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="font-playfair text-xl text-white">{item.school}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-1">
                        <span className="text-gray-300 font-poppins">{item.degree}</span>
                        <span className="text-sm text-primary bg-primary/10 px-2 py-1 rounded w-fit">
                          {item.period}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 font-poppins">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
