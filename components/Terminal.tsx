'use client';

import { useState, useEffect, useCallback, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TerminalLine {
    type: 'command' | 'output';
    text: string;
}

interface TerminalProps {
    lines?: TerminalLine[];
    theme?: 'dark' | 'light';
    className?: string;
    autoPlay?: boolean;
    typingSpeed?: number;
}

export function Terminal({
                             lines = [],
                             theme = 'dark',
                             className = '',
                             autoPlay = true,
                             typingSpeed = 500,
                         }: TerminalProps) {
    const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    const isDark = theme === 'dark';

    useEffect(() => {
        if (!autoPlay || currentIndex >= lines.length) return;

        setIsTyping(true);
        const timer = setTimeout(() => {
            setDisplayedLines((prev) => [...prev, lines[currentIndex]]);
            setCurrentIndex((prev) => prev + 1);
            setIsTyping(false);
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [currentIndex, lines, autoPlay, typingSpeed]);

    const resetTerminal = useCallback(() => {
        setDisplayedLines([]);
        setCurrentIndex(0);
    }, []);

    return (
        <div
            className={`rounded-lg sm:rounded-xl overflow-hidden shadow-2xl ${className} ${
                isDark
                    ? 'bg-background border-border terminal-shadow'
                    : 'bg-background-light border-border-light'
            } border`}
        >
            {/* Terminal Header */}
            <div
                className={`flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 border-b ${
                    isDark ? 'bg-surface border-border' : 'bg-surface-light border-border-light'
                }`}
            >
                <div className="flex gap-1.5 sm:gap-2">
                    <button
                        className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56] hover:brightness-110 transition-all cursor-pointer"
                        onClick={resetTerminal}
                        title="Reset"
                    />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
                    <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${
                        isDark ? 'bg-primary' : 'bg-success'
                    }`} />
                </div>
                <span className={`text-[10px] sm:text-xs font-mono ${
                    isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                }`}>
          haritha@dev:~
        </span>
                <div className="w-10 sm:w-[52px]" />
            </div>

            {/* Terminal Content */}
            <div className="p-3 sm:p-4 text-xs sm:text-sm min-h-[200px] sm:min-h-[240px] lg:min-h-[280px] overflow-y-auto font-mono">
                <AnimatePresence>
                    {displayedLines.map((line, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mb-1.5 sm:mb-2"
                        >
                            {line.type === 'command' ? (
                                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className={isDark ? 'text-primary' : 'text-primary-light'}>
                    ❯
                  </span>
                                    <span className={isDark ? 'text-text-primary' : 'text-text-primary-light'}>
                    {line.text}
                  </span>
                                </div>
                            ) : (
                                <div className={`pl-4 sm:pl-5 ${
                                    isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                                }`}>
                                    {line.text}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Typing indicator */}
                {isTyping && currentIndex < lines.length && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-1.5 sm:gap-2"
                    >
            <span className={isDark ? 'text-primary' : 'text-primary-light'}>
              ❯
            </span>
                        <motion.div
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className={`w-1.5 sm:w-2 h-3.5 sm:h-4 ${
                                isDark ? 'bg-secondary' : 'bg-primary-light'
                            }`}
                        />
                    </motion.div>
                )}

                {/* Idle cursor */}
                {!isTyping && currentIndex >= lines.length && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-1.5 sm:gap-2 mt-1.5 sm:mt-2"
                    >
            <span className={isDark ? 'text-primary' : 'text-primary-light'}>
              ❯
            </span>
                        <motion.div
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                            className={`w-1.5 sm:w-2 h-3.5 sm:h-4 ${
                                isDark ? 'bg-secondary' : 'bg-primary-light'
                            }`}
                        />
                    </motion.div>
                )}
            </div>
        </div>
    );
}

interface CodeBlockProps {
    code: string;
    language?: string;
    theme?: 'dark' | 'light';
    className?: string;
    showLineNumbers?: boolean;
}

export function CodeBlock({
                              code,
                              language = 'javascript',
                              theme = 'dark',
                              className = '',
                              showLineNumbers = false,
                          }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);
    const isDark = theme === 'dark';

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const lines = code.split('\n');

    return (
        <div
            className={`rounded-lg overflow-hidden ${className} ${
                isDark ? 'bg-background border-border' : 'bg-background-light border-border-light'
            } border`}
        >
            <div
                className={`flex items-center justify-between px-3 sm:px-4 py-1.5 sm:py-2 border-b ${
                    isDark ? 'bg-surface border-border' : 'bg-surface-light border-border-light'
                }`}
            >
                <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                        isDark ? 'bg-primary' : 'bg-primary-light'
                    }`} />
                    <span className={`text-[10px] sm:text-xs uppercase tracking-wider font-mono ${
                        isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                    }`}>
            {language}
          </span>
                </div>
                <button
                    onClick={handleCopy}
                    className={`text-[10px] sm:text-xs transition-all px-1.5 sm:px-2 py-0.5 sm:py-1 rounded cursor-pointer ${
                        isDark ? 'text-secondary' : 'text-primary-light'
                    } ${copied ? (isDark ? 'bg-secondary/10' : 'bg-primary-light/10') : ''}`}
                >
                    {copied ? '✓ Copied!' : 'Copy'}
                </button>
            </div>
            <div className="overflow-x-auto">
        <pre className="p-3 sm:p-4">
          <code className={`text-xs sm:text-sm font-mono ${
              isDark ? 'text-text-secondary' : 'text-text-secondary-light'
          }`}>
            {showLineNumbers ? (
                lines.map((line, i) => (
                    <div key={i} className="flex">
                  <span className={`select-none pr-3 sm:pr-4 text-right min-w-[1.5rem] sm:min-w-[2rem] opacity-50 ${
                      isDark ? 'text-text-secondary' : 'text-text-secondary-light'
                  }`}>
                    {i + 1}
                  </span>
                        <span>{line}</span>
                    </div>
                ))
            ) : (
                code
            )}
          </code>
        </pre>
            </div>
        </div>
    );
}

interface CommandInputProps {
    onSubmit?: (command: string) => void;
    theme?: 'dark' | 'light';
    placeholder?: string;
}

export function CommandInput({
                                 onSubmit,
                                 theme = 'dark',
                                 placeholder = 'Type a command...',
                             }: CommandInputProps) {
    const [value, setValue] = useState('');
    const isDark = theme === 'dark';

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (value.trim() && onSubmit) {
            onSubmit(value.trim());
            setValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-1.5 sm:gap-2">
      <span className={`font-mono ${isDark ? 'text-primary' : 'text-primary-light'}`}>
        ❯
      </span>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                className={`flex-1 bg-transparent outline-none text-xs sm:text-sm font-mono ${
                    isDark ? 'text-text-primary' : 'text-text-primary-light'
                }`}
            />
        </form>
    );
}

export default Terminal;