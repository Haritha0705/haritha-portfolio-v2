'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'frontend' | 'backend' | 'tools' | 'default';
    themeMode?: 'dark' | 'light';
}

export function Badge({ children, variant = 'default', themeMode = 'dark' }: BadgeProps) {
    const isDark = themeMode === 'dark';

    const variants = {
        frontend: { bg: 'rgba(34,211,238,0.1)', color: 'secondary.main', border: 'rgba(34,211,238,0.2)' },
        backend: { bg: 'rgba(168,85,247,0.1)', color: 'tertiary.main', border: 'rgba(168,85,247,0.2)' },
        tools: { bg: 'rgba(251,146,60,0.1)', color: '#FB923C', border: 'rgba(251,146,60,0.2)' },
        default: {
            bg: isDark ? 'background.paper' : 'grey.100',
            color: isDark ? 'text.secondary' : 'text.secondary',
            border: isDark ? 'divider' : 'grey.300',
        },
    };

    const style = variants[variant];

    return (
        <Box
            component="span"
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                px: 1.5,
                py: 0.5,
                borderRadius: 999,
                fontSize: '0.75rem',
                fontWeight: 500,
                border: `1px solid ${style.border}`,
                bgcolor: style.bg,
                color: style.color,
                fontFamily: 'Monospace',
            }}
        >
            {children}
        </Box>
    );
}

interface StatusBadgeProps {
    status: 'available' | 'busy' | 'unavailable';
    label?: string;
    themeMode?: 'dark' | 'light';
}

const ping = keyframes`
  0% { transform: scale(1); opacity: 1; }
  75%, 100% { transform: scale(2); opacity: 0; }
`;

export default function StatusBadge({ status, label, themeMode = 'dark' }: StatusBadgeProps) {
    const isDark = themeMode === 'dark';

    const statusConfig = {
        available: { color: 'success.main', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.2)', defaultLabel: 'Available for work' },
        busy: { color: '#FB923C', bg: 'rgba(251,146,60,0.1)', border: 'rgba(251,146,60,0.2)', defaultLabel: 'Currently busy' },
        unavailable: { color: '#EF4444', bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.2)', defaultLabel: 'Unavailable' },
    };

    const config = statusConfig[status];

    return (
        <Box
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 1.5,
                py: 0.5,
                borderRadius: 999,
                border: `1px solid ${config.border}`,
                bgcolor: config.bg,
            }}
        >
            <Box sx={{ position: 'relative', width: 8, height: 8 }}>
                <Box
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        bgcolor: config.color,
                        opacity: 0.75,
                        animation: `${ping} 1.5s infinite`,
                    }}
                />
                <Box sx={{ position: 'relative', width: '100%', height: '100%', borderRadius: '50%', bgcolor: config.color }} />
            </Box>
            <Typography
                variant="body2"
                sx={{
                    fontFamily: 'Monospace',
                    color: isDark ? 'text.secondary' : 'text.secondary',
                }}
            >
                {label || config.defaultLabel}
            </Typography>
        </Box>
    );
}

interface TechBadgeProps {
    name: string;
    icon?: React.ReactNode;
    themeMode?: 'dark' | 'light';
}

export function TechBadge({ name, icon, themeMode = 'dark' }: TechBadgeProps) {
    const isDark = themeMode === 'dark';

    return (
        <Box
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 1.5,
                py: 1,
                borderRadius: 2,
                border: `1px solid ${isDark ? 'divider' : 'grey.300'}`,
                bgcolor: isDark ? 'background.paper' : 'grey.100',
                cursor: 'default',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.05)' },
            }}
        >
            {icon && <Box sx={{ color: isDark ? 'primary.main' : 'primary.light', fontSize: 18 }}>{icon}</Box>}
            <Typography sx={{ fontSize: '0.75rem', fontFamily: 'Monospace', color: isDark ? 'text.primary' : 'text.primary' }}>
                {name}
            </Typography>
        </Box>
    );
}
