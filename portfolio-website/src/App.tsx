import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/home';
import Skills from './components/Skills';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-navy-900">
        <Navbar />
        <main>
          <Home />
          <Skills />
          <About />
          <Portfolio />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
