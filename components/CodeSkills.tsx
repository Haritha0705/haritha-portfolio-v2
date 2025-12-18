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
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import BuildIcon from '@mui/icons-material/Build';
import LayersIcon from '@mui/icons-material/Layers';

const skillsCode = {
    frontend: `// Frontend Technologies
import React from 'react';
import NextJS from 'next';
import TypeScript from 'typescript';
import TailwindCSS from 'tailwindcss';

const skills = {
  frameworks: ['React', 'Next.js', 'Vue.js'],
  languages: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  styling: ['Tailwind CSS', 'Sass', 'Styled Components'],
  tools: ['Vite', 'Webpack', 'Redux', 'React Query'],
  proficiency: '90%'
};

export default skills;`,

    backend: `// Backend & APIs
const express = require('express');
const mongoose = require('mongoose');

class BackendDeveloper {
  constructor() {
    this.languages = ['Node.js', 'Python', 'Java'];
    this.frameworks = ['Express', 'FastAPI', 'Spring Boot'];
    this.apis = ['REST', 'GraphQL', 'WebSocket'];
    this.auth = ['JWT', 'OAuth', 'Passport'];
  }

  buildAPI() {
    return 'Scalable & Secure APIs';
  }
}

module.exports = new BackendDeveloper();`,

    database: `-- Database & Storage
SELECT * FROM skills
WHERE category = 'Database'
ORDER BY proficiency DESC;

/* MongoDB, PostgreSQL, MySQL, Redis */

CREATE TABLE expertise (
  id SERIAL PRIMARY KEY,
  skill VARCHAR(50),
  level INT CHECK (level >= 80)
);`,

    devops: `# DevOps & Cloud
docker build -t app .
docker-compose up -d

AWS • Vercel • CI/CD
GitHub Actions`,

    tools: `{
  "editor": "VS Code",
  "design": ["Figma", "Adobe XD"],
  "testing": ["Postman", "Insomnia"],
  "versionControl": "Git & GitHub"
}`,
};

const tabs = [
    { id: 'frontend', label: 'Frontend', icon: <CodeIcon /> },
    { id: 'backend', label: 'Backend', icon: <TerminalIcon /> },
    { id: 'database', label: 'Database', icon: <StorageIcon /> },
    { id: 'devops', label: 'DevOps', icon: <CloudQueueIcon /> },
    { id: 'tools', label: 'Tools', icon: <BuildIcon /> },
];

const MotionBox = motion.create(Box);

export default function CodeSkills() {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const [activeTab, setActiveTab] = useState('frontend');
    const codeLines = skillsCode[activeTab as keyof typeof skillsCode].split('\n');

    return (
        <Box
            component="section"
            id="skills"
            py={{ xs: 6, md: 8 }}
            bgcolor={isDark ? 'rgba(30,30,30,0.4)' : 'rgba(245,245,245,0.6)'}
        >
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
                        {'<'}Tech Stack{' />'}
                    </Typography>
                    <Typography
                        align="center"
                        fontFamily="monospace"
                        color={isDark ? 'grey.400' : 'grey.600'}
                        mb={4}
                    >
                        {"// My developer toolbox"}
                    </Typography>
                </MotionBox>

                {/* Editor */}
                <Box
                    borderRadius={2}
                    overflow="hidden"
                    border="2px solid"
                    borderColor={isDark ? 'primary.dark' : 'primary.light'}
                    bgcolor={isDark ? '#1E1E1E' : '#fff'}
                    boxShadow={6}
                >
                    {/* Editor Header */}
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        px={2}
                        py={1}
                        bgcolor={isDark ? '#2D2D30' : '#F3F3F3'}
                    >
                        <Stack direction="row" spacing={1}>
                            {['#FF5F56', '#FFBD2E', '#27C93F'].map((c) => (
                                <Box key={c} width={10} height={10} borderRadius="50%" bgcolor={c} />
                            ))}
                        </Stack>

                        <Stack direction="row" spacing={1} alignItems="center">
                            <LayersIcon fontSize="small" />
                            <Typography fontSize={12} fontFamily="monospace">
                                skills.{activeTab}
                            </Typography>
                        </Stack>

                        <Box width={40} />
                    </Stack>

                    {/* Tabs */}
                    <Stack direction="row" divider={<Divider orientation="vertical" flexItem />}>
                        {tabs.map((tab) => (
                            <Button
                                key={tab.id}
                                startIcon={tab.icon}
                                onClick={() => setActiveTab(tab.id)}
                                sx={{
                                    fontFamily: 'monospace',
                                    borderRadius: 0,
                                    color:
                                        activeTab === tab.id
                                            ? isDark
                                                ? 'primary.light'
                                                : 'primary.main'
                                            : 'text.secondary',
                                    bgcolor:
                                        activeTab === tab.id
                                            ? isDark
                                                ? '#1E1E1E'
                                                : '#fff'
                                            : 'transparent',
                                }}
                            >
                                {tab.label}
                            </Button>
                        ))}
                    </Stack>

                    {/* Code */}
                    <Box position="relative">
                        {/* Line Numbers */}
                        <Box
                            position="absolute"
                            left={0}
                            top={0}
                            bottom={0}
                            width={48}
                            bgcolor={isDark ? '#1E1E1E' : '#F8F8F8'}
                            borderRight="1px solid"
                            borderColor={isDark ? '#3E3E42' : '#E5E5E5'}
                            px={1}
                            py={2}
                            fontFamily="monospace"
                            fontSize={12}
                            color="text.secondary"
                            textAlign="right"
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
                                    color: theme.palette.mode === 'dark'
                                        ? theme.palette.grey[300]
                                        : theme.palette.grey[900],
                                }}
                            >
                                {skillsCode[activeTab as keyof typeof skillsCode]}
                            </Box>
                        </AnimatePresence>
                    </Box>

                    {/* Status Bar */}
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        px={2}
                        py={1}
                        bgcolor={isDark ? 'primary.main' : '#0066B8'}
                        color={'background.default'}
                        fontFamily="monospace"
                        fontSize={12}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2,
                                alignItems: 'center',
                            }}
                        >
                            <Typography component="span" sx={{ fontSize:12}}>✓ Ready</Typography>
                            <Typography component="span" sx={{ fontSize:12}}>UTF-8</Typography>
                            <Typography component="span" sx={{ fontSize:12}}>JavaScript</Typography>
                        </Box>
                        <Typography component="span" sx={{ fontSize:12}}>Spaces: 2</Typography>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
