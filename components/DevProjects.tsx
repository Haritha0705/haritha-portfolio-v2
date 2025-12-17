'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Box,
    Container,
    Typography,
    Grid,
    Chip,
    Button,
    Stack,
    Divider,
    Modal,
    IconButton, useTheme,
} from '@mui/material';

import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import StarIcon from '@mui/icons-material/Star';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import TerminalIcon from '@mui/icons-material/Terminal';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CloseIcon from '@mui/icons-material/Close';

/* ---------------- data (unchanged) ---------------- */

const filters = [
    { id: 'all', label: '// All Projects' },
    { id: 'featured', label: '// Featured' },
    { id: 'web', label: '// Web Apps' },
    { id: 'api', label: '// APIs' },
];

const projects = [
    {
        id: 1,
        title: 'DevConnect Platform',
        description: 'Real-time collaboration platform for developers with code sharing, video calls, and project management.',
        category: ['featured', 'web'],
        tech: ['Next.js', 'Socket.io', 'PostgreSQL', 'Redis'],
        stars: 234,
        forks: 45,
        language: 'TypeScript',
        languageColor: '#3178C6',
        github: 'https://github.com/devconnect/platform',
        githubRepo: 'devconnect/platform',
        demo: 'https://devconnect.demo.com',
        lines: '15.2K',
        commits: '234',
    },
    {
        id: 2,
        title: 'AI Code Reviewer',
        description: 'ML-powered code review assistant that provides intelligent suggestions and detects potential bugs.',
        category: ['featured', 'api'],
        tech: ['Python', 'FastAPI', 'TensorFlow', 'Docker'],
        stars: 567,
        forks: 89,
        language: 'Python',
        languageColor: '#3776AB',
        github: 'https://github.com/ai/reviewer',
        githubRepo: 'ai/reviewer',
        demo: null,
        lines: '8.7K',
        commits: '156',
    },
    {
        id: 3,
        title: 'TaskFlow API',
        description: 'RESTful API for task management with advanced filtering, real-time updates, and team collaboration.',
        category: ['api'],
        tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
        stars: 189,
        forks: 34,
        language: 'JavaScript',
        languageColor: '#F7DF1E',
        github: 'https://github.com/taskflow/api',
        githubRepo: 'taskflow/api',
        demo: 'https://taskflow.demo.com',
        lines: '6.3K',
        commits: '98',
    },
    {
        id: 4,
        title: 'Design System Kit',
        description: 'Comprehensive React component library with 50+ customizable components and theming support.',
        category: ['web'],
        tech: ['React', 'TypeScript', 'Storybook', 'Tailwind'],
        stars: 423,
        forks: 67,
        language: 'TypeScript',
        languageColor: '#3178C6',
        github: 'https://github.com/design/system-kit',
        githubRepo: 'design/system-kit',
        demo: 'https://designkit.demo.com',
        lines: '12.1K',
        commits: '189',
    },
    {
        id: 5,
        title: 'WeatherPulse',
        description: 'Beautiful weather dashboard with interactive maps, forecasts, and location-based alerts.',
        category: ['web'],
        tech: ['React', 'Leaflet', 'OpenWeather API', 'Chart.js'],
        stars: 145,
        forks: 28,
        language: 'JavaScript',
        languageColor: '#F7DF1E',
        github: 'https://github.com/weather/pulse',
        githubRepo: 'weather/pulse',
        demo: 'https://weatherpulse.demo.com',
        lines: '4.5K',
        commits: '67',
    },
    {
        id: 6,
        title: 'DevMetrics Analytics',
        description: 'Developer productivity analytics platform with GitHub integration and insights dashboard.',
        category: ['featured', 'web'],
        tech: ['Next.js', 'D3.js', 'Supabase', 'GitHub API'],
        stars: 312,
        forks: 52,
        language: 'TypeScript',
        languageColor: '#3178C6',
        github: 'https://github.com/devmetrics/analytics',
        githubRepo: 'devmetrics/analytics',
        demo: 'https://devmetrics.demo.com',
        lines: '9.8K',
        commits: '145',
    },
];

/* -------------------------------------------------- */

