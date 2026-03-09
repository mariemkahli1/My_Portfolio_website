import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
       { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-full px-8 py-3 border border-white/20 shadow-lg">
        <div className="text-2xl font-bold font-display tracking-tighter">
          Mariem<span className="text-primary">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <a 
  href="/contact" 
  className="hidden md:block px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-primary/20 text-center"
>
  Hire Me
</a>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-24 left-6 right-6 bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-black/5 dark:border-white/10"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium py-2 border-b border-black/5 dark:border-white/5"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full py-3 bg-primary text-white rounded-xl font-semibold">
              Hire Me
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
