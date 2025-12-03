import { motion } from 'motion/react';
import { Heart, ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';

interface FooterProps {
  theme: 'dark' | 'light';
}

export function Footer({ theme }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:haritha@example.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer
      className={`relative ${
        theme === 'dark' ? 'bg-surface' : 'bg-surface-light'
      } border-t ${theme === 'dark' ? 'border-border' : 'border-border-light'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="gradient-text mb-4">Haritha Wickramasinga</h3>
            <p
              className={`mb-4 ${
                theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'
              }`}
            >
              Full Stack Developer passionate about creating elegant solutions to
              complex problems.
            </p>
            <div className="flex items-center space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`w-10 h-10 rounded-lg ${
                    theme === 'dark' ? 'bg-background' : 'bg-background-light'
                  } border ${
                    theme === 'dark' ? 'border-border' : 'border-border-light'
                  } flex items-center justify-center hover:border-primary transition-all`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`${
                      theme === 'dark'
                        ? 'text-text-secondary hover:text-text-primary'
                        : 'text-text-secondary-light hover:text-text-primary-light'
                    } hover:text-primary transition-colors`}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <p
                className={
                  theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'
                }
              >
                <a
                  href="mailto:haritha@example.com"
                  className="hover:text-primary transition-colors"
                >
                  haritha@example.com
                </a>
              </p>
              <p
                className={
                  theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'
                }
              >
                <a
                  href="tel:+94771234567"
                  className="hover:text-primary transition-colors"
                >
                  +94 77 123 4567
                </a>
              </p>
              <p
                className={
                  theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'
                }
              >
                Colombo, Sri Lanka
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          className={`border-t ${
            theme === 'dark' ? 'border-border' : 'border-border-light'
          } my-8`}
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`text-sm ${
              theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'
            } flex items-center space-x-2`}
          >
            <span>© {currentYear} Haritha Wickramasinga. All rights reserved.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-sm"
          >
            <span
              className={
                theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'
              }
            >
              Built with
            </span>
            <Heart className="w-4 h-4 text-primary animate-pulse" />
            <span
              className={
                theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'
              }
            >
              and
            </span>
            <span className="gradient-text">React + Tailwind CSS</span>
          </motion.div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-white shadow-lg shadow-primary/30 flex items-center justify-center hover:bg-primary/90 transition-all z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
