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
                <p className="text-sm font-mono text-gray-400 mt-1 mb-4">Indian Institute of Technology, Patna (IIT Patna)</p>

                <div>
                  <p className="text-sm text-gray-300 mb-2 font-mono">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Data Structures & Algorithms', 'Computer Architecture', 'Theory of Computation', 'DBMS', 'OS', 'Linear Algebra', 'Numerical Analysis', 'Probability & Statistics', 'Mathematical Modelling', 'Machine Learning', 'Deep Learning', 'Mathematical Finance & Portfolio Theory', 'Optimization Theory'].map((course) => (
                      <span key={course} className="px-2 py-1 text-xs font-mono text-cyber-purple bg-cyber-purple/10 border border-cyber-purple/30 rounded">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
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

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['AWS Lambda', 'TypeScript', 'XML', 'Python', 'Generative AI', 'Microservices', 'Serverless'].map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs font-mono text-cyber-neon bg-cyber-neon/10 border border-cyber-neon/30 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-3 text-gray-400 text-sm">
                    <li className="flex gap-3 items-start">
                      <span className="text-cyber-neon mt-0.5">»</span>
                      <span>Engineered production-grade automations for Vendor Compliance on ORCA (serverless orchestration), achieving a 4.63 FTE headcount reduction and €15M+ in COGS savings.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-cyber-neon mt-0.5">»</span>
                      <span>Reduced ticket turnaround time by 99% (from 512 min to 5 min) by deploying scalable workflows using type-safe TypeScript and REST APIs.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-cyber-neon mt-0.5">»</span>
                      <span>Developed a GenAI intent classifier for vendor responses achieving 96.78% accuracy, optimizing workflows by automatically routing only high-judgment cases to humans.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-cyber-neon mt-0.5">»</span>
                      <span>Architected a modular microservices system via FastAPI, decoupling complex processing logic to ensure independent scalability and system maintainability.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
