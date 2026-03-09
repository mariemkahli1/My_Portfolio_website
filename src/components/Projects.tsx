import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import auth from '../assets/Authentification.png';
import commerce from '../assets/E-commerce.png';
import library from '../assets/library.png';
import sporty from '../assets/SPORTY.png';

const Projects: React.FC = () => {
  const projects = [
     {
      title: 'Solution De Gestion et Analyse des Workflows Power Automate',
      description: 'An intelligent solution for managing and analyzing Power Automate workflows, integrating AI for automatic error detection and correction.',
      image: auth,
      tags: ['React', 'TypeScript', '.NET', 'SQL Server' , 'SSMS' , 'power automate', 'python'],
      github: 'https://github.com/mariemkahli1/Gestion_des_WKFs_power_automate_Backend',

    },
 
    {
      title: 'After-Sales Service Management Web Application ',
      description: 'A web application designed to manage after-sales services.',
      image: commerce,
      tags: ['Angular','.NET' ],
      github: 'https://github.com/mariemkahli1/ProjetSAV-.NET-Angular',
     
    },
   
     {
      title: 'Dynamic Library Information System Website',
      description: 'A dynamic platform that allows efficient management of books and members.',
      image: library,
      tags: ['Angular','Spring Boot'],
      github: 'https://github.com/mariemkahli1/Projet-Gestion-Laboratoire',

    },
       {
      title: 'SPORTY Platform',
      description: 'A full-featured online store with payment integration and admin dashboard.',
      image: sporty,
      tags: ['PHP', 'JAVASCRIPT', 'MYSQL '],
      github: 'https://github.com/mariemkahli1/SPORTYWEBSITE-with-PHP',
      
    },
  ];

  return (
    <section id="projects" className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of my recent work, showcasing my skills in development and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-black/5 dark:border-white/10 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a href={project.github} className="p-3 bg-white rounded-full text-black hover:bg-primary hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-primary/10 text-primary rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
