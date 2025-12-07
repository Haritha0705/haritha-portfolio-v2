'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Terminal, Database, Cloud, Wrench, Layers } from 'lucide-react';

interface CodeSkillsProps {
    theme: 'dark' | 'light';
}

const skillsCode = {
    frontend: `// Frontend Technologies
import React from 'react';
import NextJS from 'next';
import TypeScript from 'typescript';
import TailwindCSS from 'tailwindcss';

const skills = {
  frameworks: ['React', 'Next.js', 'Vue.js'],
  languages: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  styling: ['Tailwind CSS', 'Sass', 'Styled Components'],
  tools: ['Vite', 'Webpack', 'Redux', 'React Query'],
  proficiency: '90%'
};

export default skills;`,

    backend: `// Backend & APIs
const express = require('express');
const mongoose = require('mongoose');

class BackendDeveloper {
  constructor() {
    this.languages = ['Node.js', 'Python', 'Java'];
    this.frameworks = ['Express', 'FastAPI', 'Spring Boot'];
    this.apis = ['REST', 'GraphQL', 'WebSocket'];
    this.auth = ['JWT', 'OAuth', 'Passport'];
  }

  buildAPI() {
    return 'Scalable & Secure APIs';
  }
}

module.exports = new BackendDeveloper();`,

    database: `-- Database & Storage
SELECT * FROM skills
WHERE category = 'Database'
ORDER BY proficiency DESC;

/* Technologies:
   - MongoDB (NoSQL)
   - PostgreSQL (SQL)
   - MySQL (Relational)
   - Firebase (BaaS)
   - Redis (Cache)
   - Prisma (ORM)
*/

CREATE TABLE expertise (
  id SERIAL PRIMARY KEY,
  skill VARCHAR(50),
  level INT CHECK (level >= 80)
);`,

    devops: `# DevOps & Cloud
#!/bin/bash

# Deployment Pipeline
deploy_app() {
  docker build -t app:latest .
  docker-compose up -d
  
  # Cloud Platforms
  aws_services=("EC2" "S3" "Lambda" "RDS")
  vercel_deploy="Automated"
  
  echo "✅ Deployed Successfully!"
}

# Version Control
git commit -m "feat: awesome feature"
git push origin main

# CI/CD: GitHub Actions, Jenkins`,

    tools: `{
  "developer": "Haritha Wickramasinga",
  "editor": "VS Code",
  "terminal": "iTerm2 + Oh My Zsh",
  "design": ["Figma", "Adobe XD"],
  "api_testing": ["Postman", "Insomnia"],
  "version_control": "Git & GitHub",
  "os": ["macOS", "Linux", "Windows"],
  "productivity": ["Notion", "Slack"],
  "package_managers": ["npm", "yarn", "pnpm"]
}`,
};

const tabs = [
    { id: 'frontend', label: 'Frontend', icon: Code2 },
    { id: 'backend', label: 'Backend', icon: Terminal },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'devops', label: 'DevOps', icon: Cloud },
    { id: 'tools', label: 'Tools', icon: Wrench },
];

const quickStats = [
    { label: 'Languages', value: '8+', icon: '📝' },
    { label: 'Frameworks', value: '12+', icon: '⚡' },
    { label: 'Databases', value: '5+', icon: '💾' },
    { label: 'Tools', value: '20+', icon: '🛠️' },
];

