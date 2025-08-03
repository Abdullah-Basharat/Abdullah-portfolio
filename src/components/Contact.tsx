import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Share2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  portfolioData: any;
}

const Contact: React.FC<ContactProps> = ({ portfolioData }) => {
  const formRef = useRef<HTMLFormElement>(null);
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
    setSubmitStatus('idle');
    
    try {
      // EmailJS configuration
      // You'll need to replace these with your actual EmailJS credentials
      const serviceId = 'YOUR_EMAILJS_SERVICE_ID'; // Replace with your service ID
      const templateId = 'YOUR_EMAILJS_TEMPLATE_ID'; // Replace with your template ID
      const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY'; // Replace with your public key

      // Create a temporary form with EmailJS-compatible field names
      const tempForm = document.createElement('form');
      tempForm.innerHTML = `
        <input name="user_name" value="${formData.name}" />
        <input name="user_email" value="${formData.email}" />
        <input name="subject" value="${formData.subject}" />
        <textarea name="message">${formData.message}</textarea>
      `;

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        tempForm,
        publicKey
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f9fafb] mb-6 leading-[1.2]">
            Contact Me
          </h2>
        </div>

        {/* Main Content - Two Columns */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column - Contact Form */}
            <div 
              className="flex flex-col border border-[#374151] rounded-xl p-6 md:p-8 backdrop-blur-3xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group hover:-translate-y-1"
              style={{
                backgroundImage: `radial-gradient(146.13% 118.42% at 50% -15.5%, hsla(0, 0%, 100%, .04) 0, hsla(0, 0%, 100%, 0) 99.59%), linear-gradient(180deg, rgba(46, 51, 90, 0), rgba(28, 27, 51, .04))`
              }}
            >
              {/* Contact Form Header with Icon and Title */}
              <div className="flex pb-4 items-center">
                <div className="text-[#8b5cf6] mr-6">
                  <Send className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-[#f9fafb]">Send Message</h3>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#374151] rounded-lg bg-[#1f2937] text-[#f9fafb] placeholder-[#9ca3af] focus:ring-2 focus:ring-[#8b5cf6] focus:border-[#8b5cf6] transition-all duration-200 outline-none"
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
                      className="w-full px-4 py-3 border border-[#374151] rounded-lg bg-[#1f2937] text-[#f9fafb] placeholder-[#9ca3af] focus:ring-2 focus:ring-[#8b5cf6] focus:border-[#8b5cf6] transition-all duration-200 outline-none"
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
                    className="w-full px-4 py-3 border border-[#374151] rounded-lg bg-[#1f2937] text-[#f9fafb] placeholder-[#9ca3af] focus:ring-2 focus:ring-[#8b5cf6] focus:border-[#8b5cf6] transition-all duration-200 outline-none"
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
                    className="w-full px-4 py-3 border border-[#374151] rounded-lg bg-[#1f2937] text-[#f9fafb] placeholder-[#9ca3af] focus:ring-2 focus:ring-[#8b5cf6] focus:border-[#8b5cf6] transition-all duration-200 outline-none resize-none"
                    placeholder="Message"
                  />
                </div>

                {/* Send Message Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 group"
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

            {/* Right Column - Contact Information */}
            <div className="space-y-6">
              
              {/* Social Profiles Box */}
              <div 
                className="flex flex-col border border-[#374151] rounded-xl p-6 md:p-8 backdrop-blur-3xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group hover:-translate-y-1"
                style={{
                  backgroundImage: `radial-gradient(146.13% 118.42% at 50% -15.5%, hsla(0, 0%, 100%, .04) 0, hsla(0, 0%, 100%, 0) 99.59%), linear-gradient(180deg, rgba(46, 51, 90, 0), rgba(28, 27, 51, .04))`
                }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#374151] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#8b5cf6] transition-all duration-200">
                    <Share2 className="w-8 h-8 text-[#8b5cf6] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <h3 className="text-xl font-bold text-[#f9fafb] mb-6">Social Profiles</h3>
                  <div className="flex justify-center space-x-4">
                    
                    <a
                      href={portfolioData.personal.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#374151] rounded-full flex items-center justify-center hover:bg-[#8b5cf6] transition-all duration-300 hover:scale-110"
                    >
                      <Github className="w-6 h-6 text-[#9ca3af] hover:text-white transition-colors duration-200" />
                    </a>
                    <a
                      href={portfolioData.personal.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#374151] rounded-full flex items-center justify-center hover:bg-[#8b5cf6] transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="w-6 h-6 text-[#9ca3af] hover:text-white transition-colors duration-200" />
                    </a>
                    <a
                      href={`mailto:${portfolioData.personal.email}`}
                      className="w-12 h-12 bg-[#374151] rounded-full flex items-center justify-center hover:bg-[#8b5cf6] transition-all duration-300 hover:scale-110"
                    >
                      <Mail className="w-6 h-6 text-[#9ca3af] hover:text-white transition-colors duration-200" />
                    </a>
                    <a
                      href={`https://wa.me/${portfolioData.personal.phone.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#374151] rounded-full flex items-center justify-center hover:bg-[#8b5cf6] transition-all duration-300 hover:scale-110"
                    >
                      <MessageCircle className="w-6 h-6 text-[#9ca3af] hover:text-white transition-colors duration-200" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Information Box */}
              <div 
                className="flex flex-col border border-[#374151] rounded-xl p-6 md:p-8 backdrop-blur-3xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group hover:-translate-y-1"
                style={{
                  backgroundImage: `radial-gradient(146.13% 118.42% at 50% -15.5%, hsla(0, 0%, 100%, .04) 0, hsla(0, 0%, 100%, 0) 99.59%), linear-gradient(180deg, rgba(46, 51, 90, 0), rgba(28, 27, 51, .04))`
                }}
              >
                {/* Contact Info Header with Icon and Title */}
                <div className="flex pb-4 items-center">
                  <div className="text-[#8b5cf6] mr-6">
                    <Phone className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#f9fafb]">Contact Information</h3>
                </div>

                {/* Contact Details as List */}
                <ul className="list-disc space-y-2 pl-6">
                  <li className="font-medium text-[#e5e7eb] flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#8b5cf6]" />
                    {portfolioData.personal.email}
                  </li>
                  <li className="font-medium text-[#e5e7eb] flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#8b5cf6]" />
                    {portfolioData.personal.phone}
                  </li>
                  <li className="font-medium text-[#e5e7eb] flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#8b5cf6]" />
                    {portfolioData.personal.location}
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;