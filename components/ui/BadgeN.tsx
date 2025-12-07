import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'frontend' | 'backend' | 'tools' | 'default';
    theme?: 'dark' | 'light';
    className?: string;
}

export function Badge({ children, variant = 'default', theme = 'dark', className = '' }: BadgeProps) {
    const isDark = theme === 'dark';

    const getVariantStyles = () => {
        const variants = {
            frontend: {
                backgroundColor: isDark ? 'rgba(34, 211, 238, 0.1)' : 'rgba(34, 211, 238, 0.1)',
                color: isDark ? 'var(--color-secondary)' : 'var(--color-secondary)',
                borderColor: isDark ? 'rgba(34, 211, 238, 0.2)' : 'rgba(34, 211, 238, 0.2)',
            },
            backend: {
                backgroundColor: isDark ? 'rgba(168, 85, 247, 0.1)' : 'rgba(168, 85, 247, 0.1)',
                color: isDark ? 'var(--color-tertiary)' : 'var(--color-tertiary)',
                borderColor: isDark ? 'rgba(168, 85, 247, 0.2)' : 'rgba(168, 85, 247, 0.2)',
            },
            tools: {
                backgroundColor: isDark ? 'rgba(251, 146, 60, 0.1)' : 'rgba(251, 146, 60, 0.1)',
                color: isDark ? '#FB923C' : '#EA580C',
                borderColor: isDark ? 'rgba(251, 146, 60, 0.2)' : 'rgba(251, 146, 60, 0.2)',
            },
            default: {
                backgroundColor: isDark ? 'var(--color-surface)' : 'var(--color-surface-light)',
                color: isDark ? 'var(--color-text-secondary)' : 'var(--color-text-secondary-light)',
                borderColor: isDark ? 'var(--color-border)' : 'var(--color-border-light)',
            },
        };
        return variants[variant];
    };

    const styles = getVariantStyles();

    return (
        <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-all ${className}`}
            style={{
                backgroundColor: styles.backgroundColor,
                color: styles.color,
                borderColor: styles.borderColor,
                fontFamily: 'var(--font-mono)',
            }}
        >
            {children}
        </span>
    );
}

interface StatusBadgeProps {
    status: 'available' | 'busy' | 'unavailable';
    label?: string;
    theme?: 'dark' | 'light';
}

export function StatusBadge({ status, label, theme = 'dark' }: StatusBadgeProps) {
    const isDark = theme === 'dark';

    const statusConfig = {
        available: {
            color: 'var(--color-success)',
            bgColor: 'rgba(16, 185, 129, 0.1)',
            borderColor: 'rgba(16, 185, 129, 0.2)',
            label: 'Available for work',
        },
        busy: {
            color: '#FB923C',
            bgColor: 'rgba(251, 146, 60, 0.1)',
            borderColor: 'rgba(251, 146, 60, 0.2)',
            label: 'Currently busy',
        },
        unavailable: {
            color: '#EF4444',
            bgColor: 'rgba(239, 68, 68, 0.1)',
            borderColor: 'rgba(239, 68, 68, 0.2)',
            label: 'Unavailable',
        },
    };

    const config = statusConfig[status];

    return (
        <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all"
            style={{
                backgroundColor: config.bgColor,
                borderColor: config.borderColor,
            }}
        >
            <span
                className="relative flex h-2 w-2"
            >
                <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ backgroundColor: config.color }}
                />
                <span
                    className="relative inline-flex rounded-full h-2 w-2"
                    style={{ backgroundColor: config.color }}
                />
            </span>
            <span
                className="text-sm font-medium"
                style={{
                    color: isDark ? 'var(--color-text-secondary)' : 'var(--color-text-secondary-light)',
                    fontFamily: 'var(--font-mono)',
                }}
            >
                {label || config.label}
            </span>
        </div>
    );
}

interface TechBadgeProps {
    name: string;
    icon?: React.ReactNode;
    theme?: 'dark' | 'light';
}

export function TechBadge({ name, icon, theme = 'dark' }: TechBadgeProps) {
    const isDark = theme === 'dark';

    return (
        <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all hover:scale-105 cursor-default"
            style={{
                backgroundColor: isDark ? 'var(--color-surface)' : 'var(--color-surface-light)',
                borderColor: isDark ? 'var(--color-border)' : 'var(--color-border-light)',
            }}
        >
            {icon && (
                <span
                    className="text-sm"
                    style={{ color: isDark ? 'var(--color-primary)' : 'var(--color-primary-light)' }}
                >
                    {icon}
                </span>
            )}
            <span
                className="text-xs font-medium"
                style={{
                    color: isDark ? 'var(--color-text-primary)' : 'var(--color-text-primary-light)',
                    fontFamily: 'var(--font-mono)',
                }}
            >
                {name}
            </span>
        </div>
    );
}