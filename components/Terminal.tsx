'use client';

import React, { useState, useEffect, useCallback, FormEvent } from 'react';
import { Box, Typography, IconButton, InputBase } from '@mui/material';
import { motion,AnimatePresence } from 'framer-motion';

interface TerminalLine {
    type: 'command' | 'output';
    text: string;
}

interface TerminalProps {
    lines?: TerminalLine[];
    themeMode?: 'dark' | 'light';
    autoPlay?: boolean;
    typingSpeed?: number;
}

export function Terminal({
                             lines = [],
                             themeMode = 'dark',
                             autoPlay = true,
                             typingSpeed = 500,
                         }: TerminalProps) {
    const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    const isDark = themeMode === 'dark';

    useEffect(() => {
        if (!autoPlay || currentIndex >= lines.length) return;

        setIsTyping(true);
        const timer = setTimeout(() => {
            setDisplayedLines((prev) => [...prev, lines[currentIndex]]);
            setCurrentIndex((prev) => prev + 1);
            setIsTyping(false);
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [currentIndex, lines, autoPlay, typingSpeed]);

    const resetTerminal = useCallback(() => {
        setDisplayedLines([]);
        setCurrentIndex(0);
    }, []);

    return (
        <Box
            sx={{
                borderRadius: 3,
                overflow: 'hidden',
                border: 1,
                borderColor: isDark ? 'divider' : 'grey.300',
                bgcolor: isDark ? 'background.paper' : 'grey.100',
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
                    borderColor: isDark ? 'divider' : 'grey.300',
                    bgcolor: isDark ? 'grey.900' : 'grey.200',
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
                            bgcolor: isDark ? 'primary.main' : 'success.main',
                        }}
                    />
                </Box>
                <Typography variant="caption" sx={{ fontFamily: 'Monospace', color: isDark ? 'grey.400' : 'grey.700' }}>
                    haritha@dev:~
                </Typography>
                <Box sx={{ width: 52 }} />
            </Box>

            {/* Terminal Content */}
            <Box sx={{ p: 2, minHeight: 240, overflowY: 'auto', fontFamily: 'Monospace', fontSize: 13 }}>
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
                                    <Typography sx={{ color: isDark ? 'primary.main' : 'primary.light' }}>❯</Typography>
                                    <Typography sx={{ color: isDark ? 'text.primary' : 'text.primary' }}>{line.text}</Typography>
                                </Box>
                            ) : (
                                <Typography sx={{ pl: 3, color: isDark ? 'text.secondary' : 'text.secondary' }}>
                                    {line.text}
                                </Typography>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Typing indicator */}
                {isTyping && currentIndex < lines.length && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                        <Typography sx={{ color: isDark ? 'primary.main' : 'primary.light' }}>❯</Typography>
                        <motion.div
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            style={{ width: 8, height: 16, backgroundColor: isDark ? '#00FF41' : '#4F46E5' }}
                        />
                    </Box>
                )}
            </Box>
        </Box>
    );
}

// -------------------- CodeBlock --------------------

interface CodeBlockProps {
    code: string;
    language?: string;
    themeMode?: 'dark' | 'light';
    showLineNumbers?: boolean;
}

export function CodeBlock({ code, language = 'javascript', themeMode = 'dark', showLineNumbers = false }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);
    const isDark = themeMode === 'dark';
    const lines = code.split('\n');

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy', err);
        }
    };

    return (
        <Box sx={{ border: 1, borderColor: isDark ? 'divider' : 'grey.300', borderRadius: 3, overflow: 'hidden' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: 2,
                    py: 1,
                    borderBottom: 1,
                    borderColor: isDark ? 'divider' : 'grey.300',
                    bgcolor: isDark ? 'grey.900' : 'grey.200',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: isDark ? 'primary.main' : 'primary.light' }} />
                    <Typography variant="caption" sx={{ fontFamily: 'Monospace', textTransform: 'uppercase' }}>
                        {language}
                    </Typography>
                </Box>
                <IconButton size="small" onClick={handleCopy}>
                    {copied ? '✓ Copied!' : 'Copy'}
                </IconButton>
            </Box>
            <Box sx={{ p: 2, overflowX: 'auto', fontFamily: 'Monospace', fontSize: 13 }}>
                {showLineNumbers
                    ? lines.map((line, i) => (
                        <Box key={i} sx={{ display: 'flex' }}>
                            <Typography sx={{ pr: 2, textAlign: 'right', opacity: 0.5 }}>{i + 1}</Typography>
                            <Typography>{line}</Typography>
                        </Box>
                    ))
                    : code}
            </Box>
        </Box>
    );
}

// -------------------- CommandInput --------------------

interface CommandInputProps {
    onSubmit?: (command: string) => void;
    themeMode?: 'dark' | 'light';
    placeholder?: string;
}

export function CommandInput({ onSubmit, themeMode = 'dark', placeholder = 'Type a command...' }: CommandInputProps) {
    const [value, setValue] = useState('');
    const isDark = themeMode === 'dark';

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (value.trim() && onSubmit) {
            onSubmit(value.trim());
            setValue('');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography sx={{ fontFamily: 'Monospace', color: isDark ? 'primary.main' : 'primary.light' }}>❯</Typography>
            <InputBase
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                sx={{
                    flex: 1,
                    fontFamily: 'Monospace',
                    fontSize: 13,
                    color: isDark ? 'text.primary' : 'text.primary',
                    '& input': { px: 0 },
                }}
            />
        </Box>
    );
}

export default Terminal;
