import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send, CheckCircle, AlertCircle } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: -30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.6 }}
           className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-4">
            <span className="text-cyber-neon">04.</span> ROOT_ACCESS
          </h2>
          <p className="text-gray-400 font-mono">Establish a secure connection.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="glass-panel border-cyber-neon/30 overflow-hidden relative"
        >
          {/* Terminal Header */}
          <div className="bg-[#0a0a1a] border-b border-cyber-neon/20 p-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 font-mono text-xs text-gray-500">guest@arpit-server: ~</span>
          </div>

          <div className="p-6 md:p-8 bg-[#050511]/80 backdrop-blur-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 font-mono text-cyber-neon text-sm">
                  <Terminal size={14} /> USER_IDENTIFICATION
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-gray-700 p-2 font-mono text-white focus:outline-none focus:border-cyber-neon focus:bg-cyber-neon/5 transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 font-mono text-cyber-neon text-sm">
                  <Terminal size={14} /> COMM_CHANNEL
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-gray-700 p-2 font-mono text-white focus:outline-none focus:border-cyber-neon focus:bg-cyber-neon/5 transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 font-mono text-cyber-neon text-sm">
                  <Terminal size={14} /> ENCRYPTED_PAYLOAD
                </label>
                <textarea
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-gray-700 p-2 font-mono text-white focus:outline-none focus:border-cyber-neon focus:bg-cyber-neon/5 transition-colors resize-none"
                  placeholder="Transmit your message here..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'loading'}
                className="w-full py-4 mt-4 bg-cyber-neon/10 hover:bg-cyber-neon border border-cyber-neon text-cyber-neon hover:text-[#050511] font-mono text-lg font-bold transition-all duration-300 flex items-center justify-center gap-3 glow-cyan disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
              >
                {status === 'loading' ? (
                  <span className="animate-pulse">TRANSMITTING...</span>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="animate-bounce" /> TRANSMISSION_SUCCESS
                  </>
                ) : status === 'error' ? (
                  <>
                    <AlertCircle /> CONNECTION_FAILED
                  </>
                ) : (
                  <>
                    EXECUTE_COMMAND <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 border-t border-white/5 pt-8 text-center px-4">
        <p className="font-mono text-sm text-gray-500">
          © {new Date().getFullYear()} ARPIT SINGH. System architecture engineered with React, Three.js & Node.
        </p>
      </div>
    </section>
  );
};
