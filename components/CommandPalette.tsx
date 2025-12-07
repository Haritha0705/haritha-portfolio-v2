'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Terminal, FileCode, User, Briefcase, Mail, X } from 'lucide-react';

interface CommandPaletteProps {
    theme: 'dark' | 'light';
}

const commands = [
    { icon: User, label: 'Go to About', action: 'about', keywords: 'about me profile' },
    { icon: Terminal, label: 'View Skills', action: 'skills', keywords: 'skills tech stack technologies' },
    { icon: FileCode, label: 'Browse Projects', action: 'projects', keywords: 'projects portfolio work' },
    { icon: Briefcase, label: 'View Experience', action: 'experience', keywords: 'experience timeline work' },
    { icon: Mail, label: 'Contact Me', action: 'contact', keywords: 'contact email message' },
];

export function CommandPalette({ theme }: CommandPaletteProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);

    const isDark = theme === 'dark';

    const filteredCommands = commands.filter(
        (cmd) =>
            cmd.label.toLowerCase().includes(search.toLowerCase()) ||
            cmd.keywords.toLowerCase().includes(search.toLowerCase())
    );

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
            setSearch('');
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
            if (isOpen) {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
                }
                if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
                }
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const cmd = filteredCommands[selectedIndex];
                    if (cmd) {
                        scrollTo(cmd.action);
                    }
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, selectedIndex, filteredCommands]);

    useEffect(() => {
        setSelectedIndex(0);
    }, [search]);

    // Prevent body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className={`fixed inset-0 z-[100] backdrop-blur-sm ${
                                isDark ? 'bg-background/80' : 'bg-background-light/80'
                            }`}
                        />

                        {/* Command Palette */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="fixed top-[15%] sm:top-1/4 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] sm:w-full max-w-lg sm:max-w-xl lg:max-w-2xl z-[101]"
                        >
                            <div
                                className={`rounded-lg sm:rounded-xl border-2 shadow-2xl overflow-hidden ${
                                    isDark
                                        ? 'bg-surface border-primary/30'
                                        : 'bg-surface-light border-primary-light/30'
                                }`}
                            >
                                {/* Search Input */}
                                <div className={`flex items-center px-3 sm:px-4 py-2.5 sm:py-3 border-b ${
                                    isDark ? 'border-border' : 'border-border-light'
                                }`}>
                                    <Search className={`w-4 h-4 sm:w-5 sm:h-5 ${
                                                    isDark ? 'text-primary' : 'text-primary-light'
                                                } mr-2 sm:mr-3 flex-shrink-0`} />
                                    <input
                                        type="text"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder="Type a command or search..."
                                        className={`flex-1 bg-transparent outline-none text-sm sm:text-base ${
                                            isDark ? 'text-text-primary' : 'text-text-primary-light'
                                        }`}
                                        autoFocus
                                    />
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="ml-2 p-1 sm:p-1.5 hover:bg-primary/10 rounded transition-colors"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Commands List */}
                                <div className="max-h-64 sm:max-h-80 lg:max-h-96 overflow-y-auto">
                                    {filteredCommands.length === 0 ? (
                                        <div className={`px-4 py-6 sm:py-8 text-center text-sm sm:text-base ${
                                            isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                                        }`}>
                                            No commands found
                                        </div>
                                    ) : (
                                        filteredCommands.map((cmd, index) => (
                                            <button
                                                key={cmd.label}
                                                onClick={() => scrollTo(cmd.action)}
                                                className={`w-full flex items-center px-3 sm:px-4 py-2.5 sm:py-3 transition-colors ${
                                                    index === selectedIndex
                                                        ? 'bg-primary/20 border-l-2 border-primary'
                                                        : 'hover:bg-primary/10 border-l-2 border-transparent'
                                                }`}
                                            >
                                                <cmd.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${
                                                    isDark ? 'text-primary' : 'text-primary-light'
                                                } mr-2 sm:mr-3 flex-shrink-0`} />
                                                <span className="text-sm sm:text-base">{cmd.label}</span>
                                            </button>
                                        ))
                                    )}
                                </div>

                                {/* Footer */}
                                <div
                                    className={`px-3 sm:px-4 py-1.5 sm:py-2 border-t text-[10px] sm:text-xs flex items-center justify-between ${
                                        isDark
                                            ? 'border-border bg-background/50 text-text-secondary'
                                            : 'border-border-light bg-background-light/50 text-text-secondary-light'
                                    }`}
                                >
                                    <span className="hidden sm:inline">Press ↑↓ to navigate</span>
                                    <span className="sm:hidden">↑↓ navigate</span>
                                    <span>↵ to select</span>
                                    <span>ESC to close</span>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Hint Badge - Desktop Only */}
            <motion.button
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.05 }}
                className={`fixed bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm items-center gap-1.5 sm:gap-2 z-40 hidden md:flex border ${
                    isDark
                        ? 'bg-surface border-primary/30'
                        : 'bg-surface-light border-primary-light/30'
                }`}
            >
                <Terminal className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                                                    isDark ? 'text-primary' : 'text-primary-light'
                                                }`} />
                <span className={isDark ? 'text-text-secondary' : 'text-text-secondary-light'}>
          Press
        </span>
                <kbd className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs ${
                    isDark ? 'bg-primary/20' : 'bg-primary-light/20'
                }`}>
                    ⌘K
                </kbd>
            </motion.button>
        </>
    );
}

export default CommandPalette;