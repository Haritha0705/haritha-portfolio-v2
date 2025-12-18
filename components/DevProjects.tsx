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
import { filters,projects } from '@/data/content';

const MotionBox = motion.create(Box);

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
        <Box component="section" id="projects" py={{ xs: 6, md: 8 }}>
            <Container maxWidth="lg">
                {/* Header */}
                <MotionBox
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
                            background: theme.custom.gradients.text,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
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
                        {"// Building cool stuff, one commit at a time"}
                    </Typography>
                </MotionBox>

                {/* Filters */}
                <Stack
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="center"
                    gap={1.5}
                    mb={5}
                >
                    {filters.map((f) => (
                        <MotionBox key={f.id} whileHover={{ scale: 1.05 }}>
                            <Button
                                onClick={() => setActiveFilter(f.id)}
                                sx={{
                                    fontFamily: 'monospace',
                                    backgroundColor:
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
                        </MotionBox>
                    ))}
                </Stack>

                {/* Grid */}
                <AnimatePresence mode="wait">
                    <MotionBox
                        key={activeFilter}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <Grid container spacing={3}>
                            {filtered.map((p, i) => (
                                <Grid size={{xs: 12 ,sm: 6 ,lg: 4}} key={p.id}>
                                    <MotionBox
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
                                                    fontSize={18}
                                                    color="text.secondary"
                                                >
                                                    <Stack direction="row" spacing={0.5}>
                                                        <StarIcon fontSize="inherit" />
                                                        <Typography component={"span"} fontSize={12}>{p.stars}</Typography>
                                                    </Stack>
                                                    <Stack direction="row" spacing={0.5}>
                                                        <CallSplitIcon fontSize="inherit" />
                                                        <Typography component={"span"} fontSize={12}>{p.forks}</Typography>
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
                                    </MotionBox>
                                </Grid>
                            ))}
                        </Grid>
                    </MotionBox>
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
                            backgroundColor: isDark ? 'grey.900' : '#fff',
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

                        <Stack spacing={1}>
                            <Typography component={"span"} fontSize={12}>Repo: {project?.githubRepo}</Typography>
                            <Typography component={"span"} fontSize={12}>⭐ {project?.stars}</Typography>
                            <Typography component={"span"} fontSize={12}>🍴 {project?.forks}</Typography>
                            <Typography component={"span"} fontSize={12}>📦 Lines: {project?.lines}</Typography>
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
