import React from 'react';
import { Play, Smile, BarChart3, Clock, Shield, GraduationCap, Award, Code, Brain, Database, Wrench } from 'lucide-react';

interface AboutProps {
  portfolioData: any;
}

const About: React.FC<AboutProps> = ({ portfolioData }) => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code className="w-6 h-6" />,
      skills: portfolioData.skills.programming,
    },
    {
      title: 'AI/ML',
      icon: <Brain className="w-6 h-6" />,
      skills: portfolioData.skills.aiml,
    },
    {
      title: 'Data Engineering',
      icon: <Database className="w-6 h-6" />,
      skills: portfolioData.skills.dataEngineering,
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench className="w-6 h-6" />,
      skills: portfolioData.skills.tools,
    }
  ];

  const personalInfo = [
    { label: 'Name', value: portfolioData.about.personalInfo.name },
    { label: 'Website', value: portfolioData.about.personalInfo.website },
    { label: 'Phone', value: portfolioData.about.personalInfo.phone },
    { label: 'City', value: portfolioData.about.personalInfo.city },
    { label: 'Age', value: portfolioData.about.personalInfo.age },
    { label: 'Degree', value: portfolioData.about.personalInfo.degree },
    { label: 'Email', value: portfolioData.about.personalInfo.email },
    { label: 'Freelance', value: portfolioData.about.personalInfo.freelance }
  ];

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'smile':
        return <Smile className="w-8 h-8 text-navy-600" />;
      case 'bar-chart':
        return <BarChart3 className="w-8 h-8 text-navy-600" />;
      case 'clock':
        return <Clock className="w-8 h-8 text-navy-600" />;
      case 'shield':
        return <Shield className="w-8 h-8 text-navy-600" />;
      default:
        return <Smile className="w-8 h-8 text-navy-600" />;
    }
  };

  const getCategoryDescription = (categoryTitle: string) => {
    switch (categoryTitle) {
      case 'Programming':
        return 'Full-stack development with modern technologies and best practices using various programming languages and frameworks.';
      case 'AI/ML':
        return 'Specialized in Large Language Models, RAG systems, and deep learning applications with cutting-edge AI technologies.';
      case 'Data Engineering':
        return 'Building scalable data pipelines and infrastructure solutions with cloud platforms and database technologies.';
      case 'Tools & Technologies':
        return 'Comprehensive toolkit for development, deployment, and collaboration using industry-standard tools and platforms.';
      default:
        return 'Expertise in various technologies and frameworks for building robust and scalable solutions.';
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 to-navy-50">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-navy-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I'm a Professional AI/ML Engineer with an experience of 1+ years.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Personal Information and Metrics Section */}
          <div className="mb-16">
            {/* Personal Information - Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
              {/* Left Column */}
              <div className="space-y-4">
                {personalInfo.slice(0, 4).map((info, index) => (
                  <div key={index} className="flex items-center">
                    <Play className="w-4 h-4 text-navy-600 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-slate-700">{info.label}: </span>
                      <span className="text-slate-600">{info.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {personalInfo.slice(4, 8).map((info, index) => (
                  <div key={index} className="flex items-center">
                    <Play className="w-4 h-4 text-navy-600 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-slate-700">{info.label}: </span>
                      <span className="text-slate-600">{info.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Metrics - 2x2 Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {portfolioData.about.metrics.map((metric: any, index: number) => (
                <div key={index} className="text-center p-6 bg-slate-50 rounded-lg border border-slate-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex justify-center mb-3">
                    {getIconComponent(metric.icon)}
                  </div>
                  <div className="text-3xl font-bold text-navy-900 mb-2">{metric.number}</div>
                  <div className="text-sm font-semibold text-slate-700 mb-2">{metric.title}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Proficiency Section */}
          <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">Skills Proficiency</h3>
            <div className="space-y-6">
              {portfolioData.about.skills.map((skill: any, index: number) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-slate-700">{skill.name}</span>
                    <span className="text-sm text-slate-600">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div 
                      className="bg-black h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <div
                  key={category.title}
                  className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Icon */}
                  <div className="text-slate-700 mb-4 group-hover:text-slate-900 transition-colors duration-200">
                    {category.icon}
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    {category.title}
                  </h4>

                  {/* Description */}
                  <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                    {getCategoryDescription(category.title)}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill: string, skillIndex: number) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-white text-slate-700 text-xs rounded-md border border-slate-200 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates and Awards */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">Certificates and Awards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {portfolioData.resume.certificates?.map((certificate: any, index: number) => (
                <div
                  key={index}
                  className="flex items-start p-6 bg-slate-50 rounded-lg border border-slate-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <Award className="w-6 h-6 text-navy-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{certificate.name}</h4>
                    <p className="text-slate-600 text-sm mb-1">{certificate.issuer}</p>
                    <p className="text-slate-500 text-xs">{certificate.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;