import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

interface HeaderProps {
  portfolioData: any;
}

const Header: React.FC<HeaderProps> = ({ portfolioData }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Experience', href: '/experience' },
    { label: 'Projects', href: '/projects' },
    { label: 'Resume', href: '/resume' },
    { label: 'Contact', href: '/contact' }
  ];

  const isActiveRoute = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname === href) return true;
    return false;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-navy-900 hover:text-navy-700 transition-colors duration-200">
            {portfolioData.personal.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`transition-colors duration-200 font-medium relative ${
                  isActiveRoute(item.href)
                    ? 'text-navy-600'
                    : 'text-slate-600 hover:text-navy-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
                {isActiveRoute(item.href) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-navy-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={portfolioData.personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-navy-600 transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href={portfolioData.personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-navy-600 transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="text-slate-600 hover:text-navy-600 transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-700 hover:text-navy-600 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block w-full text-left transition-colors duration-200 font-medium py-2 ${
                    isActiveRoute(item.href)
                      ? 'text-navy-600'
                      : 'text-slate-600 hover:text-navy-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 pt-4 border-t">
                <a
                  href={portfolioData.personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-navy-600 transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href={portfolioData.personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-navy-600 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="text-slate-600 hover:text-navy-600 transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;