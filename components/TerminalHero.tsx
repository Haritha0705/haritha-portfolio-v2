import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal, Github, Linkedin, Mail, Download, ChevronRight } from 'lucide-react';

interface TerminalHeroProps {
  theme: 'dark' | 'light';
}

export function TerminalHero({ theme }: TerminalHeroProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const terminalLines = [
    { type: 'command', text: '$ whoami' },
    { type: 'output', text: 'Haritha Wickramasinga - Full Stack Developer' },
    { type: 'command', text: '$ cat skills.txt' },
    { type: 'output', text: 'React • Node.js • TypeScript • MongoDB • AWS' },
    { type: 'command', text: '$ echo $STATUS' },
    { type: 'output', text: '🟢 Available for opportunities' },
    { type: 'command', text: '$ ./start-project.sh' },
  ];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentLine >= terminalLines.length) return;

    const line = terminalLines[currentLine];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= line.text.length) {
        setDisplayedText(line.text.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentLine(prev => prev + 1);
          setDisplayedText('');
        }, 500);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentLine]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary font-mono text-sm"
            initial={{ y: -100, x: i * 100 }}
            animate={{ y: '100vh' }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
            }}
          >
            {Array.from({ length: 20 }, () => 
              Math.random() > 0.5 ? '1' : '0'
            ).join('')}
          </motion.div>
        ))}
      </div>

      {/* Particle Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, ${theme === 'dark' ? 'rgba(99, 102, 241, 0.1)' : 'rgba(79, 70, 229, 0.1)'} 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Terminal Window */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Terminal Window */}
            <div className={`rounded-xl overflow-hidden ${
              theme === 'dark' ? 'bg-[#1E1E1E]' : 'bg-[#FFFFFF]'
            } border-2 ${
              theme === 'dark' ? 'border-primary/30' : 'border-primary-light/30'
            } shadow-2xl shadow-primary/20`}>
              {/* Terminal Header */}
              <div className={`flex items-center justify-between px-4 py-3 ${
                theme === 'dark' ? 'bg-[#2D2D30]' : 'bg-[#F3F3F3]'
              } border-b ${
                theme === 'dark' ? 'border-[#3E3E42]' : 'border-[#E5E5E5]'
              }`}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                <div className="flex items-center space-x-2 text-xs text-text-secondary">
                  <Terminal className="w-4 h-4" />
                  <span>haritha@portfolio:~</span>
                </div>
                <div className="w-16"></div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm h-96 overflow-hidden">
                {terminalLines.slice(0, currentLine).map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-2"
                  >
                    {line.type === 'command' ? (
                      <div className="flex items-center space-x-2">
                        <span className="text-success">➜</span>
                        <span className="text-secondary">~</span>
                        <span className={theme === 'dark' ? 'text-text-primary' : 'text-text-primary-light'}>
                          {line.text}
                        </span>
                      </div>
                    ) : (
                      <div className="text-text-secondary pl-8">{line.text}</div>
                    )}
                  </motion.div>
                ))}
                {currentLine < terminalLines.length && (
                  <div className="flex items-center space-x-2">
                    {terminalLines[currentLine].type === 'command' && (
                      <>
                        <span className="text-success">➜</span>
                        <span className="text-secondary">~</span>
                      </>
                    )}
                    <span className={`${
                      terminalLines[currentLine].type === 'command' 
                        ? theme === 'dark' ? 'text-text-primary' : 'text-text-primary-light'
                        : 'text-text-secondary pl-8'
                    }`}>
                      {displayedText}
                      {showCursor && <span className="text-primary">▊</span>}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              {[
                { icon: Github, label: 'GitHub', href: 'https://github.com' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
                { icon: Mail, label: 'Email', href: 'mailto:haritha@example.com' },
                { icon: Download, label: 'Resume', href: '#' },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                    theme === 'dark' ? 'bg-surface' : 'bg-surface-light'
                  } border ${
                    theme === 'dark' ? 'border-primary/30' : 'border-primary-light/30'
                  } hover:border-primary transition-all`}
                >
                  <link.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm">{link.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Main Card */}
            <div className={`p-8 rounded-xl ${
              theme === 'dark' ? 'bg-surface' : 'bg-surface-light'
            } border-2 ${
              theme === 'dark' ? 'border-primary/30' : 'border-primary-light/30'
            } relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
                    <span className="text-xs text-success font-mono">AVAILABLE FOR WORK</span>
                  </div>
                  
                  <h1 className="mb-4">
                    <span className="text-primary">{'<'}</span>
                    Haritha Wickramasinga
                    <span className="text-primary">{' />'}</span>
                  </h1>
                  
                  <div className="space-y-2 mb-6 font-mono text-sm">
                    <div className="flex items-start">
                      <span className="text-secondary mr-2">const</span>
                      <span className="text-tertiary mr-2">role</span>
                      <span className="text-text-secondary mr-2">=</span>
                      <span className="text-primary">"Full Stack Developer";</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-secondary mr-2">const</span>
                      <span className="text-tertiary mr-2">status</span>
                      <span className="text-text-secondary mr-2">=</span>
                      <span className="text-primary">"2nd Year SE Student";</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-secondary mr-2">const</span>
                      <span className="text-tertiary mr-2">passion</span>
                      <span className="text-text-secondary mr-2">=</span>
                      <span className="text-primary">"Building Solutions";</span>
                    </div>
                  </div>
                  
                  <p className={`mb-6 ${
                    theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'
                  }`}>
                    Crafting digital experiences with clean code and creative solutions.
                    Passionate about turning ideas into reality through technology.
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2 font-mono"
                  >
                    <ChevronRight className="w-5 h-5" />
                    <span>{'> Start a Project'}</span>
                  </motion.button>
                </motion.div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Projects', value: '25+' },
                { label: 'Commits', value: '1.5K+' },
                { label: 'Tech Stack', value: '15+' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`p-4 rounded-lg ${
                    theme === 'dark' ? 'bg-surface' : 'bg-surface-light'
                  } border ${
                    theme === 'dark' ? 'border-border' : 'border-border-light'
                  } text-center`}
                >
                  <div className="gradient-text font-mono font-bold text-xl mb-1">
                    {stat.value}
                  </div>
                  <div className={`text-xs ${
                    theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-xs text-text-secondary mb-2 font-mono">SCROLL_DOWN</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-primary rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
