import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with payment integration and admin dashboard.',
      image: 'https://picsum.photos/seed/project1/800/600',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
    },
    {
      title: 'AI Image Generator',
      description: 'Using Gemini API to generate creative images from text prompts.',
      image: 'https://picsum.photos/seed/project2/800/600',
      tags: ['React', 'Gemini API', 'Tailwind'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio with light and dark mode support.',
      image: 'https://picsum.photos/seed/project3/800/600',
      tags: ['React', 'Framer Motion', 'Tailwind'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50">
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
              className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-black/5 dark:border-white/10 hover:shadow-2xl transition-all"
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
                  <a href={project.demo} className="p-3 bg-white rounded-full text-black hover:bg-primary hover:text-white transition-colors">
                    <ExternalLink size={20} />
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
