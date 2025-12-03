import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Terminal, FileCode, User, Briefcase, Mail, X } from 'lucide-react';

interface CommandPaletteProps {
  theme: 'dark' | 'light';
}

export function CommandPalette({ theme }: CommandPaletteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commands = [
    { icon: User, label: 'Go to About', action: () => scrollTo('about'), keywords: 'about me profile' },
    { icon: Terminal, label: 'View Skills', action: () => scrollTo('skills'), keywords: 'skills tech stack technologies' },
    { icon: FileCode, label: 'Browse Projects', action: () => scrollTo('projects'), keywords: 'projects portfolio work' },
    { icon: Briefcase, label: 'View Experience', action: () => scrollTo('experience'), keywords: 'experience timeline work' },
    { icon: Mail, label: 'Contact Me', action: () => scrollTo('contact'), keywords: 'contact email message' },
  ];

  const filteredCommands = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(search.toLowerCase()) ||
    cmd.keywords.toLowerCase().includes(search.toLowerCase())
  );

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setSearch('');
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
      if (isOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
        }
        if (e.key === 'Enter') {
          e.preventDefault();
          filteredCommands[selectedIndex]?.action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
            />

            {/* Command Palette */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="fixed top-1/4 left-1/2 transform -translate-x-1/2 w-full max-w-2xl z-[101] px-4"
            >
              <div className={`rounded-xl border-2 ${
                theme === 'dark' ? 'bg-surface border-primary/30' : 'bg-surface-light border-primary-light/30'
              } shadow-2xl overflow-hidden`}>
                {/* Search Input */}
                <div className="flex items-center px-4 py-3 border-b border-border">
                  <Search className="w-5 h-5 text-primary mr-3" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Type a command or search..."
                    className="flex-1 bg-transparent outline-none text-text-primary"
                    autoFocus
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="ml-2 p-1 hover:bg-primary/10 rounded"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Commands List */}
                <div className="max-h-96 overflow-y-auto">
                  {filteredCommands.length === 0 ? (
                    <div className="px-4 py-8 text-center text-text-secondary">
                      No commands found
                    </div>
                  ) : (
                    filteredCommands.map((cmd, index) => (
                      <button
                        key={cmd.label}
                        onClick={cmd.action}
                        className={`w-full flex items-center px-4 py-3 transition-colors ${
                          index === selectedIndex
                            ? 'bg-primary/20 border-l-2 border-primary'
                            : 'hover:bg-primary/10'
                        }`}
                      >
                        <cmd.icon className="w-5 h-5 text-primary mr-3" />
                        <span>{cmd.label}</span>
                      </button>
                    ))
                  )}
                </div>

                {/* Footer */}
                <div className={`px-4 py-2 border-t ${
                  theme === 'dark' ? 'border-border bg-background/50' : 'border-border-light bg-background-light/50'
                } text-xs text-text-secondary flex items-center justify-between`}>
                  <span>Press ↑↓ to navigate</span>
                  <span>↵ to select</span>
                  <span>ESC to close</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hint Badge */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        className={`fixed bottom-8 left-8 px-4 py-2 rounded-lg ${
          theme === 'dark' ? 'bg-surface' : 'bg-surface-light'
        } border border-primary/30 text-sm flex items-center space-x-2 z-40 hidden md:flex`}
      >
        <Terminal className="w-4 h-4 text-primary" />
        <span className="text-text-secondary">Press</span>
        <kbd className="px-2 py-1 bg-primary/20 rounded text-xs">⌘K</kbd>
      </motion.button>
    </>
  );
}
