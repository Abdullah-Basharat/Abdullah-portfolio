import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  portfolioData: any;
}

const Footer: React.FC<FooterProps> = ({ portfolioData }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-navy-900 text-white py-12 relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-navy-600 hover:bg-navy-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
      >
        <ArrowUp size={20} />
      </button>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{portfolioData.personal.name}</h3>
            <p className="text-blue-200 mb-4 leading-relaxed">
              AI/ML Engineer passionate about creating intelligent solutions that make a difference.
            </p>
            <div className="flex space-x-4">
              <a
                href={portfolioData.personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-navy-800 hover:bg-navy-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href={portfolioData.personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-navy-800 hover:bg-navy-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="w-10 h-10 bg-navy-800 hover:bg-navy-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-blue-200 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-blue-200">
              <p>{portfolioData.personal.email}</p>
              <p>{portfolioData.personal.phone}</p>
              <p>{portfolioData.personal.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-navy-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-blue-200 mb-4 md:mb-0">
              <span>© 2025 {portfolioData.personal.name}. Made with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span>and React</span>
            </div>
            <div className="text-blue-200 text-sm">
              Designed & Developed by Abdullah Basharat
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;