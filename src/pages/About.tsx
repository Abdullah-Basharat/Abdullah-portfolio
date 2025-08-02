import React from 'react';
import AboutSection from '../components/About';

interface AboutProps {
  portfolioData: any;
}

const About: React.FC<AboutProps> = ({ portfolioData }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20">
      <AboutSection portfolioData={portfolioData} />
    </div>
  );
};

export default About;