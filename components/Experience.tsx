import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

interface ExperienceProps {
  theme: 'dark' | 'light';
}

export function Experience({ theme }: ExperienceProps) {
  const timeline = [
    {
      type: 'experience',
      icon: Briefcase,
      title: 'Full Stack Developer Intern',
      company: 'Tech Solutions Inc.',
      period: 'Jun 2024 - Present',
      current: true,
      description:
        'Developing and maintaining web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality products.',
      achievements: [
        'Reduced API response time by 40% through optimization',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Led development of customer dashboard serving 10K+ users',
      ],
      color: 'from-primary to-tertiary',
    },
    {
      type: 'experience',
      icon: Briefcase,
      title: 'Frontend Developer',
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
      color: 'from-secondary to-primary',
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
        'Dean\'s List: 2023, 2024',
        'President of Computer Science Society',
      ],
      color: 'from-tertiary to-secondary',
    },
    {
      type: 'achievement',
      icon: Award,
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
      color: 'from-success to-secondary',
    },
  ];

  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      link: '#',
    },
    {
      name: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      date: '2023',
      link: '#',
    },
    {
      name: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: '2023',
      link: '#',
    },
  ];

  return (
    <section
      id="experience"
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
          <h2 className="gradient-text mb-4">Experience & Education</h2>
          <p
            className={`text-lg ${
              theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'
            }`}
          >
            My journey and milestones
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 ${
              theme === 'dark' ? 'bg-border' : 'bg-border-light'
            } hidden lg:block`}
          />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:gap-8`}
              >
                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`flex-1 ${
                    index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                  } text-left`}
                >
                  <div
                    className={`p-6 rounded-2xl ${
                      theme === 'dark' ? 'bg-surface' : 'bg-surface-light'
                    } border ${
                      theme === 'dark' ? 'border-border' : 'border-border-light'
                    } card-hover-effect`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="mb-0">{item.title}</h3>
                          {item.current && (
                            <span className="px-3 py-1 rounded-full bg-success/10 text-success text-xs border border-success/20">
                              Current
                            </span>
                          )}
                        </div>
                        <h4 className="text-primary mb-1">{item.company}</h4>
                        <p
                          className={`text-sm ${
                            theme === 'dark'
                              ? 'text-text-secondary'
                              : 'text-text-secondary-light'
                          }`}
                        >
                          {item.period}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className={`mb-4 ${
                        theme === 'dark'
                          ? 'text-text-secondary'
                          : 'text-text-secondary-light'
                      }`}
                    >
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className={`flex items-start space-x-2 text-sm ${
                            theme === 'dark'
                              ? 'text-text-secondary'
                              : 'text-text-secondary-light'
                          }`}
                        >
                          <span className="text-primary mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Icon */}
                <div className="relative flex items-center justify-center my-4 lg:my-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center z-10 border-4 ${
                      theme === 'dark' ? 'border-background' : 'border-background-light'
                    }`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-center mb-8">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-2xl ${
                  theme === 'dark' ? 'bg-surface' : 'bg-surface-light'
                } border ${
                  theme === 'dark' ? 'border-border' : 'border-border-light'
                } card-hover-effect cursor-pointer`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="mb-2">{cert.name}</h4>
                <p
                  className={`text-sm mb-1 ${
                    theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'
                  }`}
                >
                  {cert.issuer}
                </p>
                <p className="text-xs text-primary">{cert.date}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
