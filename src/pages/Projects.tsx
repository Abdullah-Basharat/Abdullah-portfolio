import React from 'react';
import ProjectsSection from '../components/Projects';

interface ProjectsProps {
  portfolioData: any;
}

const Projects: React.FC<ProjectsProps> = ({ portfolioData }) => {
  return (
    <div className="page-container pt-20">
      <ProjectsSection portfolioData={portfolioData} />
    </div>
  );
};

export default Projects;