import { motion } from 'framer-motion';
import { Code, Briefcase} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Link } from 'react-scroll';

const About = () => {
  const stats = [
    { icon: <Code size={24} />, value: '2+', label: 'Years of Experience' },
    { icon: <Briefcase size={24} />, value: '15+', label: 'Projects Completed' }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-darker via-dark to-darker relative">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-50"></div>
      <div className="section-container relative z-10">
        <SectionTitle 
          title="About Me" 
          subtitle="Here you will find more information about me, what I do, and my current skills" 
        />

        <div className="grid md:grid-cols-5 gap-12 items-center">
         { 
          <motion.div 
            className="md:col-span- order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            
          </motion.div>}

          <motion.div 
            className="md:col-span-3 order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Get to know me!</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                A passionate <span className="text-accent">Full Stack Web Developer</span> with a strong foundation in Front-End Development, bringing over two years of experience in crafting clean, responsive, and user-friendly interfaces. Since 2023, more than 15 front-end projects have been designed and built ranging from simple landing pages to complex, dynamic applications using HTML, CSS, JavaScript, and modern frameworks.
              </p>
              <p>
                Now expanding into Full-Stack development, combining polished front-end skills with back-end technologies to deliver complete, scalable solutions. Every project focuses on creating seamless user experiences from the first pixel to the last database query.
              </p>
              <p>
                Outside of development, time is spent exploring new technologies, sharpening problem-solving skills, and transforming creative concepts into functional products.
              </p>
              <p>
               Open to roles that offer the chance to contribute, learn, and grow. If there's an opportunity that aligns with these skills and passion for development, feel free to get in touch.
              </p>
            </div>
            
            <div className="mt-8">
              <Button>
               <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Contact Me
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="bg-darkgray/50 backdrop-blur-sm p-4 rounded-lg text-center border border-accent/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <div className="flex justify-center mb-2 text-accent">
                    {stat.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;