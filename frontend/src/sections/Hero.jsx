import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Canvas } from '@react-three/fiber';
import { ParticleNetwork } from '../components/canvas/ParticleNetwork';
import { Terminal } from 'lucide-react';

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleNetwork />
        </Canvas>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-mono font-bold text-white mb-4 tracking-tighter">
            HELLO, I'M <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-neon to-cyber-purple text-glow">ARPIT SINGH</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl font-mono text-gray-300 h-16"
        >
          <span className="text-cyber-matrix">{'> '}</span>
          <Typewriter
            words={[
              'Software Engineer.',
              'MERN Stack Developer.',
              'GenAI & LLM Enthusiast.',
              'Competitive Programmer.'
            ]}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          onClick={scrollToProjects}
          className="mt-12 group flex items-center gap-3 px-8 py-4 bg-cyber-panel/50 backdrop-blur-sm border-2 border-cyber-neon text-cyber-neon font-mono text-lg rounded-none hover:bg-cyber-neon/10 glow-cyan transition-all duration-300"
        >
          <Terminal className="group-hover:animate-pulse" />
          <span>INITIALIZE_SYSTEM()</span>
        </motion.button>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Scroll Down</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-cyber-neon/50 to-transparent"></div>
      </motion.div>
    </section>
  );
};
