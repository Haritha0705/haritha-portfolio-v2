import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Terminal, Folder, FileCode, Star, GitFork } from 'lucide-react';

interface DevProjectsProps {
  theme: 'dark' | 'light';
}

export function DevProjects({ theme }: DevProjectsProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
      github: 'https://github.com',
      demo: 'https://demo.com',
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
      github: 'https://github.com',
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
      github: 'https://github.com',
      demo: 'https://demo.com',
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
      github: 'https://github.com',
      demo: 'https://demo.com',
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
      github: 'https://github.com',
      demo: 'https://demo.com',
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
      github: 'https://github.com',
      demo: 'https://demo.com',
      lines: '9.8K',
      commits: '145',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category.includes(activeFilter));

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">
            <span className="text-primary font-mono">{'<'}</span>
            <span className="gradient-text">Featured Projects</span>
            <span className="text-primary font-mono">{' />'}</span>
          </h2>
          <p className={`text-lg font-mono ${
            theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'
          }`}>
            // Building cool stuff, one commit at a time
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-mono text-sm transition-all ${
                activeFilter === filter.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : theme === 'dark'
                  ? 'bg-surface text-text-secondary hover:text-text-primary border border-border'
                  : 'bg-surface-light text-text-secondary-light hover:text-text-primary-light border border-border-light'
              }`}
            >
              {filter.label}
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className={`group relative overflow-hidden rounded-xl ${
                  theme === 'dark' ? 'bg-surface' : 'bg-surface-light'
                } border-2 ${
                  hoveredProject === project.id 
                    ? 'border-primary' 
                    : theme === 'dark' ? 'border-border' : 'border-border-light'
                } transition-all duration-300`}
              >
                {/* Header */}
                <div className={`p-4 border-b ${
                  theme === 'dark' ? 'border-border' : 'border-border-light'
                } flex items-center justify-between`}>
                  <div className="flex items-center space-x-2">
                    <Folder className="w-5 h-5 text-primary" />
                    <span className="font-mono text-sm text-text-secondary">
                      {project.language}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 hover:bg-primary/10 rounded transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </motion.a>
                    )}
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 hover:bg-primary/10 rounded transition-colors"
                    >
                      <Github className="w-4 h-4 text-primary" />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-3 flex items-center space-x-2">
                    <FileCode className="w-5 h-5 text-primary" />
                    <span>{project.title}</span>
                  </h3>

                  <p className={`text-sm mb-4 ${
                    theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'
                  }`}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 rounded text-xs font-mono ${
                          theme === 'dark'
                            ? 'bg-background text-primary'
                            : 'bg-background-light text-primary-light'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className={`flex items-center justify-between text-sm font-mono pt-4 border-t ${
                    theme === 'dark' ? 'border-border' : 'border-border-light'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center space-x-1">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: project.languageColor }}
                        />
                        <span className="text-text-secondary text-xs">{project.language}</span>
                      </span>
                      <span className="flex items-center space-x-1 text-text-secondary">
                        <Star className="w-3 h-3" />
                        <span className="text-xs">{project.stars}</span>
                      </span>
                      <span className="flex items-center space-x-1 text-text-secondary">
                        <GitFork className="w-3 h-3" />
                        <span className="text-xs">{project.forks}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Terminal Footer */}
                <div className={`px-4 py-2 font-mono text-xs ${
                  theme === 'dark' ? 'bg-background' : 'bg-background-light'
                } border-t ${
                  theme === 'dark' ? 'border-border' : 'border-border-light'
                }`}>
                  <div className="flex items-center space-x-4 text-text-secondary">
                    <span>Lines: {project.lines}</span>
                    <span>•</span>
                    <span>Commits: {project.commits}</span>
                    <span>•</span>
                    <Terminal className="w-3 h-3" />
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  className="absolute inset-0 bg-primary/5 pointer-events-none"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center space-x-2 px-8 py-4 rounded-lg font-mono border-2 transition-colors ${
              theme === 'dark'
                ? 'border-primary text-primary hover:bg-primary/10'
                : 'border-primary-light text-primary-light hover:bg-primary-light/10'
            }`}
          >
            <Github className="w-5 h-5" />
            <span>{'> View All on GitHub'}</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
