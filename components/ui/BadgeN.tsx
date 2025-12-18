'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';

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