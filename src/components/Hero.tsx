import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  portfolioData: any;
}

const Hero: React.FC<HeroProps> = ({ portfolioData }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const roles = portfolioData.personal.roles;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    if (isTyping) {
      if (displayText.length < roles[currentRole].length) {
        timeout = setTimeout(() => {
          setDisplayText(roles[currentRole].slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole, roles]);


  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-[#0a0a0a]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #8b5cf6 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#f9fafb] mb-6 animate-slide-up leading-[1.1]">
            {portfolioData.personal.name}
          </h1>

          {/* Dynamic Role */}
          <div className="text-2xl md:text-3xl lg:text-4xl text-[#e5e7eb] mb-8 h-14 flex flex-col sm:flex-row items-center justify-center animate-slide-up-delay-1">
            <span className="mr-0 sm:mr-3 mb-2 sm:mb-0">I'm a</span>
            <span className="text-[#8b5cf6] font-semibold min-w-[200px] sm:min-w-[300px] text-center sm:text-left">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-[#e5e7eb] max-w-3xl mx-auto mb-12 leading-[1.7] animate-slide-up-delay-2">
            {portfolioData.personal.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up-delay-3">
            <Link
              to="/projects"
              className="bg-[#8b5cf6] text-white px-6 py-3 rounded-lg hover:bg-[#7c3aed] transition-all duration-150 ease-in-out hover:shadow-lg transform hover:scale-[1.02] flex items-center justify-center gap-2 group font-medium text-base leading-[1.2]"
            >
              <span className="group-hover:text-white">View My Work</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            {/* <Link
              to="/contact"
              className="border border-[#8b5cf6] text-[#8b5cf6] px-6 py-3 rounded-lg hover:bg-[#8b5cf6] hover:text-white transition-all duration-150 ease-in-out transform hover:scale-[1.02] group font-medium text-base leading-[1.2]"
            >
              <span className="group-hover:text-white">Get In Touch</span>
            </Link> */}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-slide-up-delay-4">
            <a
              href={portfolioData.personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#1f2937] rounded-full flex items-center justify-center text-[#9ca3af] hover:text-[#8b5cf6] hover:shadow-lg transition-all duration-300 hover:scale-110 border border-[#374151]"
            >
              <Github size={24} />
            </a>
            <a
              href={portfolioData.personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#1f2937] rounded-full flex items-center justify-center text-[#9ca3af] hover:text-[#8b5cf6] hover:shadow-lg transition-all duration-300 hover:scale-110 border border-[#374151]"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="w-12 h-12 bg-[#1f2937] rounded-full flex items-center justify-center text-[#9ca3af] hover:text-[#8b5cf6] hover:shadow-lg transition-all duration-300 hover:scale-110 border border-[#374151]"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          {/* <Link
            to="/about"
            className="animate-bounce text-slate-400 hover:text-slate-600 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;