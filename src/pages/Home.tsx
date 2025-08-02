import React from 'react';
import Hero from '../components/Hero';

interface HomeProps {
  portfolioData: any;
}

const Home: React.FC<HomeProps> = ({ portfolioData }) => {
  return (
    <div className="page-container">
      <Hero portfolioData={portfolioData} />
    </div>
  );
};

export default Home;