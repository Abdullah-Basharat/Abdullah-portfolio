import React from 'react';
import ResumeSection from '../components/Resume';

interface ResumeProps {
  portfolioData: any;
}

const Resume: React.FC<ResumeProps> = ({ portfolioData }) => {
  return (
    <div className="page-container">
      <ResumeSection portfolioData={portfolioData} />
    </div>
  );
};

export default Resume;