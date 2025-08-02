import React from 'react';
import ExperienceSection from '../components/Experience';

interface ExperienceProps {
  portfolioData: any;
}

const Experience: React.FC<ExperienceProps> = ({ portfolioData }) => {
  return (
    <div className="page-container pt-20">
      <ExperienceSection portfolioData={portfolioData} />
    </div>
  );
};

export default Experience;