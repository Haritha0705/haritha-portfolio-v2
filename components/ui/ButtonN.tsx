// import React from 'react';
//
// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//     variant?: 'primary' | 'secondary' | 'ghost';
//     size?: 'sm' | 'md' | 'lg';
//     loading?: boolean;
//     children: React.ReactNode;
// }
//
// export function Button({
//                            variant = 'primary',
//                            size = 'md',
//                            loading = false,
//                            children,
//                            className = '',
//                            disabled,
//                            ...props
//                        }: ButtonProps) {
//     const baseStyles = "inline-flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
//
//     const variants = {
//         primary: "bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-blue)] text-black hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5",
//         secondary: "bg-transparent border border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] hover:border-[var(--accent-cyan)]",
//         ghost: "bg-transparent text-[var(--accent-cyan)] hover:underline underline-offset-4"
//     };
//
//     const sizes = {
//         sm: "px-4 py-2 text-sm rounded-md",
//         md: "px-6 py-3 text-sm rounded-lg",
//         lg: "px-8 py-4 rounded-lg"
//     };
//
//     return (
//         <button
//             className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
//             disabled={disabled || loading}
//             {...props}
//         >
//             {loading ? (
//                 <>
//                     <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
//                     <span>Loading...</span>
//                 </>
//             ) : children}
//         </button>
//     );
// }


import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Mail } from 'lucide-react';
import { StatusBadge } from '@/components/ui/BadgeN';
import { Terminal } from './Terminal';

interface TerminalHeroProps {
    theme: 'dark' | 'light';
}
export function Hero({ theme }: TerminalHeroProps) {
    const [displayText, setDisplayText] = useState('');
    const fullText = 'Full-Stack Developer';

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 100);
        return () => clearInterval(timer);
    }, []);

    const terminalLines = [
        'Initializing cosmic terminal...',
        'Loading portfolio modules...',
        'System ready. Welcome aboard! 🚀'
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--accent-cyan)] opacity-10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--accent-purple)] opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--accent-blue)] opacity-5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full pt-20 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <StatusBadge status="available" />

                            <h1 className="display-xl bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                                Alex Chen
                            </h1>

                            <div className="flex items-center gap-2 text-2xl md:text-3xl font-mono text-primary">
                                <span>{'>'}</span>
                                <span>{displayText}</span>
                                <span className="inline-block w-0.5 h-7 bg-[var(--accent-cyan)] animate-pulse" />
                            </div>

                            <p className="text-lg md:text-lg text-text-secondary max-w-xl">
                                Crafting immersive digital experiences at the intersection of design and code.
                                Specializing in React, TypeScript, and building systems that scale.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button
                                className="
                                        px-6 py-4 rounded-md text-black
                                        bg-gradient-to-r from-secondary to-primary
                                        hover:opacity-90 transition-all
                                        flex items-center gap-2 text-lg
                                        "
                            >
                                View Projects
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button
                                className="
                                    px-6 py-4 rounded-md text-primary
                                    border border-primary
                                    hover:border-[var(--btn-border-hover)]
                                    transition-all
                                    flex items-center gap-2 text-lg
                                    backdrop-blur-sm
                                "
                            >
                                <Download className="w-5 h-5" />
                                Download CV
                            </button>
                        </div>

                        <div className="flex items-center gap-6 pt-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
                            >
                                <Github className="w-5 h-5" />
                                <span>GitHub</span>
                            </a>
                            <a
                                href="mailto:hello@cosmic.dev"
                                className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                                <span>Email</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Terminal */}
                    <div className="relative">
                        <div className="relative z-10">
                            <Terminal lines={terminalLines} />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-8 -right-8 w-32 h-32 border border-[var(--accent-cyan)]/20 rounded-lg rotate-12" />
                        <div className="absolute -bottom-8 -left-8 w-24 h-24 border border-[var(--accent-purple)]/20 rounded-lg -rotate-12" />
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-16 border-t border-[var(--border-subtle)]">
                    {[
                        { value: '50+', label: 'Projects Completed' },
                        { value: '5+', label: 'Years Experience' },
                        { value: '30+', label: 'Happy Clients' },
                        { value: '15k+', label: 'Lines of Code' }
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="text-center p-4 rounded-lg bg-[var(--bg-surface)]/50 border border-[var(--border-subtle)] hover:border-[var(--accent-cyan)]/50 transition-colors"
                        >
                            <div className="text-2xl md:text-3xl bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] bg-clip-text text-transparent mb-1">
                                {stat.value}
                            </div>
                            <div className="text-xs md:text-sm text-[var(--text-muted)]">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
