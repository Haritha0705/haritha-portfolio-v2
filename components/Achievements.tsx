import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Code, GitCommit, Layers, Coffee, Users, Trophy } from 'lucide-react';

interface AchievementsProps {
  theme: 'dark' | 'light';
}

export function Achievements({ theme }: AchievementsProps) {
  const stats = [
    {
      icon: Code,
      label: 'Projects Completed',
      value: 25,
      suffix: '+',
      color: 'from-primary to-tertiary',
    },
    {
      icon: GitCommit,
      label: 'GitHub Commits',
      value: 1500,
      suffix: '+',
      color: 'from-secondary to-primary',
    },
    {
      icon: Layers,
      label: 'Technologies',
      value: 15,
      suffix: '+',
      color: 'from-tertiary to-secondary',
    },
    {
      icon: Coffee,
      label: 'Coffee Consumed',
      value: 999,
      suffix: '∞',
      color: 'from-success to-secondary',
    },
    {
      icon: Users,
      label: 'Happy Clients',
      value: 20,
      suffix: '+',
      color: 'from-primary to-success',
    },
    {
      icon: Trophy,
      label: 'Awards Won',
      value: 5,
      suffix: '',
      color: 'from-secondary to-tertiary',
    },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="gradient-text mb-4">Achievements & Stats</h2>
          <p
            className={`text-lg ${
              theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'
            }`}
          >
            Numbers that tell my story
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  stat: {
    icon: any;
    label: string;
    value: number;
    suffix: string;
    color: string;
  };
  index: number;
  theme: 'dark' | 'light';
}

function StatCard({ stat, index, theme }: StatCardProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [hasAnimated, stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onViewportEnter={() => setHasAnimated(true)}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`relative p-8 rounded-2xl ${
        theme === 'dark' ? 'bg-surface' : 'bg-surface-light'
      } border ${
        theme === 'dark' ? 'border-border' : 'border-border-light'
      } overflow-hidden card-hover-effect`}
    >
      {/* Background Gradient */}
      <div
        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 blur-3xl`}
      />

      {/* Icon */}
      <motion.div
        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 relative z-10`}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <stat.icon className="w-8 h-8 text-white" />
      </motion.div>

      {/* Counter */}
      <div className="relative z-10">
        <motion.div className="gradient-text font-bold text-4xl mb-2">
          {count.toLocaleString()}
          {stat.suffix}
        </motion.div>
        <p
          className={`text-sm ${
            theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'
          }`}
        >
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
}
