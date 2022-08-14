import React from 'react';
import About from './components/About';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import "./scss/main.scss"

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Hero/>
      <About/>
    </div>
  );
}

export default App;
