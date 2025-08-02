import React from 'react';
import { GraduationCap, Award, Code, Brain, Database, Wrench } from 'lucide-react';

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

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-navy-600 to-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16">
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              {portfolioData.about.introduction}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200">
              <div className="text-4xl font-bold text-navy-600 mb-2">
                {portfolioData.about.stats.experience}
              </div>
              <div className="text-slate-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200">
              <div className="text-4xl font-bold text-navy-600 mb-2">
                {portfolioData.about.stats.projects}
              </div>
              <div className="text-slate-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200">
              <div className="text-4xl font-bold text-navy-600 mb-2">
                {portfolioData.about.stats.technologies}
              </div>
              <div className="text-slate-600 font-medium">Technologies Mastered</div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-navy-600 to-blue-600 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-8 h-8 mr-4" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">{portfolioData.about.education.degree}</h4>
                  <p className="text-blue-100 mb-2">{portfolioData.about.education.institution}</p>
                  <p className="text-blue-100">{portfolioData.about.education.year}</p>
                </div>
                <div className="flex items-center justify-center md:justify-end">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">{portfolioData.about.education.gpa}</div>
                    <div className="text-blue-100">CGPA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <div
                  key={category.title}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100"
                >
                  <div className="bg-gradient-to-r from-navy-600 to-navy-700 p-6 rounded-t-xl">
                    <div className="flex items-center text-white">
                      {category.icon}
                      <h4 className="text-xl font-bold ml-3">{category.title}</h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skill}
                          className="px-3 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors duration-200 border border-slate-200"
                          style={{
                            animationDelay: `${index * 100 + skillIndex * 50}ms`
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">Key Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioData.achievements.map((achievement: string, index: number) => (
                <div
                  key={index}
                  className="flex items-start p-6 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl hover:shadow-lg transition-all duration-300 border border-slate-200"
                >
                  <Award className="w-6 h-6 text-navy-600 mr-4 mt-1 flex-shrink-0" />
                  <p className="text-slate-700">{achievement}</p>
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