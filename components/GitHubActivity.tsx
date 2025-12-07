'use client';

import { useState, useMemo } from 'react';
import { motion } from 'motion/react';

interface GitHubActivityProps {
    theme: 'dark' | 'light';
}

interface ContributionDay {
    date: Date;
    count: number;
}

const languages = [
    { name: 'TypeScript', percentage: 35, color: '#3178C6' },
    { name: 'JavaScript', percentage: 28, color: '#F7DF1E' },
    { name: 'Python', percentage: 18, color: '#3776AB' },
    { name: 'CSS', percentage: 12, color: '#1572B6' },
    { name: 'Other', percentage: 7, color: '#6366F1' },
];

export function GitHubActivity({ theme }: GitHubActivityProps) {
    const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);
    const isDark = theme === 'dark';

    // Generate mock contribution data (365 days)
    const contributions = useMemo(() => {
        const data: ContributionDay[] = [];
        for (let i = 0; i < 365; i++) {
            data.push({
                date: new Date(Date.now() - (364 - i) * 24 * 60 * 60 * 1000),
                count: Math.floor(Math.random() * 15),
            });
        }
        return data;
    }, []);

    const weeks = useMemo(() => {
        const result: ContributionDay[][] = [];
        let currentWeek: ContributionDay[] = [];

        contributions.forEach((day, index) => {
            currentWeek.push(day);
            if (day.date.getDay() === 6 || index === contributions.length - 1) {
                result.push([...currentWeek]);
                currentWeek = [];
            }
        });

        return result;
    }, [contributions]);

    const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0);
    const currentStreak = contributions.slice(-30).filter((d) => d.count > 0).length;

    const getColor = (count: number) => {
        if (count === 0) return isDark ? '#161B22' : '#EBEDF0';
        if (count <= 3) return '#0E4429';
        if (count <= 6) return '#006D32';
        if (count <= 9) return '#26A641';
        return '#39D353';
    };

    const stats = [
        { label: 'Total Contributions', value: totalContributions, icon: '📊' },
        { label: 'Current Streak', value: `${currentStreak} days`, icon: '🔥' },
        { label: 'Longest Streak', value: '45 days', icon: '⚡' },
        { label: 'This Month', value: '127', icon: '📈' },
    ];

    return (
        <section className={`section-padding ${isDark ? 'bg-surface/30' : 'bg-surface-light/30'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-10 lg:mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                        <span className="gradient-text">GitHub Activity</span>
                    </h2>
                    <p className={`text-sm sm:text-base lg:text-lg font-mono ${
                        isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                    }`}>
                        // My contribution graph
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl border ${
                        isDark ? 'bg-surface border-border' : 'bg-surface-light border-border-light'
                    }`}
                >
                    {/* Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-3 sm:p-4 rounded-lg text-center ${
                                    isDark ? 'bg-background' : 'bg-background-light'
                                }`}
                            >
                                <div className="text-xl sm:text-2xl mb-1">{stat.icon}</div>
                                <div className="gradient-text font-mono font-bold text-lg sm:text-xl mb-0.5 sm:mb-1">
                                    {stat.value}
                                </div>
                                <div className={`text-[10px] sm:text-xs ${
                                    isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                                }`}>
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contribution Graph */}
                    <div className="overflow-x-auto pb-2 sm:pb-4">
                        <div className="inline-block min-w-full">
                            <div className="flex items-start gap-1">
                                {/* Day labels */}
                                <div className={`flex flex-col justify-around h-full text-[8px] sm:text-[10px] lg:text-xs mr-1 sm:mr-2 font-mono ${
                                    isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                                }`}>
                                    <span>Mon</span>
                                    <span>Wed</span>
                                    <span>Fri</span>
                                </div>

                                {/* Contribution grid */}
                                <div className="flex gap-[2px] sm:gap-1">
                                    {weeks.map((week, weekIndex) => (
                                        <div key={weekIndex} className="flex flex-col gap-[2px] sm:gap-1">
                                            {week.map((day, dayIndex) => (
                                                <motion.div
                                                    key={dayIndex}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: weekIndex * 0.01 + dayIndex * 0.005 }}
                                                    whileHover={{ scale: 1.3 }}
                                                    onHoverStart={() => setHoveredDay(day)}
                                                    onHoverEnd={() => setHoveredDay(null)}
                                                    className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-[2px] sm:rounded-sm cursor-pointer transition-all"
                                                    style={{ backgroundColor: getColor(day.count) }}
                                                />
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tooltip */}
                            {hoveredDay && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`mt-3 sm:mt-4 p-2 sm:p-3 rounded-lg text-xs sm:text-sm font-mono border ${
                                        isDark
                                            ? 'bg-background border-primary/30'
                                            : 'bg-background-light border-primary-light/30'
                                    }`}
                                >
                                    <span className="text-primary">{hoveredDay.count} contributions</span>
                                    <span className={`ml-2 ${
                                        isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                                    }`}>
                    on {hoveredDay.date.toLocaleDateString()}
                  </span>
                                </motion.div>
                            )}

                            {/* Legend */}
                            <div className={`flex items-center justify-end gap-1.5 sm:gap-2 mt-3 sm:mt-4 text-[10px] sm:text-xs font-mono ${
                                isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                            }`}>
                                <span>Less</span>
                                {[0, 3, 6, 9, 12].map((count) => (
                                    <div
                                        key={count}
                                        className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-[2px] sm:rounded-sm"
                                        style={{ backgroundColor: getColor(count) }}
                                    />
                                ))}
                                <span>More</span>
                            </div>
                        </div>
                    </div>

                    {/* Languages */}
                    <div className="mt-6 sm:mt-8">
                        <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 font-mono">
                            Most Used Languages
                        </h4>
                        <div className="space-y-2.5 sm:space-y-3">
                            {languages.map((lang, index) => (
                                <motion.div
                                    key={lang.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="flex items-center justify-between mb-1 text-xs sm:text-sm">
                                        <div className="flex items-center gap-1.5 sm:gap-2">
                                            <div
                                                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
                                                style={{ backgroundColor: lang.color }}
                                            />
                                            <span className="font-mono">{lang.name}</span>
                                        </div>
                                        <span className="text-primary font-mono">{lang.percentage}%</span>
                                    </div>
                                    <div className={`h-1.5 sm:h-2 rounded-full overflow-hidden ${
                                        isDark ? 'bg-background' : 'bg-background-light'
                                    }`}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${lang.percentage}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                            className="h-full rounded-full"
                                            style={{ backgroundColor: lang.color }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default GitHubActivity;