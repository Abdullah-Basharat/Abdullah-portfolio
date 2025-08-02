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
    <section id="resume" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto mb-16">
          {/* Summary Section */}
          <div 
            className="flex flex-col border border-[#374151] rounded-xl p-8 backdrop-blur-3xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group hover:-translate-y-1"
            style={{
              backgroundImage: `radial-gradient(146.13% 118.42% at 50% -15.5%, hsla(0, 0%, 100%, .04) 0, hsla(0, 0%, 100%, 0) 99.59%), linear-gradient(180deg, rgba(46, 51, 90, 0), rgba(28, 27, 51, .04))`
            }}
          >
            {/* Summary Header with Icon and Title */}
            <div className="flex pb-4 items-center">
              <div className="text-4xl font-bold text-[#8b5cf6] mr-6">
                <FileText className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-[#f9fafb]">Summary</h3>
            </div>

            {/* Summary Content */}
            <div className="mb-4">
              <h4 className="text-xl font-bold text-[#f9fafb] mb-2">{portfolioData.personal.name}</h4>
              <p className="text-[#e5e7eb] text-sm leading-relaxed mb-4">
                {portfolioData.resume.summary}
              </p>
            </div>

            {/* Contact Details as List */}
            <ul className="list-disc space-y-2 pl-6">
              <li className="font-medium text-[#e5e7eb] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8b5cf6]" />
                {portfolioData.resume.contact.location}
              </li>
              <li className="font-medium text-[#e5e7eb] flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#8b5cf6]" />
                {portfolioData.resume.contact.phone}
              </li>
              <li className="font-medium text-[#e5e7eb] flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#8b5cf6]" />
                {portfolioData.resume.contact.email}
              </li>
            </ul>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Education Section */}
            <div 
              className="flex flex-col border border-[#374151] rounded-xl p-8 backdrop-blur-3xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group hover:-translate-y-1"
              style={{
                backgroundImage: `radial-gradient(146.13% 118.42% at 50% -15.5%, hsla(0, 0%, 100%, .04) 0, hsla(0, 0%, 100%, 0) 99.59%), linear-gradient(180deg, rgba(46, 51, 90, 0), rgba(28, 27, 51, .04))`
              }}
            >
              {/* Education Header with Icon and Title */}
              <div className="flex pb-4 items-center">
                <div className="text-4xl font-bold text-[#8b5cf6] mr-6">
                  <GraduationCap className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-[#f9fafb]">Education</h3>
              </div>

              {/* Education Details with Line Layout */}
              <div className="space-y-6">
                {portfolioData.resume.education.map((edu: any, index: number) => (
                  <div key={index} className="border-l-2 border-[#8b5cf6] pl-6">
                    <h4 className="text-lg font-bold text-[#f9fafb] mb-2">{edu.degree}</h4>
                    <p className="text-[#9ca3af] text-sm mb-1">{edu.period}</p>
                    <p className="text-[#e5e7eb] text-sm mb-2">{edu.institution}</p>
                    <p className="text-[#e5e7eb] text-sm leading-relaxed">{edu.description}</p>
                    <div className="mt-3">
                      <span className="text-[#9ca3af] text-sm">GPA: </span>
                      <span className="text-[#f9fafb] font-medium">{edu.gpa}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div 
              className="flex flex-col border border-[#374151] rounded-xl p-8 backdrop-blur-3xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group hover:-translate-y-1"
              style={{
                backgroundImage: `radial-gradient(146.13% 118.42% at 50% -15.5%, hsla(0, 0%, 100%, .04) 0, hsla(0, 0%, 100%, 0) 99.59%), linear-gradient(180deg, rgba(46, 51, 90, 0), rgba(28, 27, 51, .04))`
              }}
            >
              {/* Experience Header with Icon and Title */}
              <div className="flex pb-4 items-center">
                <div className="text-4xl font-bold text-[#8b5cf6] mr-6">
                  <Briefcase className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-[#f9fafb]">Professional Experience</h3>
              </div>

              {/* Experience Details with Line Layout */}
              <div className="space-y-6">
                {portfolioData.resume.experience.map((exp: any, index: number) => (
                  <div key={index} className="border-l-2 border-[#8b5cf6] pl-6">
                    <h4 className="text-lg font-bold text-[#f9fafb] mb-2">{exp.title}</h4>
                    <p className="text-[#9ca3af] text-sm mb-1">{exp.period}</p>
                    <p className="text-[#e5e7eb] text-sm mb-2">{exp.company}</p>
                    <p className="text-[#e5e7eb] text-sm leading-relaxed mb-3">{exp.description}</p>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement: string, achievementIndex: number) => (
                        <div key={achievementIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#8b5cf6] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-[#e5e7eb] text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>

          {/* Technical Skills - Horizontal Card Layout */}
          <div 
            className="flex flex-col border border-[#374151] rounded-xl p-8 backdrop-blur-3xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group hover:-translate-y-1"
            style={{
              backgroundImage: `radial-gradient(146.13% 118.42% at 50% -15.5%, hsla(0, 0%, 100%, .04) 0, hsla(0, 0%, 100%, 0) 99.59%), linear-gradient(180deg, rgba(46, 51, 90, 0), rgba(28, 27, 51, .04))`
            }}
          >
            {/* Technical Skills Header with Icon and Title */}
            <div className="flex pb-4 items-center">
              <div className="text-4xl font-bold text-[#8b5cf6] mr-6">
                <Award className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-[#f9fafb]">Technical Skills</h3>
            </div>

            {/* Skills as List */}
            <ul className="list-disc space-y-2 pl-6">
              {expertiseAreas.map((area, index) => (
                <li key={area.title} className="font-medium text-[#e5e7eb]">
                  <strong>{area.title}</strong> - {area.description}
                </li>
              ))}
            </ul>
          </div>

          {/* Download Section */}
          <div className="mt-16">
            <div 
              className="flex flex-col border border-[#374151] rounded-xl p-8 backdrop-blur-3xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group hover:-translate-y-1 max-w-2xl mx-auto"
              style={{
                backgroundImage: `radial-gradient(146.13% 118.42% at 50% -15.5%, hsla(0, 0%, 100%, .04) 0, hsla(0, 0%, 100%, 0) 99.59%), linear-gradient(180deg, rgba(46, 51, 90, 0), rgba(28, 27, 51, .04))`
              }}
            >
              {/* Download Header with Icon and Title */}
              <div className="flex pb-4 items-center justify-center">
                <div className="text-4xl font-bold text-[#8b5cf6] mr-6">
                  <Download className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-[#f9fafb]">Download Complete Resume</h3>
              </div>

              {/* Download Description */}
              <p className="text-[#e5e7eb] mb-6 text-center">
                Get the full version of my resume with detailed information about my experience, 
                skills, and achievements.
              </p>

              {/* Download Button */}
              <div className="text-center">
                <button
                  onClick={handleDownload}
                  className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto transition-all duration-300 hover:shadow-lg group"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;