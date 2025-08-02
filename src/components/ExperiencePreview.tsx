import React from 'react';
import { Briefcase, Calendar, ArrowRight } from 'lucide-react';

interface ExperiencePreviewProps {
  portfolioData: any;
}

const ExperiencePreview: React.FC<ExperiencePreviewProps> = ({ portfolioData }) => {
  // Use all experience entries from resume data
  const allExperience = portfolioData.resume.experience;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-slate-700 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Complete professional experience and key achievements in AI/ML engineering
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Experience Section - Same layout as Resume */}
          <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-slate-600" />
              Professional Experience
            </h3>
            <div className="space-y-6">
              {allExperience.map((exp: any, index: number) => (
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

          {/* View Complete Resume Button */}
          <div className="text-center mt-12">
            <a
              href="/resume"
              className="inline-flex items-center gap-2 bg-slate-800 text-white px-8 py-3 rounded-lg hover:bg-slate-900 transition-all duration-300 hover:shadow-lg group text-base font-medium"
            >
              <span className="group-hover:text-white">View Complete Resume</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePreview; 