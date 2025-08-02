import React from 'react';
import ResumeSection from '../components/Resume';

interface ResumeProps {
  portfolioData: any;
}

const Resume: React.FC<ResumeProps> = ({ portfolioData }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20">
      <ResumeSection portfolioData={portfolioData} />
    </div>
  );
};

export default Resume;