import React from 'react';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import ExpertiseSection from '../components/ExpertiseSection';
import Services from '../components/Services';


interface HomeProps {
  portfolioData: any;
}

const Home: React.FC<HomeProps> = ({ portfolioData }) => {
  return (
    <div className="page-container">
      <Hero portfolioData={portfolioData} />
      <ExpertiseSection portfolioData={portfolioData} />
      <FeaturedProjects portfolioData={portfolioData} />
      <Services portfolioData={portfolioData} />
      
      {/* <ContactCTA portfolioData={portfolioData} /> */}
    </div>
  );
};

export default Home;