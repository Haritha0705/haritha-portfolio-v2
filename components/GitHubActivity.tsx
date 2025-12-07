"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "motion/react";

import {
    BarChart3,
    Flame,
    Crown,
    Zap,
    CalendarDays,
    Moon,
} from "lucide-react";

interface GitHubActivityProps {
    theme: "dark" | "light";
}

interface ContributionDay {
    date: string;
    count: number;
}

export default function GitHubActivity({ theme }: GitHubActivityProps) {
    const [contributions, setContributions] = useState<ContributionDay[]>([]);
    const isDark = theme === "dark";

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

    const active30 = useMemo(() => {
        return contributions.slice(-30).filter((d) => d.count > 0).length;
    }, [contributions]);

    const longestStreak = useMemo(() => {
        let max = 0;
        let current = 0;
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

    const maxDay = useMemo(() => {
        return contributions.reduce(
            (max, d) => (d.count > max.count ? d : max),
            { date: "", count: 0 }
        );
    }, [contributions]);

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
        { label: "Total Contributions", value: total, icon: BarChart3 },
        { label: "Active Days (30d)", value: active30, icon: Flame },
        { label: "Longest Streak", value: longestStreak, icon: Crown },
        { label: "Current Streak", value: currentStreak, icon: Zap },
        { label: "Most Active Day", value: maxDay.count, icon: CalendarDays },
        { label: "Top Month", value: monthly.bestMonthCount, icon: Moon },
    ];

    return (
        <section
            className={`section-padding ${
                isDark ? "bg-surface/30" : "bg-surface-light/30"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl font-bold mb-2">
            <span className={isDark ? "gradient-text" : "gradient-textLight"}>
              GitHub Activity
            </span>
                    </h2>

                    <p
                        className={`text-sm font-mono ${
                            isDark ? "text-text-secondary" : "text-text-secondary-light"
                        }`}
                    >
                        Updated automatically from your GitHub profile
                    </p>
                </motion.div>

                {/* STAT CARDS */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
                    {stats.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className={`p-4 rounded-xl text-center border shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-300 ${
                                    isDark
                                        ? "bg-background border-white/10"
                                        : "bg-white border-black/10"
                                }`}
                            >
                                <Icon className="mx-auto h-5 w-5 mb-1 opacity-80" />

                                <div
                                    className={`font-mono font-bold text-lg ${
                                        isDark ? "text-primary" : "text-primary-light"
                                    }`}
                                >
                                    {s.value}
                                </div>

                                <p
                                    className={`text-[11px] mt-1 ${
                                        isDark ? "text-text-secondary" : "text-text-secondary-light"
                                    }`}
                                >
                                    {s.label}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* HEATMAP */}
                <div className="overflow-x-auto pb-6">
                    <div className="flex relative pl-14">
                        {/* Month Labels */}
                        <div className="absolute -top-6 left-14 flex gap-10 text-[10px] text-text-secondary select-none">
                            {[
                                "Dec",
                                "Jan",
                                "Feb",
                                "Mar",
                                "Apr",
                                "May",
                                "Jun",
                                "Jul",
                                "Aug",
                                "Sep",
                                "Oct",
                                "Nov",
                            ].map((m, i) => (
                                <span key={i} className="min-w-[40px] text-center">
                  {m}
                </span>
                            ))}
                        </div>

                        {/* Day Labels */}
                        <div className="flex flex-col justify-between py-[4px] mr-2 text-[10px] text-text-secondary select-none">
                            <span>Mon</span>
                            <span>Wed</span>
                            <span>Fri</span>
                        </div>

                        {/* GRID */}
                        <div className="flex gap-[3px]">
                            {weeks.map((week, wi) => (
                                <div key={wi} className="flex flex-col gap-[3px]">
                                    {week.map((day, di) => (
                                        <motion.div
                                            key={di}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.25,
                                                delay: wi * 0.004 + di * 0.002,
                                            }}
                                            className="w-[11px] h-[11px] rounded-[3px] transition-all duration-200 hover:scale-[1.3]"
                                            style={{ backgroundColor: getColor(day.count) }}
                                            title={`${day.count} contributions • ${day.date}`}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Legend */}
                    <div className="flex items-center gap-2 mt-4 text-[10px] text-text-secondary">
                        <span>Less</span>
                        {[0, 2, 4, 8, 12].map((v, i) => (
                            <div
                                key={i}
                                className="w-[11px] h-[11px] rounded-[3px]"
                                style={{ backgroundColor: getColor(v) }}
                            />
                        ))}
                        <span>More</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
