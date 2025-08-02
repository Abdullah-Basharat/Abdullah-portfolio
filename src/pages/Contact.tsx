import React from 'react';
import ContactSection from '../components/Contact';

interface ContactProps {
  portfolioData: any;
}

const Contact: React.FC<ContactProps> = ({ portfolioData }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20">
      <ContactSection portfolioData={portfolioData} />
    </div>
  );
};

export default Contact;