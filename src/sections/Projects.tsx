import SectionTitle from '../components/SectionTitle';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import img_1 from "../image/project_1.jpeg";
import img_2 from "../image/project_2.jpeg";
import img_3 from "../image/project_3.jpeg";


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Ahana Yoga Template ',
      description: 'A modern yoga and wellness website template featuring class schedules, trainer profiles, and a responsive design built with React and Tailwind CSS.',
      image: img_1,
      liveUrl: 'https://ahana-ebon.vercel.app/',
      githubUrl: 'https://github.com/Zohaib251',
      technologies: ['React', 'Tailwind', 'JavaScript', 'Responsive']
    },
    {
      id: 2,
      title: 'Avo Landing Page',
      description: 'A sleek and modern landing page with smooth animations and interactive elements for a creative agency.',
      image: img_2,
      liveUrl: 'https://avo-two.vercel.app/',
      githubUrl: 'https://github.com/Zohaib251',
      technologies: ['React', 'Tailwind', 'JavaScript', 'Responsive']
    },
    {
      id: 3,
      title: 'Constra Construction',
      description: 'A professional construction company website featuring project galleries and service information.',
      image: img_3,
      liveUrl: 'https://constra-wheat.vercel.app/',
      githubUrl: 'https://github.com/Zohaib251',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive']
    }
  ];

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-dark via-darker to-dark relative">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-50"></div>
      <div className="section-container relative z-10">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="A showcase of my recent work and development projects" 
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleProjectClick(project.liveUrl)}
            >
              <div className="bg-darkgray/50 backdrop-blur-sm border border-accent/10 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Icons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(project.liveUrl);
                      }}
                      className="bg-accent hover:bg-accent-dark p-2 rounded-full transition-colors"
                      aria-label="View Live Project"
                    >
                      <ExternalLink size={16} className="text-white" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(project.githubUrl);
                      }}
                      className="bg-darkgray hover:bg-gray-600 p-2 rounded-full transition-colors"
                      aria-label="View Source Code"
                    >
                      <Github size={16} className="text-white" />
                    </button>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-accent/20 text-accent px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View More Projects Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button
            onClick={() => handleProjectClick('https://github.com/Zohaib251')}
            className="btn-secondary inline-flex items-center space-x-2 hover:bg-accent hover:text-white transition-all duration-300"
          >
            <Github size={20} />
            <span>View More Projects</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;