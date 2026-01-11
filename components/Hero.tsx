'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import { terminalLines, socialLinks, SocialLink } from '@/data/content';
import StatusBadge from '@/components/ui/BadgeN';
import Terminal from '@/components/ui/Terminal';

const TITLES = ['Full Stack Developer', 'Student', 'Tech Enthusiast'];
const MotionBox = motion(Box);

/* ---------------- Matrix data ---------------- */
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

export default function Hero() {
    const theme = useTheme();

    const [displayedText, setDisplayedText] = useState('');
    const [titleIndex, setTitleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const id = window.setTimeout(() => setMounted(true), 0);
        return () => window.clearTimeout(id);
    }, []);

    useEffect(() => {
        const currentTitle = TITLES[titleIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        const pauseTime = isDeleting ? 500 : 2000;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayedText.length < currentTitle.length) {
                    setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                if (displayedText.length > 0) {
                    setDisplayedText(displayedText.slice(0, -1));
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
                backgroundColor: theme.palette.background.default,
                px: { xs: 2, sm: 4 },
                py: { xs: 4 },
            }}
        >
            {/* ---------------- Matrix Background ---------------- */}
            {mounted && (
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        pointerEvents: 'none',
                        opacity: theme.matrixOpacity,
                        fontFamily: 'monospace',
                        fontSize: { xs: '0.55rem', sm: '0.75rem', md: '0.875rem' },
                    }}
                >
                    {BINARY_STRINGS.map((binary, i) => (
                        <MotionBox
                            key={i}
                            sx={{
                                position: 'absolute',
                                left: { xs: i * 50, sm: i * 80 },
                                color: theme.palette.primary.main,
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
                            {binary}
                        </MotionBox>
                    ))}
                </Box>
            )}

            {/* ---------------- Particle Grid ---------------- */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    opacity: 0.1,
                    backgroundImage: `radial-gradient(circle, ${theme.palette.primary.main} 1px, transparent 1px)`,
                    backgroundSize: { xs: '20px 20px', sm: '30px 30px', md: '40px 40px' },
                }}
            />

            {/* ---------------- Content ---------------- */}
            <Box
                sx={{
                    maxWidth: '1280px',
                    mx: 'auto',
                    position: 'relative',
                    zIndex: 10,
                    width: '100%',
                    py: { xs: 6, sm: 8, md: 12 },
                }}
            >
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
                        gap: { xs: 2, sm: 6, lg: 8 },
                        alignItems: 'center',
                    }}
                >
                    {/* ---------------- Left Content ---------------- */}
                    <MotionBox
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        // sx={{
                        //     order: { xs: 2, lg: 1 },
                        // }}
                    >
                        <StatusBadge status="available" />

                        <Typography
                            variant="h2"
                            sx={{
                                mt: 2,
                                fontWeight: 800,
                                fontSize: { xs: '1.5rem', sm: '2.25rem', md: '3rem', lg: '4rem' },
                                lineHeight: { xs: 1.2, sm: 1.3 },
                                background: theme.custom.gradients.text,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                wordBreak: 'break-word',
                            }}
                        >
                            Haritha Wickremesinghe
                        </Typography>

                        {/* Typing line */}
                        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1 } }}>
                            <Typography
                                sx={{
                                    fontFamily: 'monospace',
                                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                                    color: theme.palette.secondary.main,
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                {'>'} {displayedText}
                            </Typography>

                            <MotionBox
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.6, repeat: Infinity }}
                                sx={{
                                    width: 2,
                                    height: { xs: 20, sm: 28 },
                                    backgroundColor: theme.palette.primary.main,
                                }}
                            />
                        </Box>

                        {/* Paragraph */}
                        <Typography
                            sx={{
                                mt: 2,
                                maxWidth: { xs: '100%', sm: 500, md: 520 },
                                lineHeight: 1.6,
                                fontSize: { xs: 12, sm: 14, md: 16 },
                                color: theme.palette.text.secondary,
                            }}
                        >
                            Crafting immersive digital experiences at the intersection of design and code.
                            Specializing in React, TypeScript, and scalable systems.
                        </Typography>

                        {/* ---------------- CTA Buttons ---------------- */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                gap: { xs: 1.5, sm: 2 },
                                mt: { xs: 3, sm: 4 },
                            }}
                        >
                            <MotionBox whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} sx={{ width: { xs: '100%', sm: 'auto' } }}>
                                <Button
                                    variant="contained"
                                    endIcon={<ArrowRightAltIcon />}
                                    fullWidth
                                    sx={{
                                        px: { xs: 2.5, sm: 4 },
                                        py: { xs: 1.25, sm: 1.5 },
                                        borderRadius: 2,
                                        backgroundColor: theme.palette.primary.main,
                                        color: theme.palette.background.default,
                                        fontSize: { xs: 13, sm: 14 },
                                        '&:hover': { backgroundColor: theme.palette.primary.dark },
                                    }}
                                >
                                    View Projects
                                </Button>
                            </MotionBox>

                            <MotionBox whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} sx={{ width: { xs: '100%', sm: 'auto' } }}>
                                <Button
                                    variant="outlined"
                                    startIcon={<DownloadIcon />}
                                    fullWidth
                                    sx={{
                                        px: { xs: 2.5, sm: 4 },
                                        py: { xs: 1.25, sm: 1.5 },
                                        borderRadius: 2,
                                        borderColor: theme.palette.secondary.main,
                                        color: theme.palette.secondary.main,
                                        fontSize: { xs: 13, sm: 14 },
                                        '&:hover': { backgroundColor: theme.palette.action.hover },
                                    }}
                                >
                                    Download CV
                                </Button>
                            </MotionBox>
                        </Box>

                        {/* ---------------- Social Links ---------------- */}
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 0.75, sm: 1.5 }, mt: { xs: 2, sm: 4 } }}>
                            {socialLinks.map((link: SocialLink) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith('http') ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 4,
                                        padding: '6px 10px',
                                        borderRadius: 8,
                                        border: `1px solid ${theme.palette.divider}`,
                                        backgroundColor: theme.palette.background.paper,
                                        textDecoration: 'none',
                                    }}
                                >
                                    <link.icon style={{ fontSize: 16, color: theme.palette.primary.main }} />
                                    <Typography sx={{ fontSize: { xs: 9, sm: 13 } }}>{link.label}</Typography>
                                </motion.a>
                            ))}
                        </Box>
                    </MotionBox>

                    {/* ---------------- Right Terminal ---------------- */}
                    <MotionBox
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        sx={{
                            // order: { xs: 1, lg: 2 },
                            maxWidth: { xs: '100%', lg: '100%' },
                            overflowX: 'hidden',
                            display: { xs: 'none', sm: 'block' },
                        }}
                    >
                        <Terminal lines={terminalLines} />
                    </MotionBox>
                </Box>
            </Box>
        </Box>
    );
}
