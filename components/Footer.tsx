'use client';

import { motion } from 'framer-motion';
import {
    Box,
    Container,
    Typography,
    Stack,
    IconButton,
    Divider,
    Button, useTheme,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { footerLinks,socialLinksFooter } from '@/data/content';

const MotionBox = motion.create(Box);

export default function Footer() {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (href: string) => {
        const sectionId = href.replace('#', '');
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        }
    };

    return (
        <Box
            component="footer"
            bgcolor={isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)'}
            borderTop={1}
            borderColor={isDark ? 'divider' : 'grey.300'}
            position="relative"
            pt={8}
            pb={6}
        >
            <Container maxWidth="lg">
                {/* Main Content */}
                <Box
                    display="grid"
                    gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' }}
                    gap={6}
                    mb={6}
                >
                    {/* Brand & Social */}
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            mb={2}
                            sx={{
                                background: theme.custom.gradients.text,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            Haritha Wickremesinghe
                        </Typography>
                        <Typography fontSize={14} mb={2} color="text.secondary">
                            Full Stack Developer passionate about creating elegant solutions to complex problems.
                        </Typography>
                        <Stack direction="row" spacing={1.5}>
                            {socialLinksFooter.map((s, i) => {
                                const Icon = s.icon;
                                return (
                                    <MotionBox
                                        key={s.label}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <IconButton
                                            component="a"
                                            href={s.href}
                                            target="_blank"
                                            sx={{
                                                border: '1px solid',
                                                borderColor: 'divider',
                                                backgroundColor: isDark ? 'background.paper' : 'grey.100',
                                                '&:hover': { backgroundColor: 'primary.main', color: '#fff' },
                                            }}
                                        >
                                            <Icon fontSize="small" />
                                        </IconButton>
                                    </MotionBox>
                                );
                            })}
                        </Stack>
                    </MotionBox>

                    {/* Quick Links */}
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <Typography fontWeight="bold" mb={1.5}>
                            Quick Links
                        </Typography>
                        <Stack spacing={1}>
                            {footerLinks.map((link, i) => (
                                <MotionBox
                                    key={link.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Button
                                        onClick={() => scrollToSection(link.href)}
                                        sx={{
                                            textTransform: 'none',
                                            color: isDark ? 'text.secondary' : 'text.secondary',
                                            '&:hover': {
                                                color: 'primary.main',
                                                backgroundColor: 'transparent',
                                            },
                                            p: 0,
                                            minWidth: 0,
                                        }}
                                    >
                                        {link.label}
                                    </Button>
                                </MotionBox>
                            ))}
                        </Stack>
                    </MotionBox>

                    {/* Contact Info */}
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Typography fontWeight="bold" mb={1.5}>
                            Get in Touch
                        </Typography>
                        <Stack
                            spacing={0.5}
                            color="text.secondary"
                            sx={{
                                alignItems: 'flex-start',
                            }}
                        >
                            <Button
                                component="a"
                                href="mailto:haritha@example.com"
                                sx={{
                                    textTransform: 'none',
                                    p: 0,
                                    minWidth: 0,
                                    color: 'inherit',
                                    justifyContent: 'flex-start',
                                }}
                            >
                                haritha@example.com
                            </Button>

                            <Button
                                component="a"
                                href="tel:+94771234567"
                                sx={{
                                    textTransform: 'none',
                                    p: 0,
                                    minWidth: 0,
                                    color: 'inherit',
                                    justifyContent: 'flex-start',
                                }}
                            >
                                +94 77 123 4567
                            </Button>

                            <Typography fontSize={14}>
                                Colombo, Sri Lanka
                            </Typography>
                        </Stack>
                    </MotionBox>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* Bottom */}
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={1}
                >
                    <MotionBox
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <Typography fontSize={12}>
                            © {currentYear} Haritha Wickremesinghe. All rights reserved.
                        </Typography>
                    </MotionBox>

                    <MotionBox
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5em',
                        }}
                    >
                        <Typography fontSize={12}>Built with</Typography>
                        <FavoriteIcon fontSize="small" color="primary" sx={{ animation: 'pulse 1.5s infinite' }} />
                        <Typography fontSize={12}>and</Typography>
                        <Typography fontSize={12} fontWeight="medium" color="primary">
                            Next JS
                        </Typography>
                    </MotionBox>
                </Stack>
            </Container>

            {/* Back to Top */}
            <MotionBox
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
            >
                <IconButton
                    onClick={scrollToTop}
                    sx={{
                        position: 'fixed',
                        bottom: 16,
                        right: 16,
                        backgroundColor: 'primary.main',
                        color: '#fff',
                        '&:hover': { backgroundColor: 'primary.dark' },
                    }}
                >
                    <ArrowUpwardIcon />
                </IconButton>
            </MotionBox>
        </Box>
    );
}
