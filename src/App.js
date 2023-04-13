import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Developpers from './components/developpers/Developper';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Developpers />
    </div>
  );
}

export default App;
