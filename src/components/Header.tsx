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
          ? 'bg-[#0a0a0a]/90 backdrop-blur-sm shadow-lg border-b border-[#374151]' 
          : 'bg-[#0a0a0a]'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-[1.25rem] font-bold text-[#f9fafb] hover:text-[#8b5cf6] transition-colors duration-200">
            {portfolioData.personal.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`transition-colors duration-200 font-medium text-[0.875rem] relative ${
                  isActiveRoute(item.href)
                    ? 'text-[#8b5cf6]'
                    : 'text-[#e5e7eb] hover:text-[#f9fafb]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
                {isActiveRoute(item.href) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8b5cf6] rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#e5e7eb] hover:text-[#f9fafb] transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#111827] shadow-lg border-t border-[#374151]">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block w-full text-left transition-colors duration-200 font-medium py-2 text-[0.875rem] ${
                    isActiveRoute(item.href)
                      ? 'text-[#8b5cf6]'
                      : 'text-[#e5e7eb] hover:text-[#f9fafb]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              

            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;