import React from 'react';
import AboutSection from '../components/About';

interface AboutProps {
  portfolioData: any;
}

const About: React.FC<AboutProps> = ({ portfolioData }) => {
  return (
    <div className="page-container pt-20">
      <AboutSection portfolioData={portfolioData} />
    </div>
  );
};

export default About;