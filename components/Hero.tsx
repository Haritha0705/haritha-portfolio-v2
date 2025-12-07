'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import { StatusBadge } from '@/components/ui/BadgeN';
import { Terminal } from '@/components/Terminal';

interface HeroProps {
    theme: 'dark' | 'light';
}

const TITLES = ['Full Stack Developer', 'Student', 'Tech Enthusiast'];

const generateBinaryStrings = () => {
    return Array.from({ length: 15 }, (_, i) => {
        let seed = i * 12345;
        return Array.from({ length: 20 }, () => {
            seed = (seed * 9301 + 49297) % 233280;
            return seed % 2 === 0 ? '1' : '0';
        }).join('');
    });
};

const BINARY_STRINGS = generateBinaryStrings();
const ANIMATION_CONFIG = Array.from({ length: 15 }, (_, i) => ({
    duration: 5 + (i % 5),
    delay: (i * 0.5) % 5,
}));

export function Hero({ theme }: HeroProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [titleIndex, setTitleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [mounted, setMounted] = useState(false);

    const isDark = theme === 'dark';

    const terminalLines = useMemo(
        () => [
            { type: 'command' as const, text: '$ whoami' },
            { type: 'output' as const, text: 'Haritha Wickramasinga - Full Stack Developer' },
            { type: 'command' as const, text: '$ cat skills.txt' },
            { type: 'output' as const, text: 'React • Node.js • TypeScript • MongoDB • AWS' },
            { type: 'command' as const, text: '$ echo $STATUS' },
            { type: 'output' as const, text: '🟢 Available for opportunities' },
            { type: 'command' as const, text: '$ ./start-project.sh' },
        ],
        []
    );

    const socialLinks = useMemo(
        () => [
            { icon: Github, label: 'GitHub', href: 'https://github.com' },
            { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
            { icon: Mail, label: 'Email', href: 'mailto:haritha@example.com' },
            { icon: Download, label: 'Resume', href: '#' },
        ],
        []
    );

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const currentTitle = TITLES[titleIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        const pauseTime = isDeleting ? 500 : 2000;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayedText.length < currentTitle.length) {
                    setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                if (displayedText.length > 0) {
                    setDisplayedText(displayedText.substring(0, displayedText.length - 1));
                } else {
                    setIsDeleting(false);
                    setTitleIndex((prev) => (prev + 1) % TITLES.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, titleIndex]);

    return (
        <section
            id="home"
            className={`min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20 ${
                isDark ? 'bg-background' : 'bg-background-light'
            }`}
        >
            {/* Matrix Background */}
            {mounted && (
                <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
                    {BINARY_STRINGS.map((binaryString, i) => (
                        <motion.div
                            key={i}
                            className="absolute font-mono text-xs sm:text-sm select-none text-primary"
                            initial={{ y: -100, x: i * 80 }}
                            animate={{ y: '100vh' }}
                            transition={{
                                duration: ANIMATION_CONFIG[i].duration,
                                repeat: Infinity,
                                ease: 'linear',
                                delay: ANIMATION_CONFIG[i].delay,
                            }}
                        >
                            {binaryString}
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Particle Grid */}
            <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage: `radial-gradient(circle, ${
                        isDark ? 'var(--color-primary)' : 'var(--color-primary-light)'
                    } 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-8 sm:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="space-y-6 sm:space-y-8">
                            <div className="space-y-4">
                                <StatusBadge status="available" theme={theme} />

                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text leading-tight">
                                    Haritha Wickramasinga
                                </h1>

                                {/* Typing Animation */}
                                <div className="flex items-center gap-2">
                  <span className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono ${
                      isDark ? 'text-secondary' : 'text-primary-light'
                  }`}>
                    {'>'} {displayedText}
                  </span>
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                                        className={`w-0.5 sm:w-1 h-5 sm:h-6 md:h-7 lg:h-8 ${
                                            isDark ? 'bg-primary' : 'bg-primary-light'
                                        }`}
                                    />
                                </div>

                                <p className={`text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed ${
                                    isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                                }`}>
                                    Crafting immersive digital experiences at the intersection of
                                    design and code. Specializing in React, TypeScript, and building
                                    systems that scale.
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`px-5 sm:px-6 py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base lg:text-lg font-medium transition-all cursor-pointer ${
                                        isDark
                                            ? 'bg-primary text-background shadow-[0_0_20px_rgba(0,255,65,0.3)]'
                                            : 'bg-primary-light text-white shadow-[0_0_20px_rgba(79,70,229,0.3)]'
                                    }`}
                                >
                                    View Projects
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`px-5 sm:px-6 py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base lg:text-lg backdrop-blur-sm transition-all cursor-pointer border ${
                                        isDark
                                            ? 'text-secondary border-secondary bg-transparent hover:bg-secondary/10'
                                            : 'text-primary-light border-primary-light bg-surface-light hover:bg-primary-light/10'
                                    }`}
                                >
                                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                                    Download CV
                                </motion.button>
                            </div>

                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="flex flex-wrap gap-2 sm:gap-3"
                            >
                                {socialLinks.map((link) => (
                                    <motion.a
                                        key={link.label}
                                        href={link.href}
                                        target={link.href.startsWith('http') ? '_blank' : undefined}
                                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-all border ${
                                            isDark
                                                ? 'bg-surface/60 border-border hover:border-primary/50'
                                                : 'bg-surface-light border-border-light hover:border-primary-light/50'
                                        }`}
                                    >
                                        <link.icon className={`w-4 h-4 ${isDark ? 'text-primary' : 'text-primary-light'}`} />
                                        <span className={`text-xs sm:text-sm ${
                                            isDark ? 'text-text-primary' : 'text-text-primary-light'
                                        }`}>
                      {link.label}
                    </span>
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Side - Terminal */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="relative">
                            <div className="relative z-10">
                                <Terminal lines={terminalLines} theme={theme} />
                            </div>

                            {/* Decorative Elements */}
                            <motion.div
                                className={`absolute -top-4 sm:-top-6 lg:-top-8 -right-4 sm:-right-6 lg:-right-8 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 rounded-lg rotate-12 border ${
                                    isDark ? 'border-secondary/20' : 'border-primary-light/20'
                                }`}
                                animate={{ rotate: [12, 15, 12] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            <motion.div
                                className={`absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -left-4 sm:-left-6 lg:-left-8 w-12 sm:w-18 lg:w-24 h-12 sm:h-18 lg:h-24 rounded-lg -rotate-12 border ${
                                    isDark ? 'border-tertiary/20' : 'border-secondary/20'
                                }`}
                                animate={{ rotate: [-12, -15, -12] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="hidden sm:flex absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center"
                >
          <span className={`text-xs mb-2 tracking-wider font-mono ${
              isDark ? 'text-text-secondary' : 'text-text-secondary-light'
          }`}>
            SCROLL_DOWN
          </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className={`w-5 sm:w-6 h-8 sm:h-10 rounded-full flex items-start justify-center p-2 border-2 ${
                            isDark ? 'border-primary/30' : 'border-primary-light/30'
                        }`}
                    >
                        <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className={`w-1 h-2 rounded-full ${isDark ? 'bg-primary' : 'bg-primary-light'}`}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;