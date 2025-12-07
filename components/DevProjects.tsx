// 'use client';
//
// import { useState } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import { ExternalLink, Github, Terminal, Folder, FileCode, Star, GitFork, X } from 'lucide-react';
//
// interface DevProjectsProps {
//     theme: 'dark' | 'light';
// }
//
// const filters = [
//     { id: 'all', label: '// All Projects' },
//     { id: 'featured', label: '// Featured' },
//     { id: 'web', label: '// Web Apps' },
//     { id: 'api', label: '// APIs' },
// ];
//
// const projects = [
//     {
//         id: 1,
//         title: 'DevConnect Platform',
//         description: 'Real-time collaboration platform for developers with code sharing, video calls, and project management.',
//         category: ['featured', 'web'],
//         tech: ['Next.js', 'Socket.io', 'PostgreSQL', 'Redis'],
//         stars: 234,
//         forks: 45,
//         language: 'TypeScript',
//         languageColor: '#3178C6',
//         github: 'https://github.com',
//         demo: 'https://demo.com',
//         lines: '15.2K',
//         commits: '234',
//     },
//     {
//         id: 2,
//         title: 'AI Code Reviewer',
//         description: 'ML-powered code review assistant that provides intelligent suggestions and detects potential bugs.',
//         category: ['featured', 'api'],
//         tech: ['Python', 'FastAPI', 'TensorFlow', 'Docker'],
//         stars: 567,
//         forks: 89,
//         language: 'Python',
//         languageColor: '#3776AB',
//         github: 'https://github.com',
//         demo: null,
//         lines: '8.7K',
//         commits: '156',
//     },
//     {
//         id: 3,
//         title: 'TaskFlow API',
//         description: 'RESTful API for task management with advanced filtering, real-time updates, and team collaboration.',
//         category: ['api'],
//         tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
//         stars: 189,
//         forks: 34,
//         language: 'JavaScript',
//         languageColor: '#F7DF1E',
//         github: 'https://github.com',
//         demo: 'https://demo.com',
//         lines: '6.3K',
//         commits: '98',
//     },
//     {
//         id: 4,
//         title: 'Design System Kit',
//         description: 'Comprehensive React component library with 50+ customizable components and theming support.',
//         category: ['web'],
//         tech: ['React', 'TypeScript', 'Storybook', 'Tailwind'],
//         stars: 423,
//         forks: 67,
//         language: 'TypeScript',
//         languageColor: '#3178C6',
//         github: 'https://github.com',
//         demo: 'https://demo.com',
//         lines: '12.1K',
//         commits: '189',
//     },
//     {
//         id: 5,
//         title: 'WeatherPulse',
//         description: 'Beautiful weather dashboard with interactive maps, forecasts, and location-based alerts.',
//         category: ['web'],
//         tech: ['React', 'Leaflet', 'OpenWeather API', 'Chart.js'],
//         stars: 145,
//         forks: 28,
//         language: 'JavaScript',
//         languageColor: '#F7DF1E',
//         github: 'https://github.com',
//         demo: 'https://demo.com',
//         lines: '4.5K',
//         commits: '67',
//     },
//     {
//         id: 6,
//         title: 'DevMetrics Analytics',
//         description: 'Developer productivity analytics platform with GitHub integration and insights dashboard.',
//         category: ['featured', 'web'],
//         tech: ['Next.js', 'D3.js', 'Supabase', 'GitHub API'],
//         stars: 312,
//         forks: 52,
//         language: 'TypeScript',
//         languageColor: '#3178C6',
//         github: 'https://github.com',
//         demo: 'https://demo.com',
//         lines: '9.8K',
//         commits: '145',
//     },
// ];
//
// export function DevProjects({ theme }: DevProjectsProps) {
//     const [activeFilter, setActiveFilter] = useState('all');
//     const [hoveredProject, setHoveredProject] = useState<number | null>(null);
//     const [selectedProject, setSelectedProject] = useState<number | null>(null);
//
//     const isDark = theme === 'dark';
//     const filteredProjects = activeFilter === 'all' ? projects : projects.filter(p => p.category.includes(activeFilter));
//     const selected = projects.find(p => p.id === selectedProject);
//
//     return (
//         <section id="projects" className="section-padding">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 {/* Header */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6 }}
//                     className="text-center mb-8 sm:mb-10 lg:mb-12"
//                 >
//                     <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 ${isDark ? 'gradient-text' : 'gradient-textLight'}`}>
//                         <span className="font-mono">{'<'}</span>
//                         <span>Featured Projects</span>
//                         <span className="font-mono">{' />'}</span>
//                     </h2>
//                     <p className={`text-sm sm:text-base lg:text-lg font-mono ${isDark ? 'text-text-secondary' : 'text-text-secondary-light'}`}>
//                         // Building cool stuff, one commit at a time
//                     </p>
//                 </motion.div>
//
//                 {/* Filter */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                     className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 lg:mb-12"
//                 >
//                     {filters.map(filter => (
//                         <motion.button
//                             key={filter.id}
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             onClick={() => setActiveFilter(filter.id)}
//                             className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg font-mono text-xs sm:text-sm transition-all border ${
//                                 activeFilter === filter.id
//                                     ? isDark
//                                         ? 'bg-primary text-black shadow-lg shadow-primary/30 border-primary'
//                                         : 'bg-primary-light text-white shadow-lg shadow-primary-light/30 border-primary-light'
//                                     : isDark
//                                         ? 'bg-surface text-text-secondary hover:text-text-primary border-border'
//                                         : 'bg-surface-light text-text-secondary-light hover:text-text-primary-light border-border-light'
//                             }`}
//                         >
//                             <span className="hidden sm:inline">{filter.label}</span>
//                             <span className="sm:hidden">{filter.label.replace('// ', '')}</span>
//                         </motion.button>
//                     ))}
//                 </motion.div>
//
//                 {/* Project Grid */}
//                 <AnimatePresence mode="wait">
//                     <motion.div
//                         key={activeFilter}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -20 }}
//                         transition={{ duration: 0.4 }}
//                         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
//                     >
//                         {filteredProjects.map((project, index) => (
//                             <motion.div
//                                 key={project.id}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: index * 0.1 }}
//                                 onHoverStart={() => setHoveredProject(project.id)}
//                                 onHoverEnd={() => setHoveredProject(null)}
//                                 onClick={() => setSelectedProject(project.id)}
//                                 className={`group relative cursor-pointer overflow-hidden rounded-lg sm:rounded-xl border-2 transition-all duration-300 ${
//                                     hoveredProject === project.id
//                                         ? isDark ? 'border-primary' : 'border-primary-light'
//                                         : isDark ? 'border-border' : 'border-border-light'
//                                 } ${isDark ? 'bg-surface' : 'bg-surface-light'}`}
//                             >
//                                 {/* Card Header */}
//                                 <div className={`p-3 sm:p-4 border-b flex items-center justify-between ${isDark ? 'border-border' : 'border-border-light'}`}>
//                                     <div className="flex items-center gap-2">
//                                         <Folder className={`w-4 h-4 sm:w-5 sm:h-5 ${isDark ? 'text-primary' : 'text-primary-light'}`} />
//                                         <span className={`font-mono text-xs sm:text-sm ${isDark ? 'text-text-secondary' : 'text-text-secondary-light'}`}>
//                       {project.language}
//                     </span>
//                                     </div>
//                                     <div className="flex items-center gap-1 sm:gap-2">
//                                         {project.demo && (
//                                             <motion.a
//                                                 href={project.demo}
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 whileHover={{ scale: 1.1 }}
//                                                 whileTap={{ scale: 0.9 }}
//                                                 className={`p-1.5 sm:p-2  ${isDark ? 'hover:bg-primary/10' : 'hover:bg-primary-light/10'} rounded transition-colors`}
//                                                 onClick={(e) => e.stopPropagation()}
//                                             >
//                                                 <ExternalLink className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isDark ? 'text-primary' : 'text-primary-light'}`} />
//                                             </motion.a>
//                                         )}
//                                         <motion.a
//                                             href={project.github}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             whileHover={{ scale: 1.1 }}
//                                             whileTap={{ scale: 0.9 }}
//                                             className={`p-1.5 sm:p-2  ${isDark ? 'hover:bg-primary/10' : 'hover:bg-primary-light/10'} rounded transition-colors`}
//                                             onClick={(e) => e.stopPropagation()}
//                                         >
//                                             <Github className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isDark ? 'text-primary' : 'text-primary-light'}`} />
//                                         </motion.a>
//                                     </div>
//                                 </div>
//
//                                 {/* Card Content */}
//                                 <div className="p-4 sm:p-5 lg:p-6">
//                                     <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 flex items-center gap-2">
//                                         <FileCode className={`w-4 h-4 sm:w-5 sm:h-5 ${isDark ? 'text-primary' : 'text-primary-light'} flex-shrink-0`} />
//                                         <span className="line-clamp-1">{project.title}</span>
//                                     </h3>
//                                     <p className={`text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 ${isDark ? 'text-text-secondary' : 'text-text-secondary-light'}`}>
//                                         {project.description}
//                                     </p>
//
//                                     {/* Tech Stack */}
//                                     <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
//                                         {project.tech.slice(0, 3).map((tech) => (
//                                             <span
//                                                 key={tech}
//                                                 className={`px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-mono ${isDark ? 'bg-background text-primary' : 'bg-background-light text-primary-light'}`}
//                                             >
//                         {tech}
//                       </span>
//                                         ))}
//                                         {project.tech.length > 3 && (
//                                             <span className={`px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-mono ${isDark ? 'text-text-secondary' : 'text-text-secondary-light'}`}>
//                         +{project.tech.length - 3}
//                       </span>
//                                         )}
//                                     </div>
//
//                                     {/* Stats */}
//                                     <div className={`flex items-center justify-between text-xs sm:text-sm font-mono pt-3 sm:pt-4 border-t ${isDark ? 'border-border' : 'border-border-light'}`}>
//                                         <div className="flex items-center gap-2 sm:gap-3">
//                       <span className="flex items-center gap-1">
//                         <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full" style={{ backgroundColor: project.languageColor }} />
//                         <span className={`text-[10px] sm:text-xs ${isDark ? 'text-text-secondary' : 'text-text-secondary-light'}`}>{project.language}</span>
//                       </span>
//                                             <span className={`flex items-center gap-1 ${isDark ? 'text-text-secondary' : 'text-text-secondary-light'}`}>
//                         <Star className="w-3 h-3" /> {project.stars}
//                       </span>
//                                             <span className={`flex items-center gap-1 ${isDark ? 'text-text-secondary' : 'text-text-secondary-light'}`}>
//                         <GitFork className="w-3 h-3" /> {project.forks}
//                       </span>
//                                         </div>
//                                     </div>
//                                 </div>
//
//                                 {/* Terminal Footer */}
//                                 <div className={`px-3 sm:px-4 py-1.5 sm:py-2 font-mono text-[10px] sm:text-xs border-t ${isDark ? 'bg-background border-border' : 'bg-background-light border-border-light'}`}>
//                                     <div className={`flex items-center gap-2 sm:gap-4 ${isDark ? 'text-text-secondary' : 'text-text-secondary-light'}`}>
//                                         <span>Lines: {project.lines}</span>
//                                         <span className="hidden sm:inline">•</span>
//                                         <span className="hidden sm:inline">Commits: {project.commits}</span>
//                                         <Terminal className="w-3 h-3 ml-auto" />
//                                     </div>
//                                 </div>
//
//                                 {/* Hover Overlay */}
//                                 <motion.div
//                                     initial={{ opacity: 0 }}
//                                     animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
//                                     className={`absolute inset-0 pointer-events-none ${isDark ? 'bg-primary/5' : 'bg-primary-light/5'}`}
//                                 />
//                             </motion.div>
//                         ))}
//                     </motion.div>
//                 </AnimatePresence>
//
//                 {/* Modal */}
//                 <AnimatePresence>
//                     {selected && (
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
//                             onClick={() => setSelectedProject(null)}
//                         >
//                             <motion.div
//                                 initial={{ scale: 0.8 }}
//                                 animate={{ scale: 1 }}
//                                 exit={{ scale: 0.8 }}
//                                 transition={{ type: 'spring', stiffness: 300 }}
//                                 className={`bg-surface-light dark:bg-surface p-6 sm:p-8 rounded-xl max-w-lg w-full relative`}
//                                 onClick={(e) => e.stopPropagation()}
//                             >
//                                 <button
//                                     className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
//                                     onClick={() => setSelectedProject(null)}
//                                 >
//                                     <X className="w-5 h-5" />
//                                 </button>
//                                 <h3 className="text-xl font-bold mb-3">{selected.title}</h3>
//                                 <p className="text-sm mb-4">{selected.description}</p>
//
//                                 <div className="mb-4">
//                                     <h4 className="font-mono text-xs mb-1">Tech Stack:</h4>
//                                     <div className="flex flex-wrap gap-2">
//                                         {selected.tech.map((tech) => (
//                                             <span key={tech} className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-mono">{tech}</span>
//                                         ))}
//                                     </div>
//                                 </div>
//
//                                 <div className="flex gap-4">
//                                     {selected.demo && (
//                                         <a href={selected.demo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded bg-primary text-black hover:bg-primary/80 transition">Demo</a>
//                                     )}
//                                     <a href={selected.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-600 text-black dark:text-white hover:bg-gray-400 dark:hover:bg-gray-500 transition">GitHub</a>
//                                 </div>
//                             </motion.div>
//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//             </div>
//         </section>
//     );
// }
//
// export default DevProjects;

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Terminal, Folder, FileCode, Star, GitFork, X } from 'lucide-react';

