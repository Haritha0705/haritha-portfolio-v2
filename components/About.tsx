import { motion } from 'motion/react';
import { Code, Coffee, Zap, Heart } from 'lucide-react';

interface AboutProps {
  theme: 'dark' | 'light';
}

export function About({ theme }: AboutProps) {
  const funFacts = [
    {
      icon: Code,
      title: 'Early Starter',
      description: 'Started coding at age 15',
      color: 'from-primary to-tertiary',
    },
    {
      icon: Coffee,
      title: 'Coffee Lover',
      description: '∞ cups consumed daily',
      color: 'from-tertiary to-secondary',
    },
    {
      icon: Zap,
      title: 'Fast Learner',
      description: 'Mastered 10+ technologies',
      color: 'from-secondary to-primary',
    },
    {
      icon: Heart,
      title: 'Open Source',
      description: 'Contributing to community',
      color: 'from-success to-secondary',
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="gradient-text mb-4">About Me</h2>
          <p
            className={`text-lg ${
              theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'
            }`}
          >
            Get to know more about who I am and what I do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Image Placeholder */}
            <div
              className={`relative overflow-hidden rounded-2xl ${
                theme === 'dark' ? 'bg-surface' : 'bg-surface-light'
              } p-8`}
            >
              <div className="aspect-square bg-gradient-to-br from-primary via-tertiary to-secondary rounded-xl flex items-center justify-center">
                <span className="text-9xl">🎯</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Projects', value: '25+' },
                { label: 'Technologies', value: '15+' },
                { label: 'Experience', value: '2+ Yrs' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-xl text-center ${
                    theme === 'dark' ? 'bg-surface' : 'bg-surface-light'
                  }`}
                >
                  <div className="gradient-text font-bold text-2xl mb-1">
                    {stat.value}
                  </div>
                  <div
                    className={`text-sm ${
                      theme === 'dark'
                        ? 'text-text-secondary'
                        : 'text-text-secondary-light'
                    }`}
                  >
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
            <h3 className="mb-6">
              Passionate Developer & Problem Solver
            </h3>

            <div className="space-y-4 mb-6">
              <p
                className={
                  theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'
                }
              >
                I'm a 2nd-year Software Engineering student with a passion for building
                impactful digital experiences. My journey in tech started with curiosity
                and has evolved into a commitment to creating clean, efficient, and
                user-friendly applications.
              </p>

              <p
                className={
                  theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'
                }
              >
                I specialize in full-stack development, working with modern technologies
                like React, Node.js, and TypeScript. Whether it's crafting intuitive
                frontends or building robust backends, I love the challenge of turning
                complex problems into elegant solutions.
              </p>

              <p
                className={
                  theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'
                }
              >
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open source, or sharing my knowledge with the developer
                community. I believe in continuous learning and staying ahead of the
                curve in this ever-evolving field.
              </p>
            </div>

            {/* Skills Summary */}
            <div className="space-y-4">
              <h4 className="mb-4">Core Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Full Stack Development',
                  'React & Next.js',
                  'Node.js & Express',
                  'Database Design',
                  'API Development',
                  'Cloud Deployment',
                  'Agile Methodology',
                  'Problem Solving',
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`px-4 py-2 rounded-lg text-sm ${
                      theme === 'dark'
                        ? 'bg-surface text-text-primary'
                        : 'bg-surface-light text-text-primary-light'
                    } border ${
                      theme === 'dark' ? 'border-primary/20' : 'border-primary-light/20'
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Fun Facts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-center mb-8">Fun Facts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {funFacts.map((fact, index) => (
              <motion.div
                key={fact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className={`p-6 rounded-xl ${
                  theme === 'dark' ? 'bg-surface' : 'bg-surface-light'
                } border ${
                  theme === 'dark' ? 'border-border' : 'border-border-light'
                } card-hover-effect cursor-pointer`}
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${fact.color} flex items-center justify-center mb-4`}
                >
                  <fact.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="mb-2">{fact.title}</h4>
                <p
                  className={`text-sm ${
                    theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'
                  }`}
                >
                  {fact.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
