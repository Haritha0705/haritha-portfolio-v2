'use client';

import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Trophy, School } from 'lucide-react';

interface ExperienceProps {
    theme: 'dark' | 'light';
}

const timeline = [
    {
        type: 'experience',
        icon: Briefcase,
        title: 'Frontend Developer Intern',
        company: 'StartupXYZ',
        period: 'Jan 2024 - May 2024',
        current: false,
        description:
            'Built responsive web interfaces and improved user experience for the main product. Worked closely with designers to implement pixel-perfect designs.',
        achievements: [
            'Redesigned landing page, increasing conversion by 25%',
            'Implemented component library used across 5+ projects',
            'Mentored 2 junior developers',
        ],
    },
    {
        type: 'education',
        icon: GraduationCap,
        title: 'BSc Software Engineering',
        company: 'University of Technology',
        period: '2023 - 2027 (Expected)',
        current: true,
        description:
            '2nd Year student specializing in software development and computer science. Maintaining strong academic performance while actively participating in tech clubs.',
        achievements: [
            'GPA: 3.8/4.0',
            "Dean's List: 2023, 2024",
            'President of Computer Science Society',
        ],
    },
    {
        type: 'achievement',
        icon: Trophy,
        title: 'Hackathon Winner',
        company: 'National Tech Hackathon 2024',
        period: 'Mar 2024',
        current: false,
        description:
            'Led a team of 4 to win 1st place by developing an AI-powered student learning platform in 48 hours.',
        achievements: [
            'Competed against 50+ teams',
            'Implemented ML model with 85% accuracy',
            'Featured in local tech news',
        ],
    },
    {
        type: 'education',
        icon: School,
        title: 'High School Diploma',
        company: 'Royal College',
        period: '2019 - 2022',
        current: false,
        description:
            'Completed Advanced Level examinations with distinction in Mathematics and Computer Science.',
        achievements: [
            'Top performer in district',
            'Led school robotics club',
            'Won inter-school coding competition',
        ],
    },
];

export function Experience({ theme }: ExperienceProps) {
    const isDark = theme === 'dark';

    return (
        <section
            id="experience"
            className={`section-padding ${isDark ? 'bg-surface/30' : 'bg-surface-light/30'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-12 lg:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                        <span className="font-mono text-primary">{'<'}</span>
                        <span className="text-primary">Experience & Education</span>
                        <span className="font-mono text-primary">{' />'}</span>
                    </h2>
                    <p className={`text-sm sm:text-base lg:text-lg ${
                        isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                    }`}>
                        My journey and milestones
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Center Line - Desktop Only */}
                    <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 hidden lg:block ${
                        isDark ? 'bg-border' : 'bg-border-light'
                    }`} />

                    {/* Left Line - Mobile/Tablet */}
                    <div className={`absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 lg:hidden ${
                        isDark ? 'bg-border' : 'bg-border-light'
                    }`} />

                    {/* Timeline Items */}
                    <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex items-start gap-4 sm:gap-6 lg:gap-8 ${
                                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                }`}
                            >
                                {/* Icon - Mobile/Tablet */}
                                <div className="relative flex-shrink-0 lg:hidden z-10">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center border-4 ${
                                            isDark ? 'border-background' : 'border-background-light'
                                        }`}
                                    >
                                        <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className={`flex-1 ${
                                        index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'
                                    }`}
                                >
                                    <div className={`p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl card-hover-effect border ${
                                        isDark ? 'bg-surface border-border' : 'bg-surface-light border-border-light'
                                    }`}>
                                        {/* Header */}
                                        <div className="mb-3 sm:mb-4">
                                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                                <h3 className="text-base sm:text-lg lg:text-xl font-semibold">
                                                    {item.title}
                                                </h3>
                                                {item.current && (
                                                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-success/10 text-success text-[10px] sm:text-xs border border-success/20">
                            Current
                          </span>
                                                )}
                                            </div>
                                            <p className="text-primary text-sm sm:text-base font-medium mb-1">
                                                {item.company}
                                            </p>
                                            <p className={`text-xs sm:text-sm ${
                                                isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                                            }`}>
                                                {item.period}
                                            </p>
                                        </div>

                                        {/* Description */}
                                        <p className={`text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed ${
                                            isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                                        }`}>
                                            {item.description}
                                        </p>

                                        {/* Achievements */}
                                        <ul className={`space-y-1.5 sm:space-y-2 ${
                                            index % 2 === 0 ? 'lg:text-left' : ''
                                        }`}>
                                            {item.achievements.map((achievement, i) => (
                                                <li
                                                    key={i}
                                                    className={`flex items-start gap-2 text-xs sm:text-sm ${
                                                        isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                                                    }`}
                                                >
                                                    <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>

                                {/* Icon - Desktop Center */}
                                <div className="relative hidden lg:flex items-center justify-center">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center z-10 border-4 ${
                                            isDark ? 'border-background' : 'border-background-light'
                                        }`}
                                    >
                                        <item.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                                    </motion.div>
                                </div>

                                {/* Spacer - Desktop */}
                                <div className="flex-1 hidden lg:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;