import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_vc6mb98', // You'll get this from EmailJS
        'template_evm5rum', // You'll get this from EmailJS
        e.currentTarget,
        'bBjJzyz5yjztVskL9' // You'll get this from EmailJS
      );

      // Even if emailjs.sendForm throws a minor error, if it completes
      // to this point, we assume the email was sent.
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      // Reset form fields by clearing state
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

    } catch (error) {
      // We will still log the error for debugging, but display success if we reached the reset line.
      console.error('EmailJS error:', error);
      // If we reached here, it's a more significant failure
       toast({
         title: "Error",
         description: "Failed to send message. Please try again later.",
         variant: "destructive",
       });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-playfair font-bold text-white">Contact <span className="text-primary">Me</span></h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          <p className="mt-4 text-gray-400 font-poppins max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out through any of the methods below.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <motion.div 
            className="bg-black/30 p-8 rounded-lg shadow-lg border border-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-playfair font-semibold mb-6 text-white">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-poppins font-medium text-white">Email</h4>
                  <p className="text-gray-400 font-poppins">uhirweestherhope@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-poppins font-medium text-white">Phone</h4>
                  <p className="text-gray-400 font-poppins">+250 730 288 300</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-poppins font-medium text-white">GitHub</h4>
                  <p className="text-gray-400 font-poppins">github.com/Uhirwe</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-poppins font-medium text-white">LinkedIn</h4>
                  <p className="text-gray-400 font-poppins">linkedin.com/in/estheruhirwe</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-black/30 p-8 rounded-lg shadow-lg border border-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-playfair font-semibold mb-6 text-white">Send A Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  name="name"
                  placeholder="Your Name" 
                  className="font-poppins bg-secondary/50 border-gray-700 focus:border-primary text-white" 
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Input 
                  name="email"
                  type="email" 
                  placeholder="Your Email" 
                  className="font-poppins bg-secondary/50 border-gray-700 focus:border-primary text-white" 
                  required 
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Input 
                  name="subject"
                  placeholder="Subject" 
                  className="font-poppins bg-secondary/50 border-gray-700 focus:border-primary text-white" 
                  required 
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Textarea 
                  name="message"
                  placeholder="Your Message" 
                  className="font-poppins h-32 bg-secondary/50 border-gray-700 focus:border-primary text-white" 
                  required 
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-black font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
