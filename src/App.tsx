import React from 'react';
import About from './components/About';
import AlliesSlider from './components/AlliesSlider';
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
      <AlliesSlider/>
      <Footer/>
    </div>
  );
}

export default App;
