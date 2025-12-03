import { motion } from 'motion/react';
import { useState } from 'react';

interface GitHubActivityProps {
  theme: 'dark' | 'light';
}

export function GitHubActivity({ theme }: GitHubActivityProps) {
  // Generate mock contribution data (365 days)
  const generateContributions = () => {
    const contributions = [];
    for (let i = 0; i < 365; i++) {
      contributions.push({
        date: new Date(Date.now() - (364 - i) * 24 * 60 * 60 * 1000),
        count: Math.floor(Math.random() * 15),
      });
    }
    return contributions;
  };

  const contributions = generateContributions();
  const [hoveredDay, setHoveredDay] = useState<{ date: Date; count: number } | null>(null);

  const getColor = (count: number) => {
    if (count === 0) return theme === 'dark' ? '#161B22' : '#EBEDF0';
    if (count <= 3) return '#0E4429';
    if (count <= 6) return '#006D32';
    if (count <= 9) return '#26A641';
    return '#39D353';
  };

  const weeks = [];
  let currentWeek: typeof contributions = [];
  
  contributions.forEach((day, index) => {
    currentWeek.push(day);
    if (day.date.getDay() === 6 || index === contributions.length - 1) {
      weeks.push([...currentWeek]);
      currentWeek = [];
    }
  });

  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0);
  const currentStreak = contributions.slice(-30).filter(d => d.count > 0).length;

  return (
    <section className={`section-padding ${
      theme === 'dark' ? 'bg-surface/30' : 'bg-surface-light/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">
            <span className="gradient-text">GitHub Activity</span>
          </h2>
          <p className={`text-lg font-mono ${
            theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'
          }`}>
            // My contribution graph
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`p-8 rounded-xl ${
            theme === 'dark' ? 'bg-surface' : 'bg-surface-light'
          } border ${
            theme === 'dark' ? 'border-border' : 'border-border-light'
          }`}
        >
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Total Contributions', value: totalContributions, icon: '📊' },
              { label: 'Current Streak', value: `${currentStreak} days`, icon: '🔥' },
              { label: 'Longest Streak', value: '45 days', icon: '⚡' },
              { label: 'This Month', value: '127', icon: '📈' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-lg ${
                  theme === 'dark' ? 'bg-background' : 'bg-background-light'
                } text-center`}
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="gradient-text font-mono font-bold text-xl mb-1">
                  {stat.value}
                </div>
                <div className={`text-xs ${
                  theme === 'dark' ? 'text-text-secondary' : 'text-text-secondary-light'
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contribution Graph */}
          <div className="overflow-x-auto pb-4">
            <div className="inline-block min-w-full">
              <div className="flex items-start space-x-1">
                {/* Day labels */}
                <div className="flex flex-col justify-around h-full text-xs text-text-secondary mr-2 font-mono">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>

                {/* Contribution grid */}
                <div className="flex space-x-1">
                  {weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col space-y-1">
                      {week.map((day, dayIndex) => (
                        <motion.div
                          key={dayIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: weekIndex * 0.01 + dayIndex * 0.005 }}
                          whileHover={{ scale: 1.3 }}
                          onHoverStart={() => setHoveredDay(day)}
                          onHoverEnd={() => setHoveredDay(null)}
                          className="w-3 h-3 rounded-sm cursor-pointer transition-all"
                          style={{ backgroundColor: getColor(day.count) }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tooltip */}
              {hoveredDay && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-3 rounded-lg ${
                    theme === 'dark' ? 'bg-background' : 'bg-background-light'
                  } border ${
                    theme === 'dark' ? 'border-primary/30' : 'border-primary-light/30'
                  } text-sm font-mono`}
                >
                  <span className="text-primary">{hoveredDay.count} contributions</span>
                  <span className="text-text-secondary ml-2">
                    on {hoveredDay.date.toLocaleDateString()}
                  </span>
                </motion.div>
              )}

              {/* Legend */}
              <div className="flex items-center justify-end space-x-2 mt-4 text-xs text-text-secondary font-mono">
                <span>Less</span>
                {[0, 3, 6, 9, 12].map((count) => (
                  <div
                    key={count}
                    className="w-3 h-3 rounded-sm"
                    style={{ backgroundColor: getColor(count) }}
                  />
                ))}
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="mt-8">
            <h4 className="mb-4 font-mono">Most Used Languages</h4>
            <div className="space-y-3">
              {[
                { name: 'TypeScript', percentage: 35, color: '#3178C6' },
                { name: 'JavaScript', percentage: 28, color: '#F7DF1E' },
                { name: 'Python', percentage: 18, color: '#3776AB' },
                { name: 'CSS', percentage: 12, color: '#1572B6' },
                { name: 'Other', percentage: 7, color: '#6366F1' },
              ].map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                      <span className="font-mono">{lang.name}</span>
                    </div>
                    <span className="text-primary font-mono">{lang.percentage}%</span>
                  </div>
                  <div className={`h-2 rounded-full overflow-hidden ${
                    theme === 'dark' ? 'bg-background' : 'bg-background-light'
                  }`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
