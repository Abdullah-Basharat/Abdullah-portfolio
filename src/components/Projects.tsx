import React, { useState } from 'react';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, Eye, Brain, Code, Database, Cpu, Globe, FileText, Shield, Zap, Target, Rocket } from 'lucide-react';

interface ProjectsProps {
  portfolioData: any;
}

const Projects: React.FC<ProjectsProps> = ({ portfolioData }) => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI/ML', 'Computer Vision', 'NLP'];
  
  const filteredProjects = filter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter((project: any) => project.category === filter);

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
      case 'mobile':
      case 'app':
        return <FileText className="w-12 h-12" />;
      case 'security':
      case 'cybersecurity':
        return <Shield className="w-12 h-12" />;
      case 'automation':
      case 'scripting':
        return <Zap className="w-12 h-12" />;
      case 'research':
      case 'analysis':
        return <Target className="w-12 h-12" />;
      case 'innovation':
      case 'experimental':
        return <Rocket className="w-12 h-12" />;
      default:
        return <Eye className="w-12 h-12" />;
    }
  };

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="clamp(2rem, 4vw, 3rem) font-bold text-[#f9fafb] mb-6 leading-[1.2]">
            Featured Projects
          </h2>
          <p className="text-lg text-[#e5e7eb] max-w-3xl mx-auto leading-[1.7]">
            Explore my latest work in AI/ML, showcasing innovative solutions and cutting-edge technologies
          </p>


        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project: any, index: number) => (
            <div
              key={project.id}
              className="flex flex-col border border-[#374151] rounded-xl p-8 backdrop-blur-3xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group hover:-translate-y-1"
              style={{
                backgroundImage: `radial-gradient(146.13% 118.42% at 50% -15.5%, hsla(0, 0%, 100%, .04) 0, hsla(0, 0%, 100%, 0) 99.59%), linear-gradient(180deg, rgba(46, 51, 90, 0), rgba(28, 27, 51, .04))`
              }}
            >
              {/* Project Header with Icon and Title */}
              <div className="flex pb-4 items-start">
                <div className="text-4xl font-bold text-[#8b5cf6] mr-6">
                  {getProjectIcon(project.category)}
                </div>
                <h3 className="text-2xl font-bold text-[#f9fafb] text-left">
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

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-900">{selectedProject.title}</h3>
                <button
                  onClick={closeProjectModal}
                  className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <X size={20} />
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
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">About This Project</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors duration-200"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border-2 border-slate-700 text-slate-700 px-6 py-3 rounded-lg hover:bg-slate-700 hover:text-white transition-all duration-200 group"
                    >
                      <ExternalLink size={20} className="group-hover:text-white" />
                      <span className="group-hover:text-white">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;