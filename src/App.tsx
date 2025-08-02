import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import portfolioData from './data/portfolioData.json';
import './styles/animations.css';

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
      <div className="min-h-screen bg-navy-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-white text-xl font-semibold">Loading Portfolio...</div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
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