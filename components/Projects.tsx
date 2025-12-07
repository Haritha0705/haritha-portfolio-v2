'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Star, Eye } from 'lucide-react';

interface ProjectsProps {
    theme: 'dark' | 'light';
}

const filters = ['All', 'Frontend', 'Backend', 'Full Stack'];

const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description:
            'Full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.',
        image: '🛒',
        category: 'Full Stack',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        github: 'https://github.com',
        demo: 'https://demo.com',
        stars: 124,
        views: '2.5K',
        featured: true,
    },
    {
        id: 2,
        title: 'Task Management App',
        description:
            'Collaborative task management tool with drag-and-drop interface, team collaboration features, and real-time updates.',
        image: '✅',
        category: 'Full Stack',
        tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
        github: 'https://github.com',
        demo: 'https://demo.com',
        stars: 89,
        views: '1.8K',
        featured: false,
    },
    {
        id: 3,
        title: 'Weather Dashboard',
        description:
            'Beautiful weather application with detailed forecasts, location-based weather, and interactive maps.',
        image: '🌤️',
        category: 'Frontend',
        tags: ['React', 'Tailwind CSS', 'OpenWeather API'],
        github: 'https://github.com',
        demo: 'https://demo.com',
        stars: 56,
        views: '1.2K',
        featured: false,
    },
    {
        id: 4,
        title: 'RESTful API Backend',
        description:
            'Scalable REST API with JWT authentication, role-based access control, and comprehensive documentation.',
        image: '🔌',
        category: 'Backend',
        tags: ['Express', 'MongoDB', 'JWT', 'Swagger'],
        github: 'https://github.com',
        demo: null,
        stars: 72,
        views: '980',
        featured: false,
    },
    {
        id: 5,
        title: 'Portfolio Generator',
        description:
            'SaaS platform for developers to create and deploy their portfolios with customizable templates and themes.',
        image: '🎨',
        category: 'Full Stack',
        tags: ['Next.js', 'Firebase', 'Tailwind CSS', 'Vercel'],
        github: 'https://github.com',
        demo: 'https://demo.com',
        stars: 143,
        views: '3.1K',
        featured: true,
    },
    {
        id: 6,
        title: 'Social Media Dashboard',
        description:
            'Analytics dashboard for social media management with charts, metrics, and scheduled posting features.',
        image: '📊',
        category: 'Frontend',
        tags: ['React', 'Recharts', 'Redux', 'Material-UI'],
        github: 'https://github.com',
        demo: 'https://demo.com',
        stars: 67,
        views: '1.5K',
        featured: false,
    },
];

export function Projects({ theme }: ProjectsProps) {
    const [activeFilter, setActiveFilter] = useState('All');
    const isDark = theme === 'dark';

    const filteredProjects =
        activeFilter === 'All'
            ? projects
            : projects.filter((project) => project.category === activeFilter);

    return (
        <section id="projects" className="section-padding">
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
                        <span className="gradient-text">Featured Projects</span>
                    </h2>
                    <p className={`text-sm sm:text-base lg:text-lg ${
                        isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                    }`}>
                        Showcasing my best work and side projects
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 lg:mb-12"
                >
                    {filters.map((filter) => (
                        <motion.button
                            key={filter}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg text-sm sm:text-base transition-all ${
                                activeFilter === filter
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                    : isDark
                                        ? 'bg-surface text-text-secondary hover:text-text-primary'
                                        : 'bg-surface-light text-text-secondary-light hover:text-text-primary-light'
                            }`}
                        >
                            {filter}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className={`${
                                    project.featured ? 'sm:col-span-2 lg:col-span-2' : ''
                                } group relative overflow-hidden rounded-xl sm:rounded-2xl card-hover-effect border ${
                                    isDark
                                        ? 'bg-surface border-border'
                                        : 'bg-surface-light border-border-light'
                                }`}
                            >
                                {/* Featured Badge */}
                                {project.featured && (
                                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-primary text-white text-[10px] sm:text-xs font-medium">
                      Featured
                    </span>
                                    </div>
                                )}

                                {/* Project Image/Icon */}
                                <div
                                    className={`relative overflow-hidden ${
                                        project.featured ? 'h-40 sm:h-52 lg:h-64' : 'h-32 sm:h-40 lg:h-48'
                                    } bg-gradient-to-br from-primary via-tertiary to-secondary flex items-center justify-center`}
                                >
                  <span className={`${
                      project.featured ? 'text-6xl sm:text-7xl lg:text-9xl' : 'text-4xl sm:text-5xl lg:text-7xl'
                  }`}>
                    {project.image}
                  </span>

                                    {/* Overlay on Hover */}
                                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 sm:gap-4 ${
                                        isDark ? 'bg-background/90' : 'bg-background-light/90'
                                    }`}>
                                        {project.github && (
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:bg-primary transition-colors ${
                                                    isDark ? 'bg-surface' : 'bg-surface-light'
                                                }`}
                                            >
                                                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                                            </motion.a>
                                        )}
                                        {project.demo && (
                                            <motion.a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:bg-secondary transition-colors ${
                                                    isDark ? 'bg-surface' : 'bg-surface-light'
                                                }`}
                                            >
                                                <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
                                            </motion.a>
                                        )}
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-4 sm:p-5 lg:p-6">
                                    <div className="flex items-start justify-between mb-2 sm:mb-3">
                                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold line-clamp-1">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm flex-shrink-0 ml-2">
                      <span className={`flex items-center gap-1 ${
                          isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                      }`}>
                        <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span>{project.stars}</span>
                      </span>
                                            <span className={`flex items-center gap-1 ${
                                                isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                                            }`}>
                        <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span>{project.views}</span>
                      </span>
                                        </div>
                                    </div>

                                    <p className={`text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 ${
                                        isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                                    }`}>
                                        {project.description}
                                    </p>

                                    {/* Tech Stack Tags */}
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs border ${
                                                    isDark
                                                        ? 'bg-background text-text-primary border-primary/20'
                                                        : 'bg-background-light text-text-primary-light border-primary-light/20'
                                                }`}
                                            >
                        {tag}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* View All Projects CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-8 sm:mt-10 lg:mt-12"
                >
                    <motion.a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`inline-flex items-center gap-2 px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-lg text-sm sm:text-base border-2 transition-colors ${
                            isDark
                                ? 'border-primary text-primary hover:bg-primary/10'
                                : 'border-primary-light text-primary-light hover:bg-primary-light/10'
                        }`}
                    >
                        <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>View All Projects on GitHub</span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}

export default Projects;