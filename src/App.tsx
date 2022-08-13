import React from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import "./scss/main.scss"

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Hero/>
    </div>
  );
}

export default App;
