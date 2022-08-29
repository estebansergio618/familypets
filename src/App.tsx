import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import "./scss/main.scss";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/familypets" element={<Home />} />
            <Route path="/familypets/nosotros" element={<AboutUs />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
