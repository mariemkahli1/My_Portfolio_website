import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X, Languages } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { useLanguage } from '../LanguageContext';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.projects'), href: '/projects' },
    { name: t('nav.contact'), href: '/contact' },
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
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.href ? 'text-primary' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            className="flex items-center space-x-1 px-3 py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-sm font-bold uppercase"
            aria-label="Toggle Language"
          >
            <Languages size={18} className="text-primary" />
            <span>{language}</span>
          </button>

          
          <Link 
            to="/contact" 
            className="hidden md:block px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-primary/20 text-center"
          >
            {t('nav.hire')}
          </Link>

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
              <Link
                key={link.name}
                to={link.href}
                className={`text-lg font-medium py-2 border-b border-black/5 dark:border-white/5 ${
                  location.pathname === link.href ? 'text-primary' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="w-full py-3 bg-primary text-white rounded-xl font-semibold text-center"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.hire')}
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
