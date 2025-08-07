import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Comuter Sciene',
      institution: 'Capital University of Science and Technology',
      period: '2022 - 2026',
      icon: <GraduationCap size={32} />
    },
    {
      degree: 'Intermediate in Computer Science',
      institution: 'Punjab Group of College',
      period: '2020 - 2022',
      icon: <GraduationCap size={32} />
    },
    {
      degree: 'Matriculaion in Computer Science',
      institution: 'CMA College',
      period: '2018 - 2020',
      icon: <GraduationCap size={32} />
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'Sep 2022',
      icon: <Award size={24} />
    },
    {
      name: 'Google Professional Cloud Developer',
      issuer: 'Google Cloud',
      date: 'Mar 2022',
      icon: <Award size={24} />
    },
    {
      name: 'React Advanced Certification',
      issuer: 'Meta',
      date: 'Jan 2021',
      icon: <Award size={24} />
    },
    {
      name: 'TypeScript Professional Certification',
      issuer: 'Microsoft',
      date: 'Nov 2020',
      icon: <Award size={24} />
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-darker">
      <div className="section-container">
        <SectionTitle 
          title="Education & Certifications" 
          subtitle="My academic background and professional certifications" 
        />
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Education Column */}
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-6 text-accent flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <GraduationCap size={28} className="mr-2" />
              Academic Education
            </motion.h3>
            
            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start">
                    <div className="mr-4 text-accent mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold">{item.degree}</h4>
                      <p className="text-secondary text-lg">{item.institution}</p>
                      <div className="flex items-center text-gray-400 mt-1 mb-3">
                        <Calendar size={16} className="mr-2" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Certifications Column */}
        {  <div>
            <motion.h3 
              className="text-2xl font-bold mb-6 text-accent flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Award size={28} className="mr-2" />
              Professional Certifications
            </motion.h3>
            
            <div className="grid grid-cols-1 gap-6">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start">
                    <div className="mr-4 text-accent mt-1">
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">{cert.name}</h4>
                      <p className="text-secondary">{cert.issuer}</p>
                      <div className="flex items-center text-gray-400 mt-1">
                        <Calendar size={16} className="mr-2" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>}
        </div>
      </div>
    </section>
  );
};

export default Education;