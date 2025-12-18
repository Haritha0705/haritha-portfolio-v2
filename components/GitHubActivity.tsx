"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    Stack, useTheme,
} from "@mui/material";

import BarChartIcon from "@mui/icons-material/BarChart";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DarkModeIcon from "@mui/icons-material/DarkMode";

interface ContributionDay {
    date: string;
    count: number;
}

const MotionBox = motion.create(Box);

export default function GitHubActivity() {
    const [contributions, setContributions] = useState<ContributionDay[]>([]);
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';

    useEffect(() => {
        async function fetchData() {
            try {
                const resp = await fetch(
                    "https://github-contributions-api.jogruber.de/v4/Haritha0705?y=last"
                );
                const json = await resp.json();
                if (!json?.contributions) return;
                setContributions(json.contributions);
            } catch (err) {
                console.error("GitHub Fetch Error:", err);
            }
        }
        fetchData();
    }, []);

    const total = useMemo(
        () => contributions.reduce((s, d) => s + d.count, 0),
        [contributions]
    );

    const active30 = useMemo(
        () => contributions.slice(-30).filter((d) => d.count > 0).length,
        [contributions]
    );

    const longestStreak = useMemo(() => {
        let max = 0,
            current = 0;
        for (const d of contributions) {
            if (d.count > 0) {
                current++;
                max = Math.max(max, current);
            } else current = 0;
        }
        return max;
    }, [contributions]);

    const currentStreak = useMemo(() => {
        let streak = 0;
        for (let i = contributions.length - 1; i >= 0; i--) {
            if (contributions[i].count > 0) streak++;
            else break;
        }
        return streak;
    }, [contributions]);

    const maxDay = useMemo(
        () =>
            contributions.reduce(
                (max, d) => (d.count > max.count ? d : max),
                { date: "", count: 0 }
            ),
        [contributions]
    );

    const monthly = useMemo(() => {
        const map: Record<string, number> = {};
        contributions.forEach((d) => {
            const month = d.date.substring(0, 7);
            map[month] = (map[month] || 0) + d.count;
        });
        const maxMonth = Object.entries(map).sort((a, b) => b[1] - a[1])[0];
        return {
            bestMonth: maxMonth?.[0] || "",
            bestMonthCount: maxMonth?.[1] || 0,
        };
    }, [contributions]);

    const weeks = useMemo(() => {
        const result: ContributionDay[][] = [];
        let week: ContributionDay[] = [];

        contributions.forEach((day, i) => {
            const dt = new Date(day.date);
            if (dt.getDay() === 0 && week.length > 0) {
                result.push(week);
                week = [];
            }
            week.push(day);
            if (i === contributions.length - 1) result.push(week);
        });

        return result;
    }, [contributions]);

    const getColor = (count: number) => {
        if (count === 0) return isDark ? "#161B22" : "#EBEDF0";
        if (count <= 3) return "#9BE9A8";
        if (count <= 6) return "#40C463";
        if (count <= 12) return "#30A14E";
        return "#216E39";
    };

    const stats = [
        { label: "Total Contributions", value: total, icon: BarChartIcon },
        { label: "Active Days (30d)", value: active30, icon: WhatshotIcon },
        { label: "Longest Streak", value: longestStreak, icon: EmojiEventsIcon },
        { label: "Current Streak", value: currentStreak, icon: FlashOnIcon },
        { label: "Most Active Day", value: maxDay.count, icon: CalendarMonthIcon },
        { label: "Top Month", value: monthly.bestMonthCount, icon: DarkModeIcon },
    ];

    return (
        <Box
            component="section"
            py={{ xs: 6, md: 8 }}
            bgcolor={isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)"}
        >
            <Container maxWidth="xl">
                {/* Title */}
                <MotionBox
                    initial={{ opacity: 0, y: 15 }}
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
                        GitHub Activity
                    </Typography>

                    <Typography
                        align="center"
                        fontFamily="monospace"
                        fontSize={13}
                        color="text.secondary"
                        mb={5}
                    >
                        Updated automatically from your GitHub profile
                    </Typography>
                </MotionBox>

                {/* Stats */}
                <Grid container spacing={2} mb={6}>
                    {stats.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <Grid size={{xs: 6,md: 4,lg: 2}} key={s.label}>
                                <MotionBox
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Paper
                                        elevation={3}
                                        sx={{
                                            p: 2,
                                            textAlign: "center",
                                            borderRadius: 2,
                                            bgcolor: isDark ? "grey.900" : "#fff",
                                            transition: "0.3s",
                                            "&:hover": {
                                                transform: "translateY(-2px)",
                                                boxShadow: 6,
                                            },
                                        }}
                                    >
                                        <Icon sx={{ fontSize: 20, opacity: 0.8, mb: 0.5 }} />
                                        <Typography
                                            fontFamily="monospace"
                                            fontWeight="bold"
                                            fontSize={18}
                                            color="primary"
                                        >
                                            {s.value}
                                        </Typography>
                                        <Typography fontSize={11} color="text.secondary">
                                            {s.label}
                                        </Typography>
                                    </Paper>
                                </MotionBox>
                            </Grid>
                        );
                    })}
                </Grid>

                {/* Heatmap */}
                <Box overflow="auto">
                    <Box display="flex" pl={7}>
                        <Stack spacing={0.5} mr={1} fontSize={10} color="text.secondary">
                            <span>Mon</span>
                            <span>Wed</span>
                            <span>Fri</span>
                        </Stack>

                        <Box display="flex" gap="3px">
                            {weeks.map((week, wi) => (
                                <Stack key={wi} spacing="3px">
                                    {week.map((day, di) => (
                                        <MotionBox
                                            key={di}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.25,
                                                delay: wi * 0.004 + di * 0.002,
                                            }}
                                            style={{
                                                width: 11,
                                                height: 11,
                                                borderRadius: 3,
                                                backgroundColor: getColor(day.count),
                                            }}
                                            title={`${day.count} contributions • ${day.date}`}
                                        />
                                    ))}
                                </Stack>
                            ))}
                        </Box>
                    </Box>

                    {/* Legend */}
                    <Stack direction="row" spacing={1} mt={3} fontSize={10}>
                        <Typography component="span" sx={{ fontSize:10}}>Less</Typography>
                        {[0, 2, 4, 8, 12].map((v, i) => (
                            <Box
                                key={i}
                                width={11}
                                height={11}
                                borderRadius={1}
                                bgcolor={getColor(v)}
                            />
                        ))}
                        <Typography component="span" sx={{ fontSize:10}}>More</Typography>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
