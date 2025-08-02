import React from 'react';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';

interface ExperienceProps {
  portfolioData: any;
}

const Experience: React.FC<ExperienceProps> = ({ portfolioData }) => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-navy-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-navy-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            My journey in AI/ML engineering and the impact I've made along the way
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-navy-600 to-blue-600"></div>

            {portfolioData.experience.map((exp: any, index: number) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-navy-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : ''}`}>
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-slate-100">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          exp.type === 'Full-time' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-navy-900 mb-2">{exp.title}</h3>
                      <h4 className="text-xl text-navy-600 font-semibold mb-3">{exp.company}</h4>
                      
                      <div className="flex flex-wrap items-center gap-4 text-slate-500 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>Lahore, Pakistan</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h5 className="text-lg font-semibold text-navy-900 mb-4">Key Achievements:</h5>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement: string, achIndex: number) => (
                          <li key={achIndex} className="flex items-start gap-3">
                            <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;