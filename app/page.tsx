'use client';

import { Box } from '@mui/material';
import { Toaster } from 'sonner';

import Navigation from '@/components/Navigation';
import Hero  from '@/components/Hero';
import About from '@/components/About';
import CodeSkills from '@/components/CodeSkills';
import DevProjects from '@/components/DevProjects';
import Experience from '@/components/Experience';
import GitHubActivity from '@/components/GitHubActivity';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CommandPalette from '@/components/CommandPalette';
import { useThemeContext } from './ThemeProvider';

export default function App() {
    const { toggleTheme } = useThemeContext();

    return (
        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: 'background.default',
                color: 'text.primary',
            }}
        >
            {/* Toast Notifications */}
            <Toaster
                position="top-right"
                theme="system"
                richColors
                closeButton
            />

            {/* Command Palette */}
            <CommandPalette />

            {/* Navigation */}
            <Navigation toggleTheme={toggleTheme} />

            {/* Main Content */}
            <Box component="main">
                <Hero />
                <About />
                <CodeSkills />
                <DevProjects />
                <GitHubActivity />
                <Experience />
                <Contact />
            </Box>

            {/* Footer */}
            <Footer />
        </Box>
    );
}
