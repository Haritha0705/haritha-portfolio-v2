'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    Box,
    Container,
    Typography,
    Chip,
    Grid,
    Paper,
    Stack,
    useTheme,
} from '@mui/material';
import { stats, competencies } from '@/data/content';

const MotionBox = motion.create(Box);
const MotionPaper = motion.create(Paper);

export default function About() {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    return (
        <Box component="section" id="about" py={{ xs: 6, sm: 8, lg: 10 }}>
            <Container maxWidth="lg">
                {/* Header */}
                <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    textAlign="center"
                    mb={{ xs: 5, sm: 6, lg: 8 }}
                >
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        mb={1}
                        sx={{
                            background: theme.custom.gradients.text,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        {'<'}About Me{' />'}
                    </Typography>

                    <Typography
                        color={isDark ? 'grey.400' : 'grey.600'}
                        fontSize={{ xs: 14, sm: 16 }}
                    >
                        Get to know more about who I am and what I do
                    </Typography>
                </MotionBox>

                <Grid container spacing={{ xs: 4, lg: 6 }} alignItems="center">
                    {/* Left */}
                    <Grid size={{ xs: 12, lg: 6 }}>
                        <MotionBox
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: { xs: 2, sm: 3 },
                                    mb: 3,
                                    borderRadius: 3,
                                    backgroundColor: isDark ? 'grey.900' : 'grey.100',
                                }}
                            >
                                <Image
                                    src="/about_Img.png"
                                    alt="Profile"
                                    width={400}
                                    height={400}
                                    style={{ width: '100%', height: 'auto', borderRadius: 16 }}
                                    priority
                                />
                            </Paper>

                            <Grid container spacing={2}>
                                {stats.map((stat, index) => (
                                    <Grid size={4} key={stat.label}>
                                        <MotionPaper
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            elevation={0}
                                            sx={{
                                                textAlign: 'center',
                                                p: 2,
                                                borderRadius: 2,
                                                backgroundColor: isDark ? 'grey.900' : 'grey.100',
                                            }}
                                        >
                                            <Typography
                                                fontWeight="bold"
                                                fontSize={{ xs: 18, sm: 22 }}
                                                color={isDark ? 'primary.light' : 'primary.main'}
                                            >
                                                {stat.value}
                                            </Typography>
                                            <Typography fontSize={12} color="text.secondary">
                                                {stat.label}
                                            </Typography>
                                        </MotionPaper>
                                    </Grid>
                                ))}
                            </Grid>
                        </MotionBox>
                    </Grid>

                    {/* Right */}
                    <Grid size={{ xs: 12, lg: 6 }}>
                        <MotionBox
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Typography variant="h5" fontWeight="600" mb={3}>
                                Passionate Developer & Problem Solver
                            </Typography>

                            <Stack spacing={2} mb={4}>
                                {[
                                    'I am a 2nd-year Software Engineering student passionate about building impactful digital experiences.',
                                    'I specialize in full-stack development with React, Node.js, and TypeScript.',
                                    'I believe in continuous learning and staying ahead of technology trends.',
                                ].map((text, i) => (
                                    <Typography key={i} color="text.secondary">
                                        {text}
                                    </Typography>
                                ))}
                            </Stack>

                            <Typography fontWeight="600" mb={2}>
                                Core Competencies
                            </Typography>

                            <Box display="flex" flexWrap="wrap" gap={1}>
                                {competencies.map((skill, index) => (
                                    <MotionBox
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Chip
                                            label={skill}
                                            variant="outlined"
                                            sx={{
                                                backgroundColor: isDark ? 'grey.900' : 'grey.100',
                                                borderColor: 'primary.main',
                                            }}
                                        />
                                    </MotionBox>
                                ))}
                            </Box>
                        </MotionBox>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
