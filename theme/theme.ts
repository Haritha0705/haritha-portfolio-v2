'use client';

import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        custom: {
            sectionPadding: string;
            gradients: {
                hero?: string;
                text: string;
            };
            glass: {
                background: string;
                blur: string;
                border: string;
            };
        };
    }

    interface ThemeOptions {
        custom?: {
            sectionPadding?: string;
            gradients?: {
                hero?: string;
                text?: string;
            };
            glass?: {
                background?: string;
                blur?: string;
                border?: string;
            };
        };
    }
}

const monoFont = `'JetBrains Mono','Fira Code','Consolas','Monaco',monospace`;
const headingFont = `'Space Grotesk','Outfit',system-ui,sans-serif`;

const spacingSection = '6rem';

// DARK THEME

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#0B0B11',
            paper: '#14141F',
        },
        primary: {
            main: '#00FF41'
        },
        secondary: {
            main: '#00C8FF'
        },
        success: {
            main: '#0ED88A'
        },
        text: {
            primary: '#F1F5F9',
            secondary: '#8D99AE',
        },
        divider: '#1F2937',
    },

    spacing: 8,

    typography: {
        fontFamily: monoFont,

        h1: {
            fontFamily: headingFont,
            fontSize: '3.5rem',
            fontWeight: 700,
            lineHeight: 1.1,
        },
        h2: {
            fontFamily: headingFont,
            fontSize: '2.5rem',
            fontWeight: 700,
            lineHeight: 1.2,
        },
        h3: {
            fontFamily: headingFont,
            fontSize: '1.875rem',
            fontWeight: 600,
            lineHeight: 1.3,
        },
        h4: {
            fontFamily: headingFont,
            fontSize: '1.5rem',
            fontWeight: 600,
            lineHeight: 1.4,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.7,
        },
        body2: {
            fontSize: '0.95rem',
            lineHeight: 1.6,
        },
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollBehavior: 'smooth',
                    scrollbarWidth: 'none',
                    transition: 'background-color 0.3s ease, color 0.3s ease',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                },
                '*': {
                    borderColor: '#1F2937',
                },
                '::selection': {
                    background: 'rgba(99, 102, 241, 0.3)',
                    color: '#F1F5F9',
                },
            },
        },

        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                },
            },
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)',
                    },
                },
            },
        },
    },

    custom: {
        sectionPadding: spacingSection,
        gradients: {
            hero:
                'linear-gradient(135deg, #6366F1 0%, #A855F7 50%, #22D3EE 100%)',
            text: 'linear-gradient(90deg, #00FF41, #22D3EE)',
        },
        glass: {
            background: 'rgba(18, 18, 26, 0.8)',
            blur: 'blur(12px)',
            border: '1px solid rgba(99, 102, 241, 0.1)',
        },
    },
});

// LIGHT THEME

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#F5F5F5',
            paper: '#FFFFFF',
        },
        primary: { main: '#4F46E5' },
        secondary: { main: '#0284C7' },
        text: {
            primary: '#0F172A',
            secondary: '#64748B',
        },
        divider: '#E2E8F0',
    },

    typography: {
        fontFamily: monoFont,

        h1: {
            fontFamily: headingFont,
            fontSize: '3.5rem',
            fontWeight: 700,
            lineHeight: 1.1,
        },
        h2: {
            fontFamily: headingFont,
            fontSize: '2.5rem',
            fontWeight: 700,
            lineHeight: 1.2,
        },
        h3: {
            fontFamily: headingFont,
            fontSize: '1.875rem',
            fontWeight: 600,
            lineHeight: 1.3,
        },
        h4: {
            fontFamily: headingFont,
            fontSize: '1.5rem',
            fontWeight: 600,
            lineHeight: 1.4,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.7,
        },
        body2: {
            fontSize: '0.95rem',
            lineHeight: 1.6,
        },
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    borderColor: '#E2E8F0',
                },
                '::selection': {
                    background: 'rgba(79, 70, 229, 0.3)',
                    color: '#0F172A',
                },
            },
        },
    },

    custom: {
        sectionPadding: spacingSection,
        gradients: {
            text: 'linear-gradient(90deg, #6366F1, #A855F7)',
        },
        glass: {
            background: 'rgba(255, 255, 255, 0.8)',
            blur: 'blur(12px)',
            border: '1px solid rgba(79, 70, 229, 0.1)',
        },
    },
});
