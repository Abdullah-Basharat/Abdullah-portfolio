import React from 'react';
import { COLORS, EFFECTS, GRADIENTS } from '../../constants/design';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col border border-[${COLORS.BORDER_PRIMARY}] rounded-xl p-8 backdrop-blur-3xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group hover:-translate-y-1 ${className}`}
      style={{
        backgroundImage: GRADIENTS.CARD_BACKGROUND
      }}
    >
      {children}
    </div>
  );
};

export default Card; 