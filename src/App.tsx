import React from 'react';
import About from './components/About';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Solutions from './components/Solutions';
import "./scss/main.scss"

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Hero/>
      <About/>
      <Solutions/>
    </div>
  );
}

export default App;
