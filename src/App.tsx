import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import "./scss/main.scss";

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/familypets/" element={<Home />} />
          <Route path="/familypets/nosotros" element={<AboutUs />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
