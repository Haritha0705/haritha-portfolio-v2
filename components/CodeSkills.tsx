'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Box,
    Container,
    Typography,
    Button,
    Stack,
    Divider,
    useTheme,
} from '@mui/material';
import LayersIcon from '@mui/icons-material/Layers';
import { skillsCode, tabs } from '@/data/content';

const MotionBox = motion(Box);

export default function CodeSkills() {
    const theme = useTheme();
    const [activeTab, setActiveTab] = useState('frontend');
    const codeLines = skillsCode[activeTab as keyof typeof skillsCode].split('\n');

    return (
        <Box
            component="section"
            id="skills"
            sx={{
                py: { xs: 6, md: 8 },
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Container maxWidth="lg">
                {/* ---------------- Header ---------------- */}
                <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Typography
                        variant="h4"
                        align="center"
                        fontWeight={800}
                        mb={1}
                        sx={{
                            background: theme.custom.gradients.text,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {'<'}Tech Stack{' />'}
                    </Typography>

                    <Typography
                        align="center"
                        fontFamily="monospace"
                        color={theme.custom.gradients.text}
                        mb={4}
                    >
                        {'// My developer toolbox'}
                    </Typography>
                </MotionBox>

                {/* ---------------- Code Editor ---------------- */}
                <Box
                    sx={{
                        borderRadius: 2,
                        overflow: 'hidden',
                        border: `1px solid ${theme.palette.divider}`,
                        backgroundColor: theme.palette.background.paper,
                        boxShadow: theme.shadows[6],
                    }}
                >
                    {/* -------- Editor Header -------- */}
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        px={2}
                        py={1}
                        sx={{
                            backgroundColor: theme.palette.background.paper,
                            borderBottom: `1px solid ${theme.palette.divider}`,
                        }}
                    >
                        {/* Mac buttons */}
                        <Stack direction="row" spacing={1}>
                            {['#FF5F56', '#FFBD2E', '#27C93F'].map((c) => (
                                <Box
                                    key={c}
                                    sx={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: '50%',
                                        backgroundColor: c,
                                    }}
                                />
                            ))}
                        </Stack>

                        <Stack direction="row" spacing={1} alignItems="center">
                            <LayersIcon fontSize="small" sx={{ color: theme.custom.gradients.text }} />
                            <Typography fontSize={12} fontFamily="monospace" sx={{ color: theme.custom.gradients.text }}>
                                skills.{activeTab}
                            </Typography>
                        </Stack>

                        <Box width={40} />
                    </Stack>

                    {/* -------- Tabs -------- */}
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        sx={{
                            borderBottom: `1px solid ${theme.palette.divider}`,
                        }}
                    >
                        {tabs.map((tab) => (
                            <Button
                                key={tab.id}
                                startIcon={tab.icon}
                                onClick={() => setActiveTab(tab.id)}
                                sx={{
                                    fontFamily: 'monospace',
                                    borderRadius: 0,
                                    px: 2,
                                    color:
                                        activeTab === tab.id
                                            ? theme.custom.gradients.text
                                            : theme.palette.text.primary,
                                    backgroundColor:
                                        activeTab === tab.id
                                            ? theme.palette.action.selected
                                            : 'transparent',
                                    '&:hover': {
                                        backgroundColor: theme.palette.action.hover,
                                    },
                                }}
                            >
                                {tab.label}
                            </Button>
                        ))}
                    </Stack>

                    {/* -------- Code Area -------- */}
                    <Box position="relative">
                        {/* Line Numbers */}
                        <Box
                            sx={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: 48,
                                px: 1,
                                py: 2,
                                textAlign: 'right',
                                fontFamily: 'monospace',
                                fontSize: 12,
                                color: theme.custom.gradients.text,
                                backgroundColor: theme.palette.background.paper,
                                borderRight: `1px solid ${theme.palette.divider}`,
                            }}
                        >
                            {codeLines.map((_, i) => (
                                <Box key={i}>{i + 1}</Box>
                            ))}
                        </Box>

                        <AnimatePresence mode="wait">
                            <Box
                                key={activeTab}
                                component={motion.pre}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.25 }}
                                sx={{
                                    m: 0,
                                    p: '16px 16px 16px 64px',
                                    overflowX: 'auto',
                                    fontFamily: 'monospace',
                                    fontSize: 13,
                                    lineHeight: 1.6,
                                    color: theme.palette.text.primary,
                                }}
                            >
                                {skillsCode[activeTab as keyof typeof skillsCode]}
                            </Box>
                        </AnimatePresence>
                    </Box>

                    {/* -------- Status Bar -------- */}
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        px={2}
                        py={1}
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.background.default,
                            fontFamily: 'monospace',
                            fontSize: 12,
                        }}
                    >
                        <Stack direction="row" spacing={2}>
                            <Typography component="span">✓ Ready</Typography>
                            <Typography component="span">UTF-8</Typography>
                            <Typography component="span">JavaScript</Typography>
                        </Stack>
                        <Typography component="span">Spaces: 2</Typography>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
