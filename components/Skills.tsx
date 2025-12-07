'use client';

import { motion } from 'motion/react';
import { Code2, Server, Database, Cloud, Wrench, Palette } from 'lucide-react';

interface SkillsProps {
    theme: 'dark' | 'light';
}

const skillCategories = [
    {
        category: 'Frontend',
        icon: Palette,
        color: 'from-primary to-tertiary',
        skills: [
            { name: 'React', level: 90, years: '2+' },
            { name: 'Next.js', level: 85, years: '1+' },
            { name: 'TypeScript', level: 80, years: '1+' },
            { name: 'Tailwind CSS', level: 95, years: '2+' },
            { name: 'HTML5/CSS3', level: 95, years: '3+' },
        ],
    },
    {
        category: 'Backend',
        icon: Server,
        color: 'from-secondary to-primary',
        skills: [
            { name: 'Node.js', level: 85, years: '2+' },
            { name: 'Express', level: 80, years: '2+' },
            { name: 'Python', level: 75, years: '1+' },
            { name: 'Java', level: 70, years: '1+' },
        ],
    },
    {
        category: 'Database',
        icon: Database,
        color: 'from-tertiary to-secondary',
        skills: [
            { name: 'MongoDB', level: 85, years: '2+' },
            { name: 'PostgreSQL', level: 80, years: '1+' },
            { name: 'MySQL', level: 75, years: '1+' },
            { name: 'Firebase', level: 80, years: '1+' },
        ],
    },
    {
        category: 'DevOps',
        icon: Cloud,
        color: 'from-success to-secondary',
        skills: [
            { name: 'Git', level: 90, years: '3+' },
            { name: 'Docker', level: 70, years: '1+' },
            { name: 'AWS', level: 65, years: '1+' },
            { name: 'Vercel', level: 85, years: '1+' },
        ],
    },
    {
        category: 'Tools',
        icon: Wrench,
        color: 'from-primary to-success',
        skills: [
            { name: 'VS Code', level: 95, years: '3+' },
            { name: 'Figma', level: 80, years: '2+' },
            { name: 'Postman', level: 85, years: '2+' },
            { name: 'Linux', level: 75, years: '2+' },
        ],
    },
    {
        category: 'Other',
        icon: Code2,
        color: 'from-secondary to-tertiary',
        skills: [
            { name: 'RESTful APIs', level: 90, years: '2+' },
            { name: 'GraphQL', level: 70, years: '1+' },
            { name: 'Responsive Design', level: 95, years: '3+' },
            { name: 'Agile/Scrum', level: 80, years: '1+' },
        ],
    },
];

const additionalTech = [
    'Redux',
    'Prisma',
    'Socket.io',
    'Jest',
    'Webpack',
    'Vite',
    'Sass',
    'GraphQL',
    'Redis',
    'Nginx',
    'CI/CD',
    'Microservices',
];

export function Skills({ theme }: SkillsProps) {
    const isDark = theme === 'dark';

    return (
        <section
            id="skills"
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
                        <span>Tech Stack</span>
                    </h2>
                    <p className={`text-sm sm:text-base lg:text-lg ${
                        isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                    }`}>
                        Technologies and tools I work with
                    </p>
                </motion.div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1 }}
                            whileHover={{ y: -8 }}
                            className={`p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl card-hover-effect border ${
                                isDark
                                    ? 'bg-surface border-border'
                                    : 'bg-surface-light border-border-light'
                            }`}
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 lg:mb-6">
                                <div
                                    className={`w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                                >
                                    <category.icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6 text-white" />
                                </div>
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                                    {category.category}
                                </h3>
                            </div>

                            {/* Skills List */}
                            <div className="space-y-3 sm:space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                    >
                                        <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <span className={`text-xs sm:text-sm ${
                          isDark ? 'text-text-primary' : 'text-text-primary-light'
                      }`}>
                        {skill.name}
                      </span>
                                            <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className={`text-[10px] sm:text-xs ${
                            isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                        }`}>
                          {skill.years}
                        </span>
                                                <span className="text-[10px] sm:text-xs text-primary font-medium">
                          {skill.level}%
                        </span>
                                            </div>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className={`h-1.5 sm:h-2 rounded-full overflow-hidden ${
                                            isDark ? 'bg-background' : 'bg-background-light'
                                        }`}>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 1,
                                                    delay: categoryIndex * 0.1 + skillIndex * 0.05,
                                                    ease: 'easeOut',
                                                }}
                                                className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Tech Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-10 sm:mt-12 text-center"
                >
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-4 sm:mb-6">
                        Also Familiar With
                    </h4>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                        {additionalTech.map((tech, index) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.03 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm cursor-pointer border ${
                                    isDark
                                        ? 'bg-surface text-text-primary border-primary/20 hover:border-primary/50'
                                        : 'bg-surface-light text-text-primary-light border-primary-light/20 hover:border-primary-light/50'
                                }`}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Skills;