import { motion } from 'framer-motion';

const skills = [
  { name: 'C/C++', category: 'Languages', color: 'cyber-neon' },
  { name: 'Python', category: 'Languages', color: 'cyber-neon' },
  { name: 'JavaScript', category: 'Languages', color: 'cyber-neon' },
  { name: 'TypeScript', category: 'Languages', color: 'cyber-neon' },
  { name: 'SQL', category: 'Languages', color: 'cyber-neon' },
  { name: 'Bash/Shell', category: 'Languages', color: 'cyber-neon' },
  { name: 'React.js', category: 'Frontend', color: 'cyber-matrix' },
  { name: 'TailwindCSS', category: 'Frontend', color: 'cyber-matrix' },
  { name: 'Node.js', category: 'Backend', color: 'cyber-matrix' },
  { name: 'Express.js', category: 'Backend', color: 'cyber-matrix' },
  { name: 'FastAPI', category: 'Backend', color: 'cyber-matrix' },
  { name: 'Socket.io', category: 'Backend', color: 'cyber-matrix' },
  { name: 'PostgreSQL', category: 'Database', color: 'cyber-purple' },
  { name: 'MongoDB', category: 'Database', color: 'cyber-purple' },
  { name: 'VectorDB / FAISS', category: 'Database', color: 'cyber-purple' },
  { name: 'Firebase', category: 'Cloud/Tools', color: 'cyber-purple' },
  { name: 'AWS', category: 'Cloud/Tools', color: 'cyber-purple' },
  { name: 'Docker', category: 'Cloud/Tools', color: 'cyber-purple' },
  { name: 'PyTorch', category: 'AI/ML', color: 'cyber-pink' },
  { name: 'LangChain', category: 'AI/ML', color: 'cyber-pink' },
  { name: 'Pandas', category: 'AI/ML', color: 'cyber-pink' },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.6 }}
           className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-4">
            <span className="text-cyber-pink">03.</span> TECH_ARSENAL
          </h2>
          <div className="w-24 h-1 bg-cyber-pink glow-purple mx-auto md:mx-0"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                boxShadow: `0 0 20px rgba(${skill.color === 'cyber-neon' ? '0,240,255' : skill.color === 'cyber-matrix' ? '0,255,65' : skill.color === 'cyber-purple' ? '176,38,255' : '255,0,85'}, 0.6)`
              }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 300
              }}
              className={`glass-panel px-6 py-4 border-${skill.color}/30 text-center transition-colors duration-300 hover:border-${skill.color}`}
            >
              <p className="text-xs font-mono text-gray-500 mb-1">{skill.category}</p>
              <h3 className={`text-xl font-bold text-${skill.color}`}>{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyber-pink/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
    </section>
  );
};
