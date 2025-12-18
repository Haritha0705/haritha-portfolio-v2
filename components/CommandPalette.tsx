'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Box,
    Paper,
    TextField,
    Typography,
    ButtonBase,
    IconButton,
    useTheme,
} from '@mui/material';
import {
    Search,
    Terminal,
    Close,
} from '@mui/icons-material';
import { commands } from '@/data/content';

const MotionBox = motion.create(Box);

export default function CommandPalette() {
    const theme = useTheme();

    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState(0);

    const filtered = commands.filter(
        (cmd) =>
            cmd.label.toLowerCase().includes(search.toLowerCase()) ||
            cmd.keywords.toLowerCase().includes(search.toLowerCase())
    );

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
        setSearch('');
    };

    // Keyboard shortcuts
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setOpen((p) => !p);
            }

            if (!open) return;

            if (e.key === 'Escape') setOpen(false);

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelected((p) => (p + 1) % filtered.length);
            }

            if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelected((p) => (p - 1 + filtered.length) % filtered.length);
            }

            if (e.key === 'Enter') {
                e.preventDefault();
                if (filtered[selected]) {
                    scrollTo(filtered[selected].action);
                }
            }
        };

        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [open, selected, filtered]);

    useEffect(() => {
        const resetSelection = () => {
            setSelected(0);
        };
        resetSelection();
    }, [search]);

    return (
        <>
            <AnimatePresence>
                {open && (
                    <>
                        {/* Backdrop */}
                        <MotionBox
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                            sx={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                zIndex: 1200,
                                backdropFilter: 'blur(6px)',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            }}
                        />

                        {/* Palette */}
                        <MotionBox
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            sx={{
                                position: 'fixed',
                                top: '20%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                zIndex: 1300,
                                width: '90%',
                                maxWidth: 640,
                            }}
                        >
                            <Paper
                                sx={{
                                    borderRadius: 3,
                                    border: `1px solid ${theme.palette.divider}`,
                                    overflow: 'hidden',
                                    backdropFilter: 'blur(12px)',
                                    background: theme.custom.glass.background,
                                }}
                            >
                                {/* Search */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        px: 2,
                                        py: 1.5,
                                        borderBottom: `1px solid ${theme.palette.divider}`,
                                    }}
                                >
                                    <Search fontSize="small" />
                                    <TextField
                                        variant="standard"
                                        placeholder="Type a command or search…"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        autoFocus
                                        slotProps={{
                                            input: { disableUnderline: true },
                                        }}
                                        sx={{ ml: 2, flex: 1 }}
                                    />
                                    <IconButton size="small" onClick={() => setOpen(false)}>
                                        <Close fontSize="small" />
                                    </IconButton>
                                </Box>

                                {/* Commands */}
                                <Box sx={{ maxHeight: 360, overflowY: 'auto' }}>
                                    {filtered.length === 0 ? (
                                        <Typography sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
                                            No commands found
                                        </Typography>
                                    ) : (
                                        filtered.map((cmd, i) => (
                                            <ButtonBase
                                                key={cmd.label}
                                                onClick={() => scrollTo(cmd.action)}
                                                sx={{
                                                    width: '100%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    px: 2,
                                                    py: 1.5,
                                                    backgroundColor: i === selected ? 'primary.main' : 'transparent',
                                                    color:
                                                        i === selected
                                                            ? theme.palette.primary.contrastText
                                                            : 'text.primary',
                                                }}
                                            >
                                                <cmd.icon fontSize="small" />
                                                <Typography sx={{ ml: 2 }}>{cmd.label}</Typography>
                                            </ButtonBase>
                                        ))
                                    )}
                                </Box>

                                {/* Footer */}
                                <Box
                                    sx={{
                                        px: 2,
                                        py: 1,
                                        borderTop: `1px solid ${theme.palette.divider}`,
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        fontSize: 12,
                                        color: 'text.secondary',
                                    }}
                                >
                                    <Typography fontSize={12}>↑↓ navigate</Typography>
                                    <Typography fontSize={12}>↵ select</Typography>
                                    <Typography fontSize={12}>ESC close</Typography>
                                </Box>
                            </Paper>
                        </MotionBox>
                    </>
                )}
            </AnimatePresence>

            {/* Hint Button */}
            <ButtonBase
                onClick={() => setOpen(true)}
                sx={{
                    position: 'fixed',
                    bottom: 24,
                    left: 24,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    border: `1px solid ${theme.palette.divider}`,
                    backgroundColor: 'background.paper',
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'center',
                    gap: 1,
                }}
            >
                <Terminal fontSize="small" />
                <Typography variant="caption">⌘ K</Typography>
            </ButtonBase>
        </>
    );
}
