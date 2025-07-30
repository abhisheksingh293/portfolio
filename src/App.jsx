import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Teammates from './components/Teammates';

import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <div id="home">
        <LandingPage />
        <Skills />
        <Projects />
        <Certificates />
        <Teammates />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
