import React from 'react';
import { ExternalLink, Github, ArrowRight, Brain, Code, Database, Eye, Cpu, Globe } from 'lucide-react';

interface FeaturedProjectsProps {
  portfolioData: any;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ portfolioData }) => {
  const featuredProjects = portfolioData.projects.filter((project: any) => project.featured).slice(0, 3);

  const getProjectIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai/ml':
      case 'machine learning':
      case 'computer vision':
        return <Brain className="w-12 h-12" />;
      case 'web development':
      case 'frontend':
      case 'backend':
        return <Code className="w-12 h-12" />;
      case 'data engineering':
      case 'database':
        return <Database className="w-12 h-12" />;
      case 'nlp':
      case 'natural language processing':
        return <Cpu className="w-12 h-12" />;
      case 'full-stack':
      case 'application':
        return <Globe className="w-12 h-12" />;
      default:
        return <Eye className="w-12 h-12" />;
    }
  };

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="clamp(2rem, 4vw, 3rem) font-bold text-[#f9fafb] mb-6 leading-[1.2]">
            Selected Work
          </h2>
          <p className="text-lg text-[#e5e7eb] max-w-3xl mx-auto leading-[1.7]">
            Explore some of my recent projects that showcase my expertise and creativity.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project: any, index: number) => (
            <div
              key={project.id}
              className="flex flex-col border border-[#374151] rounded-xl p-8 backdrop-blur-3xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group hover:-translate-y-1"
              style={{
                backgroundImage: `radial-gradient(146.13% 118.42% at 50% -15.5%, hsla(0, 0%, 100%, .04) 0, hsla(0, 0%, 100%, 0) 99.59%), linear-gradient(180deg, rgba(46, 51, 90, 0), rgba(28, 27, 51, .04))`
              }}
            >
              {/* Project Header with Icon and Title */}
              <div className="flex pb-4 items-center">
                <div className="text-4xl font-bold text-[#8b5cf6] mr-6">
                  {getProjectIcon(project.category)}
                </div>
                <h3 className="text-2xl font-bold text-[#f9fafb]">
                  {project.title}
                </h3>
              </div>

              {/* Project Description */}
              <p className="text-gray-600 dark:text-gray-400 pb-4">
                {project.description}
              </p>

              {/* Technologies as List */}
              <ul className="list-disc space-y-2 pl-6">
                {project.technologies.slice(0, 4).map((tech: string) => (
                  <li key={tech} className="font-medium text-[#e5e7eb]">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
        </div>
      </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 bg-[#8b5cf6] text-white px-6 py-3 rounded-lg hover:bg-[#7c3aed] transition-all duration-150 ease-in-out hover:shadow-lg group text-[1.125rem] font-medium transform hover:scale-[1.02] leading-[1.2]"
          >
            <span className="group-hover:text-white">Explore All Projects</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects; 