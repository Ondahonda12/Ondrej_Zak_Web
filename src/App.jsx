import React, { useState, useEffect } from 'react';
import Header from './header.jsx';
import Body from './Body.jsx';
import Footer from './footer.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    document.getElementById('header').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="app-wrapper">
        <Header/>
        <main className="main-content">
          <div id="body">
            <Body />
          </div>
        </main>
        {showScrollButton && (
          <button className="scroll-to-top" onClick={scrollToTop}>
            ↑
          </button>
        )}
        <Footer />
      </div>
    </Router>
  );
}
export default App;