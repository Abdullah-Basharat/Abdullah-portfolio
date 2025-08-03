import React from 'react';
import { PortfolioData } from '../types/portfolio';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';
import CardHeader from './ui/CardHeader';
import Grid from './ui/Grid';
import { getProjectIcon } from '../utils/icons';

interface FeaturedProjectsProps {
  portfolioData: PortfolioData;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ portfolioData }) => {
  return (
    <Section>
      <SectionHeader 
        title="Featured Projects"
        subtitle="Showcase of my most impactful and innovative projects"
      />

      <div className="max-w-6xl mx-auto">
        <Grid cols="2">
          {portfolioData.projects.slice(0, 6).map((project) => (
            <Card key={project.id}>
              <CardHeader 
                icon={getProjectIcon(project.category)}
                title={project.title}
              />

              <p className="text-[#e5e7eb] pb-4">
                {project.description}
              </p>

              <ul className="list-disc space-y-2 pl-6">
                {project.technologies.slice(0, 4).map((tech: string) => (
                  <li key={tech} className="font-medium text-[#e5e7eb]">
                    {tech}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </Grid>
      </div>
    </Section>
  );
};

export default FeaturedProjects; 