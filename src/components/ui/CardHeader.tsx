import React from 'react';

interface CardHeaderProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ icon, title, className = '' }) => {
  return (
    <div className={`flex pb-4 items-center ${className}`}>
      <div className="text-[#8b5cf6] mr-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-[#f9fafb]">
        {title}
      </h3>
    </div>
  );
};

export default CardHeader; 