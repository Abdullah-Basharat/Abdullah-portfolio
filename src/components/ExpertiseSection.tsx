import React from 'react';
import { Brain, Code, Database, TrendingUp, Award } from 'lucide-react';

interface ExpertiseSectionProps {
  portfolioData: any;
}

const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ portfolioData }) => {
  const expertiseAreas = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI/ML Engineering",
      description: "Specialized in Large Language Models, RAG systems, and deep learning applications",
      skills: portfolioData.skills.aiml.slice(0, 4)
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Software Development",
      description: "Full-stack development with modern technologies and best practices",
      skills: portfolioData.skills.programming.slice(0, 4)
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Data Engineering",
      description: "Building scalable data pipelines and infrastructure solutions",
      skills: portfolioData.skills.dataEngineering.slice(0, 4)
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="clamp(2rem, 4vw, 3rem) font-bold text-[#f9fafb] mb-6 leading-[1.2]">
            Core Competencies
          </h2>
          <p className="text-lg text-[#e5e7eb] max-w-3xl mx-auto leading-[1.7]">
            Specialized expertise across multiple domains with proven track record
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={area.title}
              className="flex flex-col border border-[#374151] rounded-xl p-8 backdrop-blur-3xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group hover:-translate-y-1"
              style={{
                backgroundImage: `radial-gradient(146.13% 118.42% at 50% -15.5%, hsla(0, 0%, 100%, .04) 0, hsla(0, 0%, 100%, 0) 99.59%), linear-gradient(180deg, rgba(46, 51, 90, 0), rgba(28, 27, 51, .04))`
              }}
            >
              {/* Expertise Header with Icon and Title */}
              <div className="flex pb-4 items-center">
                <div className="text-10xl font-bold text-[#8b5cf6] mr-6">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#f9fafb]">
                  {area.title}
                </h3>
              </div>

              {/* Expertise Description */}
              <p className="text-gray-600 dark:text-gray-400 pb-4">
                {area.description}
              </p>

              {/* Skills as List */}
              <ul className="list-disc space-y-2 pl-6">
                {area.skills.map((skill: string) => (
                  <li key={skill} className="font-medium text-[#e5e7eb]">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
        </div>
      </div>

        {/* Professional Stats */}
        {/* <div className="bg-slate-50 rounded-lg p-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">
                {portfolioData.about.stats.experience}
              </div>
              <div className="text-slate-600 font-medium text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">
                {portfolioData.about.stats.projects}
              </div>
              <div className="text-slate-600 font-medium text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">
                {portfolioData.about.stats.technologies}
              </div>
              <div className="text-slate-600 font-medium text-sm">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">
                {portfolioData.about.education.gpa}
              </div>
              <div className="text-slate-600 font-medium text-sm">Academic GPA</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ExpertiseSection; 