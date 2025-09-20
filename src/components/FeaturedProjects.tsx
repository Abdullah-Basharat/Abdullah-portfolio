import React, { useState } from 'react';
import { PortfolioData } from '../types/portfolio';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';
import CardHeader from './ui/CardHeader';
import Grid from './ui/Grid';
import { getProjectIcon } from '../utils/icons';
import { ExternalLink, Github, X, Eye } from 'lucide-react';

interface FeaturedProjectsProps {
  portfolioData: PortfolioData;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ portfolioData }) => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <Section>
      <SectionHeader 
        title="Featured Projects"
        subtitle="Showcase of my most impactful and innovative projects"
      />

      <div className="max-w-6xl mx-auto">
        <Grid cols="2">
          {portfolioData.projects.slice(0, 6).map((project) => (
            <Card key={project.id} onClick={() => openProjectModal(project)} className="cursor-pointer flex flex-col md:h-full">
              <CardHeader 
                icon={getProjectIcon(project.category)}
                title={project.title}
              />

              <p className="text-[#9ca3af] pb-4 md:flex-grow">
                {project.description}
              </p>

              <ul className="list-disc space-y-2 pl-6 mb-4">
                {project.technologies.slice(0, 4).map((tech: string) => (
                  <li key={tech} className="font-medium text-[#e5e7eb]">
                    {tech}
                  </li>
                ))}
              </ul>

              {/* View Project Indicator */}
              <div className="md:mt-auto pt-4 border-t border-[#374151]">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#8b5cf6] font-medium">Click to view details</span>
                  <Eye className="w-4 h-4 text-[#8b5cf6]" />
                </div>
              </div>
            </Card>
          ))}
        </Grid>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div 
            className="bg-[#0a0a0a] border border-[#374151] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-3xl"
            style={{
              backgroundImage: `radial-gradient(146.13% 118.42% at 50% -15.5%, hsla(0, 0%, 100%, .04) 0, hsla(0, 0%, 100%, 0) 99.59%), linear-gradient(180deg, rgba(46, 51, 90, 0), rgba(28, 27, 51, .04))`
            }}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#0a0a0a] border-b border-[#374151] p-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-[#f9fafb]">{selectedProject.title}</h3>
              <button
                onClick={closeProjectModal}
                className="w-10 h-10 bg-[#374151] hover:bg-[#4b5563] rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <X size={20} className="text-[#f9fafb]" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Project Image */}
              <div className="mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-[#f9fafb] mb-3">About This Project</h4>
                <p className="text-[#9ca3af] leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-[#f9fafb] mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-3 py-2 bg-[#374151] text-[#e5e7eb] rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#8b5cf6] text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:bg-[#7c3aed] transition-colors duration-200 text-sm sm:text-base"
                    >
                      <Github size={18} className="sm:w-5 sm:h-5" />
                      View Code
                    </a>
                    {selectedProject.demo ? (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 border-2 border-[#8b5cf6] text-[#8b5cf6] px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:bg-[#8b5cf6] hover:text-white transition-all duration-200 group text-sm sm:text-base"
                      >
                        <ExternalLink size={18} className="group-hover:text-white sm:w-5 sm:h-5" />
                        <span className="group-hover:text-white">Live Demo</span>
                      </a>
                    ) : (
                      <button
                        className="flex items-center justify-center gap-2 border-2 border-[#6b7280] text-[#6b7280] px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg cursor-not-allowed opacity-50 text-sm sm:text-base"
                        disabled
                      >
                        <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                        Demo Coming Soon
                      </button>
                    )}
                  </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default FeaturedProjects; 