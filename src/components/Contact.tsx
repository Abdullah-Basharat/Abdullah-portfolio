import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Share2, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactProps {
  portfolioData: any;
}

const Contact: React.FC<ContactProps> = ({ portfolioData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Contact Me
          </h2>
          {/* <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Feel Free to ask me a message. You will find me very responsive!
          </p> */}
        </div>

        {/* Main Content - Two Columns */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Left Column - Contact Information */}
            <div className="space-y-6">
              
              {/* Social Profiles Box */}
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Share2 className="w-8 h-8 text-slate-700" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Social Profiles</h3>
                  <div className="flex justify-center space-x-4">
                    <a
                      href={`https://wa.me/${portfolioData.personal.phone.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-all duration-300 hover:scale-110"
                    >
                      <MessageCircle className="w-6 h-6 text-slate-700" />
                    </a>
                    <a
                      href={portfolioData.personal.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-all duration-300 hover:scale-110"
                    >
                      <Github className="w-6 h-6 text-slate-700" />
                    </a>
                    <a
                      href={portfolioData.personal.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="w-6 h-6 text-slate-700" />
                    </a>
                    <a
                      href={`mailto:${portfolioData.personal.email}`}
                      className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-all duration-300 hover:scale-110"
                    >
                      <Mail className="w-6 h-6 text-slate-700" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Information Box */}
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 group">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Contact Information</h3>
                  
                  {/* Email Section */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700 mb-1">Email</h4>
                      <p className="text-slate-600">{portfolioData.personal.email}</p>
                    </div>
                  </div>

                  {/* Phone Section */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700 mb-1">Phone</h4>
                      <p className="text-slate-600">{portfolioData.personal.phone}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 group">
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 outline-none"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 outline-none"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 outline-none"
                      placeholder="Subject"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                      placeholder="Message"
                    />
                  </div>

                  {/* Send Message Button */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-900 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 group"
                    >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-3 p-4 bg-green-900/20 border border-green-400/30 rounded-lg text-green-400">
                    <CheckCircle size={20} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-3 p-4 bg-red-900/20 border border-red-400/30 rounded-lg text-red-400">
                    <AlertCircle size={20} />
                    <span>There was an error sending your message. Please try again.</span>
                  </div>
                )}

              </form>
            </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;