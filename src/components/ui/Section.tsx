import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', containerClassName = '' }) => {
  return (
    <section className={`py-24 bg-[#0a0a0a] ${className}`}>
      <div className={`container mx-auto px-6 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export default Section; 