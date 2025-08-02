import React from 'react';
import { Mail, MessageSquare, ArrowRight, MapPin, Phone } from 'lucide-react';

interface ContactCTAProps {
  portfolioData: any;
}

const ContactCTA: React.FC<ContactCTAProps> = ({ portfolioData }) => {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Collaborate?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-500 mx-auto mb-6"></div>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              I'm passionate about AI/ML projects and always excited to work on innovative solutions. 
              Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-slate-700 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-slate-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Email Consultation</h3>
                  <p className="text-slate-400 text-sm">Direct communication for detailed discussions</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                Perfect for detailed project discussions, technical consultations, and long-term collaborations.
              </p>
              <a
                href={`mailto:${portfolioData.personal.email}?subject=Portfolio%20Inquiry`}
                className="inline-flex items-center gap-2 bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-600 transition-all duration-300 group text-sm font-medium"
              >
                <span className="group-hover:text-white">Send Email</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>

            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-slate-700 rounded-lg mr-4">
                  <MessageSquare className="w-6 h-6 text-slate-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Project Inquiry</h3>
                  <p className="text-slate-400 text-sm">Structured form for project details</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                Use our contact form to provide project specifications and requirements for a comprehensive response.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-600 transition-all duration-300 group text-sm font-medium"
              >
                <span className="group-hover:text-white">Contact Form</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Professional Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center w-10 h-10 bg-slate-700 rounded-lg mr-3">
                  <Mail className="w-5 h-5 text-slate-300" />
                </div>
                <div>
                  <div className="text-slate-400 text-xs mb-1">Email</div>
                  <div className="text-white font-medium text-sm">{portfolioData.personal.email}</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center w-10 h-10 bg-slate-700 rounded-lg mr-3">
                  <Phone className="w-5 h-5 text-slate-300" />
                </div>
                <div>
                  <div className="text-slate-400 text-xs mb-1">Phone</div>
                  <div className="text-white font-medium text-sm">{portfolioData.personal.phone}</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center w-10 h-10 bg-slate-700 rounded-lg mr-3">
                  <MapPin className="w-5 h-5 text-slate-300" />
                </div>
                <div>
                  <div className="text-slate-400 text-xs mb-1">Location</div>
                  <div className="text-white font-medium text-sm">{portfolioData.personal.location}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA; 