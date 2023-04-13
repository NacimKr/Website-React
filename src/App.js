import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Hero from './components/hero/Hero';
import About from './components/about/About';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
