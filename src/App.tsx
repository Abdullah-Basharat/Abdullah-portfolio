import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import portfolioData from './data/portfolioData.json';
import './styles/animations.css';

// Component to handle page refresh on navigation
const PageRefreshHandler: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth entrance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#8b5cf6] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <PageRefreshHandler />
        <Header portfolioData={portfolioData} />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home portfolioData={portfolioData} />} />
            <Route path="/about" element={<About portfolioData={portfolioData} />} />
            <Route path="/projects" element={<Projects portfolioData={portfolioData} />} />
            <Route path="/resume" element={<Resume portfolioData={portfolioData} />} />
            <Route path="/contact" element={<Contact portfolioData={portfolioData} />} />
          </Routes>
        </main>
        <Footer portfolioData={portfolioData} />
      </div>
    </Router>
  );
}

export default App;