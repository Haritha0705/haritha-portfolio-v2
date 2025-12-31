'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalLine {
    type: 'command' | 'output';
    text: string;
}

interface TerminalProps {
    lines?: TerminalLine[];
    autoPlay?: boolean;
    typingSpeed?: number;
}

export function Terminal({
                             lines = [],
                             autoPlay = true,
                             typingSpeed = 500,
                         }: TerminalProps) {
    const theme = useTheme();
    const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        if (!autoPlay || currentIndex >= lines.length) return;

        let active = true;

        const typingIndicator = window.setTimeout(() => {
            if (!active) return;
            setIsTyping(true);
        }, 0);

        const timer = window.setTimeout(() => {
            if (!active) return;
            setDisplayedLines((prev) => [...prev, lines[currentIndex]]);
            setCurrentIndex((prev) => prev + 1);
            setIsTyping(false);
        }, typingSpeed);

        return () => {
            active = false;
            window.clearTimeout(typingIndicator);
            window.clearTimeout(timer);
        };
    }, [currentIndex, lines, autoPlay, typingSpeed]);

    const resetTerminal = useCallback(() => {
        setDisplayedLines([]);
        setCurrentIndex(0);
    }, []);

    return (
        <Box
            sx={{
                borderRadius: 4,
                overflow: 'hidden',
                border: 1,
                borderColor: 'divider',
                backgroundColor: 'background.default',
                boxShadow: 6,
            }}
        >
            {/* Terminal Header */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: 2,
                    py: 1,
                    borderBottom: 1,
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                }}
            >
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Box
                        onClick={resetTerminal}
                        sx={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            bgcolor: '#ff5f56',
                            cursor: 'pointer',
                            '&:hover': { filter: 'brightness(1.2)' },
                        }}
                    />
                    <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#ffbd2e' }} />
                    <Box
                        sx={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            bgcolor: theme.palette.primary.main,
                        }}
                    />
                </Box>

                <Typography
                    variant="caption"
                    sx={{
                        fontFamily: 'Monospace',
                        color: theme.custom.gradients.text,
                    }}
                >
                    haritha@dev:~
                </Typography>

                <Box sx={{ width: 52 }} />
            </Box>

            {/* Terminal Content */}
            <Box
                sx={{
                    p: 2,
                    minHeight: 240,
                    overflowY: 'auto',
                    fontFamily: 'Monospace',
                    fontSize: 13,
                }}
            >
                <AnimatePresence>
                    {displayedLines.map((line, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ marginBottom: 8 }}
                        >
                            {line.type === 'command' ? (
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Typography sx={{ color: theme.palette.primary.main }}>❯</Typography>
                                    <Typography sx={{ color: theme.custom.gradients.text }}>
                                        {line.text}
                                    </Typography>
                                </Box>
                            ) : (
                                <Typography sx={{ pl: 3, color: theme.custom.gradients.text }}>
                                    {line.text}
                                </Typography>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Typing indicator */}
                {isTyping && currentIndex < lines.length && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                        <Typography sx={{ color: theme.palette.primary.main }}>❯</Typography>
                        <motion.div
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            style={{ width: 8, height: 16, backgroundColor: theme.palette.success.main }}
                        />
                    </Box>
                )}
            </Box>
        </Box>
    );
}

export default Terminal;
