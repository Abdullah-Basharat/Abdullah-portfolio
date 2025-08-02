import React from 'react';
import { Download, FileText, Award, TrendingUp } from 'lucide-react';

interface ResumeProps {
  portfolioData: any;
}

const Resume: React.FC<ResumeProps> = ({ portfolioData }) => {
  const handleDownload = () => {
    // In a real application, this would download the actual PDF
    // For now, we'll show an alert
    alert('Resume download will be implemented with your actual PDF file');
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-navy-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Download my complete resume to learn more about my professional background and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Resume Preview Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Preview Visual */}
              <div className="relative">
                <div className="bg-white rounded-lg p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <FileText className="w-8 h-8 text-navy-600 mr-3" />
                    <div>
                      <div className="h-4 bg-navy-600 rounded w-32 mb-2"></div>
                      <div className="h-2 bg-slate-300 rounded w-24"></div>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="h-2 bg-slate-200 rounded w-full"></div>
                    <div className="h-2 bg-slate-200 rounded w-4/5"></div>
                    <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-2 bg-blue-200 rounded"></div>
                    <div className="h-2 bg-green-200 rounded"></div>
                    <div className="h-2 bg-purple-200 rounded"></div>
                    <div className="h-2 bg-orange-200 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Resume Content */}
              <div>
                <h3 className="text-3xl font-bold mb-6">Professional Resume</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-blue-400" />
                    <span>Comprehensive work experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span>Technical skills and certifications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-purple-400" />
                    <span>Project details and achievements</span>
                  </div>
                </div>

                <button
                  onClick={handleDownload}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 transition-all duration-300 hover:shadow-xl hover:scale-105 group"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download Resume
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {portfolioData.about.stats.experience}
              </div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {portfolioData.about.stats.projects}
              </div>
              <div className="text-blue-100">Projects</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {portfolioData.about.stats.technologies}
              </div>
              <div className="text-blue-100">Technologies</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-orange-400 mb-2">
                {portfolioData.about.education.gpa}
              </div>
              <div className="text-blue-100">CGPA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;