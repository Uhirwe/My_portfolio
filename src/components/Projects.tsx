import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, FileText, Users, Shield, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'NeuroLab',
      description: 'A mobile application focused on supporting mental health and wellness.',
      details: 'NeuroLab provides personalized mental wellness support through AI-driven insights, mood tracking, and expert resources. The app helps users understand their mental patterns and offers tailored coping strategies.',
      icon: Brain,
      color: 'bg-primary/10',
      skills: ['React Native', 'Firebase', 'AI/ML', 'UI/UX Design']
    },
    {
      id: 2,
      title: 'Rangurura',
      description: 'A citizen reporting system that allows individuals to report issues directly to authorities for resolution.',
      details: 'Rangurura empowers citizens to report community issues like infrastructure damage or safety concerns directly to relevant authorities. The platform tracks report status and provides transparency in the resolution process.',
      icon: FileText,
      color: 'bg-primary/10',
      skills: ['Next.js', 'Java', 'MySQL', 'GIS Integration']
    },
    {
      id: 3,
      title: 'EmpTrack',
      description: 'A digital employee management system designed to streamline HR operations and employee data tracking.',
      details: 'EmpTrack simplifies human resource management by automating attendance tracking, performance evaluations, and administrative processes. The system provides insightful analytics on employee productivity and engagement.',
      icon: Users,
      color: 'bg-primary/10',
      skills: ['Next.js', 'Spring Boot', 'MySQL', 'Chart.js']
    },
    {
      id: 4,
      title: 'Nexasec',
      description: 'A cybersecurity project that tracks threats in your system and shows your system health.',
      details: 'Nexasec provides real-time threat detection, system health monitoring, and actionable security insights to keep your digital environment safe and optimized.',
      icon: Shield,
      color: 'bg-yellow-900/10',
      skills: ['Next.js', 'Node.js', 'Cybersecurity', 'System Monitoring']
    },
    {
      id: 5,
      title: 'MICAN',
      description: 'An online shopping platform for a seamless e-commerce experience.',
      details: 'MICAN offers a modern online shopping experience with secure payments, intuitive UI, and a wide range of products for every need.',
      icon: ShoppingCart,
      color: 'bg-pink-400/10',
      skills: ['NextJs', 'E-commerce', 'Stripe', 'UI/UX']
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-playfair font-bold text-white">My <span className="text-primary">Projects</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          <p className="mt-4 text-gray-400 font-poppins max-w-2xl mx-auto">
            Here are some of the key projects I've developed, each one solving
            unique challenges through innovative technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-secondary border-gray-800 hover:border-primary/50">
                <div className={`${project.color} p-6 flex justify-center`}>
                  <project.icon size={48} className="text-primary" />
                </div>
                <CardHeader>
                  <CardTitle className="font-playfair text-white">{project.title}</CardTitle>
                  <CardDescription className="font-poppins text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 font-poppins">{project.details}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="text-xs bg-black/30 text-gray-300 px-2 py-1 rounded font-poppins border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/10">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
