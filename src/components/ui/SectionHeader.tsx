import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f9fafb] mb-6 leading-[1.2]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-[#e5e7eb] max-w-3xl mx-auto leading-[1.7]">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader; 