interface DevProjectsProps {
    theme: 'dark' | 'light';
}

const filters = [
    { id: 'all', label: '// All Projects' },
    { id: 'featured', label: '// Featured' },
    { id: 'web', label: '// Web Apps' },
    { id: 'api', label: '// APIs' },
];

const projects = [
    {
        id: 1,
        title: 'DevConnect Platform',
        description: 'Real-time collaboration platform for developers with code sharing, video calls, and project management.',
        category: ['featured', 'web'],
        tech: ['Next.js', 'Socket.io', 'PostgreSQL', 'Redis'],
        stars: 234,
        forks: 45,
        language: 'TypeScript',
        languageColor: '#3178C6',
        github: 'https://github.com/devconnect/platform',
        githubRepo: 'devconnect/platform',
        demo: 'https://devconnect.demo.com',
        lines: '15.2K',
        commits: '234',
    },
    {
        id: 2,
        title: 'AI Code Reviewer',
        description: 'ML-powered code review assistant that provides intelligent suggestions and detects potential bugs.',
        category: ['featured', 'api'],
        tech: ['Python', 'FastAPI', 'TensorFlow', 'Docker'],
        stars: 567,
        forks: 89,
        language: 'Python',
        languageColor: '#3776AB',
        github: 'https://github.com/ai/reviewer',
        githubRepo: 'ai/reviewer',
        demo: null,
        lines: '8.7K',
        commits: '156',
    },
    {
        id: 3,
        title: 'TaskFlow API',
        description: 'RESTful API for task management with advanced filtering, real-time updates, and team collaboration.',
        category: ['api'],
        tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
        stars: 189,
        forks: 34,
        language: 'JavaScript',
        languageColor: '#F7DF1E',
        github: 'https://github.com/taskflow/api',
        githubRepo: 'taskflow/api',
        demo: 'https://taskflow.demo.com',
        lines: '6.3K',
        commits: '98',
    },
    {
        id: 4,
        title: 'Design System Kit',
        description: 'Comprehensive React component library with 50+ customizable components and theming support.',
        category: ['web'],
        tech: ['React', 'TypeScript', 'Storybook', 'Tailwind'],
        stars: 423,
        forks: 67,
        language: 'TypeScript',
        languageColor: '#3178C6',
        github: 'https://github.com/design/system-kit',
        githubRepo: 'design/system-kit',
        demo: 'https://designkit.demo.com',
        lines: '12.1K',
        commits: '189',
    },
    {
        id: 5,
        title: 'WeatherPulse',
        description: 'Beautiful weather dashboard with interactive maps, forecasts, and location-based alerts.',
        category: ['web'],
        tech: ['React', 'Leaflet', 'OpenWeather API', 'Chart.js'],
        stars: 145,
        forks: 28,
        language: 'JavaScript',
        languageColor: '#F7DF1E',
        github: 'https://github.com/weather/pulse',
        githubRepo: 'weather/pulse',
        demo: 'https://weatherpulse.demo.com',
        lines: '4.5K',
        commits: '67',
    },
    {
        id: 6,
        title: 'DevMetrics Analytics',
        description: 'Developer productivity analytics platform with GitHub integration and insights dashboard.',
        category: ['featured', 'web'],
        tech: ['Next.js', 'D3.js', 'Supabase', 'GitHub API'],
        stars: 312,
        forks: 52,
        language: 'TypeScript',
        languageColor: '#3178C6',
        github: 'https://github.com/devmetrics/analytics',
        githubRepo: 'devmetrics/analytics',
        demo: 'https://devmetrics.demo.com',
        lines: '9.8K',
        commits: '145',
    },
];

