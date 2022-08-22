import React from 'react';
import About from './components/About';
import Brands from './components/Brands';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Services from './components/Services';
import Solutions from './components/Solutions';
import "./scss/main.scss"

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Hero/>
      <About/>
      <Solutions/>
      <Services/>
      <Brands/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
