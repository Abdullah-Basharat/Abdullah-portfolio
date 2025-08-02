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
    let timeout: NodeJS.Timeout;
    
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
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-navy-50 to-slate-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1e3a8a 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Avatar */}
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-navy-600 to-blue-600 flex items-center justify-center text-white text-3xl font-bold shadow-xl">
              {portfolioData.personal.name.split(' ').map((n: string) => n[0]).join('')}
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-navy-900 mb-6 animate-slide-up">
            {portfolioData.personal.name}
          </h1>

          {/* Dynamic Role */}
          <div className="text-2xl md:text-3xl text-slate-600 mb-8 h-12 flex items-center justify-center animate-slide-up-delay-1">
            <span className="mr-3">I'm a</span>
            <span className="text-navy-600 font-semibold min-w-[300px] text-left">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up-delay-2">
            {portfolioData.personal.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up-delay-3">
            <Link
              to="/projects"
              className="bg-navy-600 text-white px-8 py-4 rounded-lg hover:bg-navy-700 transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 group"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-navy-600 text-navy-600 px-8 py-4 rounded-lg hover:bg-navy-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-slide-up-delay-4">
            <a
              href={portfolioData.personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-navy-600 hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href={portfolioData.personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-navy-600 hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-navy-600 hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <Link
            to="/about"
            className="animate-bounce text-slate-400 hover:text-navy-600 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;