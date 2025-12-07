'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

interface AboutProps {
    theme: 'dark' | 'light';
}

const stats = [
    { label: 'Projects', value: '5+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Experience', value: '3+ Yrs' },
];

const competencies = [
    'Full Stack Development',
    'React & Next.js',
    'Node.js & Express',
    'Database Design',
    'API Development',
    'Cloud Deployment',
    'Agile Methodology',
    'Problem Solving',
];

export function About({ theme }: AboutProps) {
    const isDark = theme === 'dark';

    return (
        <section id="about" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-12 lg:mb-16"
                >
                    <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 ${isDark ? 'gradient-text' : 'gradient-textLight'}`}>
                        <span className="font-mono">{'<'}</span>
                        <span>About Me</span>
                        <span className="font-mono">{' />'}</span>
                    </h2>
                    <p className={`text-sm sm:text-base lg:text-lg ${
                        isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                    }`}>
                        Get to know more about who I am and what I do
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left - Image & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4 sm:space-y-6"
                    >
                        {/* Profile Image */}
                        <div className={`relative overflow-hidden rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 ${
                            isDark ? 'bg-surface' : 'bg-surface-light'
                        }`}>
                            <Image
                                src="/Gemini_Generated_Image_5ck7vd5ck7vd5ck7.png"
                                alt="Haritha Profile"
                                width={400}
                                height={400}
                                className="rounded-xl sm:rounded-2xl object-cover w-full h-auto aspect-square"
                                priority
                            />
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-2 sm:gap-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`p-3 sm:p-4 rounded-lg sm:rounded-xl text-center ${
                                        isDark ? 'bg-surface' : 'bg-surface-light'
                                    }`}
                                >
                                    <div className={` ${isDark ? 'text-primary' : 'text-primary-light'} font-bold text-lg sm:text-xl lg:text-2xl mb-1`}>
                                        {stat.value}
                                    </div>
                                    <div className={`text-xs sm:text-sm ${
                                        isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                                    }`}>
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">
                            Passionate Developer & Problem Solver
                        </h3>

                        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                            <p className={`text-sm sm:text-base leading-relaxed ${
                                isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                            }`}>
                                I'm a 2nd-year Software Engineering student with a passion for building
                                impactful digital experiences. My journey in tech started with curiosity
                                and has evolved into a commitment to creating clean, efficient, and
                                user-friendly applications.
                            </p>

                            <p className={`text-sm sm:text-base leading-relaxed ${
                                isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                            }`}>
                                I specialize in full-stack development, working with modern technologies
                                like React, Node.js, and TypeScript. Whether it's crafting intuitive
                                frontends or building robust backends, I love the challenge of turning
                                complex problems into elegant solutions.
                            </p>

                            <p className={`text-sm sm:text-base leading-relaxed ${
                                isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                            }`}>
                                When I'm not coding, you'll find me exploring new technologies,
                                contributing to open source, or sharing my knowledge with the developer
                                community. I believe in continuous learning and staying ahead of the
                                curve in this ever-evolving field.
                            </p>
                        </div>

                        {/* Core Competencies */}
                        <div>
                            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                                Core Competencies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {competencies.map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm border ${
                                            isDark
                                                ? 'bg-surface text-text-primary border-primary/20'
                                                : 'bg-surface-light text-text-primary-light border-primary-light/20'
                                        }`}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;