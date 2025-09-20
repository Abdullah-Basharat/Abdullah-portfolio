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
      skills: portfolioData.resume.skills.programming,
    },
    {
      title: 'AI/ML',
      icon: <Brain className="w-6 h-6" />,
      skills: portfolioData.resume.skills.aiml,
    },
    {
      title: 'Data Engineering',
      icon: <Database className="w-6 h-6" />,
      skills: portfolioData.resume.skills.dataEngineering,
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench className="w-6 h-6" />,
      skills: portfolioData.resume.skills.tools,
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
        return <Smile className="w-8 h-8 text-[#8b5cf6]" />;
      case 'bar-chart':
        return <BarChart3 className="w-8 h-8 text-[#8b5cf6]" />;
      case 'clock':
        return <Clock className="w-8 h-8 text-[#8b5cf6]" />;
      case 'shield':
        return <Shield className="w-8 h-8 text-[#8b5cf6]" />;
      default:
        return <Smile className="w-8 h-8 text-[#8b5cf6]" />;
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
    <section id="about" className="py-16 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f9fafb] mb-4 leading-[1.2]">
            About Me
          </h2>
          <p className="text-lg text-[#e5e7eb] max-w-3xl mx-auto leading-[1.7]">
            I'm a Professional AI/ML Engineer with an experience of 2+ years.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Personal Information and Metrics Section */}
          <div className="mb-12">
            {/* Personal Information - Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
              {/* Left Column */}
              <div className="space-y-4">
                {personalInfo.slice(0, 4).map((info, index) => (
                  <div key={index} className="flex items-center">
                    <Play className="w-4 h-4 text-[#8b5cf6] mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-[#e5e7eb]">{info.label}: </span>
                      <span className="text-[#9ca3af]">{info.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {personalInfo.slice(4, 8).map((info, index) => (
                  <div key={index} className="flex items-center">
                    <Play className="w-4 h-4 text-[#8b5cf6] mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-[#e5e7eb]">{info.label}: </span>
                      <span className="text-[#9ca3af]">{info.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Metrics - 1 per row on mobile, 2 per row on medium and large screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioData.about.metrics.map((metric: any, index: number) => (
                <div 
                  key={index} 
                  className="flex flex-col border border-[#374151] rounded-xl p-6 md:p-8 backdrop-blur-3xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group hover:-translate-y-1"
                  style={{
                    backgroundImage: `radial-gradient(146.13% 118.42% at 50% -15.5%, hsla(0, 0%, 100%, .04) 0, hsla(0, 0%, 100%, 0) 99.59%), linear-gradient(180deg, rgba(46, 51, 90, 0), rgba(28, 27, 51, .04))`
                  }}
                >
                  {/* Metric Header with Icon and Title */}
                  <div className="flex pb-4 items-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#8b5cf6] mr-4 md:mr-6 flex-shrink-0">
                      {getIconComponent(metric.icon)}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#f9fafb] break-words">{metric.title}</h3>
                  </div>

                  {/* Metric Number */}
                  <div className="text-2xl md:text-3xl font-bold text-[#f9fafb] mb-2 break-words">{metric.number}</div>

                  {/* Metric Description */}
                  <p className="text-xs md:text-sm leading-relaxed text-[#9ca3af] break-words">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Proficiency Section */}
          <div 
            className="flex flex-col border border-[#374151] rounded-xl p-6 md:p-8 backdrop-blur-3xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group hover:-translate-y-1"
            style={{
              backgroundImage: `radial-gradient(146.13% 118.42% at 50% -15.5%, hsla(0, 0%, 100%, .04) 0, hsla(0, 0%, 100%, 0) 99.59%), linear-gradient(180deg, rgba(46, 51, 90, 0), rgba(28, 27, 51, .04))`
            }}
          >
            <h3 className="text-2xl font-bold text-[#f9fafb] mb-6 text-center">Skills Proficiency</h3>
            <div className="space-y-6">
              {portfolioData.about.skills.map((skill: any, index: number) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-[#e5e7eb]">{skill.name}</span>
                    <span className="text-sm text-[#9ca3af]">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-[#374151] rounded-full h-3">
                    <div 
                      className="bg-[#8b5cf6] h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-[#f9fafb] text-center mb-8">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <div
                  key={category.title}
                  className="flex flex-col border border-[#374151] rounded-xl p-8 backdrop-blur-3xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group hover:-translate-y-1"
                  style={{
                    backgroundImage: `radial-gradient(146.13% 118.42% at 50% -15.5%, hsla(0, 0%, 100%, .04) 0, hsla(0, 0%, 100%, 0) 99.59%), linear-gradient(180deg, rgba(46, 51, 90, 0), rgba(28, 27, 51, .04))`
                  }}
                >
                  {/* Technical Skills Header with Icon and Title */}
                  <div className="flex pb-4 items-center">
                    <div className="text-[#8b5cf6] mr-6">
                      {React.cloneElement(category.icon, { className: "w-12 h-12" })}
                    </div>
                    <h4 className="text-2xl font-bold text-[#f9fafb]">
                      {category.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-[#9ca3af] pb-4">
                    {getCategoryDescription(category.title)}
                  </p>

                  {/* Technology Tags as List */}
                  <ul className="list-disc space-y-2 pl-6">
                    {category.skills.map((skill: string, skillIndex: number) => (
                      <li key={skill} className="font-medium text-[#e5e7eb]">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates and Awards */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-[#f9fafb] text-center mb-8">Certificates and Awards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {portfolioData.resume.certificates?.map((certificate: any, index: number) => {
                const CertificateCard = (
                  <div
                    className={`flex flex-col border border-[#374151] rounded-xl p-8 backdrop-blur-3xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group hover:-translate-y-1 ${
                      certificate.link ? 'cursor-pointer' : ''
                    }`}
                    style={{
                      backgroundImage: `radial-gradient(146.13% 118.42% at 50% -15.5%, hsla(0, 0%, 100%, .04) 0, hsla(0, 0%, 100%, 0) 99.59%), linear-gradient(180deg, rgba(46, 51, 90, 0), rgba(28, 27, 51, .04))`
                    }}
                  >
                    {/* Certificate Header with Icon and Title */}
                    <div className="flex pb-4 items-center">
                      <div className="text-[#8b5cf6] mr-6">
                        <Award className="w-12 h-12" />
                      </div>
                      <h4 className="text-2xl font-bold text-[#f9fafb]">
                        {certificate.name}
                      </h4>
                    </div>

                    {/* Certificate Details as List */}
                    <ul className="list-disc space-y-2 pl-6">
                      <li className="font-medium text-[#e5e7eb]">
                        <strong>Issuer:</strong> {certificate.issuer}
                      </li>
                      <li className="font-medium text-[#e5e7eb]">
                        <strong>Date:</strong> {certificate.date}
                      </li>
                      {certificate.link && (
                        <li className="font-medium text-[#8b5cf6] mt-3">
                          <span className="text-sm">Click to view certificate →</span>
                        </li>
                      )}
                    </ul>
                  </div>
                );

                // If certificate has a link, wrap it in an anchor tag
                if (certificate.link) {
                  return (
                    <a
                      key={index}
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {CertificateCard}
                    </a>
                  );
                }

                // If no link, return the card as is
                return (
                  <div key={index}>
                    {CertificateCard}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;