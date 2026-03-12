import { motion } from 'framer-motion';
import { Database, Code, Film, ArrowUpRight, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Medical Graph RAG',
    description: 'A privacy-first generative AI healthcare application leveraging Knowledge Graphs and Small Language Models (Phi-3.5) to dramatically reduce LLM hallucination and ensure secure, localized clinical inference.',
    tech: ['Python', 'Neo4j', 'Phi-3.5', 'LLMs', 'RAG'],
    icon: Database,
    color: 'cyber-matrix',
    github: 'https://github.com/arpitiitp/Edge-Native-Medical-Graph-RAG',
    live: null
  },
  {
    title: 'GenAI Blog App',
    description: 'A robust full-stack Web application leveraging Generative AI to automatically generate, refine, and seamlessly publish high-quality, animated blog posts for a modern reading experience.',
    tech: ['React', 'Redux Toolkit', 'ImageKit CDN', 'Node.js', 'Express', 'MongoDB', 'GenAI'],
    icon: Code,
    color: 'cyber-neon',
    github: 'https://github.com/arpitiitp/Blog-APP',
    live: 'https://blog-app-frontend-43tw.onrender.com/' // placeholder for deployed link
  },
  {
    title: 'C++ Task Scheduler',
    description: 'A high-performance system-level task scheduler implementing priority queues and max heaps for optimal process execution.',
    tech: ['C++', 'Data Structures', 'Multithreading'],
    icon: Code,
    color: 'cyber-purple',
    github: 'https://github.com/arpitiitp/Task_Project',
    live: null
  },
  {
    title: 'Netflix + GPT',
    description: 'A React/Redux single-page entertainment application integrating Firebase scalable authentication with OpenAI APIs for highly personalized, AI-driven cinematic movie recommendations.',
    tech: ['React', 'Redux', 'Firebase', 'OpenAI API', 'Tailwind'],
    icon: Film,
    color: 'cyber-pink',
    github: 'https://github.com/arpitiitp/netflix-gpt',
    live: null
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-cyber-bg">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-4">
            <span className="text-cyber-matrix">02.</span> SYSTEM_LOGS
          </h2>
          <div className="w-24 h-1 bg-cyber-matrix glow-matrix"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`glass-panel p-8 group relative flex flex-col h-full overflow-hidden border-white/5 hover:border-${project.color} transition-colors duration-300 shadow-lg`}
            >
              {/* Hover gradient background effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-lg bg-${project.color}/10 border border-${project.color}/30 text-${project.color} group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-8 h-8" />
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className="text-gray-400 hover:text-white transition-colors pointer-events-auto z-20"
                      >
                        <Github className="w-6 h-6" />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="text-gray-400 hover:text-cyber-neon transition-colors pointer-events-auto z-20"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyber-neon transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs font-mono px-3 py-1 rounded-full bg-cyber-bg border border-white/10 text-gray-300 group-hover:border-${project.color}/50 transition-colors`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyber-matrix/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
    </section>
  );
};
