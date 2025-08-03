import React from 'react';

interface GridProps {
  children: React.ReactNode;
  className?: string;
  cols?: '1' | '2' | '3';
}

const Grid: React.FC<GridProps> = ({ children, className = '', cols = '2' }) => {
  const gridClasses = {
    '1': 'grid-cols-1',
    '2': 'grid-cols-1 md:grid-cols-2',
    '3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  };

  return (
    <div className={`grid ${gridClasses[cols]} gap-8 ${className}`}>
      {children}
    </div>
  );
};

export default Grid; 