'use client';

import { motion } from 'framer-motion';
import {Box, Container, Typography, Paper, Chip, useTheme} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import {ElementType} from "react";

interface TimelineItem {
    type: 'experience' | 'education' | 'achievement';
    icon: ElementType;
    title: string;
    company: string;
    period: string;
    current: boolean;
    description: string;
    achievements: string[];
}

const timeline: TimelineItem[] = [
    {
        type: 'experience',
        icon: WorkIcon,
        title: 'Frontend Developer Intern',
        company: 'StartupXYZ',
        period: 'Jan 2024 - May 2024',
        current: false,
        description:
            'Built responsive web interfaces and improved user experience for the main product. Worked closely with designers to implement pixel-perfect designs.',
        achievements: [
            'Redesigned landing page, increasing conversion by 25%',
            'Implemented component library used across 5+ projects',
            'Mentored 2 junior developers',
        ],
    },
    {
        type: 'education',
        icon: SchoolIcon,
        title: 'BSc Software Engineering',
        company: 'University of Technology',
        period: '2023 - 2027 (Expected)',
        current: true,
        description:
            '2nd Year student specializing in software development and computer science. Maintaining strong academic performance while actively participating in tech clubs.',
        achievements: [
            'GPA: 3.8/4.0',
            "Dean's List: 2023, 2024",
            'President of Computer Science Society',
        ],
    },
    {
        type: 'achievement',
        icon: EmojiEventsIcon,
        title: 'Hackathon Winner',
        company: 'National Tech Hackathon 2024',
        period: 'Mar 2024',
        current: false,
        description:
            'Led a team of 4 to win 1st place by developing an AI-powered student learning platform in 48 hours.',
        achievements: [
            'Competed against 50+ teams',
            'Implemented ML model with 85% accuracy',
            'Featured in local tech news',
        ],
    },
    {
        type: 'education',
        icon: AccountBalanceIcon,
        title: 'High School Diploma',
        company: 'Royal College',
        period: '2019 - 2022',
        current: false,
        description:
            'Completed Advanced Level examinations with distinction in Mathematics and Computer Science.',
        achievements: [
            'Top performer in district',
            'Led school robotics club',
            'Won inter-school coding competition',
        ],
    },
];

const MotionBox = motion.create(Box);

export default function Experience() {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    return (
        <Box
            component="section"
            id="experience"
            sx={{
                py: { xs: 6, md: 12 },
                backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
            }}
        >
            <Container maxWidth="lg">
                {/* Section Header */}
                <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: 48 }}
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
                        {'<'}Experience & Education{' />'}
                    </Typography>
                    <Typography fontSize={14} color="text.secondary">
                        My journey and milestones
                    </Typography>
                </MotionBox>

                {/* Timeline */}
                <Box sx={{ position: 'relative' }}>
                    {/* Center Line Desktop */}
                    <Box
                        sx={{
                            display: { xs: 'none', lg: 'block' },
                            position: 'absolute',
                            left: '50%',
                            top: 0,
                            bottom: 0,
                            width: 2,
                            backgroundColor: isDark ? 'grey.700' : 'grey.300',
                            transform: 'translateX(-50%)',
                        }}
                    />
                    {/* Left Line Mobile */}
                    <Box
                        sx={{
                            display: { xs: 'block', lg: 'none' },
                            position: 'absolute',
                            left: 16,
                            top: 0,
                            bottom: 0,
                            width: 2,
                            backgroundColor: isDark ? 'grey.700' : 'grey.300',
                        }}
                    />

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 6, lg: 12 } }}>
                        {timeline.map((item, index) => {
                            const Icon = item.icon;
                            const isLeft = index % 2 === 0;

                            return (
                                <MotionBox
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`flex items-start gap-4 sm:gap-6 lg:gap-8 ${
                                        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    }`}
                                >
                                    {/* Mobile Icon */}
                                    <Box
                                        sx={{
                                            display: { xs: 'flex', lg: 'none' },
                                            width: 40,
                                            height: 40,
                                            borderRadius: '50%',
                                            background: 'linear-gradient(135deg,#6366f1,#22d3ee)',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: `4px solid ${isDark ? '#0f172a' : '#fff'}`,
                                            zIndex: 10,
                                        }}
                                    >
                                        <Icon sx={{ color: '#fff', fontSize: 20 }} />
                                    </Box>

                                    {/* Content */}
                                    <Box flex={1} sx={{ textAlign: { lg: isLeft ? 'right' : 'left' } }}>
                                        <MotionBox whileHover={{ scale: 1.02 }}>
                                            <Paper
                                                elevation={3}
                                                sx={{
                                                    p: { xs: 3, lg: 4 },
                                                    borderRadius: 3,
                                                    border: '1px solid',
                                                    borderColor: isDark ? 'grey.700' : 'grey.300',
                                                    backgroundColor: isDark ? 'grey.900' : '#fff',
                                                }}
                                            >
                                                <Box sx={{ mb: 2 }}>
                                                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1, justifyContent: { lg: isLeft ? 'flex-end' : 'flex-start' } }}>
                                                        <Typography fontWeight="bold">{item.title}</Typography>
                                                        {item.current && (
                                                            <Chip
                                                                label="Current"
                                                                size="small"
                                                                color="success"
                                                                variant="outlined"
                                                            />
                                                        )}
                                                    </Box>
                                                    <Typography fontWeight={500} color="primary" fontSize={14}>
                                                        {item.company}
                                                    </Typography>
                                                    <Typography fontSize={12} color="text.secondary">
                                                        {item.period}
                                                    </Typography>
                                                </Box>

                                                <Typography fontSize={14} color="text.secondary" mb={1}>
                                                    {item.description}
                                                </Typography>

                                                <Box component="ul" sx={{ pl: 2, mt: 1, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                                                    {item.achievements.map((a, i) => (
                                                        <Typography component="li" key={i} fontSize={13} color="text.secondary" sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.5 }}>
                                                            <Box sx={{ color: 'primary.main', mt: '2px' }}>▸</Box> {a}
                                                        </Typography>
                                                    ))}
                                                </Box>
                                            </Paper>
                                        </MotionBox>
                                    </Box>

                                    {/* Desktop Icon */}
                                    <Box
                                        sx={{
                                            display: { xs: 'none', lg: 'flex' },
                                            width: 64,
                                            height: 64,
                                            borderRadius: '50%',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            zIndex: 10,
                                            border: `4px solid ${isDark ? '#0f172a' : '#fff'}`,
                                            background: theme.custom.gradients.text,
                                        }}
                                    >
                                        <Icon sx={{ color: '#fff', fontSize: 28 }} />
                                    </Box>

                                    {/* Spacer for Desktop */}
                                    <Box flex={1} sx={{ display: { xs: 'none', lg: 'block' } }} />
                                </MotionBox>
                            );
                        })}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
