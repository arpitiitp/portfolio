import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Cpu, Database, User } from 'lucide-react';

const navLinks = [
  { name: 'System.Init()', href: '#hero', icon: Terminal },
  { name: 'About.exe', href: '#about', icon: User },
  { name: 'Projects.log', href: '#projects', icon: Cpu },
  { name: 'Contact.sh', href: '#contact', icon: Database },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cyber-bg/80 backdrop-blur-md border-b border-cyber-neon/30 py-4 shadow-lg shadow-cyber-neon/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-neon to-cyber-purple tracking-tighter"
        >
          ARPIT<span className="text-white">_SYS</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex items-center gap-2 font-mono text-sm text-gray-400 hover:text-cyber-neon transition-colors"
            >
              <link.icon size={16} className="group-hover:text-cyber-purple transition-colors" />
              <span>{link.name}</span>
            </motion.a>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-cyber-neon">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-cyber-bg border-b border-cyber-neon/30 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 font-mono text-gray-300 hover:text-cyber-neon p-2 rounded-lg hover:bg-cyber-panel/50"
                >
                  <link.icon size={18} className="text-cyber-purple" />
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
