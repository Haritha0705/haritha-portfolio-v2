"use client";

import { useState, useEffect } from "react";
import { Toaster } from 'sonner';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { CodeSkills } from '@/components/CodeSkills';
import { DevProjects } from '@/components/DevProjects';
import { Experience } from '@/components/Experience';
import { GitHubActivity } from '@/components/GitHubActivity';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { CommandPalette } from '@/components/CommandPalette';

export default function App() {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

    useEffect(() => {
        // Check for saved theme preference or default to 'dark'
        const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
        if (savedTheme) {
            setTheme(savedTheme);
            document.body.classList.toggle('light', savedTheme === 'light');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.body.classList.toggle('light', newTheme === 'light');
    };

    return (
        <div className="relative min-h-screen bg-[var(--bg-void)] text-[var(--text-primary)]">
            {/* Toast Notifications */}
            <Toaster
                position="top-right"
                theme={theme}
                richColors
                closeButton
            />

            {/* Command Palette */}
            <CommandPalette theme={theme} />

            {/* Navigation */}
            <Navigation theme={theme} toggleTheme={toggleTheme} />

            {/* Main Content */}
            <main>
                <Hero theme={theme} />
                <About theme={theme} />
                <CodeSkills theme={theme} />
                <DevProjects theme={theme} />
                <GitHubActivity theme={theme} />
                <Experience theme={theme} />
                <Contact theme={theme} />
            </main>

            {/* Footer */}
            <Footer theme={theme} />
        </div>
    );
}