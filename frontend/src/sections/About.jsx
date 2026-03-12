import { motion } from 'framer-motion';
import { Cpu, Briefcase, GraduationCap } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.6 }}
           className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-4">
            <span className="text-cyber-purple">01.</span> ABOUT_ME
          </h2>
          <div className="w-24 h-1 bg-cyber-purple glow-purple"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education & Focus */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-neon/10 rounded-full blur-3xl group-hover:bg-cyber-neon/20 transition-all duration-500"></div>
            
            <div className="flex items-center gap-4 mb-6">
              <GraduationCap className="text-cyber-neon w-8 h-8" />
              <h3 className="text-2xl font-mono text-white">Education.json</h3>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-2 border-cyber-neon/50 pl-4">
                <h4 className="text-lg font-bold text-cyber-neon">Bachelor of Technology</h4>
                <p className="text-gray-300">Mathematics and Computing</p>
                <p className="text-sm font-mono text-gray-400 mt-1">Indian Institute of Technology, Patna (IIT Patna)</p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="text-cyber-neon w-6 h-6" />
                  <h4 className="text-lg font-mono text-white">Core Focus</h4>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Building low-latency systems, exploring High-Frequency Trading (HFT) concepts, and solving complex algorithmic challenges. Passionate about architecting scalable backend infrastructure and robust AI integrations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-panel p-8 relative overflow-hidden group border-cyber-purple/30 hover:border-cyber-purple/60 transition-colors duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-purple to-cyber-neon transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            
            <div className="flex items-center gap-4 mb-6">
              <Briefcase className="text-cyber-purple w-8 h-8" />
              <h3 className="text-2xl font-mono text-white">Experience.log</h3>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 bottom-0 w-[2px] bg-cyber-purple/30"></div>
              
              <div className="relative pl-8 pb-6">
                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-cyber-bg border-2 border-cyber-purple z-10 glow-purple"></div>
                <h4 className="text-xl font-bold text-white text-glow-purple">Amazon Development Centre</h4>
                <p className="text-cyber-purple font-mono mb-2">Business Intelligence Intern</p>
                <p className="text-xs font-mono text-gray-500 mb-4 inline-block px-2 py-1 bg-cyber-bg border border-white/10 rounded">July 2025 - Dec 2025</p>
                
                <ul className="space-y-2 text-gray-400">
                  <li className="flex gap-2">
                    <span className="text-cyber-neon">»</span>
                    <span>Spearheaded data orchestration and intelligence pipelines for large-scale e-commerce datasets.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyber-neon">»</span>
                    <span>Optimized query performance and built comprehensive analytics dashboards for stakeholder decision-making.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
