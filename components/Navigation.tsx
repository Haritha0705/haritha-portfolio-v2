'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    AppBar,
    Toolbar,
    Box,
    IconButton,
    Typography,
    Button,
    Drawer,
    useTheme,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { navItems } from '@/data/content';

const MotionBox = motion.create(Box);

export default function Navigation({ toggleTheme }: { toggleTheme: () => void }) {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [active, setActive] = useState('home');

    /* Scroll detection */
    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);

            navItems.forEach((item) => {
                const el = document.getElementById(item.id);
                if (!el) return;

                const top = el.offsetTop - 100;
                const bottom = top + el.offsetHeight;

                if (window.scrollY >= top && window.scrollY < bottom) {
                    setActive(item.id);
                }
            });
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;

        window.scrollTo({
            top: el.offsetTop - 80,
            behavior: 'smooth',
        });

        setMobileOpen(false);
    };

    return (
        <>
            {/* Navbar */}
            <AppBar
                component={motion.div}
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                position="fixed"
                elevation={scrolled ? 4 : 0}
                color="transparent"
                sx={{
                    backdropFilter: scrolled ? 'blur(10px)' : 'none',
                    borderBottom: scrolled ? `1px solid ${theme.palette.divider}` : 'none',
                    px: 32,
                    py: 1
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {/* Logo */}
                    <Typography
                        component={motion.button}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => scrollTo('home')}
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: 16, sm: 18 },
                            cursor: 'pointer',
                            background: 'none',
                            border: 'none',
                            color: 'primary.main',
                        }}
                    >
                        @Haritha0705
                    </Typography>

                    {/* Desktop Nav */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                component={motion.button}
                                whileHover={{ scale: 1.05 }}
                                sx={{
                                    color:
                                        active === item.id
                                            ? 'primary.main'
                                            : 'text.secondary',
                                    fontWeight: active === item.id ? 600 : 400,
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>

                    {/* Right actions */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {/* Theme toggle */}
                        <IconButton onClick={toggleTheme}>
                            <AnimatePresence mode="wait">
                                {isDark ? (
                                    <MotionBox
                                        key="light"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                    >
                                        <LightModeIcon />
                                    </MotionBox>
                                ) : (
                                    <MotionBox
                                        key="dark"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                    >
                                        <DarkModeIcon />
                                    </MotionBox>
                                )}
                            </AnimatePresence>
                        </IconButton>

                        {/* Mobile menu */}
                        <IconButton
                            sx={{ display: { md: 'none' } }}
                            onClick={() => setMobileOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
            >
                <Box sx={{ width: 280, p: 3 }}>
                    <IconButton onClick={() => setMobileOpen(false)}>
                        <CloseIcon />
                    </IconButton>

                    <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {navItems.map((item, i) => (
                            <Button
                                key={item.id}
                                component={motion.button}
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => scrollTo(item.id)}
                                sx={{
                                    justifyContent: 'flex-start',
                                    fontSize: 18,
                                    color:
                                        active === item.id
                                            ? 'primary.main'
                                            : 'text.primary',
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Box>
            </Drawer>
        </>
    );
}
