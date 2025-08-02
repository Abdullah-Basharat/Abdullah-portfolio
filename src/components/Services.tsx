import React from 'react';
import { Brain, Database, Code, BarChart3 } from 'lucide-react';

interface ServicesProps {
  portfolioData: any;
}

const Services: React.FC<ServicesProps> = ({ portfolioData }) => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'brain':
        return <Brain className="w-12 h-12" />;
      case 'database':
        return <Database className="w-12 h-12" />;
      case 'code':
        return <Code className="w-12 h-12" />;
      case 'chart':
        return <BarChart3 className="w-12 h-12" />;
      default:
        return <Code className="w-12 h-12" />;
    }
  };

  const getTechnologyTags = (serviceTitle: string) => {
    switch (serviceTitle) {
      case 'AI/ML Solutions':
        return ['LLMs', 'RAG Systems', 'Computer Vision', 'TensorFlow'];
      case 'Data Engineering':
        return ['BigQuery', 'MongoDB', 'AWS', 'Azure'];
      case 'Web Development':
        return ['Python', 'SQL', 'JavaScript', 'Django'];
      default:
        return ['Technology', 'Development', 'Solutions', 'Tools'];
    }
  };

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="clamp(2rem, 4vw, 3rem) font-bold text-[#f9fafb] mb-6 leading-[1.2]">
            My Services
          </h2>
          <p className="text-lg text-[#e5e7eb] max-w-3xl mx-auto leading-[1.7]">
            Have a look on my Services which I am providing for the past 2 years.
          </p>
        </div>

        {/* Services Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.services.slice(0, 3).map((service: any, index: number) => (
                          <div
              key={index}
              className="flex flex-col border border-[#374151] rounded-xl p-8 backdrop-blur-3xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group hover:-translate-y-1"
              style={{
                backgroundImage: `radial-gradient(146.13% 118.42% at 50% -15.5%, hsla(0, 0%, 100%, .04) 0, hsla(0, 0%, 100%, 0) 99.59%), linear-gradient(180deg, rgba(46, 51, 90, 0), rgba(28, 27, 51, .04))`
              }}
            >
              {/* Service Header with Icon and Title */}
              <div className="flex pb-4 items-center">
                <div className="text-4xl font-bold text-[#8b5cf6] mr-6">
                  {getIconComponent(service.icon)}
                </div>
                <h3 className="text-2xl font-bold text-[#f9fafb]">
                  {service.title}
                </h3>
              </div>

              {/* Service Description */}
              <p className="text-gray-600 dark:text-gray-400 pb-4">
                {service.description}
              </p>

              {/* Technology Tags as List */}
              <ul className="list-disc space-y-2 pl-6">
                {getTechnologyTags(service.title).map((tag: string, tagIndex: number) => (
                  <li key={tagIndex} className="font-medium text-[#e5e7eb]">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Services; 