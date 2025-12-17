'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import StatusBadge from '@/components/ui/BadgeN';
import Terminal from '@/components/Terminal';

const TITLES = ['Full Stack Developer', 'Student', 'Tech Enthusiast'];

const generateBinaryStrings = () =>
    Array.from({ length: 15 }, (_, i) => {
        let seed = i * 12345;
        return Array.from({ length: 20 }, () => {
            seed = (seed * 9301 + 49297) % 233280;
            return seed % 2 === 0 ? '1' : '0';
        }).join('');
    });

const BINARY_STRINGS = generateBinaryStrings();
const ANIMATION_CONFIG = Array.from({ length: 15 }, (_, i) => ({
    duration: 5 + (i % 5),
    delay: (i * 0.5) % 5,
}));

export function Hero() {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const [displayedText, setDisplayedText] = useState('');
    const [titleIndex, setTitleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [mounted, setMounted] = useState(false);

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
            { icon: GitHubIcon, label: 'GitHub', href: 'https://github.com' },
            { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://linkedin.com' },
            { icon: MailOutlineIcon, label: 'Email', href: 'mailto:haritha@example.com' },
            { icon: DownloadIcon, label: 'Resume', href: '#' },
        ],
        []
    );

    useEffect(() => {
        const mount = () => {
            setMounted(true);
        };
        mount();
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
        <Box
            component="section"
            id="home"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                pt: { xs: 16 * 0.25, sm: 20 * 0.25},
                bgcolor: isDark ? 'background.default' : 'grey.100',
            }}
        >
            {/* Matrix Background */}
            {mounted && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        overflow: 'hidden',
                        pointerEvents: 'none',
                        opacity: isDark ? 0.3 : 0.2,
                        fontFamily: 'monospace',
                        fontSize: '0.75rem',
                        '@media (min-width:600px)': { fontSize: '0.875rem' },
                    }}
                >
                    {BINARY_STRINGS.map((binaryString, i) => (
                        <motion.div
                            key={i}
                            style={{
                                position: 'absolute',
                                left: i * 80,
                                color: isDark ? theme.palette.primary.main : theme.palette.primary.light,
                            }}
                            initial={{ y: -100 }}
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
                </Box>
            )}

            {/* Particle Grid */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    pointerEvents: 'none',
                    opacity: 0.2,
                    backgroundImage: (theme) =>
                        `radial-gradient(circle, ${
                            isDark ? theme.palette.primary.main : theme.palette.primary.light
                        } 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                }}
            />

            {/* Content */}
            <Box
                sx={{
                    maxWidth: '1280px',
                    mx: 'auto',
                    px: { xs: 4, lg: 8 },
                    position: 'relative',
                    zIndex: 10,
                    width: '100%',
                    py: { xs: 8, sm: 12 },
                }}
            >
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
                        gap: { xs: 8, lg: 12 },
                        alignItems: 'center',
                    }}
                >
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <StatusBadge status="available" />
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: { xs: '3rem', sm: '5rem' },
                                background: isDark
                                    ? 'linear-gradient(90deg,#00FF41,#00C8FF)'
                                    : 'linear-gradient(90deg,#00C8FF,#9B5CFF)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                mt: 2,
                            }}
                        >
                            Haritha Wickremesinghe
                        </Typography>

                        <Box sx={{ mt: 2, maxWidth: 'xl' }}>
                            {/* Typing line */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography
                                    sx={{
                                        fontFamily: 'Monospace',
                                        fontSize: 18,
                                        color: isDark ? 'text.secondary' : 'text.primary',
                                    }}
                                >
                                    {'>'} {displayedText}
                                </Typography>
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.5, repeat: Infinity }}
                                    style={{
                                        width: 2,
                                        height: 28,
                                        backgroundColor: isDark ? theme.palette.primary.main : theme.palette.primary.light,
                                        display: 'inline-block',
                                    }}
                                />
                            </Box>

                            {/* Description paragraph */}
                            <Typography
                                sx={{
                                    mt: 2,
                                    fontSize: { xs: '0.875rem', sm: '1rem', lg: '1.125rem' },
                                    maxWidth: 'xl',
                                    lineHeight: 1.6,
                                    color: isDark ? 'text.secondary' : 'text.secondary',
                                }}
                            >
                                Crafting immersive digital experiences at the intersection of
                                design and code. Specializing in React, TypeScript, and building
                                systems that scale.
                            </Typography>
                        </Box>

                        {/* CTA Buttons */}
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mt: 4 }}>
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button
                                    variant="contained"
                                    endIcon={<ArrowRightAltIcon />}
                                    sx={{
                                        bgcolor: isDark ? 'primary.main' : 'primary.light',
                                        color: isDark ? 'background.default' : 'white',
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: 2,
                                    }}
                                >
                                    View Projects
                                </Button>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button
                                    variant="outlined"
                                    startIcon={<DownloadIcon />}
                                    sx={{
                                        borderColor: isDark ? 'secondary.main' : 'primary.light',
                                        color: isDark ? 'secondary.main' : 'primary.light',
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: 2,
                                    }}
                                >
                                    Download CV
                                </Button>
                            </motion.div>
                        </Box>

                        {/* Social Links */}
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 3 }}>
                            {socialLinks.map((link) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith('http') ? '_blank' : undefined}
                                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 8,
                                        padding: '8px 12px',
                                        borderRadius: 12,
                                        border: `1px solid ${isDark ? theme.palette.divider : '#ccc'}`,
                                        backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#f9f9f9',
                                        textDecoration: 'none',
                                    }}
                                >
                                    <link.icon sx={{ fontSize: 20, color: isDark ? theme.palette.primary.main : theme.palette.primary.light }} />
                                    <Typography sx={{ fontSize: 14, color: isDark ? 'text.primary' : 'text.primary' }}>
                                        {link.label}
                                    </Typography>
                                </motion.a>
                            ))}
                        </Box>
                    </motion.div>

                    {/* Right - Terminal */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Terminal lines={terminalLines} />
                    </motion.div>
                </Box>
            </Box>
        </Box>
    );
}

export default Hero;
