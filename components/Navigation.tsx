'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavigationProps {
    theme: 'dark' | 'light';
    toggleTheme: () => void;
}

const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
];

export function Navigation({ theme, toggleTheme }: NavigationProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const isDark = theme === 'dark';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = navItems.map((item) => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;

            sections.forEach((section, index) => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        setActiveSection(navItems[index].id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth',
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? isDark
                            ? 'glassmorphism shadow-lg'
                            : 'glassmorphism-light shadow-lg'
                        : ''
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
                        {/* Logo */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            onClick={() => scrollToSection('home')}
                            className={`${ isDark ? 'text-primary' : 'text-primary-light'} font-bold text-base sm:text-lg lg:text-xl cursor-pointer`}
                        >
                            @Haritha0705
                        </motion.button>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="relative group py-2"
                                >
                  <span
                      className={`text-sm lg:text-base transition-colors ${
                          activeSection === item.id
                              ? isDark 
                                  ? 'text-primary' 
                                  : 'text-primary-light'
                              : isDark
                                  ? 'text-text-secondary hover:text-text-primary'
                                  : 'text-text-secondary-light hover:text-text-primary-light'
                      }`}
                  >
                    {item.label}
                  </span>
                                    <motion.div
                                        className={`absolute -bottom-0.5 left-0 right-0 h-0.5 ${ isDark ? 'bg-primary' : 'bg-primary-light'}`}
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: activeSection === item.id ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                            {/* Theme Toggle */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={toggleTheme}
                                className={`p-2 sm:p-2.5 rounded-lg transition-colors ${
                                    isDark
                                        ? 'bg-surface hover:bg-primary/20'
                                        : 'bg-surface-light hover:bg-primary-light/20'
                                }`}
                                aria-label="Toggle theme"
                            >
                                <AnimatePresence mode="wait">
                                    {isDark ? (
                                        <motion.div
                                            key="moon"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="sun"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>

                            {/* Mobile Menu Button */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`md:hidden p-2 sm:p-2.5 rounded-lg transition-colors ${
                                    isDark
                                        ? 'bg-surface hover:bg-primary/20'
                                        : 'bg-surface-light hover:bg-primary-light/20'
                                }`}
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                                ) : (
                                    <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                                )}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={`absolute inset-0 backdrop-blur-lg ${
                                isDark ? 'bg-background/95' : 'bg-background-light/95'
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className={`absolute top-16 sm:top-18 right-0 bottom-0 w-full p-6 sm:p-8 ${
                                isDark ? 'bg-surface' : 'bg-surface-light'
                            }`}
                        >
                            <nav className="flex flex-col gap-4 sm:gap-6">
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={item.id}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`text-left text-xl sm:text-2xl py-2 transition-colors ${
                                            activeSection === item.id
                                                ? 'gradient-text font-semibold'
                                                : isDark
                                                    ? 'text-text-primary hover:text-primary'
                                                    : 'text-text-primary-light hover:text-primary-light'
                                        }`}
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}
                            </nav>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navigation;