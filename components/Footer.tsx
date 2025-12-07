'use client';

import { motion } from 'motion/react';
import { Heart, ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';

interface FooterProps {
    theme: 'dark' | 'light';
}

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

export function Footer({ theme }: FooterProps) {
    const currentYear = new Date().getFullYear();
    const isDark = theme === 'dark';

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
            className={`relative border-t ${
                isDark ? 'bg-surface border-border' : 'bg-surface-light border-border-light'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-6 sm:mb-8">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="sm:col-span-2 lg:col-span-1"
                    >
                        <h3 className={`${isDark ? 'gradient-text' : 'gradient-textLight'} text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4`}>
                            Haritha Wickremesinghe
                        </h3>
                        <p className={`text-sm sm:text-base mb-4 leading-relaxed ${
                            isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                        }`}>
                            Full Stack Developer passionate about creating elegant solutions to
                            complex problems.
                        </p>
                        <div className="flex items-center gap-2 sm:gap-3">
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
                                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all border ${
                                        isDark
                                            ? 'bg-background border-border hover:border-primary'
                                            : 'bg-background-light border-border-light hover:border-primary-light'
                                    }`}
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
                        <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                            Quick Links
                        </h4>
                        <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3">
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
                                        className={`text-sm sm:text-base transition-colors hover:text-primary ${
                                            isDark
                                                ? 'text-text-secondary hover:text-text-primary'
                                                : 'text-text-secondary-light hover:text-text-primary-light'
                                        }`}
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
                        <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                            Get in Touch
                        </h4>
                        <div className="space-y-2 sm:space-y-3">
                            <p className={`text-sm sm:text-base ${
                                isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                            }`}>
                                <a
                                    href="mailto:haritha@example.com"
                                    className="hover:text-primary transition-colors"
                                >
                                    haritha@example.com
                                </a>
                            </p>
                            <p className={`text-sm sm:text-base ${
                                isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                            }`}>
                                <a
                                    href="tel:+94771234567"
                                    className="hover:text-primary transition-colors"
                                >
                                    +94 77 123 4567
                                </a>
                            </p>
                            <p className={`text-sm sm:text-base ${
                                isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                            }`}>
                                Colombo, Sri Lanka
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className={`border-t my-6 sm:my-8 ${
                    isDark ? 'border-border' : 'border-border-light'
                }`} />

                {/* Bottom Section */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className={`text-xs sm:text-sm text-center sm:text-left ${
                            isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                        }`}
                    >
                        © {currentYear} Haritha Wickramasinga. All rights reserved.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
                    >
            <span className={isDark ? 'text-text-secondary' : 'text-text-secondary-light'}>
              Built with
            </span>
                        <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse ${isDark ? 'text-primary' : 'text-primary-light'}`} />
                        <span className={isDark ? 'text-text-secondary' : 'text-text-secondary-light'}>
              and
            </span>
                        <span className={`${isDark ? 'text-primary' : 'text-primary-light'} font-medium`}>Next JS</span>
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
                className={`fixed bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full flex items-center justify-center z-50 transition-all shadow-lg ${
                    isDark
                        ? 'bg-primary text-background shadow-primary/30'
                        : 'bg-primary-light text-white shadow-primary-light/30'
                }`}
                aria-label="Back to top"
            >
                <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
        </footer>
    );
}

export default Footer;