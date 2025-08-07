import SectionTitle from '../components/SectionTitle';
import SkillBar from '../components/SkillBar';
import { motion } from 'framer-motion';
import { Code, Database, Layers, PaintBucket } from 'lucide-react';

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 75 },
    { name: 'React', level: 75 },
    { name: 'TypeScript', level: 60 },
/*     { name: 'Next.js', level: 80 }, */
  ];

  const backendSkills = [
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 80 },
    { name: 'PHP', level: 70 },
/*     { name: 'REST API', level: 90 }, */
/*     { name: 'GraphQL', level: 70 }, */
  ];

  const databaseSkills = [
    { name: 'MongoDB', level: 85 },
/*     { name: 'PostgreSQL', level: 80 }, */
    { name: 'Firebase', level: 75 },
/*     { name: 'Redis', level: 65 }, */
  ];

  const otherSkills = [
    { name: 'Git/GitHub', level: 90 },
    { name: 'Docker', level: 75 },
/*     { name: 'AWS', level: 70 }, */
/*     { name: 'CI/CD', level: 75 }, */
  ];

  const skillCategories = [
    { 
      title: 'Frontend Development', 
      skills: frontendSkills, 
      icon: <Code size={24} />,
      color: 'text-secondary'
    },
    { 
      title: 'Backend Development', 
      skills: backendSkills, 
      icon: <Layers size={24} />,
      color: 'text-accent'
    },
    { 
      title: 'Database', 
      skills: databaseSkills, 
      icon: <Database size={24} />,
      color: 'text-success'
    },
    { 
      title: 'Other Skills', 
      skills: otherSkills, 
      icon: <PaintBucket size={24} />,
      color: 'text-warning'
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-b from-dark via-darker to-dark relative">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-50"></div>
      <div className="section-container relative z-10">
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="A comprehensive overview of my technical skills and expertise" 
        />
        
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="bg-darkgray/50 backdrop-blur-sm border border-accent/10 rounded-xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className={`mr-3 ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex} 
                    name={skill.name} 
                    level={skill.level} 
                    delay={0.1 * skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 p-8 bg-darkgray/50 backdrop-blur-sm border border-accent/10 rounded-xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-4">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Responsive Design','Tailwind CSS', 'Figma', 'Technical Writing'].map((skill, index) => (
              <motion.span 
                key={index} 
                className="bg-darkgray/70 px-4 py-2 rounded-full text-sm text-gray-300 border border-accent/10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, backgroundColor: '#8b5cf6', color: '#ffffff' }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;