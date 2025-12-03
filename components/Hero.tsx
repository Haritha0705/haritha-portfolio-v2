import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

interface HeroProps {
  theme: 'dark' | 'light';
}

export function Hero({ theme }: HeroProps) {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['web apps', 'APIs', 'experiences', 'solutions'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 mb-6"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
              </span>
              <span className="text-sm text-success">Available for opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Haritha Wickramasinga</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <h2 className={theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'}>
                I build{' '}
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="gradient-text inline-block"
                >
                  {words[currentWord]}
                </motion.span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`text-lg mb-8 ${
                theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'
              }`}
            >
              Full Stack Developer & 2nd Year Software Engineering Student passionate
              about creating elegant solutions to complex problems. Turning ideas into
              reality, one line of code at a time.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Get In Touch</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-lg border-2 transition-colors flex items-center space-x-2 ${
                  theme === 'dark'
                    ? 'border-primary text-primary hover:bg-primary/10'
                    : 'border-primary-light text-primary-light hover:bg-primary-light/10'
                }`}
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center space-x-4"
            >
              {[
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:haritha@example.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-lg transition-colors ${
                    theme === 'dark'
                      ? 'bg-surface hover:bg-primary/20'
                      : 'bg-surface-light hover:bg-primary-light/20'
                  }`}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'linear-gradient(135deg, #6366F1 0%, #A855F7 50%, #22D3EE 100%)',
                  padding: '4px',
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <div
                  className={`w-full h-full rounded-full ${
                    theme === 'dark' ? 'bg-background' : 'bg-background-light'
                  }`}
                />
              </motion.div>

              {/* Profile Image Placeholder */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-primary via-tertiary to-secondary flex items-center justify-center">
                <span className="text-9xl">👨‍💻</span>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-lg backdrop-blur-sm flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <span className="text-3xl">⚡</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary/20 rounded-lg backdrop-blur-sm flex items-center justify-center"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              >
                <span className="text-3xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => {
              const element = document.getElementById('about');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span
              className={`text-sm mb-2 ${
                theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'
              }`}
            >
              Scroll to explore
            </span>
            <ChevronDown className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
