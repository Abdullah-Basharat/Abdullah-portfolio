import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

interface FooterProps {
  portfolioData: any;
}

const Footer: React.FC<FooterProps> = ({ portfolioData }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] text-[#f9fafb] py-8 relative border-t border-[#374151]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center space-y-6">
          {/* Centered Footer Content */}
          <div className="text-center">
            <h2 className="text-xl font-bold text-[#f9fafb] mb-2">
              {portfolioData.personal.name}
            </h2>
            <div className="text-[#9ca3af] text-sm mb-2">
              🇵🇰 Based in Pakistan
            </div>
            <div className="text-[#9ca3af] text-sm mb-4">
              © 2024 {portfolioData.personal.name.split(' ')[0]}. All rights are reserved.
            </div>
            
            <div className="text-[#9ca3af] text-sm mb-2">
              Website Designed in Figma. Built with React, TypeScript
            </div>
            <div className="text-[#9ca3af] text-sm mb-4">
              and Tailwind CSS.
            </div>
            
            {/* Social Icons */}
            <div className="flex justify-center space-x-4">
              <a
                href={portfolioData.personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9ca3af] hover:text-[#8b5cf6] transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href={portfolioData.personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9ca3af] hover:text-[#8b5cf6] transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="text-[#9ca3af] hover:text-[#8b5cf6] transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
              <a
                href={`https://wa.me/${portfolioData.personal.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9ca3af] hover:text-[#8b5cf6] transition-colors duration-200"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button - Right Side */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 w-12 h-12 bg-[#1f2937] hover:bg-[#8b5cf6] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg border border-[#374151] hover:border-[#8b5cf6] z-50 cursor-pointer"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="text-[#9ca3af] hover:text-white transition-colors duration-200" />
      </button>
    </footer>
  );
};

export default Footer;