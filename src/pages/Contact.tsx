import React from 'react';
import ContactSection from '../components/Contact';

interface ContactProps {
  portfolioData: any;
}

const Contact: React.FC<ContactProps> = ({ portfolioData }) => {
  return (
    <div className="page-container pt-20">
      <ContactSection portfolioData={portfolioData} />
    </div>
  );
};

export default Contact;