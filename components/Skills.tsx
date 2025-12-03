import { motion } from 'motion/react';
import {
  Code2,
  Server,
  Database,
  Cloud,
  Wrench,
  Palette,
} from 'lucide-react';

interface SkillsProps {
  theme: 'dark' | 'light';
}

export function Skills({ theme }: SkillsProps) {
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

  return (
    <section
      id="skills"
      className={`section-padding ${
        theme === 'dark' ? 'bg-surface/30' : 'bg-surface-light/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="gradient-text mb-4">Tech Stack</h2>
          <p
            className={`text-lg ${
              theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'
            }`}
          >
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              whileHover={{ y: -8 }}
              className={`p-6 rounded-2xl ${
                theme === 'dark' ? 'bg-surface' : 'bg-surface-light'
              } border ${
                theme === 'dark' ? 'border-border' : 'border-border-light'
              } card-hover-effect`}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3>{category.category}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-sm ${
                          theme === 'dark'
                            ? 'text-text-primary'
                            : 'text-text-primary-light'
                        }`}
                      >
                        {skill.name}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`text-xs ${
                            theme === 'dark'
                              ? 'text-text-secondary'
                              : 'text-text-secondary-light'
                          }`}
                        >
                          {skill.years}
                        </span>
                        <span className="text-xs text-primary font-medium">
                          {skill.level}%
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div
                      className={`h-2 rounded-full overflow-hidden ${
                        theme === 'dark' ? 'bg-background' : 'bg-background-light'
                      }`}
                    >
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
          className="mt-12 text-center"
        >
          <h4 className="mb-6">Also Familiar With</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
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
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className={`px-4 py-2 rounded-full text-sm ${
                  theme === 'dark'
                    ? 'bg-surface text-text-primary border-primary/20'
                    : 'bg-surface-light text-text-primary-light border-primary-light/20'
                } border cursor-pointer`}
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