export function DevProjects({ theme }: DevProjectsProps) {
    const [activeFilter, setActiveFilter] = useState('all');
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    const isDark = theme === 'dark';
    const filteredProjects = activeFilter === 'all' ? projects : projects.filter(p => p.category.includes(activeFilter));
    const selected = projects.find(p => p.id === selectedProject);

    const bgCard = isDark ? 'bg-surface' : 'bg-surface-light';
    const borderCard = isDark ? 'border-border' : 'border-border-light';
    const hoverOverlay = isDark ? 'bg-primary/10' : 'bg-primary-light/10';
    const textPrimary = isDark ? 'text-text-primary' : 'text-text-primary-light';
    const textSecondary = isDark ? 'text-text-secondary' : 'text-text-secondary-light';

    return (
        <section id="projects" className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-10 lg:mb-12"
                >
                    <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 ${isDark ? 'gradient-text' : 'gradient-textLight'}`}>
                        <span className="font-mono">{'<'}</span>
                        <span>Featured Projects</span>
                        <span className="font-mono">{' />'}</span>
                    </h2>
                    <p className={`text-sm sm:text-base lg:text-lg font-mono ${textSecondary}`}>
                        // Building cool stuff, one commit at a time
                    </p>
                </motion.div>

                {/* Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 lg:mb-12"
                >
                    {filters.map(filter => (
                        <motion.button
                            key={filter.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg font-mono text-xs sm:text-sm transition-all border ${
                                activeFilter === filter.id
                                    ? isDark
                                        ? 'bg-primary text-black shadow-lg shadow-primary/30 border-primary'
                                        : 'bg-primary-light text-white shadow-lg shadow-primary-light/30 border-primary-light'
                                    : `${bgCard} ${textSecondary} border border-transparent hover:border-primary`
                            }`}
                        >
                            <span className="hidden sm:inline">{filter.label}</span>
                            <span className="sm:hidden">{filter.label.replace('// ', '')}</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Project Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onHoverStart={() => setHoveredProject(project.id)}
                                onHoverEnd={() => setHoveredProject(null)}
                                onClick={() => setSelectedProject(project.id)}
                                style={{
                                    borderColor: hoveredProject === project.id
                                        ? `var(${isDark ? '--color-primary' : '--color-primary-light'})`
                                        : `var(${isDark ? '--color-border' : '--color-border-light'})`,
                                    backgroundColor: `var(${isDark ? '--color-surface' : '--color-surface-light'})`
                                }}
                                className="group relative cursor-pointer overflow-hidden rounded-lg sm:rounded-xl border-2 transition-all duration-300"
                            >
                                {/* Card Header */}
                                <div className={`p-3 sm:p-4 border-b flex items-center justify-between ${borderCard}`}>
                                    <div className="flex items-center gap-2">
                                        <Folder className={`w-4 h-4 sm:w-5 sm:h-5 ${textPrimary}`} />
                                        <span className={`font-mono text-xs sm:text-sm ${textSecondary}`}>{project.language}</span>
                                    </div>
                                    <div className="flex items-center gap-1 sm:gap-2">
                                        {project.demo && (
                                            <motion.a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={`p-1.5 sm:p-2 rounded transition-colors ${hoverOverlay}`}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <ExternalLink className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${textPrimary}`} />
                                            </motion.a>
                                        )}
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={`p-1.5 sm:p-2 rounded transition-colors ${hoverOverlay}`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Github className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${textPrimary}`} />
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-4 sm:p-5 lg:p-6">
                                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 flex items-center gap-2">
                                        <FileCode className={`w-4 h-4 sm:w-5 sm:h-5 ${textPrimary} flex-shrink-0`} />
                                        <span className="line-clamp-1">{project.title}</span>
                                    </h3>
                                    <p className={`text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 ${textSecondary}`}>
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                        {project.tech.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className={`px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-mono ${bgCard} ${textPrimary}`}
                                            >
                        {tech}
                      </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className={`px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-mono ${textSecondary}`}>
                        +{project.tech.length - 3}
                      </span>
                                        )}
                                    </div>

                                    {/* Stats */}
                                    <div className={`flex items-center justify-between text-xs sm:text-sm font-mono pt-3 sm:pt-4 border-t ${borderCard}`}>
                                        <div className="flex items-center gap-2 sm:gap-3">
                      <span className="flex items-center gap-1">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full" style={{ backgroundColor: project.languageColor }} />
                        <span className={`text-[10px] sm:text-xs ${textSecondary}`}>{project.language}</span>
                      </span>
                                            <span className={`flex items-center gap-1 ${textSecondary}`}>
                        <Star className="w-3 h-3" /> {project.stars}
                      </span>
                                            <span className={`flex items-center gap-1 ${textSecondary}`}>
                        <GitFork className="w-3 h-3" /> {project.forks}
                      </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Terminal Footer */}
                                <div className={`px-3 sm:px-4 py-1.5 sm:py-2 font-mono text-[10px] sm:text-xs border-t ${bgCard} ${borderCard}`}>
                                    <div className={`flex items-center gap-2 sm:gap-4 ${textSecondary}`}>
                                        <span>Lines: {project.lines}</span>
                                        <span className="hidden sm:inline">•</span>
                                        <span className="hidden sm:inline">Commits: {project.commits}</span>
                                        <Terminal className="w-3 h-3 ml-auto" />
                                    </div>
                                </div>

                                {/* Hover Overlay */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                                    className={`absolute inset-0 pointer-events-none ${hoverOverlay}`}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Modal */}
                <AnimatePresence>
                    {selected && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                            onClick={() => setSelectedProject(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className={`p-6 sm:p-8 rounded-xl max-w-lg w-full ${isDark ? 'bg-surface text-white' : 'bg-white text-black'}`}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                                    onClick={() => setSelectedProject(null)}
                                >
                                    <X className="w-5 h-5" />
                                </button>
                                <h3 className="text-xl font-bold mb-3">{selected.title}</h3>
                                <p className="text-sm mb-4">{selected.description}</p>

                                <div className="mb-4">
                                    <h4 className="font-mono text-xs mb-1">Tech Stack:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selected.tech.map((tech) => (
                                            <span key={tech} className={`px-2 py-1 rounded text-xs font-mono ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-4 flex flex-col gap-2 text-sm">
                                    <p><strong>GitHub Repo:</strong> {selected.githubRepo}</p>
                                    <p className="flex items-center gap-2"><Star className="w-4 h-4"/> Stars: {selected.stars}</p>
                                    <p className="flex items-center gap-2"><GitFork className="w-4 h-4"/> Forks: {selected.forks}</p>
                                    <p className="flex items-center gap-2"><Terminal className="w-4 h-4"/> Lines: {selected.lines}, Commits: {selected.commits}</p>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full" style={{backgroundColor: selected.languageColor}} />
                                        <span>Language: {selected.language}</span>
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-3">
                                    {selected.demo && (
                                        <a href={selected.demo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded bg-primary text-black hover:bg-primary/80 transition">Demo</a>
                                    )}
                                    <a href={selected.github} target="_blank" rel="noopener noreferrer" className={`px-4 py-2 rounded ${isDark ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-black hover:bg-gray-300'} transition`}>GitHub</a>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

export default DevProjects;