export default function DevProjects() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [hovered, setHovered] = useState<number | null>(null);
    const [selected, setSelected] = useState<number | null>(null);

    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const filtered =
        activeFilter === 'all'
            ? projects
            : projects.filter((p) => p.category.includes(activeFilter));

    const project = projects.find((p) => p.id === selected);

    return (
        <Box component="section" py={{ xs: 6, md: 8 }}>
            <Container maxWidth="lg">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Typography
                        variant="h4"
                        align="center"
                        fontWeight="bold"
                        mb={1}
                        sx={{
                            background: isDark
                                ? 'linear-gradient(90deg,#8b5cf6,#22d3ee)'
                                : 'linear-gradient(90deg,#6366f1,#0ea5e9)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {'<'}Featured Projects{' />'}
                    </Typography>

                    <Typography
                        align="center"
                        fontFamily="monospace"
                        color="text.secondary"
                        mb={4}
                    >
                        // Building cool stuff, one commit at a time
                    </Typography>
                </motion.div>

                {/* Filters */}
                <Stack
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="center"
                    gap={1.5}
                    mb={5}
                >
                    {filters.map((f) => (
                        <motion.div key={f.id} whileHover={{ scale: 1.05 }}>
                            <Button
                                onClick={() => setActiveFilter(f.id)}
                                sx={{
                                    fontFamily: 'monospace',
                                    bgcolor:
                                        activeFilter === f.id
                                            ? isDark
                                                ? 'primary.main'
                                                : 'primary.light'
                                            : isDark
                                                ? 'grey.900'
                                                : 'grey.200',
                                    color:
                                        activeFilter === f.id
                                            ? isDark
                                                ? '#000'
                                                : '#fff'
                                            : 'text.secondary',
                                }}
                            >
                                {f.label}
                            </Button>
                        </motion.div>
                    ))}
                </Stack>

                {/* Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <Grid container spacing={3}>
                            {filtered.map((p, i) => (
                                <Grid size={{xs: 12 ,sm: 6 ,lg: 4}} key={p.id}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.08 }}
                                        onHoverStart={() => setHovered(p.id)}
                                        onHoverEnd={() => setHovered(null)}
                                        onClick={() => setSelected(p.id)}
                                    >
                                        <Box
                                            borderRadius={2}
                                            border="2px solid"
                                            borderColor={
                                                hovered === p.id ? 'primary.main' : 'divider'
                                            }
                                            bgcolor={isDark ? 'grey.900' : '#fff'}
                                            sx={{ cursor: 'pointer', overflow: 'hidden' }}
                                        >
                                            {/* Header */}
                                            <Stack
                                                direction="row"
                                                justifyContent="space-between"
                                                p={2}
                                                borderBottom="1px solid"
                                                borderColor="divider"
                                            >
                                                <Stack direction="row" spacing={1} alignItems="center">
                                                    <FolderIcon fontSize="small" />
                                                    <Typography fontFamily="monospace" fontSize={12}>
                                                        {p.language}
                                                    </Typography>
                                                </Stack>

                                                <Stack direction="row" spacing={1}>
                                                    {p.demo && (
                                                        <IconButton
                                                            size="small"
                                                            href={p.demo}
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <OpenInNewIcon fontSize="small" />
                                                        </IconButton>
                                                    )}
                                                    <IconButton
                                                        size="small"
                                                        href={p.github}
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <GitHubIcon fontSize="small" />
                                                    </IconButton>
                                                </Stack>
                                            </Stack>

                                            {/* Content */}
                                            <Box p={3}>
                                                <Stack direction="row" spacing={1} mb={1}>
                                                    <DescriptionIcon fontSize="small" />
                                                    <Typography fontWeight="600" noWrap>
                                                        {p.title}
                                                    </Typography>
                                                </Stack>

                                                <Typography
                                                    fontSize={13}
                                                    color="text.secondary"
                                                    mb={2}
                                                    noWrap
                                                >
                                                    {p.description}
                                                </Typography>

                                                <Stack direction="row" flexWrap="wrap" gap={1} mb={2}>
                                                    {p.tech.slice(0, 3).map((t) => (
                                                        <Chip
                                                            key={t}
                                                            label={t}
                                                            size="small"
                                                            sx={{ fontFamily: 'monospace' }}
                                                        />
                                                    ))}
                                                    {p.tech.length > 3 && (
                                                        <Chip
                                                            size="small"
                                                            label={`+${p.tech.length - 3}`}
                                                        />
                                                    )}
                                                </Stack>

                                                <Divider />

                                                <Stack
                                                    direction="row"
                                                    spacing={2}
                                                    mt={2}
                                                    fontFamily="monospace"
                                                    fontSize={12}
                                                    color="text.secondary"
                                                >
                                                    <Stack direction="row" spacing={0.5}>
                                                        <StarIcon fontSize="inherit" />
                                                        <span>{p.stars}</span>
                                                    </Stack>
                                                    <Stack direction="row" spacing={0.5}>
                                                        <CallSplitIcon fontSize="inherit" />
                                                        <span>{p.forks}</span>
                                                    </Stack>
                                                </Stack>
                                            </Box>

                                            {/* Footer */}
                                            <Stack
                                                direction="row"
                                                alignItems="center"
                                                px={2}
                                                py={1}
                                                borderTop="1px solid"
                                                borderColor="divider"
                                                fontFamily="monospace"
                                                fontSize={11}
                                                color="text.secondary"
                                            >
                                                Lines: {p.lines}
                                                <Box flexGrow={1} />
                                                <TerminalIcon fontSize="inherit" />
                                            </Stack>
                                        </Box>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </AnimatePresence>

                {/* Modal */}
                <Modal open={!!project} onClose={() => setSelected(null)}>
                    <Box
                        component={motion.div}
                        initial={{ scale: 0.85 }}
                        animate={{ scale: 1 }}
                        sx={{
                            maxWidth: 520,
                            mx: 'auto',
                            mt: '10%',
                            p: 4,
                            bgcolor: isDark ? 'grey.900' : '#fff',
                            borderRadius: 3,
                            position: 'relative',
                        }}
                    >
                        <IconButton
                            onClick={() => setSelected(null)}
                            sx={{ position: 'absolute', top: 12, right: 12 }}
                        >
                            <CloseIcon />
                        </IconButton>

                        <Typography variant="h6" mb={1}>
                            {project?.title}
                        </Typography>

                        <Typography fontSize={14} mb={3}>
                            {project?.description}
                        </Typography>

                        <Stack direction="row" flexWrap="wrap" gap={1} mb={3}>
                            {project?.tech.map((t) => (
                                <Chip key={t} label={t} size="small" />
                            ))}
                        </Stack>

                        <Stack spacing={1} fontSize={13}>
                            <span>Repo: {project?.githubRepo}</span>
                            <span>⭐ {project?.stars}</span>
                            <span>🍴 {project?.forks}</span>
                            <span>📦 Lines: {project?.lines}</span>
                        </Stack>

                        <Stack direction="row" spacing={2} mt={3}>
                            {project?.demo && (
                                <Button
                                    variant="contained"
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Demo
                                </Button>
                            )}

                            {project?.github && (
                                <Button
                                    variant="outlined"
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </Button>
                            )}
                        </Stack>
                    </Box>
                </Modal>
            </Container>
        </Box>
    );
}