export function CodeSkills({ theme }: CodeSkillsProps) {
    const [activeTab, setActiveTab] = useState('frontend');
    const isDark = theme === 'dark';

    const codeLines = skillsCode[activeTab as keyof typeof skillsCode].split('\n');

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
                    className="text-center mb-8 sm:mb-10 lg:mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                        <span className="font-mono text-primary">{'<'}</span>
                        <span className="text-primary">Tech Stack</span>
                        <span className="font-mono text-primary">{' />'}</span>
                    </h2>
                    <p className={`text-sm sm:text-base lg:text-lg font-mono ${
                        isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                    }`}>
                        // My developer toolbox
                    </p>
                </motion.div>

                {/* Code Editor UI */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`rounded-lg sm:rounded-xl overflow-hidden border-2 shadow-2xl ${
                        isDark ? 'bg-[#1E1E1E] border-primary/30' : 'bg-white border-primary-light/30'
                    }`}
                >
                    {/* Editor Header */}
                    <div className={`flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 border-b ${
                        isDark ? 'bg-[#2D2D30] border-[#3E3E42]' : 'bg-[#F3F3F3] border-[#E5E5E5]'
                    }`}>
                        <div className="flex items-center gap-1.5 sm:gap-2">
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56]" />
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E]" />
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F]" />
                        </div>
                        <div className={`flex items-center gap-1.5 sm:gap-2 text-xs font-mono ${
                            isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                        }`}>
                            <Layers className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="hidden sm:inline">skills.{activeTab}</span>
                        </div>
                        <div className="w-12 sm:w-16" />
                    </div>

                    {/* Tabs */}
                    <div className={`flex overflow-x-auto border-b scrollbar-hide ${
                        isDark ? 'bg-[#252526] border-[#3E3E42]' : 'bg-[#F8F8F8] border-[#E5E5E5]'
                    }`}>
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-mono border-r whitespace-nowrap transition-all ${
                                    isDark ? 'border-[#3E3E42]' : 'border-[#E5E5E5]'
                                } ${
                                    activeTab === tab.id
                                        ? isDark
                                            ? 'bg-[#1E1E1E] text-text-primary'
                                            : 'bg-white text-text-primary-light'
                                        : `${isDark ? 'text-text-secondary' : 'text-text-secondary-light'} hover:text-primary`
                                }`}
                            >
                                <tab.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${
                                    activeTab === tab.id ? 'text-primary' : ''
                                }`} />
                                <span className="hidden xs:inline sm:inline">{tab.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Code Content */}
                    <div className="relative">
                        {/* Line Numbers */}
                        <div className={`absolute left-0 top-0 bottom-0 w-8 sm:w-10 lg:w-12 border-r select-none ${
                            isDark ? 'bg-[#1E1E1E] border-[#3E3E42]' : 'bg-[#F8F8F8] border-[#E5E5E5]'
                        }`}>
                            <div className={`p-2 sm:p-3 lg:p-4 text-xs font-mono ${
                                isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                            }`}>
                                {codeLines.map((_, i) => (
                                    <div key={i} className="leading-5 sm:leading-6 text-right pr-1 sm:pr-2">
                                        {i + 1}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Code */}
                        <AnimatePresence mode="wait">
                            <motion.pre
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="pl-10 sm:pl-12 lg:pl-16 pr-3 sm:pr-4 py-2 sm:py-3 lg:py-4 overflow-x-auto font-mono text-xs sm:text-sm"
                            >
                                <code className={isDark ? 'text-text-primary' : 'text-text-primary-light'}>
                                    {skillsCode[activeTab as keyof typeof skillsCode]}
                                </code>
                            </motion.pre>
                        </AnimatePresence>
                    </div>

                    {/* Status Bar */}
                    <div className={`flex items-center justify-between px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-mono ${
                        isDark ? 'bg-primary text-black' : 'bg-[#0066B8] text-white'
                    }`}>
                        <div className="flex items-center gap-2 sm:gap-4">
                            <span>✓ Ready</span>
                            <span className="hidden sm:inline">UTF-8</span>
                            <span className="hidden md:inline">JavaScript</span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-4">
                            <span className="hidden sm:inline">Ln 1, Col 1</span>
                            <span>Spaces: 2</span>
                        </div>
                    </div>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
                >
                    {quickStats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className={`p-4 sm:p-5 lg:p-6 rounded-lg sm:rounded-xl text-center border ${
                                isDark
                                    ? 'bg-surface border-border'
                                    : 'bg-surface-light border-border-light'
                            }`}
                        >
                            <div className="text-2xl sm:text-3xl mb-2">{stat.icon}</div>
                            <div className="text-primary font-mono font-bold text-xl sm:text-2xl mb-1">
                                {stat.value}
                            </div>
                            <div className={`text-xs sm:text-sm ${
                                isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                            }`}>
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default CodeSkills;