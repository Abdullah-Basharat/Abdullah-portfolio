import React from 'react';
import { Download, FileText, Award, TrendingUp, GraduationCap, Briefcase, MapPin, Phone, Mail, Brain, Code, Database } from 'lucide-react';

interface ResumeProps {
  portfolioData: any;
}

const Resume: React.FC<ResumeProps> = ({ portfolioData }) => {
  const handleDownload = () => {
    // In a real application, this would download the actual PDF
    // For now, we'll show an alert
    alert('Resume download will be implemented with your actual PDF file');
  };

  const expertiseAreas = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI/ML Engineering",
      description: "Specialized in Large Language Models, RAG systems, and deep learning applications",
      skills: portfolioData.resume.skills.aiml.slice(0, 4)
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Development",
      description: "Full-stack development with modern technologies and best practices",
      skills: portfolioData.resume.skills.programming.slice(0, 4)
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Engineering",
      description: "Building scalable data pipelines and infrastructure solutions",
      skills: portfolioData.resume.skills.dataEngineering.slice(0, 4)
    }
  ];

  return (
    <section id="resume" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto mb-16">
          {/* Summary Section */}
          <div className="bg-slate-50 rounded-lg p-8 mb-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Summary</h3>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
                <FileText className="w-8 h-8 text-slate-700" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-slate-900 mb-2">{portfolioData.personal.name}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {portfolioData.resume.summary}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    <span className="text-slate-600">{portfolioData.resume.contact.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-slate-500" />
                    <span className="text-slate-600">{portfolioData.resume.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-slate-500" />
                    <span className="text-slate-600">{portfolioData.resume.contact.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Education Section */}
            <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-slate-600" />
                Education
              </h3>
              <div className="space-y-6">
                {portfolioData.resume.education.map((edu: any, index: number) => (
                  <div key={index} className="border-l-2 border-slate-300 pl-6">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{edu.degree}</h4>
                    <p className="text-slate-500 text-sm mb-1">{edu.period}</p>
                    <p className="text-slate-600 text-sm mb-2">{edu.institution}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{edu.description}</p>
                    <div className="mt-3">
                      <span className="text-slate-500 text-sm">GPA: </span>
                      <span className="text-slate-900 font-medium">{edu.gpa}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-slate-600" />
                Professional Experience
              </h3>
              <div className="space-y-6">
                {portfolioData.resume.experience.map((exp: any, index: number) => (
                  <div key={index} className="border-l-2 border-slate-300 pl-6">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{exp.title}</h4>
                    <p className="text-slate-500 text-sm mb-1">{exp.period}</p>
                    <p className="text-slate-600 text-sm mb-2">{exp.company}</p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">{exp.description}</p>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement: string, achievementIndex: number) => (
                        <div key={achievementIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-600 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Skills - Horizontal Card Layout */}
          <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-slate-600" />
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertiseAreas.map((area, index) => (
                <div
                  key={area.title}
                  className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-slate-700 mb-4 group-hover:text-slate-900 transition-colors duration-200">
                    {area.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{area.title}</h4>
                  <p className="text-slate-600 mb-4 leading-relaxed text-sm">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.skills.map((skill: string) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-md border border-slate-200 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Download Section */}
          <div className="text-center mt-12">
            <div className="bg-slate-50 rounded-lg p-8 border border-slate-200 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Download Complete Resume</h3>
              <p className="text-slate-600 mb-6 text-sm">
                Get the full version of my resume with detailed information about my experience, 
                skills, and achievements.
              </p>
              <button
                onClick={handleDownload}
                className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto transition-all duration-300 hover:shadow-lg group"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;