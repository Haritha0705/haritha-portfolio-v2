import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Star, Eye } from 'lucide-react';

interface ProjectsProps {
  theme: 'dark' | 'light';
}

export function Projects({ theme }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState('All');

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

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
          <h2 className="gradient-text mb-4">Featured Projects</h2>
          <p
            className={`text-lg ${
              theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'
            }`}
          >
            Showcasing my best work and side projects
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
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg transition-all ${
                activeFilter === filter
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : theme === 'dark'
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`${
                  project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                } group relative overflow-hidden rounded-2xl ${
                  theme === 'dark' ? 'bg-surface' : 'bg-surface-light'
                } border ${
                  theme === 'dark' ? 'border-border' : 'border-border-light'
                } card-hover-effect`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-medium">
                      Featured
                    </span>
                  </div>
                )}

                {/* Project Image/Icon */}
                <div
                  className={`relative overflow-hidden ${
                    project.featured ? 'h-64' : 'h-48'
                  } bg-gradient-to-br from-primary via-tertiary to-secondary flex items-center justify-center`}
                >
                  <span className={project.featured ? 'text-9xl' : 'text-7xl'}>
                    {project.image}
                  </span>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-full bg-surface flex items-center justify-center hover:bg-primary transition-colors"
                      >
                        <Github className="w-6 h-6" />
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-full bg-surface flex items-center justify-center hover:bg-secondary transition-colors"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="mb-0">{project.title}</h3>
                    <div className="flex items-center space-x-3 text-sm">
                      <span
                        className={`flex items-center space-x-1 ${
                          theme === 'dark'
                            ? 'text-text-secondary'
                            : 'text-text-secondary-light'
                        }`}
                      >
                        <Star className="w-4 h-4" />
                        <span>{project.stars}</span>
                      </span>
                      <span
                        className={`flex items-center space-x-1 ${
                          theme === 'dark'
                            ? 'text-text-secondary'
                            : 'text-text-secondary-light'
                        }`}
                      >
                        <Eye className="w-4 h-4" />
                        <span>{project.views}</span>
                      </span>
                    </div>
                  </div>

                  <p
                    className={`mb-4 ${
                      theme === 'dark'
                        ? 'text-text-secondary'
                        : 'text-text-secondary-light'
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs ${
                          theme === 'dark'
                            ? 'bg-background text-text-primary'
                            : 'bg-background-light text-text-primary-light'
                        } border ${
                          theme === 'dark' ? 'border-primary/20' : 'border-primary-light/20'
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
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center space-x-2 px-8 py-4 rounded-lg border-2 transition-colors ${
              theme === 'dark'
                ? 'border-primary text-primary hover:bg-primary/10'
                : 'border-primary-light text-primary-light hover:bg-primary-light/10'
            }`}
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
