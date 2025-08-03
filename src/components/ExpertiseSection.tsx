import React from 'react';
import { Brain, Code, Database } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';
import CardHeader from './ui/CardHeader';
import Grid from './ui/Grid';
import { getCategoryDescription } from '../utils/data';

interface ExpertiseSectionProps {
  portfolioData: PortfolioData;
}

const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ portfolioData }) => {
  const expertiseAreas = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI/ML Engineering",
      description: "Specialized in Large Language Models, RAG systems, and deep learning applications",
      skills: portfolioData.resume.skills.aiml.slice(0, 4)
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Software Development",
      description: "Full-stack development with modern technologies and best practices",
      skills: portfolioData.resume.skills.programming.slice(0, 4)
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Data Engineering",
      description: "Building scalable data pipelines and infrastructure solutions",
      skills: portfolioData.resume.skills.dataEngineering.slice(0, 4)
    }
  ];

  return (
    <Section>
      <SectionHeader 
        title="Core Competencies"
        subtitle="Specialized expertise across multiple domains with proven track record"
      />

      <div className="max-w-6xl mx-auto">
        <Grid cols="2">
          {expertiseAreas.map((area, index) => (
            <Card key={area.title}>
              <CardHeader 
                icon={area.icon}
                title={area.title}
              />

              <p className="text-[#e5e7eb] pb-4">
                {area.description}
              </p>

              <ul className="list-disc space-y-2 pl-6">
                {area.skills.map((skill: string) => (
                  <li key={skill} className="font-medium text-[#e5e7eb]">
                    {skill}
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

export default ExpertiseSection; 