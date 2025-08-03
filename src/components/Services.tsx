import React from 'react';
import { PortfolioData } from '../types/portfolio';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';
import CardHeader from './ui/CardHeader';
import Grid from './ui/Grid';
import { getServiceIcon } from '../utils/icons';
import { getTechnologyTags } from '../utils/data';

interface ServicesProps {
  portfolioData: PortfolioData;
}

const Services: React.FC<ServicesProps> = ({ portfolioData }) => {
  return (
    <Section>
      <SectionHeader 
        title="My Services"
        subtitle="Comprehensive AI/ML solutions tailored to your business needs"
      />

      <div className="max-w-6xl mx-auto">
        <Grid cols="2">
          {portfolioData.services.map((service, index) => (
            <Card key={index}>
              <CardHeader 
                icon={getServiceIcon(service.icon)}
                title={service.title}
              />

              <p className="text-[#9ca3af] pb-4">
                {service.description}
              </p>

              <ul className="list-disc space-y-2 pl-6">
                {getTechnologyTags(service.title).map((tag: string, tagIndex: number) => (
                  <li key={tagIndex} className="font-medium text-[#e5e7eb]">
                    {tag}
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

export default Services; 